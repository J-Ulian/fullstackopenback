(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{18:function(e,n,t){e.exports=t(41)},23:function(e,n,t){},41:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(16),c=t.n(o),u=(t(23),t(6)),i=t(17),l=t(3),m=t(2),d=t.n(m),f="/api/persons",s=function(){return d.a.get(f).then((function(e){return e.data}))},h=function(e){return d.a.post(f,e).then((function(e){return e.data}))},b=function(e){return d.a.delete("".concat(f,"/").concat(e))},v=function(e,n){return d.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){var n=e.addName,t=e.newName,a=e.handleNameChange,o=e.newNum,c=e.handleNumChange;return r.a.createElement("form",{onSubmit:n},r.a.createElement("div",null,"name: ",r.a.createElement("input",{value:t,onChange:a})),r.a.createElement("div",null,"number: ",r.a.createElement("input",{value:o,onChange:c})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"add")))},E=function(e){var n=e.value,t=e.onChange;return r.a.createElement("div",null,r.a.createElement("input",{value:n,onChange:t}))},w=function(e){var n=e.persToShow,t=e.delPer;e.pers;return r.a.createElement("div",null,n.map((function(e){return r.a.createElement("p",{key:e.name},e.name,"\xa0",e.number,"\xa0",r.a.createElement("button",{onClick:function(){return t(e.id,e.name)}},"delete"))})))},g=function(e){var n=e.message;return null===n?null:n.includes("Information")?r.a.createElement("div",{className:"errorred"},n):r.a.createElement("div",{className:"error"},n)},O=function(e){e.people;var n=Object(a.useState)([]),t=Object(l.a)(n,2),o=t[0],c=t[1],m=Object(a.useState)(""),d=Object(l.a)(m,2),f=d[0],O=d[1],j=Object(a.useState)(""),N=Object(l.a)(j,2),k=N[0],C=N[1],S=Object(a.useState)(""),y=Object(l.a)(S,2),T=y[0],x=y[1],I=Object(a.useState)(null),P=Object(l.a)(I,2),A=P[0],B=P[1],D=Object(i.a)(o);Object(a.useEffect)((function(){s().then((function(e){c(e)}))}),[]);!function(){var e=new RegExp(T,"i"),n=o.filter((function(n){return n.name.match(e)}));D=n}();return r.a.createElement("div",null,r.a.createElement("h2",null," Phonebook "),r.a.createElement(g,{message:A}),r.a.createElement("div",null,"filter shown with",r.a.createElement(E,{value:T,onChange:function(e){x(e.target.value)},persons:o})),r.a.createElement("h3",null," Add a new "),r.a.createElement(p,{newName:f,newNum:k,handleNameChange:function(e){O(e.target.value)},handleNumChange:function(e){C(e.target.value)},addName:function(e){if(e.preventDefault(),o.map((function(e){return e.name})).indexOf(f)<0){h({name:f,number:k}).then((function(e){c(o.concat(e)),B("Added  ".concat(f)),setTimeout((function(){B(null)}),5e3),O(""),C("")}))}else{if(window.confirm("".concat(f," is already added to phonebook, replace the old number with a new one?"))){var n=o.find((function(e){return e.name===f})),t=Object(u.a)(Object(u.a)({},n),{},{number:k});v(n.id,t).then((function(e){c(o.map((function(t){return t.id!==n.id?t:e})))})).catch((function(e){B("Information of ".concat(n.name," has already been removed from server")),setTimeout((function(){B(null)}),5e3),c(o.filter((function(e){return e.id!==n.id})))})),B("Number of ".concat(f," is changed to ").concat(k)),setTimeout((function(){B(null)}),5e3)}C(""),O("")}}}),r.a.createElement("h3",null," Numbers ")," ",r.a.createElement(w,{persToShow:D,delPer:function(e,n){o.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n,"?"))&&(c(o.filter((function(n){return n.id!==e}))),b(e))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(O,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[18,1,2]]]);
//# sourceMappingURL=main.80e504c5.chunk.js.map