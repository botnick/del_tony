// ==UserScript==
// @name          หลบโทนี่บุหรี่ทำเอง
// @include        http://*.facebook.com/*
// @include        https://*.facebook.com/*
// @require        http://code.jquery.com/jquery-1.7.1.min.js
// @grant       none
// @version 4
// @namespace https:/botnick.me/js
// @description หลบโทนี่บุหรี่ทำเอง
// ==/UserScript==

(function() {
    'use strict';
    var banList = ['Bonne chance', 'ไม่ต้อนรับพวกโลกสวย','โทนี่บุหรี่ทำเอง','Bonnechance','โลชั่นน้ำหอม 290 บาท','โลกสวยห้ามเข้ามาดู','18++ ไม่ต้อนรับพวกโลกสวย','18+++ ไม่ต้อนรับพวกโลกสวย','18+ ไม่ต้อนรับพวกโลกสวยช'];
setInterval(function() {
  var a = document.querySelectorAll('[role="article"]')
  a.forEach((d) => {
    banList.map((text) => {
      if (d.innerText.toLocaleLowerCase().indexOf(text) >= 0) {
        console.log('removed : '+d);
        d.remove()
      }
    })
  })
}, 2000)
})();
