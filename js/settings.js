/**
 * @fileoverview Per-user settings from the Setup panel: language, block theme,
 * block renderer and font size.
 *
 * Upstream keeps them in URL parameters (?lang=, ?theme=, ?renderer=). Edrys
 * loads the module from its plain URL whenever someone enters a room or the
 * teacher changes the module settings, so they are kept in localStorage
 * instead. URL parameters still win. All modules served from the same origin
 * share localStorage, hence the prefixed key.
 *
 * Loaded after @blockly/demos/code/code.js (which sets Code.LANG) and before
 * js/init.js (which loads the language files for Code.LANG).
 */

Code.SETTINGS_KEY = 'module-blockly-duino-v2.settings';

Code.loadSettings = function () {
    try {
        return JSON.parse(window.localStorage.getItem(Code.SETTINGS_KEY)) || {};
    } catch (e) {
        // storage blocked (private mode, sandbox) or a broken value
        return {};
    }
};

Code.saveSetting = function (name, value) {
    var settings = Code.loadSettings();
    settings[name] = value;
    try {
        window.localStorage.setItem(Code.SETTINGS_KEY, JSON.stringify(settings));
    } catch (e) {
        // the setting then only lasts until the next reload
    }
};

// Language: replaces code.js's version, which reloads with ?lang= in the URL.
// The program needs no hand-over: it comes back from the room.
Code.changeLanguage = function () {
    Code.saveSetting('lang', document.getElementById('languageMenu').value);
    window.location.reload();
};

// The renderer is set when Blockly is injected, so changing it reloads too.
Code.changeRenderer = function (renderer) {
    Code.saveSetting('renderer', renderer);
    window.location.reload();
};

(function () {
    var lang = Code.loadSettings().lang;
    if (!Code.getStringParamFromUrl('lang', '') && lang && Code.LANGUAGE_NAME[lang]) {
        Code.LANG = lang;
    }
})();
