(function(e){function t(t){for(var n,c,i=t[0],o=t[1],f=t[2],l=0,d=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(a,c)&&a[c]&&d.push(a[c][0]),a[c]=0;for(n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n]);u&&u(t);while(d.length)d.shift()();return r.push.apply(r,f||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var o=s[i];0!==a[o]&&(n=!1)}n&&(r.splice(t--,1),e=c(c.s=s[0]))}return e}var n={},a={app:0},r=[];function c(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=e,c.c=n,c.d=function(e,t,s){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(s,n,function(t){return e[t]}.bind(null,n));return s},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var u=o;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"19f4":function(e,t,s){},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("cadf"),s("551c"),s("f751"),s("097d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[e._m(0),s("div",{staticClass:"container"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12"},[s("h1",{staticClass:"my-5"},[e._v("Talos intelligence scraper")]),s("input-query",{on:{change:e.updateList}}),s("file-list",{attrs:{list:e.list}})],1)])])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"fw-header"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col"},[n("div",{staticClass:"d-flex h-100 align-items-center justify-content-between"},[n("div",{staticClass:"logoCont"},[n("img",{attrs:{src:s("6484"),height:"100%",width:"auto"}})]),n("h6",{staticClass:"my-0 text-uppercase"},[e._v("\n              cybersecurity datavizlab\n            ")])])])])])])}],c=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.list.length>0?s("div",{staticClass:"file-list mt-5"},[s("h4",{staticClass:"mb-3"},[e._v("Data")]),s("table",{staticClass:"table table-bordered table-striped table-sm"},[e._m(0),s("tbody",e._l(e.list,(function(t,n){return s("tr",{key:n},[s("td",[s("a",{attrs:{href:"/data/"+t.filename,target:"_blank"}},[e._v(e._s(t.filename))])]),s("td",[e._v("\n          "+e._s(e.printDate(t.created))+"\n        ")]),s("td",[e._v("\n          "+e._s(e.printSize(t.size))+"\n        ")])])})),0)])]):e._e()},i=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",{attrs:{scope:"col"}},[e._v("filename")]),s("th",{attrs:{scope:"col"}},[e._v("created at")]),s("th",{attrs:{scope:"col"}},[e._v("size")])])])}],o=s("94df"),f=s.n(o),u=s("c1df"),l=s.n(u),d={name:"FileList",props:["list"],methods:{printSize:function(e){return f()(e)},printDate:function(e){return l()(e).format("DD/MM/YYYY - HH:mm:ss")}}},b=d,j=(s("b452"),s("2877")),h=Object(j["a"])(b,c,i,!1,null,"5539413e",null),p=h.exports,m=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"input-query"},[s("h4",{staticClass:"mb-3"},[e._v("\n    Search by IP, domain, or network owner\n  ")]),s("div",{staticClass:"row"},[s("div",{staticClass:"col-4"},[s("b-form-input",{attrs:{type:"text",disabled:e.running,placeholder:"reputation lookup"},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),s("div",{staticClass:"col-auto"},[s("b-button",{staticClass:"mr-2",attrs:{variant:"warning",disabled:e.running},on:{click:e.startQuery}},[e._v("Scrape")]),s("b-button",{attrs:{disabled:!e.running},on:{click:e.reset}},[e._v("Reset")])],1),s("div",{staticClass:"col"},[s("h6",{staticClass:"text-muted my-2 text-monospace"},[e._v("\n        "+e._s(this.running&&this.message?"Running: "+this.message:this.message)+"\n      ")])])])])},v=[],g={name:"FileList",data:function(){return{query:"fastwebnet.it",running:!1,message:""}},mounted:function(){this.checkStatus()},methods:{startQuery:function(){var e=this;this.query&&fetch("/api/scrape",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify({query:this.query})}).then((function(e){return e.json()})).then((function(t){e.running=t.running,e.message=t.message,e.checkStatus()}))},checkStatus:function(){var e=this,t=setInterval((function(){fetch("/api/scrape/status").then((function(e){return e.json()})).then((function(s){console.log(s),e.running=s.running,e.message=s.message,e.running||(clearInterval(t),e.$emit("change"))}))}),1e3)},reset:function(){var e=this;fetch("/api/scrape/reset").then((function(e){return e.json()})).then((function(t){e.running=t.running,e.message=t.message}))}}},y=g,k=Object(j["a"])(y,m,v,!1,null,"590f215e",null),_=k.exports,w={name:"home",components:{FileList:p,InputQuery:_},data:function(){return{list:[]}},mounted:function(){this.updateList()},methods:{updateList:function(){var e=this;fetch("/api/data").then((function(e){return e.json()})).then((function(t){e.list=t.list})).catch((function(e){console.error("Error:",e)}))}}},z=w,C=(s("7faf"),Object(j["a"])(z,a,r,!1,null,null,null)),x=C.exports,O=s("5f5b");s("f9e3"),s("2dd8");n["default"].use(O["a"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(x)}}).$mount("#app")},6484:function(e,t,s){e.exports=s.p+"img/fwlogo.b687bbeb.svg"},"7faf":function(e,t,s){"use strict";var n=s("8fba"),a=s.n(n);a.a},"8fba":function(e,t,s){},b452:function(e,t,s){"use strict";var n=s("19f4"),a=s.n(n);a.a}});
//# sourceMappingURL=app.b770e658.js.map