(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["group-store"],{"04dc":function(e,t,n){"use strict";var i=n("388d"),r=n.n(i);r.a},"0b64":function(e,t,n){var i=n("f772"),r=n("9003"),o=n("5168")("species");e.exports=function(e){var t;return r(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!r(t.prototype)||(t=void 0),i(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},1706:function(e,t,n){},"1e27":function(e){e.exports={drivers:["driver-sensingkit","driver-os-monitor"],apps:["app-os-monitor"]}},"2d7d":function(e,t,n){e.exports=n("5037")},"2fdb":function(e,t,n){"use strict";var i=n("5ca1"),r=n("d2c8"),o="includes";i(i.P+i.F*n("5147")(o),"String",{includes:function(e){return!!~r(this,e,o).indexOf(e,arguments.length>1?arguments[1]:void 0)}})},"388d":function(e,t,n){},4517:function(e,t,n){var i=n("a22a");e.exports=function(e,t){var n=[];return i(e,!1,n.push,n,t),n}},5037:function(e,t,n){n("c207"),n("1654"),n("6c1c"),n("837d"),n("5cb6"),n("fe1e"),n("7554"),e.exports=n("584a").Map},"57b1":function(e,t,n){var i=n("d864"),r=n("335c"),o=n("241e"),a=n("b447"),s=n("bfac");e.exports=function(e,t){var n=1==e,u=2==e,c=3==e,l=4==e,d=6==e,f=5==e||d,h=t||s;return function(t,s,_){for(var p,v,y=o(t),m=r(y),E=i(s,_,3),b=a(m.length),g=0,C=n?h(t,b):u?h(t,0):void 0;b>g;g++)if((f||g in m)&&(p=m[g],v=E(p,g,y),e))if(n)C[g]=v;else if(v)switch(e){case 3:return!0;case 5:return p;case 6:return g;case 2:C.push(p)}else if(l)return!1;return d?-1:c||l?l:C}}},"5aee":function(e,t,n){"use strict";var i=n("d9f6").f,r=n("a159"),o=n("5c95"),a=n("d864"),s=n("1173"),u=n("a22a"),c=n("30f1"),l=n("50ed"),d=n("4c95"),f=n("8e60"),h=n("ebfd").fastKey,_=n("9f79"),p=f?"_s":"size",v=function(e,t){var n,i=h(t);if("F"!==i)return e._i[i];for(n=e._f;n;n=n.n)if(n.k==t)return n};e.exports={getConstructor:function(e,t,n,c){var l=e(function(e,i){s(e,l,t,"_i"),e._t=t,e._i=r(null),e._f=void 0,e._l=void 0,e[p]=0,void 0!=i&&u(i,n,e[c],e)});return o(l.prototype,{clear:function(){for(var e=_(this,t),n=e._i,i=e._f;i;i=i.n)i.r=!0,i.p&&(i.p=i.p.n=void 0),delete n[i.i];e._f=e._l=void 0,e[p]=0},delete:function(e){var n=_(this,t),i=v(n,e);if(i){var r=i.n,o=i.p;delete n._i[i.i],i.r=!0,o&&(o.n=r),r&&(r.p=o),n._f==i&&(n._f=r),n._l==i&&(n._l=o),n[p]--}return!!i},forEach:function(e){_(this,t);var n,i=a(e,arguments.length>1?arguments[1]:void 0,3);while(n=n?n.n:this._f){i(n.v,n.k,this);while(n&&n.r)n=n.p}},has:function(e){return!!v(_(this,t),e)}}),f&&i(l.prototype,"size",{get:function(){return _(this,t)[p]}}),l},def:function(e,t,n){var i,r,o=v(e,t);return o?o.v=n:(e._l=o={i:r=h(t,!0),k:t,v:n,p:i=e._l,n:void 0,r:!1},e._f||(e._f=o),i&&(i.n=o),e[p]++,"F"!==r&&(e._i[r]=o)),e},getEntry:v,setStrong:function(e,t,n){c(e,t,function(e,n){this._t=_(e,t),this._k=n,this._l=void 0},function(){var e=this,t=e._k,n=e._l;while(n&&n.r)n=n.p;return e._t&&(e._l=n=n?n.n:e._t._f)?l(0,"keys"==t?n.k:"values"==t?n.v:[n.k,n.v]):(e._t=void 0,l(1))},n?"entries":"values",!n,!0),d(t)}}},"5cb6":function(e,t,n){var i=n("63b6");i(i.P+i.R,"Map",{toJSON:n("f228")("Map")})},6762:function(e,t,n){"use strict";var i=n("5ca1"),r=n("c366")(!0);i(i.P,"Array",{includes:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),n("9c6c")("includes")},"68f7":function(e,t,n){"use strict";var i=n("63b6"),r=n("79aa"),o=n("d864"),a=n("a22a");e.exports=function(e){i(i.S,e,{from:function(e){var t,n,i,s,u=arguments[1];return r(this),t=void 0!==u,t&&r(u),void 0==e?new this:(n=[],t?(i=0,s=o(u,arguments[2],2),a(e,!1,function(e){n.push(s(e,i++))})):a(e,!1,n.push,n),new this(n))}})}},"6f9b":function(e){e.exports={"manifest-version":1,name:"app-os-monitor","databox-type":"app",version:"0.3.0",description:"An app in golang to plot the output of the os monitor driver.",author:"Tosh Brown <Anthony.Brown@nottingham.ac.uk>",license:"MIT",tags:["template","app","nodejs"],homepage:"https://github.com/me-box/app-os-monitor",repository:{type:"git",url:"git+https://github.com/me-box/app-os-monitor"},datasources:[{type:"loadavg1",required:!0,name:"loadavg1",clientid:"loadavg1",granularities:[]},{type:"loadavg5",required:!0,name:"loadavg5",clientid:"loadavg5",granularities:[]},{type:"loadavg15",required:!0,name:"loadavg15",clientid:"loadavg15",granularities:[]},{type:"freemem",required:!0,name:"freemem",clientid:"freemem",granularities:[]},{type:"loadavg1Structured",required:!0,name:"loadavg1Structured",clientid:"loadavg1Structured",granularities:[]},{type:"freememStructured",required:!0,name:"freememStructured",clientid:"freememStructured",granularities:[]}],"export-whitelist":[{url:"https://export.amar.io/",description:"Exports the data to amar.io"}],"resource-requirements":{}}},7075:function(e,t,n){"use strict";var i=n("63b6");e.exports=function(e){i(i.S,e,{of:function(){var e=arguments.length,t=new Array(e);while(e--)t[e]=arguments[e];return new this(t)}})}},7554:function(e,t,n){n("68f7")("Map")},"837d":function(e,t,n){"use strict";var i=n("5aee"),r=n("9f79"),o="Map";e.exports=n("ada4")(o,function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{get:function(e){var t=i.getEntry(r(this,o),e);return t&&t.v},set:function(e,t){return i.def(r(this,o),0===e?0:e,t)}},i,!0)},8642:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{"max-width":"100%",padding:"16px"}},[null===e.manifest?n("div",[n("Spinner")],1):n("div",[n("div",{staticStyle:{display:"flex","margin-bottom":"8px"}},[n("icon",{attrs:{name:e.app,displayName:!1}}),n("div",{staticStyle:{"margin-left":"8px"}},[n("div",[e._v(e._s(e.name))]),n("div",{staticStyle:{"font-size":"small"}},[e._v(e._s(e.manifest.author))]),n("div",{staticStyle:{"font-size":"small"}},[e._v(e._s(e.manifest.version))])])],1),e._m(0),n("div",[e._v(e._s(e.manifest.description))]),null===e.drivers||null===e.dataSources||e.installing?n("div",{staticStyle:{display:"flex","justify-content":"center",padding:"8px"}},[n("Spinner")],1):n("div",[e.allowDatasources?null!=e.manifest.datasources&&e.manifest.datasources.length>0?n("div",{staticStyle:{display:"flex","flex-direction":"column"}},[n("h3",[e._v("Assign Data Sources to App")]),e._l(e.manifest.datasources,function(t){return n("DatasourceSelect",{key:t.id,attrs:{dataSource:t,availableDataSources:e.dataSources},on:{selected:e.onDsSelected}})})],2):e._e():[e.drivers&&e.drivers.length>0?[n("div",{staticClass:"warning-block"},[n("span",{staticClass:"material-icons"},[e._v("warning")]),n("div",[e._v("Your Databox currently doesn't have any apps installed that supply the kinds of data\n\t\t\t\t\t\t\tthat "+e._s(e.name)+" uses. Please install one of the apps below so "+e._s(e.name)+" will have the data\n\t\t\t\t\t\t\tit needs.\n\t\t\t\t\t\t")])]),e._l(e.drivers,function(t){return n("div",{key:t.name,staticStyle:{display:"flex","align-items":"center"}},[n("icon",{staticStyle:{zoom:"0.4"},attrs:{name:t.name,displayName:!1,route:"/install/"+t.name}}),n("div",{staticStyle:{"flex-grow":"1",padding:"16px"}},[e._v(e._s(t.name))]),e.installingDriver===t.name?n("Spinner",{staticStyle:{padding:"16px"}}):n("button",{staticClass:"mdc-button",attrs:{disabled:null!==e.installingDriver},on:{click:function(n){e.installDriver(t)}}},[e._v("Install\n\t\t\t\t\t\t")])],1)})]:n("div",[n("div",{staticClass:"warning-block"},[n("span",{staticClass:"material-icons"},[e._v("warning")]),n("div",[e._v("Your Databox currently doesn't have any apps installed that supply the kinds of data\n\t\t\t\t\t\t\tthat "+e._s(e.name)+" uses.\n\t\t\t\t\t\t")])])])],e.installing?e._e():n("div",{staticStyle:{display:"flex","flex-direction":"column","align-items":"flex-end"}},[n("button",{staticClass:"mdc-button",attrs:{disabled:!e.allowInstall},on:{click:e.install}},[e._v("Install")])])],2)])])},r=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticStyle:{display:"flex","align-items":"center","margin-bottom":"8px"}},[n("span",{staticClass:"material-icons"},[e._v("star")]),n("span",{staticClass:"material-icons"},[e._v("star")]),n("span",{staticClass:"material-icons"},[e._v("star")]),n("span",{staticClass:"material-icons"},[e._v("star")]),n("span",{staticClass:"material-icons disabled"},[e._v("star")]),e._v("\n\t\t\t  Moderate Risk\n\t\t")])}],o=(n("6762"),n("2fdb"),n("5d73")),a=n.n(o),s=(n("96cf"),n("3b8d")),u=(n("ac6a"),n("a745")),c=n.n(u),l=(n("7f7f"),n("795b")),d=n.n(l),f=n("2d7d"),h=n.n(f),_=(n("cadf"),n("551c"),n("097d"),n("60a6")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mdc-select",staticStyle:{"margin-bottom":"8px"},attrs:{id:"select-"+e.dsID}},[n("select",{directives:[{name:"model",rawName:"v-model",value:e.selected,expression:"selected"}],staticClass:"mdc-select__native-control",attrs:{name:e.dsID},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.selected=t.target.multiple?n:n[0]}}},[0===e.filteredDataSources.length?n("option",{attrs:{value:"",disabled:"",selected:""}},[e._v("\n\t\t\tNo available data sources ...\n\t\t")]):e._e(),e._l(e.filteredDataSources,function(t,i){return n("option",{key:i,domProps:{value:t.href}},[e._v("\n\t\t\t"+e._s(t.description)+"\n\t\t")])})],2),n("label",{staticClass:"mdc-floating-label"},[e._v(e._s(e.dsID))]),n("div",{staticClass:"mdc-line-ripple"})])},v=[],y=n("94f5"),m={name:"datasourcesDDL",props:{dataSource:Object,availableDataSources:Array,value:Object},computed:{dsID:function(){return this.dataSource.clientid},selected:{get:function(){return this.value},set:function(e){var t=null,n=!0,i=!1,r=void 0;try{for(var o,s=a()(this.availableDataSources);!(n=(o=s.next()).done);n=!0){var u=o.value;if(u.href===e){t=u;break}}}catch(c){i=!0,r=c}finally{try{n||null==s.return||s.return()}finally{if(i)throw r}}this.$emit("selected",t,this.dsID)}},filteredDataSources:function(){var e=this,t=function(e,t){return e["item-metadata"].filter(function(e){return e.rel===t})[0].val},n=[];return this.availableDataSources.forEach(function(i){var r=t(i,"urn:X-databox:rels:hasType");r===e.dataSource.type&&n.push({description:t(i,"urn:X-hypercat:rels:hasDescription:en"),vendor:t(i,"urn:X-databox:rels:hasVendor"),dsType:r,href:i["href"],hypercat:i})}),n}},mounted:function(){new y["MDCSelect"](document.querySelector("#select-"+this.dsID))}},E=m,b=n("2877"),g=Object(b["a"])(E,p,v,!1,null,"7517f2ab",null);g.options.__file="DataSourceSelect.vue";var C=g.exports,O=n("2375"),I=n("0837"),T=n("6f9b"),k={name:"install",props:["app"],components:{Icon:_["a"],DatasourceSelect:C,Spinner:O["a"]},data:function(){return{installingDriver:null,installing:!1,selectedDataSources:new h.a,selectedDataSourceCount:0}},asyncComputed:{manifest:{lazy:!0,get:function(){return null==this.app?d.a.resolve(null):this.$parent.apiRequest("/core-ui/ui/api/manifest/"+this.app,T)},default:null},dataSources:{lazy:!0,get:function(){return this.$parent.apiRequest("/core-ui/ui/api/dataSources",I)},default:null},drivers:{lazy:!0,get:function(){return null==this.app||null==this.dataSources?d.a.resolve(null):this.$parent.apiRequest("/core-ui/ui/api/drivers/"+this.app,[])},default:null}},computed:{name:function(){return this.manifest.displayName||this.app},allowInstall:function(){return!this.installing&&null===this.installingDriver&&null!==this.manifest&&(!this.manifest.datasources||this.selectedDataSourceCount===this.manifest.datasources.length)},allowDatasources:function(){if(this.manifest&&this.dataSources){var e=this.checkDatasource(this.dataSources);return 0===e.length}return!1}},mounted:function(){this.$parent.title="Install "+this.app,this.$parent.backRoute="/store"},beforeRouteUpdate:function(e,t,n){e.name===t.name&&(this.app=e.params.app,this.selectedDataSources.clear(),this.selectedDataSourceCount=0),n()},methods:{onDsSelected:function(e,t){null!=e?this.selectedDataSources.set(t,e):this.selectedDataSources.delete(t),this.selectedDataSourceCount=this.selectedDataSources.size},install:function(){var e=this;this.allowInstall&&(this.installing=!0,c()(this.manifest.datasources)&&this.manifest.datasources.forEach(function(t,n,i){i[n].hypercat=e.selectedDataSources.get(t["clientid"])}),this.$parent.installAndWait(this.manifest).then(function(){e.$router.push("/")}))},installDriver:function(e){var t=this;null===this.installingDriver&&(this.installingDriver=e.name,this.$parent.installAndWait(e).then(this.checkDriverReady(e.name)).then(function(e){t.drivers=null,t.dataSources=e,t.installingDriver=null}))},checkDriverReady:function(){var e=Object(s["a"])(regeneratorRuntime.mark(function e(t){var n,i,r,o,s,u,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=3,this.$parent.apiRequest("/core-ui/ui/api/dataSources",I);case 3:n=e.sent,i=!0,r=!1,o=void 0,e.prev=7,s=a()(n);case 9:if(i=(u=s.next()).done){e.next=16;break}if(c=u.value,!c.href.includes(t)){e.next=13;break}return e.abrupt("return",n);case 13:i=!0,e.next=9;break;case 16:e.next=22;break;case 18:e.prev=18,e.t0=e["catch"](7),r=!0,o=e.t0;case 22:e.prev=22,e.prev=23,i||null==s.return||s.return();case 25:if(e.prev=25,!r){e.next=28;break}throw o;case 28:return e.finish(25);case 29:return e.finish(22);case 30:return e.next=32,new d.a(function(e){setTimeout(function(){return e()},2e3)});case 32:e.next=0;break;case 34:case"end":return e.stop()}},e,this,[[7,18,22,30],[23,,25,29]])}));function t(t){return e.apply(this,arguments)}return t}(),checkDatasource:function(e){var t=function(e,t){return e["item-metadata"].filter(function(e){return e.rel===t})[0].val},n=[];if(this.manifest.datasources){var i=!0,r=!1,o=void 0;try{for(var s,u=a()(this.manifest.datasources);!(i=(s=u.next()).done);i=!0){var c=s.value;if(c.required){var l=!1,d=!0,f=!1,h=void 0;try{for(var _,p=a()(e);!(d=(_=p.next()).done);d=!0){var v=_.value,y=t(v,"urn:X-databox:rels:hasType");if(y===c.type){l=!0;break}}}catch(m){f=!0,h=m}finally{try{d||null==p.return||p.return()}finally{if(f)throw h}}l||n.push(c.type)}}}catch(m){r=!0,o=m}finally{try{i||null==u.return||u.return()}finally{if(r)throw o}}}return n}}},A=k,S=(n("04dc"),Object(b["a"])(A,i,r,!1,null,null,null));S.options.__file="Install.vue";t["default"]=S.exports},"94f5":function(e,t,n){
/*!
 Material Components for the Web
 Copyright (c) 2019 Google Inc.
 License: MIT
*/
(function(t,n){e.exports=n()})(0,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var r=t[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:i})},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=131)}([function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var o=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.adapter_=t}return i(e,null,[{key:"cssClasses",get:function(){return{}}},{key:"strings",get:function(){return{}}},{key:"numbers",get:function(){return{}}},{key:"defaultAdapter",get:function(){return{}}}]),i(e,[{key:"init",value:function(){}},{key:"destroy",value:function(){}}]),e}();t["a"]=o},function(e,t,n){"use strict";var i=n(0),r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var a=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;o(this,e),this.root_=t;for(var i=arguments.length,r=Array(i>2?i-2:0),a=2;a<i;a++)r[a-2]=arguments[a];this.initialize.apply(this,r),this.foundation_=void 0===n?this.getDefaultFoundation():n,this.foundation_.init(),this.initialSyncWithDOM()}return r(e,null,[{key:"attachTo",value:function(t){return new e(t,new i["a"])}}]),r(e,[{key:"initialize",value:function(){}},{key:"getDefaultFoundation",value:function(){throw new Error("Subclasses must override getDefaultFoundation to return a properly configured foundation class")}},{key:"initialSyncWithDOM",value:function(){}},{key:"destroy",value:function(){this.foundation_.destroy()}},{key:"listen",value:function(e,t){this.root_.addEventListener(e,t)}},{key:"unlisten",value:function(e,t){this.root_.removeEventListener(e,t)}},{key:"emit",value:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=void 0;"function"===typeof CustomEvent?i=new CustomEvent(e,{detail:t,bubbles:n}):(i=document.createEvent("CustomEvent"),i.initCustomEvent(e,n,!1,t)),this.root_.dispatchEvent(i)}}]),e}();t["a"]=a},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"supportsCssVariables",function(){return a}),n.d(t,"applyPassive",function(){return s}),n.d(t,"getMatchesProperty",function(){return u}),n.d(t,"getNormalizedEventCoords",function(){return c});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=void 0,r=void 0;function o(e){var t=e.document,n=t.createElement("div");n.className="mdc-ripple-surface--test-edge-var-bug",t.body.appendChild(n);var i=e.getComputedStyle(n),r=null!==i&&"solid"===i.borderTopStyle;return n.remove(),r}function a(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=i;if("boolean"===typeof i&&!t)return n;var r=e.CSS&&"function"===typeof e.CSS.supports;if(r){var a=e.CSS.supports("--css-vars","yes"),s=e.CSS.supports("(--css-vars: yes)")&&e.CSS.supports("color","#00000000");return n=!(!a&&!s)&&!o(e),t||(i=n),n}}function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:window,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===r||t){var n=!1;try{e.document.addEventListener("test",null,{get passive(){return n=!0,n}})}catch(i){}r=n}return!!r&&{passive:!0}}function u(e){for(var t=["matches","webkitMatchesSelector","msMatchesSelector"],n="matches",i=0;i<t.length;i++){var r=t[i];if(r in e){n=r;break}}return n}function c(e,t,n){var i=t.x,r=t.y,o=i+n.left,a=r+n.top,s=void 0,u=void 0;return"touchstart"===e.type?(e=e,s=e.changedTouches[0].pageX-o,u=e.changedTouches[0].pageY-a):(e=e,s=e.pageX-o,u=e.pageY-a),{x:s,y:u}}},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"browserSupportsCssVars",value:function(){}},{key:"isUnbounded",value:function(){}},{key:"isSurfaceActive",value:function(){}},{key:"isSurfaceDisabled",value:function(){}},{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"containsEventTarget",value:function(e){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}},{key:"registerDocumentInteractionHandler",value:function(e,t){}},{key:"deregisterDocumentInteractionHandler",value:function(e,t){}},{key:"registerResizeHandler",value:function(e){}},{key:"deregisterResizeHandler",value:function(e){}},{key:"updateCssVariable",value:function(e,t){}},{key:"computeBoundingRect",value:function(){}},{key:"getWindowPageOffset",value:function(){}}])})()},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCRipple",function(){return l}),n.d(t,"RippleCapableSurface",function(){return d});var i=n(1),r=(n(3),n(5)),o=n(2);n.d(t,"MDCRippleFoundation",function(){return r["a"]}),n.d(t,"util",function(){return o});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(){var e;s(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=u(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.disabled=!1,o.unbounded_,o}return c(t,e),a(t,[{key:"setUnbounded_",value:function(){this.foundation_.setUnbounded(this.unbounded_)}},{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"layout",value:function(){this.foundation_.layout()}},{key:"getDefaultFoundation",value:function(){return new r["a"](t.createAdapter(this))}},{key:"initialSyncWithDOM",value:function(){this.unbounded="mdcRippleIsUnbounded"in this.root_.dataset}},{key:"unbounded",get:function(){return this.unbounded_},set:function(e){this.unbounded_=Boolean(e),this.setUnbounded_()}}],[{key:"attachTo",value:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=n.isUnbounded,r=void 0===i?void 0:i,o=new t(e);return void 0!==r&&(o.unbounded=r),o}},{key:"createAdapter",value:function(e){var t=o["getMatchesProperty"](HTMLElement.prototype);return{browserSupportsCssVars:function(){return o["supportsCssVariables"](window)},isUnbounded:function(){return e.unbounded},isSurfaceActive:function(){return e.root_[t](":active")},isSurfaceDisabled:function(){return e.disabled},addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},containsEventTarget:function(t){return e.root_.contains(t)},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n,o["applyPassive"]())},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n,o["applyPassive"]())},registerDocumentInteractionHandler:function(e,t){return document.documentElement.addEventListener(e,t,o["applyPassive"]())},deregisterDocumentInteractionHandler:function(e,t){return document.documentElement.removeEventListener(e,t,o["applyPassive"]())},registerResizeHandler:function(e){return window.addEventListener("resize",e)},deregisterResizeHandler:function(e){return window.removeEventListener("resize",e)},updateCssVariable:function(t,n){return e.root_.style.setProperty(t,n)},computeBoundingRect:function(){return e.root_.getBoundingClientRect()},getWindowPageOffset:function(){return{x:window.pageXOffset,y:window.pageYOffset}}}}}]),t}(i["a"]),d=function e(){s(this,e)};d.prototype.root_,d.prototype.unbounded,d.prototype.disabled},function(e,t,n){"use strict";var i=n(0),r=(n(3),n(6)),o=n(2),a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},s=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=["touchstart","pointerdown","mousedown","keydown"],f=["touchend","pointerup","mouseup","contextmenu"],h=[],_=function(e){function t(e){u(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,a(t.defaultAdapter,e)));return n.layoutFrame_=0,n.frame_={width:0,height:0},n.activationState_=n.defaultActivationState_(),n.initialSize_=0,n.maxRadius_=0,n.activateHandler_=function(e){return n.activate_(e)},n.deactivateHandler_=function(){return n.deactivate_()},n.focusHandler_=function(){return n.handleFocus()},n.blurHandler_=function(){return n.handleBlur()},n.resizeHandler_=function(){return n.layout()},n.unboundedCoords_={left:0,top:0},n.fgScale_=0,n.activationTimer_=0,n.fgDeactivationRemovalTimer_=0,n.activationAnimationHasEnded_=!1,n.activationTimerCallback_=function(){n.activationAnimationHasEnded_=!0,n.runDeactivationUXLogicIfReady_()},n.previousActivationEvent_,n}return l(t,e),s(t,null,[{key:"cssClasses",get:function(){return r["a"]}},{key:"strings",get:function(){return r["c"]}},{key:"numbers",get:function(){return r["b"]}},{key:"defaultAdapter",get:function(){return{browserSupportsCssVars:function(){},isUnbounded:function(){},isSurfaceActive:function(){},isSurfaceDisabled:function(){},addClass:function(){},removeClass:function(){},containsEventTarget:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},registerDocumentInteractionHandler:function(){},deregisterDocumentInteractionHandler:function(){},registerResizeHandler:function(){},deregisterResizeHandler:function(){},updateCssVariable:function(){},computeBoundingRect:function(){},getWindowPageOffset:function(){}}}}]),s(t,[{key:"supportsPressRipple_",value:function(){return this.adapter_.browserSupportsCssVars()}},{key:"defaultActivationState_",value:function(){return{isActivated:!1,hasDeactivationUXRun:!1,wasActivatedByPointer:!1,wasElementMadeActive:!1,activationEvent:void 0,isProgrammatic:!1}}},{key:"init",value:function(){var e=this,n=this.supportsPressRipple_();if(this.registerRootHandlers_(n),n){var i=t.cssClasses,r=i.ROOT,o=i.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.addClass(r),e.adapter_.isUnbounded()&&(e.adapter_.addClass(o),e.layoutInternal_())})}}},{key:"destroy",value:function(){var e=this;if(this.supportsPressRipple_()){this.activationTimer_&&(clearTimeout(this.activationTimer_),this.activationTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_ACTIVATION)),this.fgDeactivationRemovalTimer_&&(clearTimeout(this.fgDeactivationRemovalTimer_),this.fgDeactivationRemovalTimer_=0,this.adapter_.removeClass(t.cssClasses.FG_DEACTIVATION));var n=t.cssClasses,i=n.ROOT,r=n.UNBOUNDED;requestAnimationFrame(function(){e.adapter_.removeClass(i),e.adapter_.removeClass(r),e.removeCssVars_()})}this.deregisterRootHandlers_(),this.deregisterDeactivationHandlers_()}},{key:"registerRootHandlers_",value:function(e){var t=this;e&&(d.forEach(function(e){t.adapter_.registerInteractionHandler(e,t.activateHandler_)}),this.adapter_.isUnbounded()&&this.adapter_.registerResizeHandler(this.resizeHandler_)),this.adapter_.registerInteractionHandler("focus",this.focusHandler_),this.adapter_.registerInteractionHandler("blur",this.blurHandler_)}},{key:"registerDeactivationHandlers_",value:function(e){var t=this;"keydown"===e.type?this.adapter_.registerInteractionHandler("keyup",this.deactivateHandler_):f.forEach(function(e){t.adapter_.registerDocumentInteractionHandler(e,t.deactivateHandler_)})}},{key:"deregisterRootHandlers_",value:function(){var e=this;d.forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.activateHandler_)}),this.adapter_.deregisterInteractionHandler("focus",this.focusHandler_),this.adapter_.deregisterInteractionHandler("blur",this.blurHandler_),this.adapter_.isUnbounded()&&this.adapter_.deregisterResizeHandler(this.resizeHandler_)}},{key:"deregisterDeactivationHandlers_",value:function(){var e=this;this.adapter_.deregisterInteractionHandler("keyup",this.deactivateHandler_),f.forEach(function(t){e.adapter_.deregisterDocumentInteractionHandler(t,e.deactivateHandler_)})}},{key:"removeCssVars_",value:function(){var e=this,n=t.strings;Object.keys(n).forEach(function(t){0===t.indexOf("VAR_")&&e.adapter_.updateCssVariable(n[t],null)})}},{key:"activate_",value:function(e){var t=this;if(!this.adapter_.isSurfaceDisabled()){var n=this.activationState_;if(!n.isActivated){var i=this.previousActivationEvent_,r=i&&void 0!==e&&i.type!==e.type;if(!r){n.isActivated=!0,n.isProgrammatic=void 0===e,n.activationEvent=e,n.wasActivatedByPointer=!n.isProgrammatic&&(void 0!==e&&("mousedown"===e.type||"touchstart"===e.type||"pointerdown"===e.type));var o=void 0!==e&&h.length>0&&h.some(function(e){return t.adapter_.containsEventTarget(e)});o?this.resetActivationState_():(void 0!==e&&(h.push(e.target),this.registerDeactivationHandlers_(e)),n.wasElementMadeActive=this.checkElementMadeActive_(e),n.wasElementMadeActive&&this.animateActivation_(),requestAnimationFrame(function(){h=[],n.wasElementMadeActive||void 0===e||" "!==e.key&&32!==e.keyCode||(n.wasElementMadeActive=t.checkElementMadeActive_(e),n.wasElementMadeActive&&t.animateActivation_()),n.wasElementMadeActive||(t.activationState_=t.defaultActivationState_())}))}}}}},{key:"checkElementMadeActive_",value:function(e){return void 0===e||"keydown"!==e.type||this.adapter_.isSurfaceActive()}},{key:"activate",value:function(e){this.activate_(e)}},{key:"animateActivation_",value:function(){var e=this,n=t.strings,i=n.VAR_FG_TRANSLATE_START,r=n.VAR_FG_TRANSLATE_END,o=t.cssClasses,a=o.FG_DEACTIVATION,s=o.FG_ACTIVATION,u=t.numbers.DEACTIVATION_TIMEOUT_MS;this.layoutInternal_();var c="",l="";if(!this.adapter_.isUnbounded()){var d=this.getFgTranslationCoordinates_(),f=d.startPoint,h=d.endPoint;c=f.x+"px, "+f.y+"px",l=h.x+"px, "+h.y+"px"}this.adapter_.updateCssVariable(i,c),this.adapter_.updateCssVariable(r,l),clearTimeout(this.activationTimer_),clearTimeout(this.fgDeactivationRemovalTimer_),this.rmBoundedActivationClasses_(),this.adapter_.removeClass(a),this.adapter_.computeBoundingRect(),this.adapter_.addClass(s),this.activationTimer_=setTimeout(function(){return e.activationTimerCallback_()},u)}},{key:"getFgTranslationCoordinates_",value:function(){var e=this.activationState_,t=e.activationEvent,n=e.wasActivatedByPointer,i=void 0;i=n?Object(o["getNormalizedEventCoords"])(t,this.adapter_.getWindowPageOffset(),this.adapter_.computeBoundingRect()):{x:this.frame_.width/2,y:this.frame_.height/2},i={x:i.x-this.initialSize_/2,y:i.y-this.initialSize_/2};var r={x:this.frame_.width/2-this.initialSize_/2,y:this.frame_.height/2-this.initialSize_/2};return{startPoint:i,endPoint:r}}},{key:"runDeactivationUXLogicIfReady_",value:function(){var e=this,n=t.cssClasses.FG_DEACTIVATION,i=this.activationState_,o=i.hasDeactivationUXRun,a=i.isActivated,s=o||!a;s&&this.activationAnimationHasEnded_&&(this.rmBoundedActivationClasses_(),this.adapter_.addClass(n),this.fgDeactivationRemovalTimer_=setTimeout(function(){e.adapter_.removeClass(n)},r["b"].FG_DEACTIVATION_MS))}},{key:"rmBoundedActivationClasses_",value:function(){var e=t.cssClasses.FG_ACTIVATION;this.adapter_.removeClass(e),this.activationAnimationHasEnded_=!1,this.adapter_.computeBoundingRect()}},{key:"resetActivationState_",value:function(){var e=this;this.previousActivationEvent_=this.activationState_.activationEvent,this.activationState_=this.defaultActivationState_(),setTimeout(function(){return e.previousActivationEvent_=void 0},t.numbers.TAP_DELAY_MS)}},{key:"deactivate_",value:function(){var e=this,t=this.activationState_;if(t.isActivated){var n=a({},t);t.isProgrammatic?(requestAnimationFrame(function(){return e.animateDeactivation_(n)}),this.resetActivationState_()):(this.deregisterDeactivationHandlers_(),requestAnimationFrame(function(){e.activationState_.hasDeactivationUXRun=!0,e.animateDeactivation_(n),e.resetActivationState_()}))}}},{key:"deactivate",value:function(){this.deactivate_()}},{key:"animateDeactivation_",value:function(e){var t=e.wasActivatedByPointer,n=e.wasElementMadeActive;(t||n)&&this.runDeactivationUXLogicIfReady_()}},{key:"layout",value:function(){var e=this;this.layoutFrame_&&cancelAnimationFrame(this.layoutFrame_),this.layoutFrame_=requestAnimationFrame(function(){e.layoutInternal_(),e.layoutFrame_=0})}},{key:"layoutInternal_",value:function(){var e=this;this.frame_=this.adapter_.computeBoundingRect();var n=Math.max(this.frame_.height,this.frame_.width),i=function(){var n=Math.sqrt(Math.pow(e.frame_.width,2)+Math.pow(e.frame_.height,2));return n+t.numbers.PADDING};this.maxRadius_=this.adapter_.isUnbounded()?n:i(),this.initialSize_=Math.floor(n*t.numbers.INITIAL_ORIGIN_SCALE),this.fgScale_=this.maxRadius_/this.initialSize_,this.updateLayoutCssVars_()}},{key:"updateLayoutCssVars_",value:function(){var e=t.strings,n=e.VAR_FG_SIZE,i=e.VAR_LEFT,r=e.VAR_TOP,o=e.VAR_FG_SCALE;this.adapter_.updateCssVariable(n,this.initialSize_+"px"),this.adapter_.updateCssVariable(o,this.fgScale_),this.adapter_.isUnbounded()&&(this.unboundedCoords_={left:Math.round(this.frame_.width/2-this.initialSize_/2),top:Math.round(this.frame_.height/2-this.initialSize_/2)},this.adapter_.updateCssVariable(i,this.unboundedCoords_.left+"px"),this.adapter_.updateCssVariable(r,this.unboundedCoords_.top+"px"))}},{key:"setUnbounded",value:function(e){var n=t.cssClasses.UNBOUNDED;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"handleFocus",value:function(){var e=this;requestAnimationFrame(function(){return e.adapter_.addClass(t.cssClasses.BG_FOCUSED)})}},{key:"handleBlur",value:function(){var e=this;requestAnimationFrame(function(){return e.adapter_.removeClass(t.cssClasses.BG_FOCUSED)})}}]),t}(i["a"]);t["a"]=_},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ROOT:"mdc-ripple-upgraded",UNBOUNDED:"mdc-ripple-upgraded--unbounded",BG_FOCUSED:"mdc-ripple-upgraded--background-focused",FG_ACTIVATION:"mdc-ripple-upgraded--foreground-activation",FG_DEACTIVATION:"mdc-ripple-upgraded--foreground-deactivation"},r={VAR_LEFT:"--mdc-ripple-left",VAR_TOP:"--mdc-ripple-top",VAR_FG_SIZE:"--mdc-ripple-fg-size",VAR_FG_SCALE:"--mdc-ripple-fg-scale",VAR_FG_TRANSLATE_START:"--mdc-ripple-fg-translate-start",VAR_FG_TRANSLATE_END:"--mdc-ripple-fg-translate-end"},o={PADDING:10,INITIAL_ORIGIN_SCALE:.6,DEACTIVATION_TIMEOUT_MS:225,FG_DEACTIVATION_MS:150,TAP_DELAY_MS:300}},,function(e,t,n){"use strict";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
function i(e,t){if(e.closest)return e.closest(t);var n=e;while(n){if(r(n,t))return n;n=n.parentElement}return null}function r(e,t){var n=e.matches||e.webkitMatchesSelector||e.msMatchesSelector;return n.call(e,t)}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"closest",function(){return i}),n.d(t,"matches",function(){return r})},,function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"getListItemCount",value:function(){}},{key:"getFocusedElementIndex",value:function(){}},{key:"setAttributeForElementIndex",value:function(e,t,n){}},{key:"removeAttributeForElementIndex",value:function(e,t){}},{key:"addClassForElementIndex",value:function(e,t){}},{key:"removeClassForElementIndex",value:function(e,t){}},{key:"focusItemAtIndex",value:function(e){}},{key:"setTabIndexForListItemChildren",value:function(e,t){}},{key:"followHref",value:function(e){}},{key:"hasRadioAtIndex",value:function(e){}},{key:"hasCheckboxAtIndex",value:function(e){}},{key:"isCheckboxCheckedAtIndex",value:function(e){}},{key:"setCheckedCheckboxOrRadioAtIndex",value:function(e,t){}},{key:"isFocusInsideList",value:function(){}}])})()},function(e,t,n){"use strict";n.d(t,"b",function(){return r}),n.d(t,"a",function(){return i});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ROOT:"mdc-list",LIST_ITEM_CLASS:"mdc-list-item",LIST_ITEM_SELECTED_CLASS:"mdc-list-item--selected",LIST_ITEM_ACTIVATED_CLASS:"mdc-list-item--activated"},r={ARIA_ORIENTATION:"aria-orientation",ARIA_ORIENTATION_HORIZONTAL:"horizontal",ARIA_SELECTED:"aria-selected",ARIA_CHECKED:"aria-checked",ARIA_CHECKED_RADIO_SELECTOR:'[role="radio"][aria-checked="true"]',ARIA_ROLE_CHECKBOX_SELECTOR:'[role="checkbox"]',ARIA_CHECKED_CHECKBOX_SELECTOR:'[role="checkbox"][aria-checked="true"]',RADIO_SELECTOR:'input[type="radio"]:not(:disabled)',CHECKBOX_SELECTOR:'input[type="checkbox"]:not(:disabled)',CHECKBOX_RADIO_SELECTOR:'input[type="checkbox"]:not(:disabled), input[type="radio"]:not(:disabled)',CHILD_ELEMENTS_TO_TOGGLE_TABINDEX:"."+i.LIST_ITEM_CLASS+" button:not(:disabled),\n  ."+i.LIST_ITEM_CLASS+" a",FOCUSABLE_CHILD_ELEMENTS:"."+i.LIST_ITEM_CLASS+" button:not(:disabled), ."+i.LIST_ITEM_CLASS+" a,\n  ."+i.LIST_ITEM_CLASS+' input[type="radio"]:not(:disabled),\n  .'+i.LIST_ITEM_CLASS+' input[type="checkbox"]:not(:disabled)',ENABLED_ITEMS_SELECTOR:".mdc-list-item:not(.mdc-list-item--disabled)"}},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"getWidth",value:function(){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}}])})()},,,function(e,t,n){"use strict";var i=n(0),r=(n(10),n(11)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=["input","button","textarea","select"],d=function(e){function t(e){s(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.wrapFocus_=!1,n.isVertical_=!0,n.isSingleSelectionList_=!1,n.selectedIndex_=-1,n.focusedItemIndex_=-1,n.useActivatedClass_=!1,n.isCheckboxList_=!1,n.isRadioList_=!1,n}return c(t,e),a(t,null,[{key:"strings",get:function(){return r["b"]}},{key:"cssClasses",get:function(){return r["a"]}},{key:"defaultAdapter",get:function(){return{getListItemCount:function(){},getFocusedElementIndex:function(){},setAttributeForElementIndex:function(){},removeAttributeForElementIndex:function(){},addClassForElementIndex:function(){},removeClassForElementIndex:function(){},focusItemAtIndex:function(){},setTabIndexForListItemChildren:function(){},followHref:function(){},hasRadioAtIndex:function(){},hasCheckboxAtIndex:function(){},isCheckboxCheckedAtIndex:function(){},setCheckedCheckboxOrRadioAtIndex:function(){},isFocusInsideList:function(){}}}}]),a(t,[{key:"layout",value:function(){0!==this.adapter_.getListItemCount()&&(this.adapter_.hasCheckboxAtIndex(0)?this.isCheckboxList_=!0:this.adapter_.hasRadioAtIndex(0)&&(this.isRadioList_=!0))}},{key:"setWrapFocus",value:function(e){this.wrapFocus_=e}},{key:"setVerticalOrientation",value:function(e){this.isVertical_=e}},{key:"setSingleSelection",value:function(e){this.isSingleSelectionList_=e}},{key:"setUseActivatedClass",value:function(e){this.useActivatedClass_=e}},{key:"getSelectedIndex",value:function(){return this.selectedIndex_}},{key:"setSelectedIndex",value:function(e){this.isIndexValid_(e)&&(this.isCheckboxList_?this.setCheckboxAtIndex_(e):this.isRadioList_?this.setRadioAtIndex_(e):this.setSingleSelectionAtIndex_(e))}},{key:"handleFocusIn",value:function(e,t){t>=0&&this.adapter_.setTabIndexForListItemChildren(t,0)}},{key:"handleFocusOut",value:function(e,t){var n=this;t>=0&&this.adapter_.setTabIndexForListItemChildren(t,-1),setTimeout(function(){n.adapter_.isFocusInsideList()||n.setTabindexToFirstSelectedItem_()},0)}},{key:"handleKeydown",value:function(e,t,n){var i="ArrowLeft"===e.key||37===e.keyCode,r="ArrowUp"===e.key||38===e.keyCode,o="ArrowRight"===e.key||39===e.keyCode,a="ArrowDown"===e.key||40===e.keyCode,s="Home"===e.key||36===e.keyCode,u="End"===e.key||35===e.keyCode,c="Enter"===e.key||13===e.keyCode,l="Space"===e.key||32===e.keyCode,d=this.adapter_.getFocusedElementIndex(),f=-1;-1===d&&(d=n,d<0)||(this.isVertical_&&a||!this.isVertical_&&o?(this.preventDefaultEvent_(e),f=this.focusNextElement(d)):this.isVertical_&&r||!this.isVertical_&&i?(this.preventDefaultEvent_(e),f=this.focusPrevElement(d)):s?(this.preventDefaultEvent_(e),f=this.focusFirstElement()):u?(this.preventDefaultEvent_(e),f=this.focusLastElement()):(c||l)&&t&&(this.isSelectableList_()&&(this.setSelectedIndexOnAction_(d),this.preventDefaultEvent_(e)),this.adapter_.followHref(d)),this.focusedItemIndex_=d,f>=0&&(this.setTabindexAtIndex_(f),this.focusedItemIndex_=f))}},{key:"handleClick",value:function(e,t){-1!==e&&(this.isSelectableList_()&&this.setSelectedIndexOnAction_(e,t),this.setTabindexAtIndex_(e),this.focusedItemIndex_=e)}},{key:"preventDefaultEvent_",value:function(e){var t=(""+e.target.tagName).toLowerCase();-1===l.indexOf(t)&&e.preventDefault()}},{key:"focusNextElement",value:function(e){var t=this.adapter_.getListItemCount(),n=e+1;if(n>=t){if(!this.wrapFocus_)return e;n=0}return this.adapter_.focusItemAtIndex(n),n}},{key:"focusPrevElement",value:function(e){var t=e-1;if(t<0){if(!this.wrapFocus_)return e;t=this.adapter_.getListItemCount()-1}return this.adapter_.focusItemAtIndex(t),t}},{key:"focusFirstElement",value:function(){return this.adapter_.focusItemAtIndex(0),0}},{key:"focusLastElement",value:function(){var e=this.adapter_.getListItemCount()-1;return this.adapter_.focusItemAtIndex(e),e}},{key:"setSingleSelectionAtIndex_",value:function(e){var t=r["a"].LIST_ITEM_SELECTED_CLASS;this.useActivatedClass_&&(t=r["a"].LIST_ITEM_ACTIVATED_CLASS),this.selectedIndex_>=0&&this.selectedIndex_!==e&&(this.adapter_.removeClassForElementIndex(this.selectedIndex_,t),this.adapter_.setAttributeForElementIndex(this.selectedIndex_,r["b"].ARIA_SELECTED,"false")),this.adapter_.addClassForElementIndex(e,t),this.adapter_.setAttributeForElementIndex(e,r["b"].ARIA_SELECTED,"true"),this.selectedIndex_=e}},{key:"setRadioAtIndex_",value:function(e){this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,!0),this.selectedIndex_>=0&&this.adapter_.setAttributeForElementIndex(this.selectedIndex_,r["b"].ARIA_CHECKED,"false"),this.adapter_.setAttributeForElementIndex(e,r["b"].ARIA_CHECKED,"true"),this.selectedIndex_=e}},{key:"setCheckboxAtIndex_",value:function(e){for(var t=0;t<this.adapter_.getListItemCount();t++){var n=!1;e.indexOf(t)>=0&&(n=!0),this.adapter_.setCheckedCheckboxOrRadioAtIndex(t,n),this.adapter_.setAttributeForElementIndex(t,r["b"].ARIA_CHECKED,n?"true":"false")}this.selectedIndex_=e}},{key:"setTabindexAtIndex_",value:function(e){-1===this.focusedItemIndex_&&0!==e?this.adapter_.setAttributeForElementIndex(0,"tabindex",-1):this.focusedItemIndex_>=0&&this.focusedItemIndex_!==e&&this.adapter_.setAttributeForElementIndex(this.focusedItemIndex_,"tabindex",-1),this.adapter_.setAttributeForElementIndex(e,"tabindex",0)}},{key:"isSelectableList_",value:function(){return this.isSingleSelectionList_||this.isCheckboxList_||this.isRadioList_}},{key:"setTabindexToFirstSelectedItem_",value:function(){var e=0;this.isSelectableList_()&&("number"===typeof this.selectedIndex_&&-1!==this.selectedIndex_?e=this.selectedIndex_:this.selectedIndex_ instanceof Array&&this.selectedIndex_.length>0&&(e=this.selectedIndex_.reduce(function(e,t){return Math.min(e,t)}))),this.setTabindexAtIndex_(e)}},{key:"isIndexValid_",value:function(e){var t=this;if(e instanceof Array){if(!this.isCheckboxList_)throw new Error("MDCListFoundation: Array of index is only supported for checkbox based list");return 0===e.length||e.some(function(e){return t.isIndexInRange_(e)})}if("number"===typeof e){if(this.isCheckboxList_)throw new Error("MDCListFoundation: Expected array of index for checkbox based list but got number: "+e);return this.isIndexInRange_(e)}return!1}},{key:"isIndexInRange_",value:function(e){var t=this.adapter_.getListItemCount();return e>=0&&e<t}},{key:"setSelectedIndexOnAction_",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.isCheckboxList_?this.toggleCheckboxAtIndex_(e,t):this.setSelectedIndex(e)}},{key:"toggleCheckboxAtIndex_",value:function(e,t){var n=this.adapter_.isCheckboxCheckedAtIndex(e);t&&(n=!n,this.adapter_.setCheckedCheckboxOrRadioAtIndex(e,n)),this.adapter_.setAttributeForElementIndex(e,r["b"].ARIA_CHECKED,n?"true":"false"),-1===this.selectedIndex_&&(this.selectedIndex_=[]),n?this.selectedIndex_.push(e):this.selectedIndex_=this.selectedIndex_.filter(function(t){return t!==e})}}]),t}(i["a"]);t["a"]=d},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCFloatingLabel",function(){return c});var i=n(1),r=(n(12),n(26));n.d(t,"MDCFloatingLabelFoundation",function(){return r["a"]});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var c=function(e){function t(){return a(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return u(t,e),o(t,[{key:"shake",value:function(e){this.foundation_.shake(e)}},{key:"float",value:function(e){this.foundation_.float(e)}},{key:"getWidth",value:function(){return this.foundation_.getWidth()}},{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"]({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},getWidth:function(){return e.root_.scrollWidth},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n)}})}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";n.d(t,"b",function(){return f}),n.d(t,"a",function(){return d});var i=n(0),r=(n(21),n(18)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var d=void 0,f=function(e){function t(e){u(this,t);var n=c(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.isOpen_=!1,n.openAnimationEndTimerId_=0,n.closeAnimationEndTimerId_=0,n.animationRequestId_=0,n.dimensions_,n.anchorCorner_=r["a"].TOP_START,n.anchorMargin_={top:0,right:0,bottom:0,left:0},n.measures_=null,n.quickOpen_=!1,n.hoistedElement_=!1,n.isFixedPosition_=!1,n.position_={x:0,y:0},n}return l(t,e),a(t,null,[{key:"cssClasses",get:function(){return r["c"]}},{key:"strings",get:function(){return r["e"]}},{key:"numbers",get:function(){return r["d"]}},{key:"Corner",get:function(){return r["a"]}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},hasAnchor:function(){return!1},notifyClose:function(){},notifyOpen:function(){},isElementInContainer:function(){return!1},isRtl:function(){return!1},setTransformOrigin:function(){},isFocused:function(){return!1},saveFocus:function(){},restoreFocus:function(){},isFirstElementFocused:function(){},isLastElementFocused:function(){},focusFirstElement:function(){},focusLastElement:function(){},getInnerDimensions:function(){return{}},getAnchorDimensions:function(){return{}},getWindowDimensions:function(){return{}},getBodyDimensions:function(){return{}},getWindowScroll:function(){return{}},setPosition:function(){},setMaxHeight:function(){}}}}]),a(t,[{key:"init",value:function(){var e=t.cssClasses,n=e.ROOT,i=e.OPEN;if(!this.adapter_.hasClass(n))throw new Error(n+" class required in root element.");this.adapter_.hasClass(i)&&(this.isOpen_=!0)}},{key:"destroy",value:function(){clearTimeout(this.openAnimationEndTimerId_),clearTimeout(this.closeAnimationEndTimerId_),cancelAnimationFrame(this.animationRequestId_)}},{key:"setAnchorCorner",value:function(e){this.anchorCorner_=e}},{key:"setAnchorMargin",value:function(e){this.anchorMargin_.top="number"===typeof e.top?e.top:0,this.anchorMargin_.right="number"===typeof e.right?e.right:0,this.anchorMargin_.bottom="number"===typeof e.bottom?e.bottom:0,this.anchorMargin_.left="number"===typeof e.left?e.left:0}},{key:"setIsHoisted",value:function(e){this.hoistedElement_=e}},{key:"setFixedPosition",value:function(e){this.isFixedPosition_=e}},{key:"setAbsolutePosition",value:function(e,t){this.position_.x=this.typeCheckisFinite_(e)?e:0,this.position_.y=this.typeCheckisFinite_(t)?t:0}},{key:"setQuickOpen",value:function(e){this.quickOpen_=e}},{key:"handleBodyClick",value:function(e){var t=e.target;this.adapter_.isElementInContainer(t)||this.close()}},{key:"handleKeydown",value:function(e){var t=e.keyCode,n=e.key,i=e.shiftKey,r="Escape"===n||27===t,o="Tab"===n||9===t;r?this.close():o&&(this.adapter_.isLastElementFocused()&&!i?(this.adapter_.focusFirstElement(),e.preventDefault()):this.adapter_.isFirstElementFocused()&&i&&(this.adapter_.focusLastElement(),e.preventDefault()))}},{key:"getAutoLayoutMeasurements_",value:function(){var e=this.adapter_.getAnchorDimensions(),t=this.adapter_.getWindowDimensions(),n=this.adapter_.getBodyDimensions(),i=this.adapter_.getWindowScroll();return e||(e={x:this.position_.x,y:this.position_.y,top:this.position_.y,bottom:this.position_.y,left:this.position_.x,right:this.position_.x,height:0,width:0}),{viewport:t,bodyDimensions:n,windowScroll:i,viewportDistance:{top:e.top,right:t.width-e.right,left:e.left,bottom:t.height-e.bottom},anchorHeight:e.height,anchorWidth:e.width,surfaceHeight:this.dimensions_.height,surfaceWidth:this.dimensions_.width}}},{key:"getOriginCorner_",value:function(){var e=r["a"].TOP_LEFT,t=this.measures_,n=t.viewportDistance,i=t.anchorHeight,o=t.anchorWidth,a=t.surfaceHeight,s=t.surfaceWidth,u=Boolean(this.anchorCorner_&r["b"].BOTTOM),c=u?n.top+i+this.anchorMargin_.bottom:n.top+this.anchorMargin_.top,l=u?n.bottom-this.anchorMargin_.bottom:n.bottom+i-this.anchorMargin_.top,d=a-c,f=a-l;f>0&&d<f&&(e|=r["b"].BOTTOM);var h=this.adapter_.isRtl(),_=Boolean(this.anchorCorner_&r["b"].FLIP_RTL),p=Boolean(this.anchorCorner_&r["b"].RIGHT),v=p&&!h||!p&&_&&h,y=v?n.left+o+this.anchorMargin_.right:n.left+this.anchorMargin_.left,m=v?n.right-this.anchorMargin_.right:n.right+o-this.anchorMargin_.left,E=s-y,b=s-m;return(E<0&&v&&h||p&&!v&&E<0||b>0&&E<b)&&(e|=r["b"].RIGHT),e}},{key:"getHorizontalOriginOffset_",value:function(e){var t=this.measures_.anchorWidth,n=Boolean(e&r["b"].RIGHT),i=Boolean(this.anchorCorner_&r["b"].RIGHT);if(n){var o=i?t-this.anchorMargin_.left:this.anchorMargin_.right;return this.hoistedElement_||this.isFixedPosition_?o-(this.measures_.viewport.width-this.measures_.bodyDimensions.width):o}return i?t-this.anchorMargin_.right:this.anchorMargin_.left}},{key:"getVerticalOriginOffset_",value:function(e){var t=this.measures_.anchorHeight,n=Boolean(e&r["b"].BOTTOM),i=Boolean(this.anchorCorner_&r["b"].BOTTOM),o=0;return o=n?i?t-this.anchorMargin_.top:-this.anchorMargin_.bottom:i?t+this.anchorMargin_.bottom:this.anchorMargin_.top,o}},{key:"getMenuSurfaceMaxHeight_",value:function(e){var n=0,i=this.measures_.viewportDistance,o=Boolean(e&r["b"].BOTTOM),a=t.numbers.MARGIN_TO_EDGE;return o?(n=i.top+this.anchorMargin_.top-a,this.anchorCorner_&r["b"].BOTTOM||(n+=this.measures_.anchorHeight)):(n=i.bottom-this.anchorMargin_.bottom+this.measures_.anchorHeight-a,this.anchorCorner_&r["b"].BOTTOM&&(n-=this.measures_.anchorHeight)),n}},{key:"autoPosition_",value:function(){var e;this.measures_=this.getAutoLayoutMeasurements_();var t=this.getOriginCorner_(),n=this.getMenuSurfaceMaxHeight_(t),i=t&r["b"].BOTTOM?"bottom":"top",o=t&r["b"].RIGHT?"right":"left",a=this.getHorizontalOriginOffset_(t),u=this.getVerticalOriginOffset_(t),c=(e={},s(e,o,a||"0"),s(e,i,u||"0"),e),l=this.measures_,d=l.anchorWidth,f=l.surfaceWidth;for(var h in d/f>r["d"].ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO&&(o="center"),(this.hoistedElement_||this.isFixedPosition_)&&(c=this.adjustPositionForHoistedElement_(c)),c)c.hasOwnProperty(h)&&"0"!==c[h]&&(c[h]=parseInt(c[h],10)+"px");this.adapter_.setTransformOrigin(o+" "+i),this.adapter_.setPosition(c),this.adapter_.setMaxHeight(n?n+"px":""),this.measures_=null}},{key:"adjustPositionForHoistedElement_",value:function(e){var t=this.measures_,n=t.windowScroll,i=t.viewportDistance;for(var r in e)e.hasOwnProperty(r)&&(i.hasOwnProperty(r)&&(e[r]=parseInt(e[r],10)+i[r]),this.isFixedPosition_||("top"===r?e[r]=parseInt(e[r],10)+n.y:"bottom"===r?e[r]=parseInt(e[r],10)-n.y:"left"===r?e[r]=parseInt(e[r],10)+n.x:"right"===r&&(e[r]=parseInt(e[r],10)-n.x)));return e}},{key:"open",value:function(){var e=this;this.adapter_.saveFocus(),this.quickOpen_||this.adapter_.addClass(t.cssClasses.ANIMATING_OPEN),this.animationRequestId_=requestAnimationFrame(function(){e.adapter_.addClass(t.cssClasses.OPEN),e.dimensions_=e.adapter_.getInnerDimensions(),e.autoPosition_(),e.quickOpen_?e.adapter_.notifyOpen():e.openAnimationEndTimerId_=setTimeout(function(){e.openAnimationEndTimerId_=0,e.adapter_.removeClass(t.cssClasses.ANIMATING_OPEN),e.adapter_.notifyOpen()},r["d"].TRANSITION_OPEN_DURATION)}),this.isOpen_=!0}},{key:"close",value:function(){var e=this;this.quickOpen_||this.adapter_.addClass(t.cssClasses.ANIMATING_CLOSED),requestAnimationFrame(function(){e.adapter_.removeClass(t.cssClasses.OPEN),e.quickOpen_?e.adapter_.notifyClose():e.closeAnimationEndTimerId_=setTimeout(function(){e.closeAnimationEndTimerId_=0,e.adapter_.removeClass(t.cssClasses.ANIMATING_CLOSED),e.adapter_.notifyClose()},r["d"].TRANSITION_CLOSE_DURATION)}),this.isOpen_=!1,this.maybeRestoreFocus_()}},{key:"maybeRestoreFocus_",value:function(){(this.adapter_.isFocused()||this.adapter_.isElementInContainer(document.activeElement))&&this.adapter_.restoreFocus()}},{key:"isOpen",value:function(){return this.isOpen_}},{key:"typeCheckisFinite_",value:function(e){return"number"===typeof e&&isFinite(e)}}]),t}(i["a"])},function(e,t,n){"use strict";n.d(t,"c",function(){return i}),n.d(t,"e",function(){return r}),n.d(t,"d",function(){return o}),n.d(t,"b",function(){return a}),n.d(t,"a",function(){return s});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ANCHOR:"mdc-menu-surface--anchor",ANIMATING_CLOSED:"mdc-menu-surface--animating-closed",ANIMATING_OPEN:"mdc-menu-surface--animating-open",FIXED:"mdc-menu-surface--fixed",OPEN:"mdc-menu-surface--open",ROOT:"mdc-menu-surface"},r={CLOSED_EVENT:"MDCMenuSurface:closed",OPENED_EVENT:"MDCMenuSurface:opened",FOCUSABLE_ELEMENTS:'button:not(:disabled), [href]:not([aria-disabled="true"]), input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"]):not([aria-disabled="true"])'},o={TRANSITION_OPEN_DURATION:120,TRANSITION_CLOSE_DURATION:75,MARGIN_TO_EDGE:32,ANCHOR_TO_MENU_SURFACE_WIDTH_RATIO:.67},a={BOTTOM:1,CENTER:2,RIGHT:4,FLIP_RTL:8},s={TOP_LEFT:0,TOP_RIGHT:a.RIGHT,BOTTOM_LEFT:a.BOTTOM,BOTTOM_RIGHT:a.BOTTOM|a.RIGHT,TOP_START:a.FLIP_RTL,TOP_END:a.FLIP_RTL|a.RIGHT,BOTTOM_START:a.BOTTOM|a.FLIP_RTL,BOTTOM_END:a.BOTTOM|a.RIGHT|a.FLIP_RTL}},,function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"setStyle",value:function(e,t){}},{key:"registerEventHandler",value:function(e,t){}},{key:"deregisterEventHandler",value:function(e,t){}}])})()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"hasAnchor",value:function(){}},{key:"notifyClose",value:function(){}},{key:"notifyOpen",value:function(){}},{key:"isElementInContainer",value:function(e){}},{key:"isRtl",value:function(){}},{key:"setTransformOrigin",value:function(e){}},{key:"isFocused",value:function(){}},{key:"saveFocus",value:function(){}},{key:"restoreFocus",value:function(){}},{key:"isFirstElementFocused",value:function(){}},{key:"isLastElementFocused",value:function(){}},{key:"focusFirstElement",value:function(){}},{key:"focusLastElement",value:function(){}},{key:"getInnerDimensions",value:function(){}},{key:"getAnchorDimensions",value:function(){}},{key:"getWindowDimensions",value:function(){}},{key:"getBodyDimensions",value:function(){}},{key:"getWindowScroll",value:function(){}},{key:"setPosition",value:function(e){}},{key:"setMaxHeight",value:function(e){}}])})()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"setNotchWidthProperty",value:function(e){}},{key:"removeNotchWidthProperty",value:function(){}}])})()},function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return r}),n.d(t,"c",function(){return i});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},r={NOTCH_ELEMENT_PADDING:8},o={OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded",NO_LABEL:"mdc-notched-outline--no-label"}},,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCList",function(){return f});var i=n(1),r=n(15),o=(n(10),n(8)),a=n(11);n.d(t,"MDCListFoundation",function(){return r["a"]});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=function(e){function t(){var e;c(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.handleKeydown_,o.handleClick_,o.focusInEventListener_,o.focusOutEventListener_,o}return d(t,e),u(t,[{key:"destroy",value:function(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener("click",this.handleClick_),this.root_.removeEventListener("focusin",this.focusInEventListener_),this.root_.removeEventListener("focusout",this.focusOutEventListener_)}},{key:"initialSyncWithDOM",value:function(){this.handleClick_=this.handleClickEvent_.bind(this),this.handleKeydown_=this.handleKeydownEvent_.bind(this),this.focusInEventListener_=this.handleFocusInEvent_.bind(this),this.focusOutEventListener_=this.handleFocusOutEvent_.bind(this),this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener("focusin",this.focusInEventListener_),this.root_.addEventListener("focusout",this.focusOutEventListener_),this.root_.addEventListener("click",this.handleClick_),this.layout(),this.initializeListType()}},{key:"layout",value:function(){var e=this.root_.getAttribute(a["b"].ARIA_ORIENTATION);this.vertical=e!==a["b"].ARIA_ORIENTATION_HORIZONTAL,[].slice.call(this.root_.querySelectorAll(".mdc-list-item:not([tabindex])")).forEach(function(e){e.setAttribute("tabindex",-1)}),[].slice.call(this.root_.querySelectorAll(a["b"].FOCUSABLE_CHILD_ELEMENTS)).forEach(function(e){return e.setAttribute("tabindex",-1)}),this.foundation_.layout()}},{key:"getListItemIndex_",value:function(e){var t=e.target,n=-1;while(!t.classList.contains(a["a"].LIST_ITEM_CLASS)&&!t.classList.contains(a["a"].ROOT))t=t.parentElement;return t.classList.contains(a["a"].LIST_ITEM_CLASS)&&(n=this.listElements.indexOf(t)),n}},{key:"handleFocusInEvent_",value:function(e){var t=this.getListItemIndex_(e);this.foundation_.handleFocusIn(e,t)}},{key:"handleFocusOutEvent_",value:function(e){var t=this.getListItemIndex_(e);this.foundation_.handleFocusOut(e,t)}},{key:"handleKeydownEvent_",value:function(e){var t=this.getListItemIndex_(e);t>=0&&this.foundation_.handleKeydown(e,e.target.classList.contains(a["a"].LIST_ITEM_CLASS),t)}},{key:"handleClickEvent_",value:function(e){var t=this.getListItemIndex_(e),n=!Object(o["matches"])(e.target,a["b"].CHECKBOX_RADIO_SELECTOR);this.foundation_.handleClick(t,n)}},{key:"initializeListType",value:function(){var e=this,t=this.root_.querySelectorAll(a["b"].ARIA_ROLE_CHECKBOX_SELECTOR),n=this.root_.querySelector("."+a["a"].LIST_ITEM_ACTIVATED_CLASS+",\n        ."+a["a"].LIST_ITEM_SELECTED_CLASS),i=this.root_.querySelector(a["b"].ARIA_CHECKED_RADIO_SELECTOR);if(t.length){var r=this.root_.querySelectorAll(a["b"].ARIA_CHECKED_CHECKBOX_SELECTOR);this.selectedIndex=[].map.call(r,function(t){return e.listElements.indexOf(t)})}else n?(n.classList.contains(a["a"].LIST_ITEM_ACTIVATED_CLASS)&&this.foundation_.setUseActivatedClass(!0),this.singleSelection=!0,this.selectedIndex=this.listElements.indexOf(n)):i&&(this.selectedIndex=this.listElements.indexOf(i))}},{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"](s({getListItemCount:function(){return e.listElements.length},getFocusedElementIndex:function(){return e.listElements.indexOf(document.activeElement)},setAttributeForElementIndex:function(t,n,i){var r=e.listElements[t];r&&r.setAttribute(n,i)},removeAttributeForElementIndex:function(t,n){var i=e.listElements[t];i&&i.removeAttribute(n)},addClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.add(n)},removeClassForElementIndex:function(t,n){var i=e.listElements[t];i&&i.classList.remove(n)},focusItemAtIndex:function(t){var n=e.listElements[t];n&&n.focus()},setTabIndexForListItemChildren:function(t,n){var i=e.listElements[t],r=[].slice.call(i.querySelectorAll(a["b"].CHILD_ELEMENTS_TO_TOGGLE_TABINDEX));r.forEach(function(e){return e.setAttribute("tabindex",n)})},followHref:function(t){var n=e.listElements[t];n&&n.href&&n.click()},hasCheckboxAtIndex:function(t){var n=e.listElements[t];return!!n.querySelector(a["b"].CHECKBOX_SELECTOR)},hasRadioAtIndex:function(t){var n=e.listElements[t];return!!n.querySelector(a["b"].RADIO_SELECTOR)},isCheckboxCheckedAtIndex:function(t){var n=e.listElements[t],i=n.querySelector(a["b"].CHECKBOX_SELECTOR);return i.checked},setCheckedCheckboxOrRadioAtIndex:function(t,n){var i=e.listElements[t],r=i.querySelector(a["b"].CHECKBOX_RADIO_SELECTOR);r.checked=n;var o=document.createEvent("Event");o.initEvent("change",!0,!0),r.dispatchEvent(o)},isFocusInsideList:function(){return e.root_.contains(document.activeElement)}}))}},{key:"vertical",set:function(e){this.foundation_.setVerticalOrientation(e)}},{key:"listElements",get:function(){return[].slice.call(this.root_.querySelectorAll(a["b"].ENABLED_ITEMS_SELECTOR))}},{key:"wrapFocus",set:function(e){this.foundation_.setWrapFocus(e)}},{key:"singleSelection",set:function(e){this.foundation_.setSingleSelection(e)}},{key:"selectedIndex",get:function(){return this.foundation_.getSelectedIndex()},set:function(e){this.foundation_.setSelectedIndex(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";var i=n(0),r=(n(12),n(27)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(e){s(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.shakeAnimationEndHandler_=function(){return n.handleShakeAnimationEnd_()},n}return c(t,e),a(t,null,[{key:"cssClasses",get:function(){return r["a"]}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},getWidth:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){}}}}]),a(t,[{key:"init",value:function(){this.adapter_.registerInteractionHandler("animationend",this.shakeAnimationEndHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterInteractionHandler("animationend",this.shakeAnimationEndHandler_)}},{key:"getWidth",value:function(){return this.adapter_.getWidth()}},{key:"shake",value:function(e){var n=t.cssClasses.LABEL_SHAKE;e?this.adapter_.addClass(n):this.adapter_.removeClass(n)}},{key:"float",value:function(e){var n=t.cssClasses,i=n.LABEL_FLOAT_ABOVE,r=n.LABEL_SHAKE;e?this.adapter_.addClass(i):(this.adapter_.removeClass(i),this.adapter_.removeClass(r))}},{key:"handleShakeAnimationEnd_",value:function(){var e=t.cssClasses.LABEL_SHAKE;this.adapter_.removeClass(e)}}]),t}(i["a"]);t["a"]=l},function(e,t,n){"use strict";n.d(t,"a",function(){return i});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={LABEL_FLOAT_ABOVE:"mdc-floating-label--float-above",LABEL_SHAKE:"mdc-floating-label--shake",ROOT:"mdc-floating-label"}},,function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"b",function(){return r});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ROOT:"mdc-menu",MENU_SELECTED_LIST_ITEM:"mdc-menu-item--selected",MENU_SELECTION_GROUP:"mdc-menu__selection-group"},r={SELECTED_EVENT:"MDCMenu:selected",ARIA_SELECTED_ATTR:"aria-selected",LIST_SELECTOR:".mdc-list",CHECKBOX_SELECTOR:'input[type="checkbox"]'}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCLineRipple",function(){return l});var i=n(1),r=(n(20),n(31));n.d(t,"MDCLineRippleFoundation",function(){return r["a"]});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"activate",value:function(){this.foundation_.activate()}},{key:"deactivate",value:function(){this.foundation_.deactivate()}},{key:"setRippleCenter",value:function(e){this.foundation_.setRippleCenter(e)}},{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"](o({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},setStyle:function(t,n){return e.root_.style[t]=n},registerEventHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterEventHandler:function(t,n){return e.root_.removeEventListener(t,n)}}))}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";var i=n(0),r=(n(20),n(32)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(e){s(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.transitionEndHandler_=function(e){return n.handleTransitionEnd(e)},n}return c(t,e),a(t,null,[{key:"cssClasses",get:function(){return r["a"]}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}}}]),a(t,[{key:"init",value:function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)}},{key:"destroy",value:function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)}},{key:"activate",value:function(){this.adapter_.removeClass(r["a"].LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(r["a"].LINE_RIPPLE_ACTIVE)}},{key:"setRippleCenter",value:function(e){this.adapter_.setStyle("transform-origin",e+"px center")}},{key:"deactivate",value:function(){this.adapter_.addClass(r["a"].LINE_RIPPLE_DEACTIVATING)}},{key:"handleTransitionEnd",value:function(e){var t=this.adapter_.hasClass(r["a"].LINE_RIPPLE_DEACTIVATING);"opacity"===e.propertyName&&t&&(this.adapter_.removeClass(r["a"].LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(r["a"].LINE_RIPPLE_DEACTIVATING))}}]),t}(i["a"]);t["a"]=l},function(e,t,n){"use strict";n.d(t,"a",function(){return i});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCMenuSurface",function(){return h});var i=n(1),r=n(34),o=n(17),a=(n(21),n(18));n.d(t,"MDCMenuSurfaceFoundation",function(){return o["b"]}),n.d(t,"AnchorMargin",function(){return o["a"]}),n.d(t,"Corner",function(){return a["a"]}),n.d(t,"CornerBit",function(){return a["b"]}),n.d(t,"util",function(){return r});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),c=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0};function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function f(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var h=function(e){function t(){var e;l(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.previousFocus_,o.anchorElement,o.firstFocusableElement_,o.lastFocusableElement_,o.handleKeydown_,o.handleBodyClick_,o.registerBodyClickListener_,o.deregisterBodyClickListener_,o}return f(t,e),u(t,[{key:"initialSyncWithDOM",value:function(){var e=this;this.root_.parentElement&&this.root_.parentElement.classList.contains(a["c"].ANCHOR)&&(this.anchorElement=this.root_.parentElement),this.root_.classList.contains(a["c"].FIXED)&&this.setFixedPosition(!0),this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleBodyClick_=function(t){return e.foundation_.handleBodyClick(t)},this.registerBodyClickListener_=function(){return document.body.addEventListener("click",e.handleBodyClick_)},this.deregisterBodyClickListener_=function(){return document.body.removeEventListener("click",e.handleBodyClick_)},this.root_.addEventListener("keydown",this.handleKeydown_),this.root_.addEventListener(a["e"].OPENED_EVENT,this.registerBodyClickListener_),this.root_.addEventListener(a["e"].CLOSED_EVENT,this.deregisterBodyClickListener_)}},{key:"destroy",value:function(){this.root_.removeEventListener("keydown",this.handleKeydown_),this.root_.removeEventListener(a["e"].OPENED_EVENT,this.registerBodyClickListener_),this.root_.removeEventListener(a["e"].CLOSED_EVENT,this.deregisterBodyClickListener_),c(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"hoistMenuToBody",value:function(){document.body.appendChild(this.root_.parentElement.removeChild(this.root_)),this.setIsHoisted(!0)}},{key:"setIsHoisted",value:function(e){this.foundation_.setIsHoisted(e)}},{key:"setMenuSurfaceAnchorElement",value:function(e){this.anchorElement=e}},{key:"setFixedPosition",value:function(e){e?this.root_.classList.add(a["c"].FIXED):this.root_.classList.remove(a["c"].FIXED),this.foundation_.setFixedPosition(e)}},{key:"setAbsolutePosition",value:function(e,t){this.foundation_.setAbsolutePosition(e,t),this.setIsHoisted(!0)}},{key:"setAnchorCorner",value:function(e){this.foundation_.setAnchorCorner(e)}},{key:"setAnchorMargin",value:function(e){this.foundation_.setAnchorMargin(e)}},{key:"getDefaultFoundation",value:function(){var e=this;return new o["b"](s({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},hasAnchor:function(){return!!e.anchorElement},notifyClose:function(){return e.emit(o["b"].strings.CLOSED_EVENT,{})},notifyOpen:function(){return e.emit(o["b"].strings.OPENED_EVENT,{})},isElementInContainer:function(t){return e.root_===t||e.root_.contains(t)},isRtl:function(){return"rtl"===getComputedStyle(e.root_).getPropertyValue("direction")},setTransformOrigin:function(t){e.root_.style[r["getTransformPropertyName"](window)+"-origin"]=t}},this.getFocusAdapterMethods_(),this.getDimensionAdapterMethods_()))}},{key:"getFocusAdapterMethods_",value:function(){var e=this;return{isFocused:function(){return document.activeElement===e.root_},saveFocus:function(){e.previousFocus_=document.activeElement},restoreFocus:function(){e.root_.contains(document.activeElement)&&e.previousFocus_&&e.previousFocus_.focus&&e.previousFocus_.focus()},isFirstElementFocused:function(){return e.firstFocusableElement_&&e.firstFocusableElement_===document.activeElement},isLastElementFocused:function(){return e.lastFocusableElement_&&e.lastFocusableElement_===document.activeElement},focusFirstElement:function(){return e.firstFocusableElement_&&e.firstFocusableElement_.focus&&e.firstFocusableElement_.focus()},focusLastElement:function(){return e.lastFocusableElement_&&e.lastFocusableElement_.focus&&e.lastFocusableElement_.focus()}}}},{key:"getDimensionAdapterMethods_",value:function(){var e=this;return{getInnerDimensions:function(){return{width:e.root_.offsetWidth,height:e.root_.offsetHeight}},getAnchorDimensions:function(){return e.anchorElement&&e.anchorElement.getBoundingClientRect()},getWindowDimensions:function(){return{width:window.innerWidth,height:window.innerHeight}},getBodyDimensions:function(){return{width:document.body.clientWidth,height:document.body.clientHeight}},getWindowScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},setPosition:function(t){e.root_.style.left="left"in t?t.left:null,e.root_.style.right="right"in t?t.right:null,e.root_.style.top="top"in t?t.top:null,e.root_.style.bottom="bottom"in t?t.bottom:null},setMaxHeight:function(t){e.root_.style.maxHeight=t}}}},{key:"open",get:function(){return this.foundation_.isOpen()},set:function(e){if(e){var t=this.root_.querySelectorAll(a["e"].FOCUSABLE_ELEMENTS);this.firstFocusableElement_=t.length>0?t[0]:null,this.lastFocusableElement_=t.length>0?t[t.length-1]:null,this.foundation_.open()}else this.foundation_.close()}},{key:"quickOpen",set:function(e){this.foundation_.setQuickOpen(e)}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"getTransformPropertyName",function(){return r});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i=void 0;function r(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(void 0===i||t){var n=e.document.createElement("div"),r="transform"in n.style?"transform":"webkitTransform";i=r}return i}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCNotchedOutline",function(){return f});var i=n(1),r=(n(22),n(36)),o=n(16),a=n(23);n.d(t,"MDCNotchedOutlineFoundation",function(){return r["a"]});var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=function(e){function t(){var e;c(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=l(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.notchElement_,o}return d(t,e),u(t,null,[{key:"attachTo",value:function(e){return new t(e)}}]),u(t,[{key:"initialSyncWithDOM",value:function(){var e=this.root_.querySelector("."+o["MDCFloatingLabelFoundation"].cssClasses.ROOT);this.notchElement_=this.root_.querySelector(a["c"].NOTCH_ELEMENT_SELECTOR),e?(e.style.transitionDuration="0s",this.root_.classList.add(a["a"].OUTLINE_UPGRADED),requestAnimationFrame(function(){e.style.transitionDuration=""})):this.root_.classList.add(a["a"].NO_LABEL)}},{key:"notch",value:function(e){this.foundation_.notch(e)}},{key:"closeNotch",value:function(){this.foundation_.closeNotch()}},{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"](s({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},setNotchWidthProperty:function(t){return e.notchElement_.style.setProperty("width",t+"px")},removeNotchWidthProperty:function(){return e.notchElement_.style.removeProperty("width")}}))}}]),t}(i["a"])},function(e,t,n){"use strict";var i=n(0),r=(n(22),n(23)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2017 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(e){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)))}return c(t,e),a(t,null,[{key:"strings",get:function(){return r["c"]}},{key:"cssClasses",get:function(){return r["a"]}},{key:"numbers",get:function(){return r["b"]}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}}}]),a(t,[{key:"notch",value:function(e){var n=t.cssClasses.OUTLINE_NOTCHED;e>0&&(e+=r["b"].NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(e),this.adapter_.addClass(n)}},{key:"closeNotch",value:function(){var e=t.cssClasses.OUTLINE_NOTCHED;this.adapter_.removeClass(e),this.adapter_.removeNotchWidthProperty()}}]),t}(i["a"]);t["a"]=l},,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCMenu",function(){return _});var i=n(1),r=n(47),o=n(29),a=n(33),s=n(17),u=n(25);n.d(t,"MDCMenuFoundation",function(){return r["a"]}),n.d(t,"AnchorMargin",function(){return s["a"]}),n.d(t,"Corner",function(){return a["Corner"]});var c=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0};function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var _=function(e){function t(){var e;d(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=f(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.menuSurface_,o.list_,o.handleKeydown_,o.handleClick_,o.afterOpenedCallback_,o}return h(t,e),c(t,[{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new a["MDCMenuSurface"](e)},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return new u["MDCList"](e)};this.menuSurface_=e(this.root_);var n=this.root_.querySelector(o["b"].LIST_SELECTOR);n&&(this.list_=t(n),this.list_.wrapFocus=!0)}},{key:"initialSyncWithDOM",value:function(){var e=this;this.afterOpenedCallback_=function(){return e.handleAfterOpened_()},this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleClick_=function(t){return e.foundation_.handleClick(t)},this.menuSurface_.listen(s["b"].strings.OPENED_EVENT,this.afterOpenedCallback_),this.listen("keydown",this.handleKeydown_),this.listen("click",this.handleClick_)}},{key:"destroy",value:function(){this.list_&&this.list_.destroy(),this.menuSurface_.destroy(),this.menuSurface_.unlisten(s["b"].strings.OPENED_EVENT,this.afterOpenedCallback_),this.unlisten("keydown",this.handleKeydown_),this.unlisten("click",this.handleClick_),l(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"setAnchorCorner",value:function(e){this.menuSurface_.setAnchorCorner(e)}},{key:"setAnchorMargin",value:function(e){this.menuSurface_.setAnchorMargin(e)}},{key:"getOptionByIndex",value:function(e){var t=this.items;return e<t.length?this.items[e]:null}},{key:"setFixedPosition",value:function(e){this.menuSurface_.setFixedPosition(e)}},{key:"hoistMenuToBody",value:function(){this.menuSurface_.hoistMenuToBody()}},{key:"setIsHoisted",value:function(e){this.menuSurface_.setIsHoisted(e)}},{key:"setAbsolutePosition",value:function(e,t){this.menuSurface_.setAbsolutePosition(e,t)}},{key:"setAnchorElement",value:function(e){this.menuSurface_.anchorElement=e}},{key:"handleAfterOpened_",value:function(){var e=this.items;e.length>0&&e[0].focus()}},{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"]({addClassToElementAtIndex:function(t,n){var i=e.items;i[t].classList.add(n)},removeClassFromElementAtIndex:function(t,n){var i=e.items;i[t].classList.remove(n)},addAttributeToElementAtIndex:function(t,n,i){var r=e.items;r[t].setAttribute(n,i)},removeAttributeFromElementAtIndex:function(t,n){var i=e.items;i[t].removeAttribute(n)},elementContainsClass:function(e,t){return e.classList.contains(t)},closeSurface:function(){return e.open=!1},getElementIndex:function(t){return e.items.indexOf(t)},getParentElement:function(e){return e.parentElement},getSelectedElementIndex:function(t){return e.items.indexOf(t.querySelector("."+o["a"].MENU_SELECTED_LIST_ITEM))},notifySelected:function(t){return e.emit(o["b"].SELECTED_EVENT,{index:t.index,item:e.items[t.index]})}})}},{key:"open",get:function(){return this.menuSurface_.open},set:function(e){this.menuSurface_.open=e}},{key:"wrapFocus",get:function(){return this.list_.wrapFocus},set:function(e){this.list_.wrapFocus=e}},{key:"items",get:function(){return this.list_.listElements}},{key:"quickOpen",set:function(e){this.menuSurface_.quickOpen=e}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";n.d(t,"a",function(){return h});var i=n(0),r=(n(48),n(29)),o=n(17),a=n(15),s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function d(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f=["input","button","textarea","select","a"],h=function(e){function t(e){c(this,t);var n=l(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,s(t.defaultAdapter,e)));return n.closeAnimationEndTimerId_=0,n}return d(t,e),u(t,null,[{key:"cssClasses",get:function(){return r["a"]}},{key:"strings",get:function(){return r["b"]}},{key:"defaultAdapter",get:function(){return{addClassToElementAtIndex:function(){},removeClassFromElementAtIndex:function(){},addAttributeToElementAtIndex:function(){},removeAttributeFromElementAtIndex:function(){},elementContainsClass:function(){},closeSurface:function(){},getElementIndex:function(){},getParentElement:function(){},getSelectedElementIndex:function(){},notifySelected:function(){}}}}]),u(t,[{key:"destroy",value:function(){this.closeAnimationEndTimerId_&&clearTimeout(this.closeAnimationEndTimerId_),this.adapter_.closeSurface()}},{key:"handleKeydown",value:function(e){var t=e.key,n=e.keyCode,i="Space"===t||32===n,r="Enter"===t||13===n,o="Tab"===t||9===n;i||r?this.handleAction_(e):o&&this.adapter_.closeSurface()}},{key:"handleClick",value:function(e){this.handleAction_(e)}},{key:"handleAction_",value:function(e){var t=this.getListItem_(e.target);t&&(this.handleSelection(t),this.preventDefaultEvent_(e))}},{key:"handleSelection",value:function(e){var t=this,n=this.adapter_.getElementIndex(e);n<0||(this.adapter_.notifySelected({index:n}),this.adapter_.closeSurface(),this.closeAnimationEndTimerId_=setTimeout(function(){var i=t.getSelectionGroup_(e);null!==i&&t.handleSelectionGroup_(i,n)},o["b"].numbers.TRANSITION_CLOSE_DURATION))}},{key:"handleSelectionGroup_",value:function(e,t){var n=this.adapter_.getSelectedElementIndex(e);n>=0&&(this.adapter_.removeAttributeFromElementAtIndex(n,r["b"].ARIA_SELECTED_ATTR),this.adapter_.removeClassFromElementAtIndex(n,r["a"].MENU_SELECTED_LIST_ITEM)),this.adapter_.addClassToElementAtIndex(t,r["a"].MENU_SELECTED_LIST_ITEM),this.adapter_.addAttributeToElementAtIndex(t,r["b"].ARIA_SELECTED_ATTR,"true")}},{key:"getSelectionGroup_",value:function(e){var t=this.adapter_.getParentElement(e),n=this.adapter_.elementContainsClass(t,r["a"].MENU_SELECTION_GROUP);while(!n&&!this.adapter_.elementContainsClass(t,a["a"].cssClasses.ROOT))t=this.adapter_.getParentElement(t),n=this.adapter_.elementContainsClass(t,r["a"].MENU_SELECTION_GROUP);return n?t:null}},{key:"getListItem_",value:function(e){var t=this.adapter_.elementContainsClass(e,a["a"].cssClasses.LIST_ITEM_CLASS);while(!t){if(e=this.adapter_.getParentElement(e),!e)return null;t=this.adapter_.elementContainsClass(e,a["a"].cssClasses.LIST_ITEM_CLASS)}return e}},{key:"preventDefaultEvent_",value:function(e){var t=e.target,n=(""+t.tagName).toLowerCase();-1===f.indexOf(n)&&e.preventDefault()}}]),t}(i["a"])},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClassToElementAtIndex",value:function(e,t){}},{key:"removeClassFromElementAtIndex",value:function(e,t){}},{key:"addAttributeToElementAtIndex",value:function(e,t,n){}},{key:"removeAttributeFromElementAtIndex",value:function(e,t){}},{key:"elementContainsClass",value:function(e,t){}},{key:"closeSurface",value:function(){}},{key:"getElementIndex",value:function(e){}},{key:"getParentElement",value:function(e){}},{key:"getSelectedElementIndex",value:function(e){}},{key:"notifySelected",value:function(e){}}])})()},function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n(1),r=(n(73),n(133));n.d(t,"b",function(){return r["a"]});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"](o({getAttr:function(t){return e.root_.getAttribute(t)},setAttr:function(t,n){return e.root_.setAttribute(t,n)},removeAttr:function(t){return e.root_.removeAttribute(t)},setContent:function(t){e.root_.textContent=t},registerInteractionHandler:function(t,n){return e.root_.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.root_.removeEventListener(t,n)},notifyIconAction:function(){return e.emit(r["a"].strings.ICON_EVENT,{},!0)}}))}},{key:"foundation",get:function(){return this.foundation_}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";n.d(t,"a",function(){return l});var i=n(1),r=(n(74),n(135));n.d(t,"b",function(){return r["a"]});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return c(t,e),a(t,[{key:"getDefaultFoundation",value:function(){var e=this;return new r["a"](o({addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},setAttr:function(t,n){return e.root_.setAttribute(t,n)},removeAttr:function(t){return e.root_.removeAttribute(t)},setContent:function(t){e.root_.textContent=t}}))}},{key:"foundation",get:function(){return this.foundation_}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";n(49),n(50);var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"activateBottomLine",value:function(){}},{key:"deactivateBottomLine",value:function(){}},{key:"setValue",value:function(e){}},{key:"getValue",value:function(){}},{key:"floatLabel",value:function(e){}},{key:"getLabelWidth",value:function(){}},{key:"hasOutline",value:function(){}},{key:"notchOutline",value:function(e){}},{key:"closeOutline",value:function(){}},{key:"openMenu",value:function(){}},{key:"closeMenu",value:function(){}},{key:"isMenuOpen",value:function(){}},{key:"setSelectedIndex",value:function(e){}},{key:"setDisabled",value:function(e){}},{key:"setRippleCenter",value:function(e){}},{key:"notifyChange",value:function(e){}},{key:"checkValidity",value:function(){}},{key:"setValid",value:function(e){}}])})()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"getAttr",value:function(e){}},{key:"setAttr",value:function(e,t){}},{key:"removeAttr",value:function(e){}},{key:"setContent",value:function(e){}},{key:"registerInteractionHandler",value:function(e,t){}},{key:"deregisterInteractionHandler",value:function(e,t){}},{key:"notifyIconAction",value:function(){}}])})()},function(e,t,n){"use strict";var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(){function e(){r(this,e)}i(e,[{key:"addClass",value:function(e){}},{key:"removeClass",value:function(e){}},{key:"hasClass",value:function(e){}},{key:"setAttr",value:function(e,t){}},{key:"removeAttr",value:function(e){}},{key:"setContent",value:function(e){}}])})()},function(e,t,n){"use strict";n.d(t,"a",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"b",function(){return o});
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={DISABLED:"mdc-select--disabled",ROOT:"mdc-select",OUTLINED:"mdc-select--outlined",FOCUSED:"mdc-select--focused",SELECTED_ITEM_CLASS:"mdc-list-item--selected",WITH_LEADING_ICON:"mdc-select--with-leading-icon",INVALID:"mdc-select--invalid",REQUIRED:"mdc-select--required"},r={ARIA_CONTROLS:"aria-controls",CHANGE_EVENT:"MDCSelect:change",SELECTED_ITEM_SELECTOR:"."+i.SELECTED_ITEM_CLASS,LEADING_ICON_SELECTOR:".mdc-select__icon",SELECTED_TEXT_SELECTOR:".mdc-select__selected-text",HIDDEN_INPUT_SELECTOR:'input[type="hidden"]',MENU_SELECTOR:".mdc-select__menu",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",LABEL_SELECTOR:".mdc-floating-label",NATIVE_CONTROL_SELECTOR:".mdc-select__native-control",OUTLINE_SELECTOR:".mdc-notched-outline",ENHANCED_VALUE_ATTR:"data-value",ARIA_SELECTED_ATTR:"aria-selected"},o={LABEL_SCALE:.75}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"MDCSelect",function(){return C});var i=n(1),r=n(16),o=n(30),a=n(46),s=n(4),u=n(35),c=n(132),l=n(75),d=(n(72),n(49)),f=n(50),h=n(18),_=n(29);n.d(t,"MDCSelectFoundation",function(){return c["a"]}),n.d(t,"MDCSelectHelperText",function(){return f["a"]}),n.d(t,"MDCSelectHelperTextFoundation",function(){return f["b"]}),n.d(t,"MDCSelectIcon",function(){return d["a"]}),n.d(t,"MDCSelectIconFoundation",function(){return d["b"]});var p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},v=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),y=function e(t,n,i){null===t&&(t=Function.prototype);var r=Object.getOwnPropertyDescriptor(t,n);if(void 0===r){var o=Object.getPrototypeOf(t);return null===o?void 0:e(o,n,i)}if("value"in r)return r.value;var a=r.get;return void 0!==a?a.call(i):void 0};function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function E(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function b(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var g=["required","aria-required"],C=function(e){function t(){var e;m(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=E(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o.nativeControl_,o.selectedText_,o.hiddenInput_,o.leadingIcon_,o.helperText_,o.menuElement_,o.menu_,o.ripple,o.lineRipple_,o.label_,o.outline_,o.handleChange_,o.handleFocus_,o.handleBlur_,o.handleClick_,o.handleKeydown_,o.handleMenuOpened_,o.handleMenuClosed_,o.handleMenuSelected_,o.menuOpened_=!1,o.validationObserver_,o}return b(t,e),v(t,[{key:"layout",value:function(){this.foundation_.layout()}},{key:"initialize",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(e){return new r["MDCFloatingLabel"](e)},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return new o["MDCLineRipple"](e)},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(e){return new u["MDCNotchedOutline"](e)},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(e){return new a["MDCMenu"](e)},s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(e){return new d["a"](e)},c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:function(e){return new f["a"](e)};this.nativeControl_=this.root_.querySelector(l["c"].NATIVE_CONTROL_SELECTOR),this.selectedText_=this.root_.querySelector(l["c"].SELECTED_TEXT_SELECTOR),this.selectedText_&&this.enhancedSelectSetup_(i);var h=this.root_.querySelector(l["c"].LABEL_SELECTOR);h&&(this.label_=e(h));var _=this.root_.querySelector(l["c"].LINE_RIPPLE_SELECTOR);_&&(this.lineRipple_=t(_));var p=this.root_.querySelector(l["c"].OUTLINE_SELECTOR);p&&(this.outline_=n(p));var v=this.root_.querySelector(l["c"].LEADING_ICON_SELECTOR);v&&(this.root_.classList.add(l["a"].WITH_LEADING_ICON),this.leadingIcon_=s(v),this.menuElement_&&this.menuElement_.classList.add(l["a"].WITH_LEADING_ICON));var y=this.nativeControl_?this.nativeControl_:this.selectedText_;if(y.hasAttribute(l["c"].ARIA_CONTROLS)){var m=document.getElementById(y.getAttribute(l["c"].ARIA_CONTROLS));m&&(this.helperText_=c(m))}this.root_.classList.contains(l["a"].OUTLINED)||(this.ripple=this.initRipple_()),this.initialSyncRequiredState_(),this.addMutationObserverForRequired_()}},{key:"enhancedSelectSetup_",value:function(e){var t=this.root_.classList.contains(l["a"].DISABLED);this.selectedText_.setAttribute("tabindex",t?"-1":"0"),this.hiddenInput_=this.root_.querySelector(l["c"].HIDDEN_INPUT_SELECTOR),this.menuElement_=this.root_.querySelector(l["c"].MENU_SELECTOR),this.menu_=e(this.menuElement_),this.menu_.hoistMenuToBody(),this.menu_.setAnchorElement(this.root_),this.menu_.setAnchorCorner(h["a"].BOTTOM_START),this.menu_.wrapFocus=!1}},{key:"initRipple_",value:function(){var e=this.nativeControl_?this.nativeControl_:this.selectedText_,t=p(s["MDCRipple"].createAdapter(this),{registerInteractionHandler:function(t,n){return e.addEventListener(t,n)},deregisterInteractionHandler:function(t,n){return e.removeEventListener(t,n)}}),n=new s["MDCRippleFoundation"](t);return new s["MDCRipple"](this.root_,n)}},{key:"initialSyncWithDOM",value:function(){var e=this;this.handleChange_=function(){return e.foundation_.handleChange(!0)},this.handleFocus_=function(){return e.foundation_.handleFocus()},this.handleBlur_=function(){return e.foundation_.handleBlur()},this.handleClick_=function(t){e.selectedText_&&e.selectedText_.focus(),e.foundation_.handleClick(e.getNormalizedXCoordinate_(t))},this.handleKeydown_=function(t){return e.foundation_.handleKeydown(t)},this.handleMenuSelected_=function(t){return e.selectedIndex=t.detail.index},this.handleMenuOpened_=function(){e.selectedIndex>=0&&e.menu_.items[e.selectedIndex].focus()},this.handleMenuClosed_=function(){e.menuOpened_=!1,e.selectedText_.removeAttribute("aria-expanded"),document.activeElement!==e.selectedText_&&e.foundation_.handleBlur()};var t=this.nativeControl_?this.nativeControl_:this.selectedText_;if(t.addEventListener("change",this.handleChange_),t.addEventListener("focus",this.handleFocus_),t.addEventListener("blur",this.handleBlur_),["mousedown","touchstart"].forEach(function(n){t.addEventListener(n,e.handleClick_)}),this.menuElement_)if(this.selectedText_.addEventListener("keydown",this.handleKeydown_),this.menu_.listen(h["e"].CLOSED_EVENT,this.handleMenuClosed_),this.menu_.listen(h["e"].OPENED_EVENT,this.handleMenuOpened_),this.menu_.listen(_["b"].SELECTED_EVENT,this.handleMenuSelected_),this.hiddenInput_&&this.hiddenInput_.value){var n=this.getEnhancedSelectAdapterMethods_();n.setValue(this.hiddenInput_.value)}else if(this.menuElement_.querySelector(l["c"].SELECTED_ITEM_SELECTOR)){var i=this.getEnhancedSelectAdapterMethods_();i.setValue(i.getValue())}this.foundation_.handleChange(!1),(this.root_.classList.contains(l["a"].DISABLED)||this.nativeControl_&&this.nativeControl_.disabled)&&(this.disabled=!0)}},{key:"destroy",value:function(){var e=this,n=this.nativeControl_?this.nativeControl_:this.selectedText_;n.removeEventListener("change",this.handleChange_),n.removeEventListener("focus",this.handleFocus_),n.removeEventListener("blur",this.handleBlur_),n.removeEventListener("keydown",this.handleKeydown_),["mousedown","touchstart"].forEach(function(t){n.removeEventListener(t,e.handleClick_)}),this.menu_&&(this.menu_.unlisten(h["e"].CLOSED_EVENT,this.handleMenuClosed_),this.menu_.unlisten(h["e"].OPENED_EVENT,this.handleMenuOpened_),this.menu_.unlisten(_["b"].SELECTED_EVENT,this.handleMenuSelected_),this.menu_.destroy()),this.ripple&&this.ripple.destroy(),this.outline_&&this.outline_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.helperText_&&this.helperText_.destroy(),this.validationObserver_&&this.validationObserver_.disconnect(),y(t.prototype.__proto__||Object.getPrototypeOf(t.prototype),"destroy",this).call(this)}},{key:"getDefaultFoundation",value:function(){return new c["a"](p(this.nativeControl_?this.getNativeSelectAdapterMethods_():this.getEnhancedSelectAdapterMethods_(),this.getCommonAdapterMethods_(),this.getOutlineAdapterMethods_(),this.getLabelAdapterMethods_()),this.getFoundationMap_())}},{key:"getNativeSelectAdapterMethods_",value:function(){var e=this;return{getValue:function(){return e.nativeControl_.value},setValue:function(t){return e.nativeControl_.value=t},openMenu:function(){},closeMenu:function(){},isMenuOpen:function(){return!1},setSelectedIndex:function(t){e.nativeControl_.selectedIndex=t},setDisabled:function(t){return e.nativeControl_.disabled=t},setValid:function(t){t?e.root_.classList.remove(l["a"].INVALID):e.root_.classList.add(l["a"].INVALID)},checkValidity:function(){return e.nativeControl_.checkValidity()}}}},{key:"getEnhancedSelectAdapterMethods_",value:function(){var e=this;return{getValue:function(){var t=e.menuElement_.querySelector(l["c"].SELECTED_ITEM_SELECTOR);return t&&t.hasAttribute(l["c"].ENHANCED_VALUE_ATTR)?t.getAttribute(l["c"].ENHANCED_VALUE_ATTR):""},setValue:function(t){var n=e.menuElement_.querySelector("["+l["c"].ENHANCED_VALUE_ATTR+'="'+t+'"]');e.setEnhancedSelectedIndex_(n?e.menu_.items.indexOf(n):-1)},openMenu:function(){e.menu_&&!e.menu_.open&&(e.menu_.open=!0,e.menuOpened_=!0,e.selectedText_.setAttribute("aria-expanded","true"))},closeMenu:function(){e.menu_&&e.menu_.open&&(e.menu_.open=!1)},isMenuOpen:function(){return e.menu_&&e.menuOpened_},setSelectedIndex:function(t){e.setEnhancedSelectedIndex_(t)},setDisabled:function(t){e.selectedText_.setAttribute("tabindex",t?"-1":"0"),e.selectedText_.setAttribute("aria-disabled",t.toString()),e.hiddenInput_&&(e.hiddenInput_.disabled=t)},checkValidity:function(){var t=e.root_.classList;return!(t.contains(l["a"].REQUIRED)&&!t.contains(l["a"].DISABLED))||-1!==e.selectedIndex&&(0!==e.selectedIndex||e.value)},setValid:function(t){e.selectedText_.setAttribute("aria-invalid",(!t).toString()),t?e.root_.classList.remove(l["a"].INVALID):e.root_.classList.add(l["a"].INVALID)}}}},{key:"getCommonAdapterMethods_",value:function(){var e=this;return{addClass:function(t){return e.root_.classList.add(t)},removeClass:function(t){return e.root_.classList.remove(t)},hasClass:function(t){return e.root_.classList.contains(t)},setRippleCenter:function(t){return e.lineRipple_&&e.lineRipple_.setRippleCenter(t)},activateBottomLine:function(){return e.lineRipple_&&e.lineRipple_.activate()},deactivateBottomLine:function(){return e.lineRipple_&&e.lineRipple_.deactivate()},notifyChange:function(t){var n=e.selectedIndex;e.emit(l["c"].CHANGE_EVENT,{value:t,index:n},!0)}}}},{key:"getOutlineAdapterMethods_",value:function(){var e=this;return{hasOutline:function(){return!!e.outline_},notchOutline:function(t){e.outline_&&e.outline_.notch(t)},closeOutline:function(){e.outline_&&e.outline_.closeNotch()}}}},{key:"getLabelAdapterMethods_",value:function(){var e=this;return{floatLabel:function(t){e.label_&&e.label_.float(t)},getLabelWidth:function(){return e.label_?e.label_.getWidth():0}}}},{key:"getNormalizedXCoordinate_",value:function(e){var t=e.target.getBoundingClientRect(),n=e.clientX;return n-t.left}},{key:"getFoundationMap_",value:function(){return{leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0}}},{key:"setEnhancedSelectedIndex_",value:function(e){var t=this.menu_.items[e];this.selectedText_.textContent=t?t.textContent.trim():"";var n=this.menuElement_.querySelector(l["c"].SELECTED_ITEM_SELECTOR);n&&(n.classList.remove(l["a"].SELECTED_ITEM_CLASS),n.removeAttribute(l["c"].ARIA_SELECTED_ATTR)),t&&(t.classList.add(l["a"].SELECTED_ITEM_CLASS),t.setAttribute(l["c"].ARIA_SELECTED_ATTR,"true")),this.hiddenInput_&&(this.hiddenInput_.value=t&&t.getAttribute(l["c"].ENHANCED_VALUE_ATTR)||""),this.layout()}},{key:"initialSyncRequiredState_",value:function(){var e=this.nativeControl_?this.nativeControl_:this.selectedText_,t=e.required||"true"===e.getAttribute("aria-required")||this.root_.classList.contains(l["a"].REQUIRED);t&&(this.nativeControl_?this.nativeControl_.required=!0:this.selectedText_.setAttribute("aria-required","true"),this.root_.classList.add(l["a"].REQUIRED))}},{key:"addMutationObserverForRequired_",value:function(){var e=this,t=function(t){t.some(function(t){if(g.indexOf(t)>-1)return e.selectedText_?"true"===e.selectedText_.getAttribute("aria-required")?e.root_.classList.add(l["a"].REQUIRED):e.root_.classList.remove(l["a"].REQUIRED):e.nativeControl_.required?e.root_.classList.add(l["a"].REQUIRED):e.root_.classList.remove(l["a"].REQUIRED),!0})},n=function(e){return e.map(function(e){return e.attributeName})},i=new MutationObserver(function(e){return t(n(e))}),r=this.nativeControl_?this.nativeControl_:this.selectedText_;i.observe(r,{attributes:!0}),this.validationObserver_=i}},{key:"value",get:function(){return this.foundation_.getValue()},set:function(e){this.foundation_.setValue(e)}},{key:"selectedIndex",get:function(){var e=void 0;if(this.menuElement_){var t=this.menuElement_.querySelector(l["c"].SELECTED_ITEM_SELECTOR);e=this.menu_.items.indexOf(t)}else e=this.nativeControl_.selectedIndex;return e},set:function(e){this.foundation_.setSelectedIndex(e)}},{key:"disabled",get:function(){return this.root_.classList.contains(l["a"].DISABLED)||!!this.nativeControl_&&this.nativeControl_.disabled},set:function(e){this.foundation_.setDisabled(e)}},{key:"leadingIconAriaLabel",set:function(e){this.foundation_.setLeadingIconAriaLabel(e)}},{key:"leadingIconContent",set:function(e){this.foundation_.setLeadingIconContent(e)}},{key:"helperTextContent",set:function(e){this.foundation_.setHelperTextContent(e)}},{key:"valid",set:function(e){this.foundation_.setValid(e)},get:function(){return this.foundation_.isValid()}},{key:"required",set:function(e){this.nativeControl_?this.nativeControl_.required=e:e?this.selectedText_.setAttribute("aria-required",e.toString()):this.selectedText_.removeAttribute("aria-required")},get:function(){return this.nativeControl_?this.nativeControl_.required:"true"===this.selectedText_.getAttribute("aria-required")}}],[{key:"attachTo",value:function(e){return new t(e)}}]),t}(i["a"])},function(e,t,n){"use strict";var i=n(0),r=(n(72),n(49),n(50),n(75)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2016 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};s(this,t);var i=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return i.leadingIcon_=n.leadingIcon,i.helperText_=n.helperText,i}return c(t,e),a(t,null,[{key:"cssClasses",get:function(){return r["a"]}},{key:"numbers",get:function(){return r["b"]}},{key:"strings",get:function(){return r["c"]}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},activateBottomLine:function(){},deactivateBottomLine:function(){},setValue:function(){},getValue:function(){},floatLabel:function(){},getLabelWidth:function(){},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){},openMenu:function(){},closeMenu:function(){},isMenuOpen:function(){},setSelectedIndex:function(){},setDisabled:function(){},setRippleCenter:function(){},notifyChange:function(){},checkValidity:function(){},setValid:function(){}}}}]),a(t,[{key:"setSelectedIndex",value:function(e){this.adapter_.setSelectedIndex(e),this.adapter_.closeMenu();var t=!0;this.handleChange(t)}},{key:"setValue",value:function(e){this.adapter_.setValue(e);var t=!0;this.handleChange(t)}},{key:"getValue",value:function(){return this.adapter_.getValue()}},{key:"setDisabled",value:function(e){e?this.adapter_.addClass(r["a"].DISABLED):this.adapter_.removeClass(r["a"].DISABLED),this.adapter_.setDisabled(e),this.adapter_.closeMenu(),this.leadingIcon_&&this.leadingIcon_.setDisabled(e)}},{key:"setHelperTextContent",value:function(e){this.helperText_&&this.helperText_.setContent(e)}},{key:"layout",value:function(){var e=this.getValue().length>0;this.notchOutline(e)}},{key:"handleChange",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.getValue(),n=t.length>0,i=this.adapter_.hasClass(r["a"].REQUIRED);this.notchOutline(n),this.adapter_.hasClass(r["a"].FOCUSED)||this.adapter_.floatLabel(n),e&&(this.adapter_.notifyChange(t),i&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid())))}},{key:"handleFocus",value:function(){this.adapter_.addClass(r["a"].FOCUSED),this.adapter_.floatLabel(!0),this.notchOutline(!0),this.adapter_.activateBottomLine(),this.helperText_&&this.helperText_.showToScreenReader()}},{key:"handleBlur",value:function(){if(!this.adapter_.isMenuOpen()){this.adapter_.removeClass(r["a"].FOCUSED),this.handleChange(!1),this.adapter_.deactivateBottomLine();var e=this.adapter_.hasClass(r["a"].REQUIRED);e&&(this.setValid(this.isValid()),this.helperText_&&this.helperText_.setValidity(this.isValid()))}}},{key:"handleClick",value:function(e){this.adapter_.isMenuOpen()||(this.adapter_.setRippleCenter(e),this.adapter_.openMenu())}},{key:"handleKeydown",value:function(e){if(!this.adapter_.isMenuOpen()){var t="Enter"===e.key||13===e.keyCode,n="Space"===e.key||32===e.keyCode,i="ArrowUp"===e.key||38===e.keyCode,o="ArrowDown"===e.key||40===e.keyCode;this.adapter_.hasClass(r["a"].FOCUSED)&&(t||n||i||o)&&(this.adapter_.openMenu(),e.preventDefault())}}},{key:"notchOutline",value:function(e){if(this.adapter_.hasOutline()){var t=this.adapter_.hasClass(r["a"].FOCUSED);if(e){var n=r["b"].LABEL_SCALE,i=this.adapter_.getLabelWidth()*n;this.adapter_.notchOutline(i)}else t||this.adapter_.closeOutline()}}},{key:"setLeadingIconAriaLabel",value:function(e){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(e)}},{key:"setLeadingIconContent",value:function(e){this.leadingIcon_&&this.leadingIcon_.setContent(e)}},{key:"setValid",value:function(e){this.adapter_.setValid(e)}},{key:"isValid",value:function(){return this.adapter_.checkValidity()}}]),t}(i["a"]);t["a"]=l},function(e,t,n){"use strict";var i=n(0),r=(n(73),n(134)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(e){s(this,t);var n=u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)));return n.savedTabIndex_=null,n.interactionHandler_=function(e){return n.handleInteraction(e)},n}return c(t,e),a(t,null,[{key:"strings",get:function(){return r["a"]}},{key:"defaultAdapter",get:function(){return{getAttr:function(){},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}}}]),a(t,[{key:"init",value:function(){var e=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),["click","keydown"].forEach(function(t){e.adapter_.registerInteractionHandler(t,e.interactionHandler_)})}},{key:"destroy",value:function(){var e=this;["click","keydown"].forEach(function(t){e.adapter_.deregisterInteractionHandler(t,e.interactionHandler_)})}},{key:"setDisabled",value:function(e){this.savedTabIndex_&&(e?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",r["a"].ICON_ROLE)))}},{key:"setAriaLabel",value:function(e){this.adapter_.setAttr("aria-label",e)}},{key:"setContent",value:function(e){this.adapter_.setContent(e)}},{key:"handleInteraction",value:function(e){"click"!==e.type&&"Enter"!==e.key&&13!==e.keyCode||this.adapter_.notifyIconAction()}}]),t}(i["a"]);t["a"]=l},function(e,t,n){"use strict";n.d(t,"a",function(){return i});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ICON_EVENT:"MDCSelect:icon",ICON_ROLE:"button"}},function(e,t,n){"use strict";var i=n(0),r=(n(74),n(136)),o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function c(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var l=function(e){function t(e){return s(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,o(t.defaultAdapter,e)))}return c(t,e),a(t,null,[{key:"cssClasses",get:function(){return r["a"]}},{key:"strings",get:function(){return r["b"]}},{key:"defaultAdapter",get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){},setAttr:function(){},removeAttr:function(){},setContent:function(){}}}}]),a(t,[{key:"setContent",value:function(e){this.adapter_.setContent(e)}},{key:"setPersistent",value:function(e){e?this.adapter_.addClass(r["a"].HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(r["a"].HELPER_TEXT_PERSISTENT)}},{key:"setValidation",value:function(e){e?this.adapter_.addClass(r["a"].HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(r["a"].HELPER_TEXT_VALIDATION_MSG)}},{key:"showToScreenReader",value:function(){this.adapter_.removeAttr(r["b"].ARIA_HIDDEN)}},{key:"setValidity",value:function(e){var t=this.adapter_.hasClass(r["a"].HELPER_TEXT_PERSISTENT),n=this.adapter_.hasClass(r["a"].HELPER_TEXT_VALIDATION_MSG),i=n&&!e;i?this.adapter_.setAttr(r["b"].ROLE,"alert"):this.adapter_.removeAttr(r["b"].ROLE),t||i||this.hide_()}},{key:"hide_",value:function(){this.adapter_.setAttr(r["b"].ARIA_HIDDEN,"true")}}]),t}(i["a"]);t["a"]=l},function(e,t,n){"use strict";n.d(t,"b",function(){return i}),n.d(t,"a",function(){return r});
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
var i={ARIA_HIDDEN:"aria-hidden",ROLE:"role"},r={HELPER_TEXT_PERSISTENT:"mdc-select-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-select-helper-text--validation-msg"}}])})},9758:function(e,t,n){"use strict";var i=n("1706"),r=n.n(i);r.a},"9f79":function(e,t,n){var i=n("f772");e.exports=function(e,t){if(!i(e)||e._t!==t)throw TypeError("Incompatible receiver, "+t+" required!");return e}},ada4:function(e,t,n){"use strict";var i=n("e53d"),r=n("63b6"),o=n("ebfd"),a=n("294c"),s=n("35e8"),u=n("5c95"),c=n("a22a"),l=n("1173"),d=n("f772"),f=n("45f2"),h=n("d9f6").f,_=n("57b1")(0),p=n("8e60");e.exports=function(e,t,n,v,y,m){var E=i[e],b=E,g=y?"set":"add",C=b&&b.prototype,O={};return p&&"function"==typeof b&&(m||C.forEach&&!a(function(){(new b).entries().next()}))?(b=t(function(t,n){l(t,b,e,"_c"),t._c=new E,void 0!=n&&c(n,y,t[g],t)}),_("add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON".split(","),function(e){var t="add"==e||"set"==e;e in C&&(!m||"clear"!=e)&&s(b.prototype,e,function(n,i){if(l(this,b,e),!t&&m&&!d(n))return"get"==e&&void 0;var r=this._c[e](0===n?0:n,i);return t?this:r})}),m||h(b.prototype,"size",{get:function(){return this._c.size}})):(b=v.getConstructor(t,e,y,g),u(b.prototype,n),o.NEED=!0),f(b,e),O[e]=b,r(r.G+r.W+r.F,O),m||v.setStrong(b,e,y),b}},bfac:function(e,t,n){var i=n("0b64");e.exports=function(e,t){return new(i(e))(t)}},c587:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"appStore"}},[n("div",{staticClass:"mdc-typography--headline6"},[e._v("Available Apps")]),e.apps?n("div",{attrs:{id:"appList"}},e._l(e.apps,function(t){return n("icon",{key:t,staticStyle:{margin:"8px"},attrs:{name:t,displayName:!0,banner:e.isInstalled(t)?"installed":null,route:e.isInstalled(t)?"/view/"+t:"/install/"+t}})}),1):e._e()])},r=[],o=(n("7f7f"),n("55dd"),n("cadf"),n("551c"),n("097d"),n("1e27")),a=n("60a6"),s={name:"AppStore",props:{msg:String},components:{Icon:a["a"]},data:function(){return{apps:[],drivers:[],installed:[],timerID:0}},mounted:function(){var e=this;this.$parent.title="Databox App Store",this.$parent.backRoute="/",this.loadData(),this.timerID=setInterval(function(){e.loadData()},5e3)},destroyed:function(){clearInterval(this.timerID)},methods:{loadData:function(){var e=this;this.$parent.apiRequest("/core-ui/ui/api/appStore",o).then(function(t){var n=t.apps;Array.prototype.push.apply(n,t.drivers),n.sort(function(e,t){e.localeCompare(t)}),e.apps=n}),this.$parent.apiRequest("/core-ui/ui/api/containerStatus",o).then(function(t){e.installed=t.map(function(e){return e.name})})},isInstalled:function(e){return this.installed.indexOf(e)>-1}}},u=s,c=(n("9758"),n("2877")),l=Object(c["a"])(u,i,r,!1,null,"891a3664",null);l.options.__file="AppStore.vue";t["default"]=l.exports},ebfd:function(e,t,n){var i=n("62a0")("meta"),r=n("f772"),o=n("07e3"),a=n("d9f6").f,s=0,u=Object.isExtensible||function(){return!0},c=!n("294c")(function(){return u(Object.preventExtensions({}))}),l=function(e){a(e,i,{value:{i:"O"+ ++s,w:{}}})},d=function(e,t){if(!r(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,i)){if(!u(e))return"F";if(!t)return"E";l(e)}return e[i].i},f=function(e,t){if(!o(e,i)){if(!u(e))return!0;if(!t)return!1;l(e)}return e[i].w},h=function(e){return c&&_.NEED&&u(e)&&!o(e,i)&&l(e),e},_=e.exports={KEY:i,NEED:!1,fastKey:d,getWeak:f,onFreeze:h}},ef16:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"material-icons mdc-top-app-bar__action-item",on:{click:e.gotoView}},[e._v("\n\t\tsettings\n\t")])])},r=[],o={name:"storeToolbar",methods:{gotoView:function(){this.$router.push("/view/app-store")}}},a=o,s=n("2877"),u=Object(s["a"])(a,i,r,!1,null,null,null);u.options.__file="AppStoreToolbar.vue";t["default"]=u.exports},f228:function(e,t,n){var i=n("40c3"),r=n("4517");e.exports=function(e){return function(){if(i(this)!=e)throw TypeError(e+"#toJSON isn't generic");return r(this)}}},fe1e:function(e,t,n){n("7075")("Map")}}]);
//# sourceMappingURL=group-store.85c78695.js.map