!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var i=r("iU1Pc"),u=document.querySelector(".form"),a=document.querySelector("button"),l=null,c=null,d=[],f=0;u.addEventListener("submit",(function(n){n.preventDefault(),d.splice(0),a.disabled=!0;var t=n.currentTarget.elements;l=Number(t.delay.value),c=Number(t.step.value);for(var o=Number(t.amount.value),r=1;r<=o;r+=1)d.push(r);d.map((function(n){var t,o;1!==(f=n)&&(l+=c),(t=f,o=l,new Promise((function(e,n){var r=Math.random()>.3;setTimeout((function(){r?e({position:t,delay:o}):n({position:t,delay:o})}),o)}))).then((function(n){var t=n.position,o=n.delay;e(i).Notify.success("🥳 Fulfilled promise ".concat(t," in ").concat(o,"ms"))})).catch((function(n){var t=n.position,o=n.delay;e(i).Notify.failure("💥 Rejected promise ".concat(t," in ").concat(o,"ms"))}))}))}))}();
//# sourceMappingURL=03-promises.64601677.js.map