// ==UserScript==
// @name          หลบโทนี่บุหรี่ทำเอง
// @include        http://*.facebook.com/*
// @include        https://*.facebook.com/*
// @require        http://code.jquery.com/jquery-1.7.1.min.js
// @grant       none
// @version 3
// @namespace https:/botnick.me/js
// @description หลบโทนี่บุหรี่ทำเอง
// ==/UserScript==

(function() {
    'use strict';
    var banList = ['โทนี่หน้าหี', 'ไม่ต้อนรับพวกโลกสวย','โทนี่บุหรี่ทำเอง'];
setInterval(function() {
  var a = document.querySelectorAll('[role="article"]')
  a.forEach((d) => {
    banList.map((text) => {
      if (d.innerText.toLocaleLowerCase().indexOf(text) >= 0) {
        console.log('removed');
        d.remove()
      }
    })
  })
}, 2000)
})();