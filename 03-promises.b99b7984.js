!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var u=r("iU1Pc"),i={form:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),step:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]")};function c(e,n){return new Promise((function(t,o){var r=Math.random()>.3;setTimeout((function(){r?t("Fulfilled promise ".concat(e," in ").concat(n,"ms")):o("Rejected promise ".concat(e," in ").concat(n,"ms"))}),n)}))}i.form.addEventListener("click",(function(n){!function(n){if("submit"===n.target.type){var t=Number(i.delay.value);n.preventDefault();for(var o=0;o<i.amount.value;o+=1)c(o+1,t).then((function(n){e(u).Notify.success(n)})).catch((function(n){e(u).Notify.failure(n)})),t+=Number(i.step.value)}}(n)}))}();
//# sourceMappingURL=03-promises.b99b7984.js.map
