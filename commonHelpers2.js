import"./assets/styles-13a9bac0.js";import{i as r}from"./assets/vendor-77e16229.js";const l=document.querySelector(".form");document.querySelector(".delay");document.querySelector("fieldset");l.addEventListener("submit",i);function i(e){e.preventDefault();const t=e.currentTarget.elements.delay.value,o=e.currentTarget.elements.state.value;n(o,t).then(s=>r.show({title:"✅",message:`Fulfilled promise in ${t}ms`,position:"topRight",color:"#B5EA7C",messageColor:"#ffffff",close:!1,closeOnClick:!0,progressBar:!1})).catch(s=>r.show({title:"❌",message:`Rejected promise in ${t}ms`,position:"topRight",color:"#FFBEBE",messageColor:"#ffffff",close:!1,closeOnClick:!0,progressBar:!1})),e.currentTarget.reset()}function n(e,t){return new Promise((o,s)=>{setTimeout(()=>{e==="fulfilled"?o():s()},t)})}
//# sourceMappingURL=commonHelpers2.js.map