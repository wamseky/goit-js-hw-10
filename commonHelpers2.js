import"./assets/styles-348fb92f.js";import{i as t}from"./assets/vendor-77e16229.js";const i=document.querySelector(".form"),l=document.querySelector(".delay"),f=document.querySelector("fieldset");i.addEventListener("submit",n);function n(e){return e.preventDefault(),c(f.children.value,l.textContent)}function c(e,o){return new Promise((s,r)=>{setTimeout(()=>{e==="fulfilled"?s(t.show({title:"✅",message:`Fulfilled promise in ${o}ms`,position:"topRight",color:"#B5EA7C",messageColor:"#ffffff",close:!1,closeOnClick:!0,progressBar:!1})):r(t.show({title:"❌",message:`Rejected promise in ${o}ms`,position:"topRight",color:"#FFBEBE",messageColor:"#ffffff",close:!1,closeOnClick:!0,progressBar:!1}))},o)})}
//# sourceMappingURL=commonHelpers2.js.map
