// ==UserScript==
// @name          หลบโทนี่บุหรี่ทำเอง
// @include        http://*.facebook.com/*
// @include        https://*.facebook.com/*
// @require        http://code.jquery.com/jquery-1.7.1.min.js
// @grant       none
// @version 6.5
// @namespace https:/botnick.me/js
// @description หลบโทนี่บุหรี่ทำเอง
// ==/UserScript==

(function() {
    'use strict';
    var banList = ['ได้รับการสนับสนุน',"กำลังถ่ายทอดสด",'กำลังเล่น','ปาร์ตี้รับชมของ','is live now','sponsored'];
setInterval(function() {
  var a = document.querySelectorAll('[role="article"]')
  a.forEach((d) => {
    banList.map((text) => {
      if (d.innerText.toLocaleLowerCase().indexOf(text) >= 0) {
        var res = d.innerText.replace("=", "");
        var res1 = res.replace("ได้รับการสนับสนุน", "");
        var res2 = res1.replace("กำลังถ่ายทอดสด", "");
        var res3 = res2.replace("กำลังเล่น", "");
        console.log('removed : '+text + "::" + res3.substring(0, 100));
        d.remove()
      }
    })
  })
}, 2000)
})();
