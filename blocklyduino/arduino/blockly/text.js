/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Generating Arduino code for text blocks.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */
 
'use strict';

goog.provide('Blockly.Arduino.texts');

goog.require('Blockly.Arduino');


Blockly.Arduino['text'] = function (block) {
    // Text value.
    var code = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
    return [code, Blockly.Arduino.ORDER_ATOMIC];
};

// The text blocks work on Arduino String objects: String(x) turns numbers,
// characters and quoted text into one, so every input can be a block of any
// kind. Indexes are one-based, as in Blockly (oneBasedIndex).

/** A helper function in the sketch, returns its name (once per sketch). */
Blockly.Arduino.textHelper_ = function (name, lines) {
    return Blockly.Arduino.provideFunction_(name, lines.map(function (line) {
        return line.replace('NAME', Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_);
    }));
};

/** Serial needs Serial.begin; the "Serial init" block sets its own speed. */
Blockly.Arduino.textSerial_ = function () {
    if (!Blockly.Arduino.setups_['serial_begin']) {
        Blockly.Arduino.setups_['serial_begin'] = 'Serial.begin(9600);';
    }
};

/**
 * A plain Blockly variable has no type, and the generator only declares typed
 * ones: declare it here, as the type the block needs.
 */
Blockly.Arduino.declareUntyped_ = function (block, fieldName, type) {
    var id = block.getFieldValue(fieldName);
    var variable = block.workspace.getVariableById(id);
    var name = Blockly.Arduino.variableDB_.getName(id, Blockly.Variables.NAME_TYPE);
    if (variable && !variable.type) {
        Blockly.Arduino.definitions_['untyped_' + name] = type + ' ' + name + ';';
    }
    return name;
};

Blockly.Arduino['text_join'] = function (block) {
    // Create a string made up of any number of elements of any type.
    if (!block.itemCount_) {
        return ['String("")', Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }
    var elements = [];
    for (var i = 0; i < block.itemCount_; i++) {
        elements.push('String(' + (Blockly.Arduino.valueToCode(block, 'ADD' + i,
                Blockly.Arduino.ORDER_NONE) || '""') + ')');
    }
    return [elements.join(' + '), elements.length > 1 ?
            Blockly.Arduino.ORDER_ADDITIVE : Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_append'] = function (block) {
    // Append to a variable in place.
    var varName = Blockly.Arduino.declareUntyped_(block, 'VAR', 'String');
    var value = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    return varName + ' += String(' + value + ');\n';
};

Blockly.Arduino['text_length'] = function (block) {
    var text = Blockly.Arduino.valueToCode(block, 'VALUE',
            Blockly.Arduino.ORDER_NONE) || '""';
    return ['String(' + text + ').length()', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_isEmpty'] = function (block) {
    var text = Blockly.Arduino.valueToCode(block, 'VALUE',
            Blockly.Arduino.ORDER_NONE) || '""';
    return ['String(' + text + ').length() == 0', Blockly.Arduino.ORDER_EQUALITY];
};

Blockly.Arduino['text_indexOf'] = function (block) {
    // Position of the first or last occurrence, 0 if there is none.
    var operator = block.getFieldValue('END') == 'FIRST' ? 'indexOf' : 'lastIndexOf';
    var substring = Blockly.Arduino.valueToCode(block, 'FIND',
            Blockly.Arduino.ORDER_NONE) || '""';
    var text = Blockly.Arduino.valueToCode(block, 'VALUE',
            Blockly.Arduino.ORDER_NONE) || '""';
    var code = 'String(' + text + ').' + operator + '(String(' + substring + '))';
    if (block.workspace.options.oneBasedIndex) {
        return [code + ' + 1', Blockly.Arduino.ORDER_ADDITIVE];
    }
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

/** The AT input of a block as a zero-based index expression. */
Blockly.Arduino.textIndex_ = function (block, name) {
    var at = Blockly.Arduino.valueToCode(block, name, Blockly.Arduino.ORDER_ADDITIVE) || '1';
    return block.workspace.options.oneBasedIndex ? at : '(' + at + ') + 1';
};

Blockly.Arduino['text_charAt'] = function (block) {
    // Get the letter at a position (a char).
    var where = block.getFieldValue('WHERE') || 'FROM_START';
    var text = Blockly.Arduino.valueToCode(block, 'VALUE',
            Blockly.Arduino.ORDER_NONE) || '""';
    var name;
    switch (where) {
        case 'FIRST':
            return ['String(' + text + ').charAt(0)', Blockly.Arduino.ORDER_UNARY_POSTFIX];
        case 'FROM_START':
            name = Blockly.Arduino.textHelper_('textCharFromStart', [
                'char NAME(String text, int at) {',
                '  return text.charAt(at - 1);',
                '}']);
            return [name + '(' + text + ', ' + Blockly.Arduino.textIndex_(block, 'AT') + ')',
                Blockly.Arduino.ORDER_UNARY_POSTFIX];
        case 'FROM_END':
        case 'LAST':
            name = Blockly.Arduino.textHelper_('textCharFromEnd', [
                'char NAME(String text, int at) {',
                '  return text.charAt(text.length() - at);',
                '}']);
            var at = where == 'LAST' ? '1' : Blockly.Arduino.textIndex_(block, 'AT');
            return [name + '(' + text + ', ' + at + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
        case 'RANDOM':
            name = Blockly.Arduino.textHelper_('textRandomLetter', [
                'char NAME(String text) {',
                '  return text.charAt(random(text.length()));',
                '}']);
            return [name + '(' + text + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }
    throw 'Unhandled option (text_charAt).';
};

Blockly.Arduino['text_getSubstring'] = function (block) {
    // From letter # to letter #, both included.
    var WHERE = {'FROM_START': 0, 'FROM_END': 1, 'FIRST': 2, 'LAST': 3};
    var text = Blockly.Arduino.valueToCode(block, 'STRING',
            Blockly.Arduino.ORDER_NONE) || '""';
    var where1 = block.getFieldValue('WHERE1');
    var where2 = block.getFieldValue('WHERE2');
    var at1 = (where1 == 'FROM_START' || where1 == 'FROM_END') ? Blockly.Arduino.textIndex_(block, 'AT1') : '0';
    var at2 = (where2 == 'FROM_START' || where2 == 'FROM_END') ? Blockly.Arduino.textIndex_(block, 'AT2') : '0';
    var name = Blockly.Arduino.textHelper_('textSubstring', [
        '// where: 0 = letter # from start, 1 = letter # from end, 2 = first, 3 = last',
        'String NAME(String text, int where1, int at1, int where2, int at2) {',
        '  int len = text.length();',
        '  int start = where1 == 0 ? at1 - 1 : where1 == 1 ? len - at1 : 0;',
        '  int end = where2 == 0 ? at2 : where2 == 1 ? len - at2 + 1 : len;',
        '  if (start < 0) start = 0;',
        '  if (end > len) end = len;',
        '  if (end <= start) return "";',
        '  return text.substring(start, end);',
        '}']);
    return [name + '(' + text + ', ' + WHERE[where1] + ', ' + at1 + ', ' + WHERE[where2] + ', ' + at2 + ')',
        Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_changeCase'] = function (block) {
    // Arduino's toUpperCase() and toLowerCase() change the string and return nothing.
    var HELPERS = {
        'UPPERCASE': ['textUpperCase', [
                'String NAME(String text) {',
                '  text.toUpperCase();',
                '  return text;',
                '}']],
        'LOWERCASE': ['textLowerCase', [
                'String NAME(String text) {',
                '  text.toLowerCase();',
                '  return text;',
                '}']],
        'TITLECASE': ['textTitleCase', [
                'String NAME(String text) {',
                '  bool wordStart = true;',
                '  text.toLowerCase();',
                '  for (unsigned int i = 0; i < text.length(); i++) {',
                '    if (isspace(text[i])) {',
                '      wordStart = true;',
                '    } else if (wordStart) {',
                '      text[i] = toupper(text[i]);',
                '      wordStart = false;',
                '    }',
                '  }',
                '  return text;',
                '}']]
    };
    var helper = HELPERS[block.getFieldValue('CASE')] || HELPERS['UPPERCASE'];
    var name = Blockly.Arduino.textHelper_(helper[0], helper[1]);
    var text = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    return [name + '(' + text + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_trim'] = function (block) {
    // Trim spaces and line endings. Arduino's String::trim()
    // changes the string and returns nothing, so the block
    // calls a helper that returns the trimmed copy.
    var HELPERS = {
        'BOTH': ['textTrim', [
                'String ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(String text) {',
                '  text.trim();',
                '  return text;',
                '}']],
        'LEFT': ['textTrimLeft', [
                'String ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(String text) {',
                '  unsigned int start = 0;',
                '  while (start < text.length() && isspace(text[start])) start++;',
                '  return text.substring(start);',
                '}']],
        'RIGHT': ['textTrimRight', [
                'String ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(String text) {',
                '  unsigned int end = text.length();',
                '  while (end > 0 && isspace(text[end - 1])) end--;',
                '  return text.substring(0, end);',
                '}']]
    };
    var helper = HELPERS[block.getFieldValue('MODE')] || HELPERS['BOTH'];
    var functionName = Blockly.Arduino.provideFunction_(helper[0], helper[1]);
    var text = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    return [functionName + '(' + text + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_print'] = function (block) {
    // Print on the serial monitor.
    Blockly.Arduino.textSerial_();
    var msg = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    return 'Serial.println(' + msg + ');\n';
};

Blockly.Arduino['text_prompt_ext'] = function (block) {
    // Ask on the serial monitor and wait for a line.
    Blockly.Arduino.textSerial_();
    var msg;
    if (block.getField('TEXT')) {
        msg = Blockly.Arduino.quote_(block.getFieldValue('TEXT'));
    } else {
        msg = Blockly.Arduino.valueToCode(block, 'TEXT',
                Blockly.Arduino.ORDER_NONE) || '""';
    }
    var name = Blockly.Arduino.textHelper_('textPrompt', [
        'String NAME(String question) {',
        '  Serial.println(question);',
        '  while (!Serial.available()) {',
        '  }',
        '  String answer = Serial.readStringUntil(\'\\n\');',
        '  answer.trim();',
        '  return answer;',
        '}']);
    var code = name + '(' + msg + ')';
    if (block.getFieldValue('TYPE') == 'NUMBER') {
        code += '.toFloat()';
    }
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_prompt'] = Blockly.Arduino['text_prompt_ext'];

Blockly.Arduino['text_count'] = function (block) {
    var text = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    var sub = Blockly.Arduino.valueToCode(block, 'SUB',
            Blockly.Arduino.ORDER_NONE) || '""';
    var name = Blockly.Arduino.textHelper_('textCount', [
        'int NAME(String haystack, String needle) {',
        '  if (needle.length() == 0) {',
        '    return haystack.length() + 1;',
        '  }',
        '  int count = 0;',
        '  int index = haystack.indexOf(needle);',
        '  while (index >= 0) {',
        '    count++;',
        '    index = haystack.indexOf(needle, index + needle.length());',
        '  }',
        '  return count;',
        '}']);
    return [name + '(' + text + ', ' + sub + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_replace'] = function (block) {
    var text = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    var from = Blockly.Arduino.valueToCode(block, 'FROM',
            Blockly.Arduino.ORDER_NONE) || '""';
    var to = Blockly.Arduino.valueToCode(block, 'TO',
            Blockly.Arduino.ORDER_NONE) || '""';
    var name = Blockly.Arduino.textHelper_('textReplace', [
        'String NAME(String text, String from, String to) {',
        '  text.replace(from, to);',
        '  return text;',
        '}']);
    return [name + '(' + text + ', ' + from + ', ' + to + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['text_reverse'] = function (block) {
    var text = Blockly.Arduino.valueToCode(block, 'TEXT',
            Blockly.Arduino.ORDER_NONE) || '""';
    var name = Blockly.Arduino.textHelper_('textReverse', [
        'String NAME(String text) {',
        '  String reversed = "";',
        '  for (int i = text.length() - 1; i >= 0; i--) {',
        '    reversed += text[i];',
        '  }',
        '  return reversed;',
        '}']);
    return [name + '(' + text + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};
