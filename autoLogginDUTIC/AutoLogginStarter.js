// ==UserScript==
// @name         Dutic Auto Login Starter
// @namespace    JhonatanArias
// @version      1.2
// @description  Inicia el login en Dutic automáticamente (Google OAuth flow)
// @author       Jhonatan
// @match        https://aulavirtual.unsa.edu.pe/*/login/index.php
// @grant        none
// ==/UserScript==

(function() {
  'use strict';
  console.log("Corriendo en DUTIC")
  const interval = setInterval(() => {
    console.log("Ejecutando")
    const loginProviders = document.querySelector(".login-identityproviders");
    if (loginProviders) {
      console.log("Encontrado")
      const googleButton = loginProviders.children[1]
      if (googleButton) {
        googleButton.click();
        clearInterval(interval);
        console.log("Click en botón de Google enviado.");
      }
    }
  }, 500);
})();
