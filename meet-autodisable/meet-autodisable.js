// ==UserScript==
// @name         Meet autodisable
// @namespace    JhonatanArias
// @version      1.1
// @description  Entra a reuniones de meet con el microfono y camara desactivados
// @author       JhonatanArias
// @match        https://meet.google.com/*
// @updateURL    https://jhonatandczel.github.io/tampermonkey-scripts/meet-autodisable/meet-autodisable.js
// @downloadURL  https://jhonatandczel.github.io/tampermonkey-scripts/meet-autodisable/meet-autodisable.js
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let micro = null;
  let camera = null;
  let interval = setInterval(()=>{
    micro = document.querySelector('[aria-label="Turn off microphone"]');
    camera = document.querySelector('[aria-label="Turn off camera"]');
    if(micro && camera){
      console.log("Encontrados micro y camara");
      if(!micro.dataset.disable){
        micro.click();
        console.log("Microfono deshabilitado");
      }
      if(!camera.dataset.disable){
        camera.click();
        console.log("Camara deshabilitada");
      }
      clearInterval(interval);
    }
  },500);
  console.log("Hello from github pages :)");
  console.log("Hello from github pages x2 D:");
})();
