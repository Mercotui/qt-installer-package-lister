(function(e){function t(t){for(var n,c,s=t[0],l=t[1],i=t[2],p=0,u=[];p<s.length;p++)c=s[p],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&u.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o=[];function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var d=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("5363");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-content",[a("PackageList")],1)],1)},o=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-card",{staticClass:"pa-auto"},[a("v-card-title",[e._v(" Qt Packages "),a("v-spacer"),e._v(" Updated on: "+e._s(e.date_updated)+" ")],1),a("v-tooltip",{attrs:{bottom:""},scopedSlots:e._u([{key:"activator",fn:function(t){var n=t.on;return[a("v-text-field",e._g({staticClass:"px-4",attrs:{placeholder:"Selected Packages","append-icon":"mdi-content-copy",readonly:"",solo:"","single-line":""},on:{click:e.selectedNamesFocused,"click:append":e.selectedNamesFocused},model:{value:e.selectedNames,callback:function(t){e.selectedNames=t},expression:"selectedNames"}},n))]}}])},[a("span",[e._v("Click to Copy")])]),a("v-snackbar",{attrs:{top:"",color:"success",timeout:"1000"},model:{value:e.copiedBar,callback:function(t){e.copiedBar=t},expression:"copiedBar"}},[e._v(" Copied to Clipboard! ")]),a("v-text-field",{staticClass:"px-4 mb-4",attrs:{"append-icon":"mdi-magnify",label:"Search","single-line":"","hide-details":""},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}}),a("v-data-table",{staticClass:"elevation-1",attrs:{search:e.search,headers:e.headers,items:e.packages,loading:e.loading,"append-icon":"search","single-expand":"","item-key":"name","show-select":"","show-expand":""},scopedSlots:e._u([{key:"expanded-item",fn:function(t){var n=t.headers,r=t.item;return[a("td",{attrs:{colspan:n.length}},[e._v(" Dependencies: "),a("pre",[e._v(e._s(r.dependencies))])])]}}]),model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1)],1)},s=[],l=(a("a15b"),a("d81d"),a("0d03"),a("b0c0"),a("bc3a")),i=a.n(l),d=a("596b"),p=a.n(d),u={name:"PackageList",data:function(){return{loading:!0,copiedBar:!1,search:"",selected:[],headers:[{text:"Display Name",value:"displayName"},{text:"ID Name",value:"name"},{value:"data-table-expand"}],packages:[],date_updated:""}},mounted:function(){var e=this;i.a.get("../qt_package_list.json").then((function(t){e.packages=t.data.packages,e.date_updated=new Date(t.data.date).toLocaleDateString("nl-NL"),e.loading=!1}))},computed:{selectedNames:function(){return this.selected.map((function(e){return e.name})).join(", ")}},methods:{selectedNamesFocused:function(){p()(this.selectedNames),this.copiedBar=!0}}},f=u,v=a("2877"),m=a("6544"),h=a.n(m),b=a("b0af"),g=a("99d9"),y=a("a523"),_=a("8fea"),k=a("2db4"),x=a("2fa4"),w=a("8654"),j=a("3a2f"),O=Object(v["a"])(f,c,s,!1,null,null,null),C=O.exports;h()(O,{VCard:b["a"],VCardTitle:g["a"],VContainer:y["a"],VDataTable:_["a"],VSnackbar:k["a"],VSpacer:x["a"],VTextField:w["a"],VTooltip:j["a"]});var N={name:"App",components:{PackageList:C},data:function(){return{}}},P=N,S=a("7496"),V=a("a75b"),T=Object(v["a"])(P,r,o,!1,null,null,null),D=T.exports;h()(T,{VApp:S["a"],VContent:V["a"]});var B=a("f309");n["a"].config.productionTip=!1,n["a"].use(B["a"]);var L=new B["a"]({theme:{light:!0}});t["default"]=new n["a"]({vuetify:L,render:function(e){return e(D)}}).$mount("#app")}});
//# sourceMappingURL=app.e67b6826.js.map