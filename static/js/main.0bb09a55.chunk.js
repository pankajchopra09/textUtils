(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(3),o=a.n(c),r=(a(13),a(1));a(14);function s(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("nav",{className:"navbar navbar-expand-lg bg-".concat(e.mode," navbar-").concat(e.mode),"data-bs-theme":"".concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:""},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},l.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:""},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:""},e.aboutText))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"switch",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark mode"))))))}function m(e){var t=Object(n.useState)("Enter text here"),a=Object(r.a)(t,2),c=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("textarea",{className:"form-control",value:c,onChange:function(e){o(e.target.value)},style:{backgroundColor:"dark"===e.mode?"gray":"white",color:"dark"===e.mode?"white":"black"},id:"myBox",rows:"10"})),l.a.createElement("button",{className:"btn btn-primary",onClick:function(){var t=c.toUpperCase();o(t),e.showAlert("Converted to Uppercase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=c.toLowerCase();o(t),e.showAlert("Converted to Lowercase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=c.split(/[ ]+/);o(e.join(" "))}},"Remove Extra Spaces"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var e=new SpeechSynthesisUtterance;e.text=c,window.speechSynthesis.speak(e)}},"Speak"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){var t=document.getElementById("myBox");t.select(),navigator.clipboard.writeText(t.value),e.showAlert("Copied to clipboard","success")}},"Copy"),l.a.createElement("button",{className:"btn btn-primary mx-2",onClick:function(){o("")}},"Clear")),l.a.createElement("div",{className:"container my-4"},l.a.createElement("h4",null,"Your text summary"),l.a.createElement("p",null,c.split(" ").length," words, ",c.length," characters"),l.a.createElement("p",null,(.008*c.split(" ").length).toFixed()," Minutes read"),l.a.createElement("h4",null,"Preview"),l.a.createElement("p",null,c)))}s.defaultProps={title:"AppName",aboutText:"About"};var i=function(){var e=Object(n.useState)("light"),t=Object(r.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(null),i=Object(r.a)(o,2),u=(i[0],i[1]),d=function(e,t){u({msg:e,type:t}),setTimeout(function(){u(null)},2e3)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{title:"TextUtils",mode:a,toggleMode:function(){"light"===a?(c("dark"),document.body.style.backgroundColor="#252f42",document.body.style.color="white",document.title="Text Utility -  Dark Mode",d("Dark mode has been enabled","success")):(c("light"),document.body.style.backgroundColor="white",document.body.style.color="black",document.title="Text Utility - Light Mode",d("Dark mode has been disabled","success"))}}),l.a.createElement(m,{heading:"Enter the text to analyze below",mode:a,showAlert:d}))},u=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,16)).then(function(t){var a=t.getCLS,n=t.getFID,l=t.getFCP,c=t.getLCP,o=t.getTTFB;a(e),n(e),l(e),c(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(i,null))),u()},4:function(e,t,a){e.exports=a(15)}},[[4,1,2]]]);
//# sourceMappingURL=main.0bb09a55.chunk.js.map