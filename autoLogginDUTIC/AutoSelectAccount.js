// ==UserScript==
// @name         Auto select UNSA account
// @namespace    JhonatanArias
// @version      1.0
// @description  Selecciona automáticamente la cuenta institucional de la chunsa
// @author       Jhonatan
// @match        https://accounts.google.com/*
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  let verificator = document.querySelector('[data-third-party-email="duticconector1@unsa.edu.pe"]')
  if(verificator){
    console.log("I am running :3")
    const interval = setInterval(() => {
      const candidates = document.querySelectorAll("[data-identifier]");
      for (const candidate of candidates) {
        const email = candidate.getAttribute("data-identifier");
        if (email && email.endsWith("@unsa.edu.pe")) {
          candidate.click();
          clearInterval(interval);
          console.log("Cuenta institucional seleccionada:", email);
          break;
        }
      }
    }, 300);
  }
})();
