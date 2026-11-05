/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Generating Arduino code for maths blocks.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */
 
'use strict';

goog.provide('Blockly.Arduino.MathArduino');

goog.require('Blockly.Arduino');


Blockly.Arduino['math_number'] = function (block) {
    // Numeric value.
    var code = parseFloat(block.getFieldValue('NUM'));
    var order = code >= 0 ? Blockly.Arduino.ORDER_ATOMIC :
            Blockly.Arduino.ORDER_UNARY_NEGATION;
    return [code, order];
};

Blockly.Arduino['math_arithmetic'] = function (block) {
    // Basic arithmetic operators, and power.
    var OPERATORS = {
        'ADD': [' + ', Blockly.Arduino.ORDER_ADDITIVE],
        'MINUS': [' - ', Blockly.Arduino.ORDER_ADDITIVE],
        'MULTIPLY': [' * ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
        'DIVIDE': [' / ', Blockly.Arduino.ORDER_MULTIPLICATIVE],
        'POWER': [null, Blockly.Arduino.ORDER_NONE]  // Handle power separately.
    };
    var mode = block.getFieldValue('OP');
    var tuple = OPERATORS[mode];
    var operator = tuple[0];
    var order = tuple[1];
    var argument0 = Blockly.Arduino.valueToCode(block, 'A', order) || '0';
    var argument1 = Blockly.Arduino.valueToCode(block, 'B', order) || '0';
    var code;
    // Power in Arduino requires a special case since it has no operator.
    if (!operator) {
        code = 'pow(' + argument0 + ', ' + argument1 + ')';
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }
    code = argument0 + operator + argument1;
    return [code, order];
};

Blockly.Arduino['math_single'] = function (block) {
    // Math operators with single operand.
    var operator = block.getFieldValue('OP');
    var code;
    var arg;
    if (operator === 'NEG') {
        // Negation is a special case given its different operator precedence.
        arg = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_UNARY_PREFIX) || '0';
        if (arg[0] == '-') {
            arg = ' ' + arg;
        }
        code = '-' + arg;
        return [code, Blockly.Arduino.ORDER_UNARY_PREFIX];
    }
    if (operator === 'SIN' || operator === 'COS' || operator === 'TAN') {
        arg = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_MULTIPLICATIVE) || '0';
    } else {
        arg = Blockly.Arduino.valueToCode(block, 'NUM', Blockly.Arduino.ORDER_NONE) || '0';
    }
    // First, handle cases which generate values that don't need parentheses
    // wrapping the code.
    switch (operator) {
        case 'ABS':
            code = 'abs(' + arg + ')';
            break;
        case 'ROOT':
            code = 'sqrt(' + arg + ')';
            break;
        case 'POW10':
            code = 'pow(10,' + arg + ')';
            break;
        case 'SIN':
            code = 'sin(' + arg + ')';
            break;
        case 'COS':
            code = 'cos(' + arg + ')';
            break;
        case 'TAN':
            code = 'tan(' + arg + ')';
            break;
        default:
            throw 'Unknown math operator: ' + operator;
    }
    if (code) {
        return [code, Blockly.Arduino.ORDER_ATOMIC];
    }
    return [code, Blockly.Arduino.ORDER_MULTIPLICATIVE];
};

Blockly.Arduino['math_constant'] = function (block) {
    // Constants: PI, E, the Golden Rato, sqrt(2), 1/sqrt(2), INFINITY.
    var CONSTANTS = {
        'PI': ['PI', Blockly.Arduino.ORDER_MEMBER],
        'GOLDEN_RATIO':
                ['(1 + sqrt(5)) / 2', Blockly.Arduino.ORDER_MEMBER],
        'SQRT2': ['sqrt(2)', Blockly.Arduino.ORDER_MEMBER],
        'SQRT1_2': ['sqrt(1/2)', Blockly.Arduino.ORDER_MEMBER]
    };
    return CONSTANTS[block.getFieldValue('CONSTANT')];
};

Blockly.Arduino['math_number_property'] = function (block) {
    // Check if a number is even, odd, prime, whole, positive, or negative
    // or if it is divisible by certain number. Returns true or false.
    var number_to_check = Blockly.Arduino.valueToCode(this, 'NUMBER_TO_CHECK', Blockly.Arduino.ORDER_MEMBER) || '0';
    var dropdown_property = this.getFieldValue('PROPERTY');
    var code;
    if (dropdown_property == 'PRIME') {
        // Prime is a special case as it is not a one-liner test.
        var functionName = Blockly.Arduino.provideFunction_(
                'mathIsPrime',
                ['bool ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(long n) {',
                    '  // https://en.wikipedia.org/wiki/Primality_test#Naive_methods',
                    '  if (n == 2 || n == 3) {',
                    '    return true;',
                    '  }',
                    '  if (n <= 1 || n % 2 == 0 || n % 3 == 0) {',
                    '    return false;',
                    '  }',
                    '  // Check all the numbers of form 6k +/- 1, up to sqrt(n).',
                    '  for (long x = 6; x <= sqrt(n) + 1; x += 6) {',
                    '    if (n % (x - 1) == 0 || n % (x + 1) == 0) {',
                    '      return false;',
                    '    }',
                    '  }',
                    '  return true;',
                    '}']);
        var prime = Blockly.Arduino.valueToCode(this, 'NUMBER_TO_CHECK', Blockly.Arduino.ORDER_NONE) || '0';
        code = functionName + '(' + prime + ')';
        return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
    }
    switch (dropdown_property) {
        case 'EVEN':
            code = number_to_check + ' % 2 == 0';
            break;
        case 'ODD':
            code = number_to_check + ' % 2 == 1';
            break;
        case 'WHOLE':
            code = number_to_check + ' % 1 == 0';
            break;
        case 'POSITIVE':
            code = number_to_check + ' > 0';
            break;
        case 'NEGATIVE':
            code = number_to_check + ' < 0';
            break;
        case 'DIVISIBLE_BY':
            var divisor = Blockly.Arduino.valueToCode(this, 'DIVISOR', Blockly.Arduino.ORDER_MEMBER) || '0';
            code = number_to_check + ' % ' + divisor + ' == 0';
            break;
    }
    return [code, Blockly.Arduino.ORDER_EQUALITY];
};

Blockly.Arduino['math_change'] = function (block) {
    // Add to a variable in place.
    var argument0 = Blockly.Arduino.valueToCode(block, 'DELTA',
            Blockly.Arduino.ORDER_NONE) || '0';
    var varName = Blockly.Arduino.variableDB_.getName(
            block.getFieldValue('VAR'), Blockly.Variables.NAME_TYPE);
    return varName + ' += ' + argument0 + ';\n';
};

Blockly.Arduino['math_round'] = function (block) {
    // Round, round up, round down.
    var FUNCTIONS = {'ROUND': 'round', 'ROUNDUP': 'ceil', 'ROUNDDOWN': 'floor'};
    var argument0 = Blockly.Arduino.valueToCode(block, 'NUM',
            Blockly.Arduino.ORDER_NONE) || '0';
    var code = (FUNCTIONS[block.getFieldValue('OP')] || 'round') + '(' + argument0 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

Blockly.Arduino['math_constrain'] = function (block) {
    // Constrain a number between two limits.
    var value = Blockly.Arduino.valueToCode(block, 'VALUE', Blockly.Arduino.ORDER_COMMA) || '0';
    var low = Blockly.Arduino.valueToCode(block, 'LOW', Blockly.Arduino.ORDER_COMMA) || '0';
    var high = Blockly.Arduino.valueToCode(block, 'HIGH', Blockly.Arduino.ORDER_COMMA) || '0';
    return ['constrain(' + value + ', ' + low + ', ' + high + ')', Blockly.Arduino.ORDER_UNARY_POSTFIX];
};

// Trigonometry functions have a single operand.
Blockly.Arduino['math_trig'] = Blockly.Arduino['math_single'];

Blockly.Arduino['math_modulo'] = function (block) {
    // Remainder computation.
    var argument0 = Blockly.Arduino.valueToCode(block, 'DIVIDEND', Blockly.Arduino.ORDER_MEMBER) || '0';
    var argument1 = Blockly.Arduino.valueToCode(block, 'DIVISOR', Blockly.Arduino.ORDER_MEMBER) || '0';
    var code = argument0 + ' % ' + argument1;
    return [code, Blockly.Arduino.ORDER_MEMBER];
};

Blockly.Arduino['math_random_int'] = function (block) {
    // Random integer between [X] and [Y].
    var argument0 = Blockly.Arduino.valueToCode(block, 'FROM',
            Blockly.Arduino.ORDER_COMMA) || '0';
    var argument1 = Blockly.Arduino.valueToCode(block, 'TO',
            Blockly.Arduino.ORDER_COMMA) || '0';
    // Both ends included; Arduino's random(min, max) leaves max out.
    var functionName = Blockly.Arduino.provideFunction_(
            'mathRandomInt',
            ['long ' + Blockly.Arduino.FUNCTION_NAME_PLACEHOLDER_ + '(long a, long b) {',
                '  if (a > b) {',
                '    // Swap a and b to ensure a is smaller.',
                '    long c = a;',
                '    a = b;',
                '    b = c;',
                '  }',
                '  return random(a, b + 1);',
                '}']);
    var code = functionName + '(' + argument0 + ', ' + argument1 + ')';
    return [code, Blockly.Arduino.ORDER_UNARY_POSTFIX];
};