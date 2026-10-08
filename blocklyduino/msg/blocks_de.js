/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

goog.provide('Blockly.Msg.blocks_de');

goog.require('Blockly.Msg');

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["einschalten", "ON"], ["ausschalten", "OFF"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF2 = [["einschalten", "HIGH"], ["ausschalten", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF3 = [["schließen", "HIGH"], ["öffnen", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Legen Sie eine Entscheidungsbedingung in dem 'case' Block fest.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Ergänzen sie eine Abbruchbedingung in den 'if' Block";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "Erweitere, lösche oder ändere diesen 'if' Block";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Wechsle zu (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "Standard";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "wenn folgendes wahr ist (true):";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Wechsle zu (var)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "Dann mache:";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "Wenn ein Wert wahr ist, führe einige Anweisungen aus.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "Wenn ein Wert wahr ist, führe den ersten Anweisungsblock aus. Sonst führe den zweiten Anweisungsblock aus.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "Wenn der erste Wert wahr ist, führe den ersten Anweisungsblock aus. Sonst, wenn der zweite Wert wahr ist, führe den zweiten Anweisungsblock aus.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "Wenn der erste Wert wahr ist, führe den ersten Anweisungsblock aus. Sonst, wenn der zweite Wert wahr ist, führe den zweiten aus. Wenn keiner der Werte wahr ist, führe den letzten Anweisungsblock aus.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "Von links hierher ziehen, um hinzuzufügen";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "Weiteren Fall mit Anweisungen hinzufügen";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "Optionale Standard-Aktion hinzufügen";
//Arduino base cateory blocks
Blockly.Msg.VAR_CREATE_INT = "Ganzzahl";
Blockly.Msg.VAR_CREATE_FLOAT = "Kommazahl";
Blockly.Msg.VAR_CREATE_STRING = "Zeichenkette";
Blockly.Msg.VAR_CREATE_BOOLEAN = "Wahrheitswert";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "setze die LED auf dem Board auf";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "schaltet die LED auf dem Arduino-Board ein oder aus";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "setze den digitalen Pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "auf den Zustand";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "schreibt den digitalen Zustand 0 oder 1 auf einen bestimmten Ausgang";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "der Zustand von Pin";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "liest den digitalen Zustand 0 oder 1 des digitalen Pins";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "schreibe auf den analogen Pin";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "den Wert";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "sendet einen Wert zwischen 0 und 255 an einen bestimmten Ausgang";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "lies den Wert am analogen Eingang";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "gibt einen Wert zwischen 0 und 1023 zurück";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "warte (in ms)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "gibt die Wartezeit in Millisekunden an";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "Winkel: ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "Winkel zwischen 0 und 180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_BASE_MAP1 = "übertrage";
Blockly.Msg.ARDUINO_BASE_MAP2 = "Wert auf [0-";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "Überträgt eine Zahl aus dem Bereich [0-1024] in einen anderen Bereich.";
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "spiele einen Ton auf Pin";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "mit der Frequenz (Hz)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "spielt einen Ton auf dem gewählten Pin";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "stoppe den Ton auf Pin";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "schaltet den Ton auf dem gewählten Pin stumm";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg.SERIAL_INIT = "Geschwindigkeit der seriellen Verbindung";
Blockly.Msg.SERIAL_PRINT_FORMAT = "Druckformat";
Blockly.Msg.SERIAL_PRINT_FORDECIMAL = "Dezimal";
Blockly.Msg.SERIAL_PRINT_FORHEXA = "Hexadezimal";
Blockly.Msg.SERIAL_PRINT_FORBIN = "Binär";
Blockly.Msg.SERIAL_PRINT_FOROCT = "Oktal";
Blockly.Msg.SERIAL_READ = "Seriell lesen";
Blockly.Msg.SERIAL_AVAILABLE = "Serielle Daten verfügbar?";
Blockly.Msg.SERIAL_FLUSH = "Entleere Serielle Kommunikationsverbindung";
Blockly.Msg.SERIAL_READSTRINGUNTIL_HELPURL = "https://www.arduino.cc/en/Serial/ReadStringUntil";
Blockly.Msg.SERIAL_READSTRINGUNTIL_CONTENT = "Lese Zeichen bis nichts mehr kommt";
Blockly.Msg.SERIAL_READSTRINGUNTIL_TOOLTIP = "Liest Zeichen von der seriellen Schnittstelle in einen Zwischenpuffer als Zeichenkette";
Blockly.Msg.SERIAL_PRINT_CONTENT = "sende die Daten an die serielle Schnittstelle:";
Blockly.Msg.SERIAL_PRINT_TOOLTIP = "sendet Daten im ASCII-Format über die serielle Schnittstelle, zum Mitlesen im seriellen Monitor";
Blockly.Msg.SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg.SERVO_MOVE_TOOLTIP = "Rotation im Bereich von 0 - 180 Grad";
Blockly.Msg.SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.SERVO_PIN = "Pin";
Blockly.Msg.SERVO_MOVE_INPUT = "Drehe den Servo Motor";
Blockly.Msg.SERVO_MOVE_DEGREE = "im Winkel (0~180°) von";
Blockly.Msg.SERVO_READ_DEGREES_INPUT = "Winkel des Servo Motors";
Blockly.Msg.SERVO_READ_DEGREES_TOOLTIP = "Gibt den Winkel der letzten Drehung zurück";
Blockly.Msg.SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_INPUT = "Wert des eingebauten Temperatursensors";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_TOOLTIP = "HTS221: kapazitiv gemessene Temperatur in °Celsius";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_HELPURL = "onboard temperature sensor value";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_INPUT = "Wert des eingebauten Feuchtigkeitssensors";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_TOOLTIP = "HTS221: kapazitiv gemessene relative Luftfeuchtigkeit in Prozent";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_HELPURL = "https://www.st.com/en/ecosystems/x-nucleo-iks01a3.html";

//DS18B20 sensors
Blockly.Msg.DS18B20_TEXT1 = "ein DS18B20-Sensor";
Blockly.Msg.DS18B20_INPUT1 = "ist angeschlossen an Pin";
Blockly.Msg.DS18B20_INPUT2 = "Adresse";
Blockly.Msg.DS18B20_TOOLTIP1 = "prüft, ob ein DS18B20-Temperatursensor vorhanden ist, und gibt dann 'true' zurück";
Blockly.Msg.DS18B20_HELPURL = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino/";
Blockly.Msg.DS18B20_TEXT2 = "Wert des DS18B20-Sensors";
Blockly.Msg.DS18B20_TOOLTIP2 = "gibt den Wert des Temperatursensors als Kommazahl zurück";

//Relays actuators
Blockly.Msg.RELAY_LOGICAL_TEXT = "Relais";
Blockly.Msg.RELAY_LOGICAL_INPUT = "an Pin";
Blockly.Msg.RELAY_LOGICAL_TOOLTIP = "Ein Relais ist ein ferngesteuerter Schalter in einem Laststromkreis, der von einem digitalen Signal geschaltet wird";
Blockly.Msg.RELAY_LOGICAL_HELPURL = "https://arduinogetstarted.com/tutorials/arduino-relay";
Blockly.Msg.RELAY_MOSFET_TEXT = "MOSFET-Transistor";
Blockly.Msg.RELAY_MOSFET_INPUT = "an Pin";
Blockly.Msg.RELAY_MOSFET_TOOLTIP = "Ein MOSFET-Transistor ist ein ferngesteuerter Schalter in einem Laststromkreis, der von einem digitalen Signal geschaltet wird";
Blockly.Msg.RELAY_MOSFET_HELPURL = "http://sin.lyceeleyguescouffignal.fr/irf520-mosfet-driver-module";