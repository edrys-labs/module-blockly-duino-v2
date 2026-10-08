/**
 * @license
 * Copyright 2020 Carles Ferrando Garcia (ferrando_cariga@gva.es)
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

goog.provide('Blockly.Msg.blocks_ca');

goog.require('Blockly.Msg');

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["1 (activat)", "HIGH"], ["0 (desactivat)", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["encén", "ON"], ["apaga", "OFF"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF2 = [["connecta", "HIGH"], ["desconnecta", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF3 = [["tanca", "HIGH"], ["obre", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Afegeix una condició al bloc de «casos».";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Afegeix una condició final per defecte.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Afegeix, retira, o classifica les seccions d'aquest bloc.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "selecciona ( ";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "per defecte";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "cas";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Selecciona (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "fes";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "Si el valor és cert llavors executa les ordres següents.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "Si el valor és cert executa el primer bloc d'ordres. En cas contrari executa el bloc següent d'ordres.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "Si el valor és cert executa el primer bloc d'ordres. En cas contrari executa el bloc següent d'ordres si la condició és certa.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "Si el valor és cert executa el primer bloc d'ordres. En cas contrari executa el bloc següent d'ordres si la condició és certa. Si ninguna condició és verifica, llavors executa el darrer bloc d'ordres per defecte.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Desplaça el bloc des de l'esquerra per afegir-lo.";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Afegeix un bloc d'ordres cas trenca";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Afegeix un bloc d'accions per defecte";
//Arduino base cateory blocks
Blockly.Msg.VAR_CREATE_INT = "enter";
Blockly.Msg.VAR_CREATE_FLOAT = "decimal";
Blockly.Msg.VAR_CREATE_STRING = "cadena";
Blockly.Msg.VAR_CREATE_BOOLEAN = "booleà";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "posa el LED a l'estat lògic";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "atura o engega el LED a la placa Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "posa el pin digital";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "a l'estat lògic";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "escriu un valor (0 ou 1) al pin triat a la sortida";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "l'estat lògic del pin nº";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "llegeix el valor (0 o 1) al pin triat a l'entrada";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "escriu al pin analògic";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "el valor";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "escriu un valor (comprés entre 0 i 255) al pin analògic.\nATENCIÓ: Verifiqueu que el pin sigui PWM~ !";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "el valor llegit al pin d'entrada analògica";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "llegeix el valor (comprés entre 0 i 1023) al pin analògics.\nATENCIÓ: Verifiqueu que el pin sigui A# (exemple : A0,A1,...)";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "fes una temporització (en ms) de";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "especifica el temps d'espera, atura l'execució del programa el temps indicat";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "angle de: ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "angle té un valor entre 0~180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_BASE_MAP1 = "converteix";
Blockly.Msg.ARDUINO_BASE_MAP2 = "el valor a [0-";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "Converteix un nombre del rang [0-1024] a un altre rang.";
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "emet un só al pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "d'una freqüència (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "emet un só al pin seleccionat";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "atura el só al pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "atura el só al pin seleccionat";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg.SERIAL_INIT = "fixa la velocitat del sèrie (en bauds) a";
Blockly.Msg.SERIAL_PRINT_FORMAT = "imprimeix en format";
Blockly.Msg.SERIAL_PRINT_FORDECIMAL = "decimal";
Blockly.Msg.SERIAL_PRINT_FORHEXA = "hexadecimal";
Blockly.Msg.SERIAL_PRINT_FORBIN = "binari";
Blockly.Msg.SERIAL_PRINT_FOROCT = "byte";
Blockly.Msg.SERIAL_READ = "llegeix el sèrie";
Blockly.Msg.SERIAL_AVAILABLE = "està disponible una dada al sèrie ?";
Blockly.Msg.SERIAL_FLUSH = "espera fi de transmisió al sèrie";
Blockly.Msg.SERIAL_READSTRINGUNTIL_HELPURL = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg.SERIAL_READSTRINGUNTIL_CONTENT = "cadena llegida fins al caràcter";
Blockly.Msg.SERIAL_READSTRINGUNTIL_TOOLTIP = "llegeix els caràcters un per un al cercat, i retorna tota la cadena de caràcters";
Blockly.Msg.SERIAL_PRINT_CONTENT = "envia el text al port sèrie:";
Blockly.Msg.SERIAL_PRINT_TOOLTIP = "envia dades al port sèrie per a vigilancia amb el monitor ASCII";
Blockly.Msg.SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg.SERVO_MOVE_TOOLTIP = "rotació posible entre 0~180 graus";
Blockly.Msg.SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.SERVO_PIN = "pin";
Blockly.Msg.SERVO_MOVE_INPUT = "rota el servomotor";
Blockly.Msg.SERVO_MOVE_DEGREE = "d'un angle (0~180°)";
Blockly.Msg.SERVO_READ_DEGREES_INPUT = "l'angle del servomotor";
Blockly.Msg.SERVO_READ_DEGREES_TOOLTIP = "retorna el nombre de graus de la darrera rotació";
Blockly.Msg.SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_INPUT = "valor del sensor de temperatura integrat";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_TOOLTIP = "HTS221: temperatura digital capacitiva en °Celsius";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_HELPURL = "onboard temperature sensor value";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_INPUT = "valor del sensor d'humitat integrat";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_TOOLTIP = "HTS221: humitat relativa digital capacitiva en percentatge";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_HELPURL = "https://www.st.com/en/ecosystems/x-nucleo-iks01a3.html";

//DS18B20 sensors
Blockly.Msg.DS18B20_TEXT1 = "un sensor DS18B20";
Blockly.Msg.DS18B20_INPUT1 = "està connectat al pin";
Blockly.Msg.DS18B20_INPUT2 = "adreça";
Blockly.Msg.DS18B20_TOOLTIP1 = "comprova si hi ha un sensor de temperatura DS18B20 i retorna 'true' si hi és";
Blockly.Msg.DS18B20_HELPURL = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino/";
Blockly.Msg.DS18B20_TEXT2 = "valor del sensor DS18B20";
Blockly.Msg.DS18B20_TOOLTIP2 = "retorna el valor del sensor de temperatura com a nombre decimal";

//Relays actuators
Blockly.Msg.RELAY_LOGICAL_TEXT = "relé";
Blockly.Msg.RELAY_LOGICAL_INPUT = "al pin";
Blockly.Msg.RELAY_LOGICAL_TOOLTIP = "el relé és un interruptor a distància: un interruptor en un circuit de potència que es commuta amb un senyal digital";
Blockly.Msg.RELAY_LOGICAL_HELPURL = "https://arduinogetstarted.com/tutorials/arduino-relay";
Blockly.Msg.RELAY_MOSFET_TEXT = "transistor MOSFET";
Blockly.Msg.RELAY_MOSFET_INPUT = "al pin";
Blockly.Msg.RELAY_MOSFET_TOOLTIP = "el transistor MOSFET és un interruptor a distància: un interruptor en un circuit de potència que es commuta amb un senyal digital";
Blockly.Msg.RELAY_MOSFET_HELPURL = "http://sin.lyceeleyguescouffignal.fr/irf520-mosfet-driver-module";