/**
 * @license
 * Copyright 2020 Sébastien CANET
 * SPDX-License-Identifier: BSD-3-Clause
 */

/**
 * @fileoverview Servomotor blocks for Blockly.
 * @author scanet@libreduc.cc (Sébastien CANET)
 */

/*
 * Make the DIV element draggable
 */
dragElement(document.getElementById("keyboard_nav"));
dragElement(document.getElementById("helpModal"));

function dragElement(elmnt) {
    var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
    if (document.getElementById(elmnt.id + "_header")) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id + "_header").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }
    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }
    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }
    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
};

// Simulate jQuery selector « $ »
// return a matrix if an element has right class
if (!document.getElementsByClassName ) {
  document.getElementsByClassName = function(cl, tag) {
    var els, matches = [],
      i = 0, len,
      regex = new RegExp('(?:\\s|^)' + cl + '(?:\\s|$)');
      els = document.getElementsByTagName(tag || "*");
      if ( !els[0] ) return false;
      for ( len = els.length; i < len; i++ ) {
        if ( els[i].className.match(regex) ) {
          matches.push( els[i]);
        }
      }      
      return matches;
  };
}
 
// Validate id, class, or tag.
var $ = function(el, tag) {
  var firstChar = el.charAt(0);
  if ( document.querySelectorAll ) return document.querySelectorAll(el);
  switch ( firstChar ) {
    case "#": return document.getElementById(el.slice(1) );
    case ".": return document.getElementsByClassName(el.slice(1), tag );
    default : return document.getElementsByTagName(el);
  }
};

// Usage
// $('#conteneur');
// Retourne un élément de classe « maClasse »
// $('.maClasse');
// Retourne un élément DIV de classe « maClasse »
// $('.maClasse', 'div');
// Retourne tous les éléments P
// $('p');

function toggleEditorReadOnly(item) {
    if (item.checked) {
        editor.setOptions({
            readOnly: false
        })
    } else {
        editor.setOptions({
            readOnly: true
        })
    }
}

/*
 * Accordion effect in lateral panel
 * https://www.w3schools.com/howto/howto_js_accordion.asp
 */
var acc = document.getElementsByClassName("accordion");
// var i;

for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        /* Toggle between adding and removing the "active" class,
        to highlight the button that controls the panel */
        this.classList.toggle("active");

        /* Toggle between hiding and showing the active panel */
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 15 + "px";
        }
    });
}
