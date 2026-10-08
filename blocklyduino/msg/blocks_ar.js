/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

'use strict';

goog.provide('Blockly.Msg.blocks_ar');

goog.require('Blockly.Msg');

//text in blocks
Blockly.Msg.FIELDDROPDOWN = [["HIGH", "HIGH"], ["LOW", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF = [["تشغيل", "ON"], ["إطفاء", "OFF"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF2 = [["توصيل", "HIGH"], ["فصل", "LOW"]];
Blockly.Msg.FIELDDROPDOWN_ONOFF3 = [["إغلاق", "HIGH"], ["فتح", "LOW"]];

//blockly logic
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "إضافة شرط إلى كتلة الحالة.";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "إضافة شرط أخير يشمل كل الحالات الأخرى إلى كتلة الشرط.";
Blockly.Msg.CONTROLS_SWITCH_HELPURL = "https://en.wikipedia.org/wiki/Switch_statement";
Blockly.Msg.CONTROLS_SWITCH_SWITCH_TOOLTIP = "أضف أقساماً أو احذفها أو أعد ترتيبها لإعادة ضبط كتلة الشرط هذه.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TITLE = "Switch (";
Blockly.Msg.CONTROLS_SWITCH_VAR_TAIL = ")";
Blockly.Msg.CONTROLS_SWITCH_MSG_DEFAULT = "افتراضي";
Blockly.Msg.CONTROLS_SWITCH_MSG_CASEBREAK = "حالة";
Blockly.Msg.CONTROLS_SWITCH_MSG_SWITCHVAR = "Switch (متغير)";
Blockly.Msg.CONTROLS_SWITCH_MSG_DO = "نفّذ";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_1 = "إذا كانت القيمة صحيحة، نفّذ بعض الأوامر.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_2 = "إذا كانت القيمة صحيحة، نفّذ المجموعة الأولى من الأوامر. وإلا، نفّذ المجموعة الثانية.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_3 = "إذا كانت القيمة الأولى صحيحة، نفّذ المجموعة الأولى من الأوامر. وإلا، إذا كانت القيمة الثانية صحيحة، نفّذ المجموعة الثانية.";
Blockly.Msg.CONTROLS_SWITCH_TOOLTIP_4 = "إذا كانت القيمة الأولى صحيحة، نفّذ المجموعة الأولى من الأوامر. وإلا، إذا كانت القيمة الثانية صحيحة، نفّذ المجموعة الثانية. إذا لم تكن أي قيمة صحيحة، نفّذ المجموعة الأخيرة.";
Blockly.Msg.CONTROLS_SWITCH_VAR_TOOLTIP = "اسحب من اليسار إلى هنا للإضافة";
Blockly.Msg.CONTROLS_SWITCH_CASEBREAK_TOOLTIP = "إضافة حالة أخرى مع أوامرها";
Blockly.Msg.CONTROLS_SWITCH_DEFAULT_TOOLTIP = "إضافة إجراء افتراضي اختياري";
//Arduino base category blocks
Blockly.Msg.VAR_CREATE_INT = "عدد صحيح";
Blockly.Msg.VAR_CREATE_FLOAT = "عدد عشري";
Blockly.Msg.VAR_CREATE_STRING = "سلسلة نصية";
Blockly.Msg.VAR_CREATE_BOOLEAN = "منطقي";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_INPUT = "اضبط مصباح LED المدمج في اللوحة على الحالة";
Blockly.Msg.ARDUINO_INOUT_BUILDIN_LED_TOOLTIP = "إطفاء أو تشغيل مصباح LED المدمج في لوحة Arduino";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT1 = "اضبط الطرف الرقمي";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_INPUT2 = "على الحالة المنطقية";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_TOOLTIP = "كتابة حالة رقمية 0 أو 1 على مخرج محدد";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_WRITE_HELPURL = "http://arduino.cc/en/Reference/DigitalWrite";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_INPUT = "الحالة المنطقية للطرف رقم";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_TOOLTIP = "قراءة الحالة الرقمية 0 أو 1 للطرف الرقمي";
Blockly.Msg.ARDUINO_INOUT_DIGITAL_READ_HELPURL = "http://arduino.cc/en/Reference/DigitalRead";
Blockly.Msg.ARDUINO_INOUT_ONOFF_HELPURL = "http://arduino.cc/en/Reference/Constants";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT1 = "اكتب على الطرف التناظري";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_INPUT2 = "القيمة";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_TOOLTIP = "إرسال قيمة بين 0 و 255 على مخرج محدد";
Blockly.Msg.ARDUINO_INOUT_ANALOG_WRITE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_INPUT = "اقرأ القيمة على المدخل التناظري";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_TOOLTIP = "يُرجع قيمة بين 0 و 1023";
Blockly.Msg.ARDUINO_INOUT_ANALOG_READ_HELPURL = "http://arduino.cc/en/Reference/AnalogRead";
Blockly.Msg.ARDUINO_BASE_DELAY_DELAY_TIME = "انتظر (بالمللي ثانية)";
Blockly.Msg.ARDUINO_BASE_DELAY_TOOLTIP = "حدّد مدة التوقف بالمللي ثانية";
Blockly.Msg.ARDUINO_BASE_DELAY_HELPURL = "http://arduino.cc/en/Reference/delay";
Blockly.Msg.ARDUINO_BASE_ANGLE = "الزاوية: ";
Blockly.Msg.ARDUINO_BASE_ANGLE_TOOLTIP = "زاوية بين 0 و 180°";
Blockly.Msg.ARDUINO_BASE_ANGLE_HELPURL = "";
Blockly.Msg.ARDUINO_BASE_MAP1 = "حوّل";
Blockly.Msg.ARDUINO_BASE_MAP2 = "القيمة إلى [0-";
Blockly.Msg.ARDUINO_BASE_MAP_TOOLTIP = "يحوّل عدداً من المجال [0-1024] إلى مجال آخر."
Blockly.Msg.ARDUINO_BASE_MAP_HELPURL = "https://www.arduino.cc/reference/en/language/functions/math/map/";
Blockly.Msg.ARDUINO_TONE_INPUT1 = "أصدر صوتاً على الطرف";
Blockly.Msg.ARDUINO_TONE_INPUT2 = "بتردد (هرتز)";
Blockly.Msg.ARDUINO_TONE_TOOLTIP = "إصدار صوت على الطرف المحدد";
Blockly.Msg.ARDUINO_TONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";
Blockly.Msg.ARDUINO_NOTONE_INPUT = "أوقف الصوت على الطرف";
Blockly.Msg.ARDUINO_NOTONE_TOOLTIP = "إيقاف الصوت على الطرف المحدد";
Blockly.Msg.ARDUINO_NOTONE_HELPURL = "http://arduino.cc/en/Reference/AnalogWrite";

//SERIAL
Blockly.Msg.SERIAL_INIT =  "تعيين سرعة المنفذ التسلسلي (بالباود) على";
Blockly.Msg.SERIAL_PRINT_FORMAT =  "باستعمال النظام";
Blockly.Msg.SERIAL_PRINT_FORDECIMAL = "العشري";
Blockly.Msg.SERIAL_PRINT_FORHEXA =  "السداسي عشري" ;
Blockly.Msg.SERIAL_PRINT_FORBIN =  "الثنائي";
Blockly.Msg.SERIAL_PRINT_FOROCT =  "الثماني" ;
Blockly.Msg.SERIAL_READ =  "قراءة البيانات من المنفذ التسلسلي" ;
Blockly.Msg.SERIAL_AVAILABLE =  "هل البيانات متاحة على المنفذ التسلسلي؟";
Blockly.Msg.SERIAL_FLUSH =  "انتظر حتى نهاية الإرسال عن طريق المنفذ التسلسلي" ;
Blockly.Msg.SERIAL_READSTRINGUNTIL_HELPURL =  "https://www.arduino.cc/en/Serial/ReadStringUntil" ;
Blockly.Msg.SERIAL_READSTRINGUNTIL_CONTENT =  "قراءة سلسلة أحرف إلى الحرف";
Blockly.Msg.SERIAL_READSTRINGUNTIL_TOOLTIP = "قراءة الأحرف واحدا تلو الآخر إلى واحد كنت تبحث عنه, وإرجاع السلسلة بأكملها";
Blockly.Msg.SERIAL_PRINT_CONTENT = "أرسل البيانات إلى المنفذ التسلسلي:";
Blockly.Msg.SERIAL_PRINT_TOOLTIP = "يرسل البيانات عبر المنفذ التسلسلي بترميز ASCII لمتابعتها في المراقب التسلسلي";
Blockly.Msg.SERIAL_PRINT_HELPURL = "http://www.arduino.cc/en/Serial/Print";

//Arduino base servo category blocks
Blockly.Msg.SERVO_MOVE_TOOLTIP = "دوران ممكن بين 0 و 180 درجة";
Blockly.Msg.SERVO_MOVE_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";
Blockly.Msg.SERVO_PIN = "الطرف رقم";
Blockly.Msg.SERVO_MOVE_INPUT = "أدِر محرك السيرفو";
Blockly.Msg.SERVO_MOVE_DEGREE = "بزاوية (0~180°) قدرها";
Blockly.Msg.SERVO_READ_DEGREES_INPUT = "زاوية محرك السيرفو";
Blockly.Msg.SERVO_READ_DEGREES_TOOLTIP = "يُرجع عدد درجات آخر دوران";
Blockly.Msg.SERVO_READ_DEGREES_HELPURL = "http://www.arduino.cc/playground/ComponentLib/servo";

//X-NUCLEO-IKS01A3 shield blocks: the X-NUCLEO-IKS01A3 is a motion MEMS and environmental sensor evaluation board system, for ST Nucleo boards.
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_INPUT = "قيمة حساس الحرارة المدمج";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_TOOLTIP = "HTS221: درجة الحرارة الرقمية السعوية بالدرجة المئوية";
Blockly.Msg.X_NUCLEO_IKS01A3_Temp_Read_HELPURL = "onboard temperature sensor value";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_INPUT = "قيمة حساس الرطوبة المدمج";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_TOOLTIP = "HTS221: الرطوبة النسبية الرقمية السعوية بالنسبة المئوية";
Blockly.Msg.X_NUCLEO_IKS01A3_Humidity_Read_HELPURL = "https://www.st.com/en/ecosystems/x-nucleo-iks01a3.html";

//DS18B20 sensors
Blockly.Msg.DS18B20_TEXT1 = "حساس DS18B20";
Blockly.Msg.DS18B20_INPUT1 = "موصول على الطرف رقم";
Blockly.Msg.DS18B20_INPUT2 = "العنوان رقم";
Blockly.Msg.DS18B20_TOOLTIP1 = "يتحقق من وجود حساس الحرارة DS18B20، ويُرجع 'true' إذا كان موجوداً";
Blockly.Msg.DS18B20_HELPURL = "https://www.carnetdumaker.net/articles/mesurer-une-temperature-avec-un-capteur-1-wire-ds18b20-et-une-carte-arduino-genuino/";
Blockly.Msg.DS18B20_TEXT2 = "قيمة حساس DS18B20";
Blockly.Msg.DS18B20_TOOLTIP2 = "يُرجع قيمة حساس الحرارة كعدد عشري";

//Relays actuators
Blockly.Msg.RELAY_LOGICAL_TEXT = "مُرحّل";
Blockly.Msg.RELAY_LOGICAL_INPUT = "على الطرف رقم";
Blockly.Msg.RELAY_LOGICAL_TOOLTIP = "المُرحّل مفتاح يُتحكَّم به عن بُعد: مفتاح في دائرة القدرة تُبدّله إشارة رقمية";
Blockly.Msg.RELAY_LOGICAL_HELPURL = "https://arduinogetstarted.com/tutorials/arduino-relay";
Blockly.Msg.RELAY_MOSFET_TEXT = "ترانزستور MOSFET";
Blockly.Msg.RELAY_MOSFET_INPUT = "على الطرف رقم";
Blockly.Msg.RELAY_MOSFET_TOOLTIP = "ترانزستور MOSFET مفتاح يُتحكَّم به عن بُعد: مفتاح في دائرة القدرة تُبدّله إشارة رقمية";
Blockly.Msg.RELAY_MOSFET_HELPURL = "http://sin.lyceeleyguescouffignal.fr/irf520-mosfet-driver-module";