!function(){var t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")},e=!1,o=null;function n(){e=!0,t.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.start.addEventListener("click",(function(){if(e)return;o=setInterval(n,1e3)})),t.stop.addEventListener("click",(function(){e=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.51c2c10b.js.map