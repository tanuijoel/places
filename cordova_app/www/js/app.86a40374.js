(function(t){function a(a){for(var e,r,o=a[0],l=a[1],c=a[2],v=0,m=[];v<o.length;v++)r=o[v],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(e in l)Object.prototype.hasOwnProperty.call(l,e)&&(t[e]=l[e]);d&&d(a);while(m.length)m.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var t,a=0;a<n.length;a++){for(var i=n[a],e=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(e=!1)}e&&(n.splice(a--,1),t=r(r.s=i[0]))}return t}var e={},s={app:0},n=[];function r(a){if(e[a])return e[a].exports;var i=e[a]={i:a,l:!1,exports:{}};return t[a].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=e,r.d=function(t,a,i){r.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,a){if(1&a&&(t=r(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)r.d(i,e,function(a){return t[a]}.bind(null,e));return i},r.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(a,"a",a),a},r.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},r.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=a,o=o.slice();for(var c=0;c<o.length;c++)a(o[c]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(t,a,i){t.exports=i("56d7")},"1dd5":function(t,a,i){"use strict";var e=i("341f"),s=i.n(e);s.a},"2d2d":function(t,a,i){},"341f":function(t,a,i){},4732:function(t,a,i){},"49f8":function(t,a,i){var e={"./en.json":"edd4","./fr.json":"f693"};function s(t){var a=n(t);return i(a)}function n(t){if(!i.o(e,t)){var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}return e[t]}s.keys=function(){return Object.keys(e)},s.resolve=n,t.exports=s,s.id="49f8"},"4ce9":function(t,a,i){"use strict";var e=i("2d2d"),s=i.n(e);s.a},"56d7":function(t,a,i){"use strict";i.r(a);i("744f"),i("6c7b"),i("7514"),i("20d6"),i("1c4c"),i("6762"),i("cadf"),i("e804"),i("55dd"),i("d04f"),i("c8ce"),i("217b"),i("7f7f"),i("f400"),i("7f25"),i("536b"),i("d9ab"),i("f9ab"),i("32d7"),i("25c9"),i("9f3c"),i("042e"),i("c7c6"),i("f4ff"),i("049f"),i("7872"),i("a69f"),i("0b21"),i("6c1a"),i("c7c62"),i("84b4"),i("c5f6"),i("2e37"),i("fca0"),i("7cdf"),i("ee1d"),i("b1b1"),i("87f3"),i("9278"),i("5df2"),i("04ff"),i("f751"),i("4504"),i("fee7"),i("ffc1"),i("0d6d"),i("9986"),i("8e6e"),i("25db"),i("e4f7"),i("b9a1"),i("64d5"),i("9aea"),i("db97"),i("66c8"),i("57f0"),i("165b"),i("456d"),i("cf6a"),i("fd24"),i("8615"),i("551c"),i("097d"),i("df1b"),i("2397"),i("88ca"),i("ba16"),i("d185"),i("ebde"),i("2d34"),i("f6b3"),i("2251"),i("c698"),i("a19f"),i("9253"),i("9275"),i("3b2b"),i("3846"),i("4917"),i("a481"),i("28a5"),i("386d"),i("6b54"),i("4f7f"),i("8a81"),i("ac4d"),i("8449"),i("9c86"),i("fa83"),i("48c0"),i("a032"),i("aef6"),i("d263"),i("6c37"),i("9ec8"),i("5695"),i("2fdb"),i("d0b0"),i("5df3"),i("b54a"),i("f576"),i("ed50"),i("788d"),i("14b9"),i("f386"),i("f559"),i("1448"),i("673e"),i("242a"),i("c66f"),i("b05c"),i("34ef"),i("6aa2"),i("15ac"),i("af56"),i("b6e4"),i("9c29"),i("63d9"),i("4dda"),i("10ad"),i("c02b"),i("4795"),i("130f"),i("ac6a"),i("96cf");var e=i("2b0e"),s=i("8758"),n=i.n(s);e["a"].use(n.a);var r=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-app",{attrs:{toolbar:""}},[i("v-content",[i("v-slide-y-transition",{attrs:{mode:"out-in"}},[i("v-container",{attrs:{"pa-0":"",fluid:"","fill-height":"","align-content-center":"","align-center":""}},[i("router-view")],1)],1)],1)],1)},o=[],l=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-navigation-drawer",{attrs:{app:""},model:{value:t.drawer,callback:function(a){t.drawer=a},expression:"drawer"}},[i("myContentDrawer")],1),i("v-app-bar",{staticClass:"indigo",attrs:{"clipped-left":"",app:""}},[i("v-app-bar-nav-icon",{attrs:{dark:""},on:{click:function(a){a.stopPropagation(),t.drawer=!t.drawer}}}),i("v-toolbar-title",{staticClass:"white--text",on:{click:t.goHome}},[t._v("Places")])],1)],1)},c=[],d=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",[i("v-toolbar",{attrs:{flat:""}}),t._l(t.items,function(a,e){return i("v-list-item",{key:"item_"+e,attrs:{to:a.action}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(a.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(a.text)}})],1)],1)})],2)},v=[],m={name:"drawer",data:function(){return{items:[{icon:"home",text:this.$t("drawer.home"),action:"/"},{icon:"vibration",text:this.$t("drawer.vibration"),action:"vibration"},{icon:"camera",text:this.$t("drawer.camera"),action:"camera"},{icon:"flash_on",text:this.$t("drawer.flash"),action:"flash"},{icon:"gps_fixed",text:this.$t("drawer.localisation"),action:"localisation"},{icon:"nfc",text:this.$t("drawer.nfc"),action:"nfc"}]}}},u=m,f=i("2877"),p=Object(f["a"])(u,d,v,!1,null,null,null),h=p.exports,g={name:"myToolbar",components:{myContentDrawer:h},data:function(){return{drawer:!1}},mounted:function(){document.addEventListener("toggleDrawer",this.toggleDrawer)},beforeDestroy:function(){document.removeEventListener("toggleDrawer",this.toggleDrawer)},methods:{toggleDrawer:function(){this.drawer=!this.drawer},goHome:function(){window.location.hash="/"}}},b=g,C=Object(f["a"])(b,l,c,!1,null,null,null),w=C.exports,_={name:"app",components:{myToolbar:w}},y=_,S=Object(f["a"])(y,r,o,!1,null,null,null),x=S.exports,T=i("8c4f"),E=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"section"},[i("div",{staticClass:"row "},[i("div",{staticClass:"col s12 pad-0"},[i("br"),i("ul",{staticClass:"events"},[i("li",{staticClass:"event-item card center"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/persia.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title waves-effect waves-light pulse"},[t._v("Welcome to Persia Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" TRM Drive, TRM Mall")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" Your Current location")]),i("a",{staticClass:"modal-trigger waves-effect waves-light pulse view-btn btn-small waves-effect direction-top",attrs:{href:"#/profile/"}},[t._v("Get Our Services"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])])]),i("h5",{staticClass:"bot-20 sec-tit  "},[t._v("Closer To You")]),i("ul",{staticClass:"events"},[i("li",{staticClass:"event-item card"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/kiza.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[i("i",{staticClass:"mdi mdi-office-building"}),t._v(" Kiza Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" Harambe Avenue , Gochen Towers")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" 1.5km from your location")]),i("a",{staticClass:"view-btn btn-small waves-effect direction-top",staticStyle:{float:"right"},attrs:{href:"ui-app-event-view.html"}},[t._v("Get More Details"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])]),i("li",{staticClass:"event-item card"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/space.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[i("i",{staticClass:"mdi mdi-office-building"}),t._v(" Space Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" Langata Road, Opposite Shell Petrol station")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" 3.0km from your location")]),i("a",{staticClass:"view-btn btn-small waves-effect direction-top",staticStyle:{float:"right"},attrs:{href:"ui-app-event-view.html"}},[t._v("Get More Details"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])]),i("li",{staticClass:"event-item card"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/memphis.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[i("i",{staticClass:"mdi mdi-office-building"}),t._v(" Memphis Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" USIU Road, Max Towers")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" 3.9km from your location")]),i("a",{staticClass:"view-btn btn-small waves-effect direction-top",staticStyle:{float:"right"},attrs:{href:"ui-app-event-view.html"}},[t._v("Get More Details"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])]),i("li",{staticClass:"event-item card"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/memphis.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[i("i",{staticClass:"mdi mdi-office-building"}),t._v(" Memphis Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" USIU Road, Max Towers")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" 3.9km from your location")]),i("a",{staticClass:"view-btn btn-small waves-effect direction-top",staticStyle:{float:"right"},attrs:{href:"ui-app-event-view.html"}},[t._v("Get More Details"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])]),i("li",{staticClass:"event-item card"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/memphis.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[i("i",{staticClass:"mdi mdi-office-building"}),t._v(" Memphis Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" USIU Road, Max Towers")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" 3.9km from your location")]),i("a",{staticClass:"view-btn btn-small waves-effect direction-top",staticStyle:{float:"right"},attrs:{href:"ui-app-event-view.html"}},[t._v("Get More Details"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])]),i("li",{staticClass:"event-item card"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/memphis.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title"},[i("i",{staticClass:"mdi mdi-office-building"}),t._v(" Memphis Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" USIU Road, Max Towers")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" 3.9km from your location")]),i("a",{staticClass:"view-btn btn-small waves-effect direction-top",staticStyle:{float:"right"},attrs:{href:"ui-app-event-view.html"}},[t._v("Get More Details"),i("i",{staticClass:"mdi mdi-arrow-right"})]),i("br")])])])])])]),i("br"),i("br"),i("br"),i("br"),i("br")])}],j={name:"home",mounted:function(){$(".mdi-arrow-left ").hide()},methods:{openMenu:function(){document.dispatchEvent(new CustomEvent("toggleDrawer",{}))}}},O=j,k=(i("4ce9"),Object(f["a"])(O,E,P,!1,null,"34171718",null)),D=k.exports,L=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},M=[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container"},[i("div",{staticClass:"section"},[i("ul",{staticClass:"events"},[i("li",{staticClass:"event-item card center"},[i("img",{staticClass:"z-depth-1 image",staticStyle:{width:"100%"},attrs:{src:"assets/images/persia.jpg"}}),i("div",{staticClass:"info"},[i("div",{staticClass:"title waves-effect waves-light pulse"},[t._v("Welcome to Persia Lounge")]),i("p",[i("i",{staticClass:"mdi mdi-road-variant"}),t._v(" TRM Drive, TRM Mall")]),i("p",{staticClass:"entry"},[i("i",{staticClass:"mdi mdi-pin"}),t._v(" Your Current location")]),i("br")])])]),i("div",{staticClass:"bot-0"},[i("ul",{staticClass:"tabs tabs-swipable-ul z-depth-1",staticStyle:{"font-size":"9px !important"},attrs:{id:"tabs-swipe-demo"}},[i("li",{staticClass:"tab col"},[i("a",{attrs:{href:"#test-swipe-0"}},[t._v("Natural Enemies")])]),i("li",{staticClass:"tab col"},[i("a",{staticClass:"active",attrs:{href:"#test-swipe-1"}},[t._v("Advice")])]),i("br"),i("li",{staticClass:"tab col"},[i("a",{attrs:{href:"#test-swipe-2"}},[t._v("Guidance Notes")])]),i("li",{staticClass:"tab col s1"},[i("a",{attrs:{href:"#test-swipe-3"}},[t._v("Images")])])])]),i("div",{staticClass:"pricing-tabs"},[i("div",{staticClass:"tabs-swipable"},[i("div",{staticClass:"col s12 z-depth-1",attrs:{id:"test-swipe-0"}},[i("div",{},[i("h2",{staticClass:"center bg-primary z-depth-1"},[i("sup",[t._v("$")]),i("span",{staticClass:"price"},[t._v("29")]),t._v("/month")]),i("div",{staticClass:"price-row"},[i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("5 Team Members")]),i("span",{staticClass:"tag"},[t._v("Suitable for small startups and teams")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("5 Projects")]),i("span",{staticClass:"tag"},[t._v("Projects with unlimited space and bandwidth")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("2 Domains")]),i("span",{staticClass:"tag"},[t._v("Create multiple websites with this plan")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("50 GB Storage")]),i("span",{staticClass:"tag"},[t._v("Enough storage for all your projects")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("2 Email Accounts")]),i("span",{staticClass:"tag"},[t._v("Setup commnications with dedicated servers")])])]),i("div",{staticClass:"center"},[i("a",{staticClass:"waves-effect waves-light bg-primary btn-large"},[t._v("Start Now")])])])]),i("div",{staticClass:"col s12 z-depth-1",attrs:{id:"test-swipe-1"}},[i("div",{},[i("h2",{staticClass:"center bg-primary z-depth-1"},[i("sup",[t._v("$")]),i("span",{staticClass:"price"},[t._v("49")]),t._v("/month")]),i("div",{staticClass:"price-row"},[i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("10 Team Members")]),i("span",{staticClass:"tag"},[t._v("Suitable for medium scale teams")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("20 Projects")]),i("span",{staticClass:"tag"},[t._v("Projects with unlimited space and bandwidth")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("5 Domains")]),i("span",{staticClass:"tag"},[t._v("Create multiple websites with this plan")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("100 GB Storage")]),i("span",{staticClass:"tag"},[t._v("Enough storage for all your projects")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("10 Email Accounts")]),i("span",{staticClass:"tag"},[t._v("Setup commnications with dedicated servers")])])]),i("div",{staticClass:"center"},[i("a",{staticClass:"waves-effect waves-light bg-primary btn-large"},[t._v("Start Now")])])])]),i("div",{staticClass:"col s12 z-depth-1",attrs:{id:"test-swipe-2"}},[i("div",{},[i("h2",{staticClass:"center bg-primary z-depth-1"},[i("sup",[t._v("$")]),i("span",{staticClass:"price"},[t._v("79")]),t._v("/month")]),i("div",{staticClass:"price-row"},[i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("50 Team Members")]),i("span",{staticClass:"tag"},[t._v("Suitable for multi level tiers and teams")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("100 Projects")]),i("span",{staticClass:"tag"},[t._v("Projects with unlimited space and bandwidth")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("20 Domains")]),i("span",{staticClass:"tag"},[t._v("Create multiple websites with this plan")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("500 GB Storage")]),i("span",{staticClass:"tag"},[t._v("Enough storage for all your projects")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("100 Email Accounts")]),i("span",{staticClass:"tag"},[t._v("Setup commnications with dedicated servers")])])]),i("div",{staticClass:"center"},[i("a",{staticClass:"waves-effect waves-light bg-primary btn-large"},[t._v("Start Now")])])])]),i("div",{staticClass:"col s12 z-depth-1",attrs:{id:"test-swipe-3"}},[i("div",{},[i("h2",{staticClass:"center bg-primary z-depth-1"},[i("sup",[t._v("$")]),i("span",{staticClass:"price"},[t._v("79")]),t._v("/month")]),i("div",{staticClass:"price-row"},[i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("50 Team Members")]),i("span",{staticClass:"tag"},[t._v("Suitable for multi level tiers and teams")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("100 Projects")]),i("span",{staticClass:"tag"},[t._v("Projects with unlimited space and bandwidth")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("20 Domains")]),i("span",{staticClass:"tag"},[t._v("Create multiple websites with this plan")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("500 GB Storage")]),i("span",{staticClass:"tag"},[t._v("Enough storage for all your projects")])]),i("div",{staticClass:"item"},[i("h6",{staticClass:"title"},[t._v("100 Email Accounts")]),i("span",{staticClass:"tag"},[t._v("Setup commnications with dedicated servers")])])]),i("div",{staticClass:"center"},[i("a",{staticClass:"waves-effect waves-light bg-primary btn-large"},[t._v("Start Now")])])])])])])])])}],N={name:"profile",mounted:function(){$("#tabs-swipe-demo").tabs({swipeable:!0}),$(".mdi-arrow-left ").show()},methods:{openMenu:function(){document.dispatchEvent(new CustomEvent("toggleDrawer",{}))}}},A=N,z=(i("1dd5"),Object(f["a"])(A,L,M,!1,null,"cbfa49d6",null)),I=z.exports,U=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{"text-center":""}},[i("v-btn",{on:{click:t.doVibrate}},[t._v(t._s(t.$t("startVibration")))])],1)},G=[],V={name:"vibration",methods:{doVibrate:function(){navigator.vibrate?navigator.vibrate([100,30,100,30,100,200,200,30,200,30,200,200,100,30,100,30,100]):this.$vuetifyMessageDialog.open("Attention","[cordova-plugin-vibration] Is required to use this function","Ok","red")}}},H=V,R=Object(f["a"])(H,U,G,!1,null,null,null),B=R.exports,J=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{"text-center":""}},[i("v-btn",{on:{click:t.toggle}},[t._v(t._s(t.btnTitle))])],1)},F=[],Y={name:"flash",mounted:function(){this.setBtnTitle()},beforeDestroy:function(){this.switchOff()},data:function(){return{btnTitle:""}},methods:{pluginInstalled:function(){return"undefined"!==typeof plugins&&"undefined"!==typeof window.plugins.flashlight},toggle:function(){this.pluginInstalled()&&window.plugins.flashlight.toggle(this.setBtnTitle)},switchOff:function(){this.pluginInstalled()&&window.plugins.flashlight.switchOff()},setBtnTitle:function(){this.pluginInstalled()?window.plugins.flashlight.isSwitchedOn()?this.btnTitle=this.$t("flashlight.stop"):this.btnTitle=this.$t("flashlight.start"):this.btnTitle=this.$t("flashlight.notAvailable")}}},q=Y,W=Object(f["a"])(q,J,F,!1,null,"7cec3335",null),K=W.exports,Q=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{"text-center":""}},[""!==t.imagePath?i("img",{attrs:{src:t.imagePath}}):t._e(),i("v-btn",{on:{click:t.takePicture}},[t._v(t._s(t.$t("takePhoto")))])],1)},X=[],Z=function(t,a){navigator.notification?navigator.notification.alert(t,function(){},a,"Ok"):alert(t)},tt={name:"camera",data:function(){return{imagePath:""}},methods:{takePicture:function(){navigator.camera?navigator.camera.getPicture(this.setPicture,this.error,{}):this.error()},setPicture:function(t){this.imagePath=t},error:function(){Z(this.$t("error"))}}},at=tt,it=(i("b882"),Object(f["a"])(at,Q,X,!1,null,"4ca4d085",null)),et=it.exports,st=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{"text-center":""}},[t.compatible?i("span",[t._v("\n      "+t._s(t.$t("nfcText.waitingTag"))+"\n      "),i("br"),i("v-dialog",{attrs:{scrollable:""},scopedSlots:t._u([{key:"activator",fn:function(a){var e=a.on;return[i("v-btn",t._g({},e),[t._v(t._s(t.$t("nfcText.history")))])]}}],null,!1,3409031739),model:{value:t.dialog,callback:function(a){t.dialog=a},expression:"dialog"}},[i("v-card",[i("v-card-title",[t._v(t._s(t.$t("nfcText.history")))]),i("v-divider"),i("v-card-text",{staticStyle:{height:"300px"}},[t._l(t.items,function(a){return i("v-list-item",{key:a},[i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(a)}})],1)],1)}),0===t.items.length?i("v-list-item",[i("v-list-item-content",[i("v-list-item-title",{staticClass:"text-center",domProps:{textContent:t._s(t.$t("nfcText.noHistory"))}})],1)],1):t._e()],2)],1)],1)],1):t.nfc_disabled?i("v-btn",{on:{click:t.showSettings}},[t._v(t._s(t.$t("nfcText.showSettings")))]):i("span",[t._v(t._s(t.$t("nfcText.notAvailable")))])],1)},nt=[],rt={name:"nfc",data:function(){return{compatible:!0,nfc_disabled:!1,dialog:!1,items:JSON.parse(localStorage.getItem("scanHistory")||"[]")}},watch:{items:function(t){localStorage.setItem("scanHistory",JSON.stringify(t))}},mounted:function(){this.registerTagEvent()},beforeDestroy:function(){this.unregisterTagEvent()},methods:{registerTagEvent:function(){document.removeEventListener("resume",this.registerTagEvent,!1),"undefined"!==typeof nfc?nfc.addTagDiscoveredListener(this.displayTagId,this.success,this.error):this.error()},unregisterTagEvent:function(){"undefined"!==typeof nfc&&nfc.removeTagDiscoveredListener(this.displayTagId)},displayTagId:function(t){var a=t.tag,i=nfc.bytesToHexString(a.id);this.items.push(i),Z(this.$t("nfcText.tagSerial")+" : "+i)},error:function(t){"NFC_DISABLED"===t?(this.compatible=!1,this.nfc_disabled=!0):(this.nfc_disabled=!1,this.compatible=!1)},success:function(){this.compatible=!0,this.nfc_disabled=!1},showSettings:function(){nfc.showSettings(),document.addEventListener("resume",this.registerTagEvent,!1)}}},ot=rt,lt=Object(f["a"])(ot,st,nt,!1,null,null,null),ct=lt.exports,dt=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-container",{attrs:{"fill-height":"",fluid:""}},[i("div",{attrs:{id:"map"}}),t.isLoading?i("loader"):t._e()],1)},vt=[],mt=(i("6cc5"),i("e11e")),ut=i.n(mt),ft=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-dialog",{attrs:{value:"true",persistent:"","max-width":"200"}},[i("v-card",[i("v-card-text",{staticClass:"text-center pa-10"},[i("v-progress-circular",{staticClass:"primary--text",attrs:{size:70,indeterminate:""}})],1)],1)],1)},pt=[],ht={name:"loading"},gt=ht,bt=Object(f["a"])(gt,ft,pt,!1,null,null,null),Ct=bt.exports;delete ut.a.Icon.Default.prototype._getIconUrl,ut.a.Icon.Default.mergeOptions({iconRetinaUrl:i("584d"),iconUrl:i("6397"),shadowUrl:i("e2b9")});var wt={name:"localisation",components:{Loader:Ct},data:function(){return{isLoading:!0}},mounted:function(){this.map=ut.a.map("map").setView([47.47121,-.55198],5),ut.a.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(this.map),this.getUserLocation()},beforeDestroy:function(){void 0!==this.map&&this.map.remove()},methods:{stopLoading:function(){this.isLoading=!1},getUserLocation:function(){var t=this;navigator.geolocation?navigator.geolocation.getCurrentPosition(function(a){var i=[a.coords.latitude,a.coords.longitude];ut.a.marker(i).addTo(t.map),t.map.setView(i,18),t.stopLoading()},function(){t.stopLoading(),Z(t.$t("positionNotAvailable",t.$t("localisation")))}):(Z(this.$t("positionNotAvailable",this.$t("localisation"))),this.stopLoading())}}},_t=wt,yt=(i("a54c"),Object(f["a"])(_t,dt,vt,!1,null,"3c312abe",null)),St=yt.exports;e["a"].use(T["a"]);var xt=new T["a"]({routes:[{path:"/",name:"Home",component:D},{path:"/profile",name:"Profile",component:I},{path:"/vibration",name:"Vibration",component:B},{path:"/flash",name:"Flash",component:K},{path:"/camera",name:"Camera",component:et},{path:"/nfc",name:"Nfc",component:ct},{path:"/localisation",name:"Localisation",component:St}]}),Tt=i("a925");function Et(){var t=i("49f8"),a={};return t.keys().forEach(function(i){var e=i.match(/([a-z0-9]+)\./i);if(e&&e.length>1){var s=e[1];a[s]=t(i)}}),a}e["a"].use(Tt["a"]);var $t=new Tt["a"]({locale:"fr",fallbackLocale:"en",messages:Et()});e["a"].config.productionTip=!1;var Pt=function(){new e["a"]({router:xt,i18n:$t,render:function(t){return t(x)}}).$mount("#app")};document.addEventListener("deviceready",function(){console.log("Ready, Render the App"),$("#tabs-swipe-demo").tabs({swipeable:!0}),Pt()});var jt="undefined"!==typeof window.cordova;jt||document.dispatchEvent(new CustomEvent("deviceready",{}))},a54c:function(t,a,i){"use strict";var e=i("4732"),s=i.n(e);s.a},b0da:function(t,a,i){},b882:function(t,a,i){"use strict";var e=i("b0da"),s=i.n(e);s.a},edd4:function(t){t.exports=JSON.parse('{"title":"VueJS Cordova Sample","showSample":"Show code samples","drawer":{"home":"Home","vibration":"Vibration","camera":"Camera","flash":"Flash","localisation":"Localisation","nfc":"Nfc"},"see_on_github":"See On Github","getPosition":"Obtaining Position","positionNotAvailable":"Can’t get your position","startVibration":"Start vibration","flashlight":{"start":"Start flashlight","stop":"Stop flashlight","notAvailable":"Plugin not installed"},"nfcText":{"waitingTag":"Scan a tag…","tagSerial":"Serial number","notAvailable":"Your mobile is not compatible.","showSettings":"Enable NFC","history":"History","noHistory":"Empty"},"takePhoto":"Take a picture","error":"Not available"}')},f693:function(t){t.exports=JSON.parse('{"title":"Exemples VueJS + Cordova","showSample":"Afficher les examples","drawer":{"home":"Accueil","vibration":"Vibreur","camera":"Camera","flash":"Flash","localisation":"Localisation","nfc":"Nfc"},"see_on_github":"Voir sur Github","getPosition":"Localisation en cours","positionNotAvailable":"Localisation impossible","startVibration":"Démarrer la vibration","flashlight":{"start":"Allumer la lampe torche","stop":"Éteindre la lampe torche","notAvailable":"Plugin Cordova non installé"},"nfcText":{"waitingTag":"En attente d’un tag…","tagSerial":"Numéro de série","notAvailable":"Votre mobile est incompatible.","showSettings":"Activer le NFC","history":"Historique","noHistory":"Aucun historique"},"takePhoto":"Prendre une photo","error":"Non disponible"}')}});
//# sourceMappingURL=app.86a40374.js.map