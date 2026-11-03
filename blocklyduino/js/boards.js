/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Helper functions for selecting and changing boards.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

'use strict';

goog.provide('Blockly.Boards');

//set default profile: "none" has no pin lists, so blocks with a pin dropdown
//could not be created; without a board the Arduino Uno pins are used
profile.default = profile["arduino_uno"][0];

/**
 * Set board when click in board modal
 */
Code.setBoard = function (boardId) {
	if (boardId == undefined) {
		boardId = Code.getStringParamFromUrl('board', '');
	}
    if (!boardId || boardId === "none") {
        boardId = "arduino_uno";
    }
    document.getElementById('boardMenu').value = boardId;
    profile.default = profile[boardId][0];
    document.getElementById('boardLabel').textContent = profile.default.description;
};

/**
 * Set board throught URL or directly
 * 
 * allowed values for boardId:
 * 
 * - undefined
 * - "arduino_leonardo"
 * - "arduino_mega"
 * - "arduino_micro"
 * - "arduino_mini"
 * - "arduino_nano"
 * - "arduino_pro8"
 * - "arduino_pro16"
 * - "arduino_uno"
 * - "arduino_yun"
 * - "lilypad"
 * 
 * @param {string} boardId 
 */
Code.changeBoard = function (boardId) {
	// without an argument: the board picked in the boards modal
	var fromModal = boardId == undefined;
	if (fromModal) {
		boardId = document.getElementById('boardDescriptionSelector').value;
		Code.boardsListModalHide();
	}

	Code.setBoard(boardId);
	// Reload the blocks so their pin dropdowns use the new board. The toolbox
	// needs no rebuild: its blocks are created, with the current pins, when it opens.
	var xml = Blockly.Xml.workspaceToDom(Code.workspace);
	Code.workspace.clear();
	Blockly.Xml.domToWorkspace(xml, Code.workspace);

	// Edrys: share a board picked by the user with the room.
	if (fromModal && window.edrysBoardCallback) {
		window.edrysBoardCallback(boardId);
	}
}
;
