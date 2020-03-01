(function(t){function n(n){for(var r,u,s=n[0],o=n[1],c=n[2],f=0,p=[];f<s.length;f++)u=s[f],Object.prototype.hasOwnProperty.call(i,u)&&i[u]&&p.push(i[u][0]),i[u]=0;for(r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r]);l&&l(n);while(p.length)p.shift()();return a.push.apply(a,c||[]),e()}function e(){for(var t,n=0;n<a.length;n++){for(var e=a[n],r=!0,s=1;s<e.length;s++){var o=e[s];0!==i[o]&&(r=!1)}r&&(a.splice(n--,1),t=u(u.s=e[0]))}return t}var r={},i={app:0},a=[];function u(n){if(r[n])return r[n].exports;var e=r[n]={i:n,l:!1,exports:{}};return t[n].call(e.exports,e,e.exports,u),e.l=!0,e.exports}u.m=t,u.c=r,u.d=function(t,n,e){u.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:e})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,n){if(1&n&&(t=u(t)),8&n)return t;if(4&n&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(u.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var r in t)u.d(e,r,function(n){return t[n]}.bind(null,r));return e},u.n=function(t){var n=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(n,"a",n),n},u.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},u.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],o=s.push.bind(s);s.push=n,s=s.slice();for(var c=0;c<s.length;c++)n(s[c]);var l=o;a.push([0,"chunk-vendors"]),e()})({0:function(t,n,e){t.exports=e("56d7")},"4d3f":function(t,n,e){"use strict";var r=e("8907"),i=e.n(r);i.a},"56d7":function(t,n,e){"use strict";e.r(n);e("cadf"),e("551c"),e("f751"),e("097d");var r=e("2b0e"),i=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{attrs:{id:"app"}},[e("h1",[t._v("TI Scraper")]),e("input-query",{on:{change:t.updateList}}),e("file-list",{attrs:{list:t.list}})],1)},a=[],u=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"file-list"},[e("h3",[t._v("Data")]),e("ul",{staticClass:"file-list-ul"},t._l(t.list,(function(n,r){return e("li",{key:r},[e("a",{attrs:{href:"/data/"+n.filename,target:"_blank"}},[t._v(t._s(n.filename))]),e("span",{staticClass:"info"},[e("span",{staticClass:"info-label"},[t._v("created:")]),t._v(t._s(n.created))]),e("span",{staticClass:"info"},[e("span",{staticClass:"info-label"},[t._v("size:")]),t._v(t._s(n.size))])])})),0)])},s=[],o={name:"FileList",props:["list"]},c=o,l=(e("bb01"),e("2877")),f=Object(l["a"])(c,u,s,!1,null,"40b84e68",null),p=f.exports,d=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"input-query"},[e("h3",[t._v("Scrape data "+t._s(this.running?"(running)":"")+":")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",disabled:t.running},domProps:{value:t.query},on:{input:function(n){n.target.composing||(t.query=n.target.value)}}}),e("button",{attrs:{disabled:t.running},on:{click:t.startQuery}},[t._v("Send")]),e("button",{attrs:{disabled:!t.running},on:{click:t.reset}},[t._v("Reset")])])},h=[],v={name:"FileList",data:function(){return{query:"fastweb.it",running:!1}},mounted:function(){this.checkStatus()},methods:{startQuery:function(){var t=this;this.query&&fetch("/api/scrape",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({query:this.query})}).then((function(t){return t.json()})).then((function(n){t.running=n.running,t.checkStatus()}))},checkStatus:function(){var t=this,n=setInterval((function(){fetch("/api/scrape/status").then((function(t){return t.json()})).then((function(e){console.log(e),t.running=e.running,t.running||(clearInterval(n),t.$emit("change"))}))}),300)},reset:function(){var t=this;fetch("/api/scrape/reset").then((function(t){return t.json()})).then((function(n){t.running=n.running}))}}},b=v,y=(e("4d3f"),Object(l["a"])(b,d,h,!1,null,"39c5faa0",null)),g=y.exports,m={name:"home",components:{FileList:p,InputQuery:g},data:function(){return{list:[]}},mounted:function(){this.updateList()},methods:{updateList:function(){var t=this;fetch("/api/data").then((function(t){return t.json()})).then((function(n){t.list=n.list})).catch((function(t){console.error("Error:",t)}))}}},_=m,j=(e("7faf"),Object(l["a"])(_,i,a,!1,null,null,null)),O=j.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(O)}}).$mount("#app")},"7faf":function(t,n,e){"use strict";var r=e("8fba"),i=e.n(r);i.a},8907:function(t,n,e){},"8fba":function(t,n,e){},ba08:function(t,n,e){},bb01:function(t,n,e){"use strict";var r=e("ba08"),i=e.n(r);i.a}});
//# sourceMappingURL=app.665f7998.js.map