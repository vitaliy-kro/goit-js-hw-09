const t={body:document.querySelector("body"),start:document.querySelector("[data-start]"),stop:document.querySelector("[data-stop]")};let e;function o(){t.body.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}t.start.addEventListener("click",(function(){e=setInterval(o,1e3),t.start.setAttribute("disabled","")})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.15633493.js.map
