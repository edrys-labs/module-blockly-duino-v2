/**
 * The Edrys layer: the room's shared program and board, the sync status, the
 * run button and Reset. Loaded after edrys.js and the BlocklyDuino scripts.
 */

// The run button sends the generated code with this subject, unless
// config.runCommand names another (e.g. for a terminal module on the station).
const DEFAULT_RUN_SUBJECT = "execute"

// The run button is enabled in Edrys.onReady.
window.run = function () {
    try {
        Edrys.sendMessage(Edrys.module.config?.runCommand || DEFAULT_RUN_SUBJECT, Code.getArduino())
    } catch (e) {
        showError("The code could not be sent: " + e.message)
    }
}

// Room state keys: the shared workspace and board, and the config values
// (config.code, config.board) they were started from.
const STATE_XML = "blocklyXml"
const STATE_SEED = "blocklySeed"
const STATE_BOARD = "blocklyBoard"
const STATE_BOARD_SEED = "blocklyBoardSeed"

// Last workspace XML applied from or written to the room state. Loading a
// workspace fires Blockly change events; comparing against this keeps a
// peer from writing back what it just received.
let synced = ""

// The sync state in the top bar: connecting (until onReady), sending (an
// edit waits to be written to the room), saved, or error (the banner shows
// a problem). Called without an argument, it only refreshes the text.
let status = "connecting"
function setStatus(state = status) {
    status = state
    const shown = document.getElementById("edrysErrors").hidden || state === "connecting" ? state : "error"
    const badge = document.getElementById("syncStatus")
    badge.dataset.state = shown
    badge.textContent = (window.MSG && MSG["status_" + shown]) || shown
}
window.edrysSetStatus = setStatus
setStatus()

// The workspace, toolbox, flyout and scrollbars in the classroom's colours
// (--edrys-* from edrys-module.css). Block colours stay with the block theme
// each user picks in Setup, so this goes into every block theme.
function applyClassroomTheme() {
    const css = getComputedStyle(document.documentElement)
    const color = (name) => css.getPropertyValue(name).trim()
    const styles = {
        workspaceBackgroundColour: color("--edrys-bg"),
        toolboxBackgroundColour: color("--edrys-bg"),
        toolboxForegroundColour: color("--edrys-text"),
        flyoutBackgroundColour: color("--edrys-footer"),
        flyoutForegroundColour: color("--edrys-text"),
        flyoutOpacity: 0.95,
        scrollbarColour: color("--edrys-scrollbar"),
        scrollbarOpacity: 0.7,
        insertionMarkerColour: color("--edrys-heading"),
    }
    for (const theme of Object.values(Blockly.Themes)) {
        if (!theme || typeof theme.setComponentStyle !== "function") continue
        for (const [name, value] of Object.entries(styles)) theme.setComponentStyle(name, value)
    }
    const workspace = Blockly.getMainWorkspace()
    if (workspace) workspace.setTheme(workspace.getTheme())
}
applyClassroomTheme()
Edrys.onTheme?.(applyClassroomTheme)

function workspaceXml() {
    return Blockly.Xml.domToText(Blockly.Xml.workspaceToDom(Blockly.getMainWorkspace()))
}

function apply(xml) {
    synced = xml
    Code.loadBlocksfromXml(xml, false)
}

function callback(delay=2000) {
    let timerID = null

    function publish() {
        timerID = null
        const text = workspaceXml()
        if (text !== synced) {
            synced = text
            Edrys.getState(STATE_XML, "Value", text)
        }
        setStatus("saved")
    }

    return () => {
        if (timerID) {
            window.clearTimeout(timerID)
        }

        timerID = window.setTimeout(publish, delay)
        // change events also fire for e.g. selecting a block
        if (status !== "sending" && workspaceXml() !== synced) setStatus("sending")
    }
}

function showError(message) {
    const item = document.createElement("div")
    item.textContent = message
    const box = document.getElementById("edrysErrors")
    box.appendChild(item)
    box.hidden = false
    setStatus()
}

function applyBoard(id) {
    if (!id || id === document.getElementById("boardMenu").value) return
    if (!profile[id]) {
        showError('Unknown board "' + id + '" in the room; the board was not changed.')
        return
    }
    Code.changeBoard(id)
}

// Loads xml, reporting what went wrong instead of throwing.
function tryApply(xml, what) {
    try {
        apply(xml)
        return true
    } catch (e) {
        showError(what + " could not be loaded: " + e.message)
        return false
    }
}

Edrys.onReady(() => {
    const config = Edrys.module.config
    if (config && typeof config !== "object") {
        showError("The module settings are not valid JSON/YAML; they were ignored.")
    }
    const { code: startCode, board } = (typeof config === "object" && config) || {}

    // Teachers and stations may change the board for the room. This only
    // hides the button; it is not a permission check.
    if (Edrys.role !== "student") {
        document.getElementById("boardButton").style.display = ""
    }

    // The room's board: config.board is where it starts, like config.code.
    if (board && !profile[board]) {
        showError('Unknown board "' + board + '" in the module settings. Known boards: ' +
            Object.keys(profile).filter((id) => id !== "none" && id !== "default").join(", ") + ".")
    } else if (board && (!Edrys.getState(STATE_BOARD, "Value") || Edrys.getState(STATE_BOARD_SEED, "Value") !== board)) {
        Edrys.updateState(() => {
            Edrys.getState(STATE_BOARD_SEED, "Value", board)
            Edrys.getState(STATE_BOARD, "Value", board)
        })
    }
    applyBoard(Edrys.getState(STATE_BOARD, "Value"))

    window.edrysBoardCallback = (id) => Edrys.getState(STATE_BOARD, "Value", id)

    // Reset (menu): back to the start program and board from the module
    // settings, for the whole room.
    window.edrysReset = () => {
        if (board && profile[board]) applyBoard(board)
        if (!startCode || !tryApply(startCode, "The start program in the module settings")) {
            Code.workspace.clear()
        }
        synced = workspaceXml()
        Edrys.updateState(() => {
            if (board && profile[board]) Edrys.getState(STATE_BOARD, "Value", board)
            Edrys.getState(STATE_XML, "Value", synced)
        })
    }

    const room = Edrys.getState()
    const current = Edrys.getState(STATE_XML, "Value")

    // Start from config.code only if the room has no program yet, or the
    // teacher changed config.code since the program was started. It is
    // written to the room only once it loaded, so a broken start program
    // does not reach the other peers.
    if (startCode && (!current || Edrys.getState(STATE_SEED, "Value") !== startCode)) {
        if (tryApply(startCode, "The start program in the module settings")) {
            // Store the loaded workspace, not startCode: block ids are
            // assigned on load, and a peer publishing them later would
            // overwrite edits made in the meantime.
            synced = workspaceXml()
            Edrys.updateState(() => {
                Edrys.getState(STATE_SEED, "Value", startCode)
                Edrys.getState(STATE_XML, "Value", synced)
            })
        } else if (current) {
            tryApply(current, "The shared program")
        }
    } else if (current) {
        tryApply(current, "The shared program")
    } else {
        // an empty room and no start program: nothing to send yet
        synced = workspaceXml()
    }

    room.observe((event) => {
        if (event.transaction.local) return
        // the board first: loading blocks depends on its pin lists
        if (event.keysChanged.has(STATE_BOARD)) applyBoard(room.get(STATE_BOARD))
        if (!event.keysChanged.has(STATE_XML)) return
        const xml = room.get(STATE_XML)
        if (xml && xml !== synced) tryApply(xml, "A change from another participant")
    })

    window.edrysCallback = callback()
    document.getElementById("runButton").disabled = false
    setStatus("saved")
});
