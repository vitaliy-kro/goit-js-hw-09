function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var u=r("eWCmQ");const l={form:document.querySelector(".form"),delay:document.querySelector("[name=delay]"),step:document.querySelector("[name=step]"),amount:document.querySelector("[name=amount]")};function i(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n(`Fulfilled promise ${e} in ${t}ms`):o(`Rejected promise ${e} in ${t}ms`)}),t)}))}l.form.addEventListener("click",(t=>{!function(t){if("submit"===t.target.type){let n=Number(l.delay.value);t.preventDefault();for(let t=0;t<l.amount.value;t+=1)i(t+1,n).then((t=>{e(u).Notify.success(t)})).catch((t=>{e(u).Notify.failure(t)})),n+=Number(l.step.value)}}(t)}));
//# sourceMappingURL=03-promises.38e15263.js.map
