(()=>{var t={9662:(t,e,r)=>{var n=r(7854),o=r(614),i=r(6330),a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not a function")}},9670:(t,e,r)=>{var n=r(7854),o=r(111),i=n.String,a=n.TypeError;t.exports=function(t){if(o(t))return t;throw a(i(t)+" is not an object")}},8533:(t,e,r)=>{"use strict";var n=r(2092).forEach,o=r(9341)("forEach");t.exports=o?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},1318:(t,e,r)=>{var n=r(5656),o=r(1400),i=r(6244),a=function(t){return function(e,r,a){var c,s=n(e),u=i(s),f=o(a,u);if(t&&r!=r){for(;u>f;)if((c=s[f++])!=c)return!0}else for(;u>f;f++)if((t||f in s)&&s[f]===r)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},2092:(t,e,r)=>{var n=r(9974),o=r(1702),i=r(8361),a=r(7908),c=r(6244),s=r(5417),u=o([].push),f=function(t){var e=1==t,r=2==t,o=3==t,f=4==t,l=6==t,p=7==t,v=5==t||l;return function(d,y,m,g){for(var h,b,x=a(d),S=i(x),L=n(y,m),w=c(S),O=0,E=g||s,j=e?E(d,w):r||p?E(d,0):void 0;w>O;O++)if((v||O in S)&&(b=L(h=S[O],O,x),t))if(e)j[O]=b;else if(b)switch(t){case 3:return!0;case 5:return h;case 6:return O;case 2:u(j,h)}else switch(t){case 4:return!1;case 7:u(j,h)}return l?-1:o||f?f:j}};t.exports={forEach:f(0),map:f(1),filter:f(2),some:f(3),every:f(4),find:f(5),findIndex:f(6),filterReject:f(7)}},9341:(t,e,r)=>{"use strict";var n=r(7293);t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},7475:(t,e,r)=>{var n=r(7854),o=r(3157),i=r(4411),a=r(111),c=r(5112)("species"),s=n.Array;t.exports=function(t){var e;return o(t)&&(e=t.constructor,(i(e)&&(e===s||o(e.prototype))||a(e)&&null===(e=e[c]))&&(e=void 0)),void 0===e?s:e}},5417:(t,e,r)=>{var n=r(7475);t.exports=function(t,e){return new(n(t))(0===e?0:e)}},4326:(t,e,r)=>{var n=r(1702),o=n({}.toString),i=n("".slice);t.exports=function(t){return i(o(t),8,-1)}},648:(t,e,r)=>{var n=r(7854),o=r(1694),i=r(614),a=r(4326),c=r(5112)("toStringTag"),s=n.Object,u="Arguments"==a(function(){return arguments}());t.exports=o?a:function(t){var e,r,n;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(r=function(t,e){try{return t[e]}catch(t){}}(e=s(t),c))?r:u?a(e):"Object"==(n=a(e))&&i(e.callee)?"Arguments":n}},9920:(t,e,r)=>{var n=r(2597),o=r(3887),i=r(1236),a=r(3070);t.exports=function(t,e){for(var r=o(e),c=a.f,s=i.f,u=0;u<r.length;u++){var f=r[u];n(t,f)||c(t,f,s(e,f))}}},8880:(t,e,r)=>{var n=r(9781),o=r(3070),i=r(9114);t.exports=n?function(t,e,r){return o.f(t,e,i(1,r))}:function(t,e,r){return t[e]=r,t}},9114:t=>{t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},9781:(t,e,r)=>{var n=r(7293);t.exports=!n((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},317:(t,e,r)=>{var n=r(7854),o=r(111),i=n.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8324:t=>{t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8509:(t,e,r)=>{var n=r(317)("span").classList,o=n&&n.constructor&&n.constructor.prototype;t.exports=o===Object.prototype?void 0:o},8113:(t,e,r)=>{var n=r(5005);t.exports=n("navigator","userAgent")||""},7392:(t,e,r)=>{var n,o,i=r(7854),a=r(8113),c=i.process,s=i.Deno,u=c&&c.versions||s&&s.version,f=u&&u.v8;f&&(o=(n=f.split("."))[0]>0&&n[0]<4?1:+(n[0]+n[1])),!o&&a&&(!(n=a.match(/Edge\/(\d+)/))||n[1]>=74)&&(n=a.match(/Chrome\/(\d+)/))&&(o=+n[1]),t.exports=o},748:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:(t,e,r)=>{var n=r(7854),o=r(1236).f,i=r(8880),a=r(1320),c=r(3505),s=r(9920),u=r(4705);t.exports=function(t,e){var r,f,l,p,v,d=t.target,y=t.global,m=t.stat;if(r=y?n:m?n[d]||c(d,{}):(n[d]||{}).prototype)for(f in e){if(p=e[f],l=t.noTargetGet?(v=o(r,f))&&v.value:r[f],!u(y?f:d+(m?".":"#")+f,t.forced)&&void 0!==l){if(typeof p==typeof l)continue;s(p,l)}(t.sham||l&&l.sham)&&i(p,"sham",!0),a(r,f,p,t)}}},7293:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},9974:(t,e,r)=>{var n=r(1702),o=r(9662),i=n(n.bind);t.exports=function(t,e){return o(t),void 0===e?t:i?i(t,e):function(){return t.apply(e,arguments)}}},6916:t=>{var e=Function.prototype.call;t.exports=e.bind?e.bind(e):function(){return e.apply(e,arguments)}},6530:(t,e,r)=>{var n=r(9781),o=r(2597),i=Function.prototype,a=n&&Object.getOwnPropertyDescriptor,c=o(i,"name"),s=c&&"something"===function(){}.name,u=c&&(!n||n&&a(i,"name").configurable);t.exports={EXISTS:c,PROPER:s,CONFIGURABLE:u}},1702:t=>{var e=Function.prototype,r=e.bind,n=e.call,o=r&&r.bind(n);t.exports=r?function(t){return t&&o(n,t)}:function(t){return t&&function(){return n.apply(t,arguments)}}},5005:(t,e,r)=>{var n=r(7854),o=r(614),i=function(t){return o(t)?t:void 0};t.exports=function(t,e){return arguments.length<2?i(n[t]):n[t]&&n[t][e]}},8173:(t,e,r)=>{var n=r(9662);t.exports=function(t,e){var r=t[e];return null==r?void 0:n(r)}},7854:(t,e,r)=>{var n=function(t){return t&&t.Math==Math&&t};t.exports=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof r.g&&r.g)||function(){return this}()||Function("return this")()},2597:(t,e,r)=>{var n=r(1702),o=r(7908),i=n({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,e){return i(o(t),e)}},3501:t=>{t.exports={}},4664:(t,e,r)=>{var n=r(9781),o=r(7293),i=r(317);t.exports=!n&&!o((function(){return 7!=Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},8361:(t,e,r)=>{var n=r(7854),o=r(1702),i=r(7293),a=r(4326),c=n.Object,s=o("".split);t.exports=i((function(){return!c("z").propertyIsEnumerable(0)}))?function(t){return"String"==a(t)?s(t,""):c(t)}:c},2788:(t,e,r)=>{var n=r(1702),o=r(614),i=r(5465),a=n(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},9909:(t,e,r)=>{var n,o,i,a=r(8536),c=r(7854),s=r(1702),u=r(111),f=r(8880),l=r(2597),p=r(5465),v=r(6200),d=r(3501),y="Object already initialized",m=c.TypeError,g=c.WeakMap;if(a||p.state){var h=p.state||(p.state=new g),b=s(h.get),x=s(h.has),S=s(h.set);n=function(t,e){if(x(h,t))throw new m(y);return e.facade=t,S(h,t,e),e},o=function(t){return b(h,t)||{}},i=function(t){return x(h,t)}}else{var L=v("state");d[L]=!0,n=function(t,e){if(l(t,L))throw new m(y);return e.facade=t,f(t,L,e),e},o=function(t){return l(t,L)?t[L]:{}},i=function(t){return l(t,L)}}t.exports={set:n,get:o,has:i,enforce:function(t){return i(t)?o(t):n(t,{})},getterFor:function(t){return function(e){var r;if(!u(e)||(r=o(e)).type!==t)throw m("Incompatible receiver, "+t+" required");return r}}}},3157:(t,e,r)=>{var n=r(4326);t.exports=Array.isArray||function(t){return"Array"==n(t)}},614:t=>{t.exports=function(t){return"function"==typeof t}},4411:(t,e,r)=>{var n=r(1702),o=r(7293),i=r(614),a=r(648),c=r(5005),s=r(2788),u=function(){},f=[],l=c("Reflect","construct"),p=/^\s*(?:class|function)\b/,v=n(p.exec),d=!p.exec(u),y=function(t){if(!i(t))return!1;try{return l(u,f,t),!0}catch(t){return!1}};t.exports=!l||o((function(){var t;return y(y.call)||!y(Object)||!y((function(){t=!0}))||t}))?function(t){if(!i(t))return!1;switch(a(t)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}return d||!!v(p,s(t))}:y},4705:(t,e,r)=>{var n=r(7293),o=r(614),i=/#|\.prototype\./,a=function(t,e){var r=s[c(t)];return r==f||r!=u&&(o(e)?n(e):!!e)},c=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},s=a.data={},u=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},111:(t,e,r)=>{var n=r(614);t.exports=function(t){return"object"==typeof t?null!==t:n(t)}},1913:t=>{t.exports=!1},2190:(t,e,r)=>{var n=r(7854),o=r(5005),i=r(614),a=r(7976),c=r(3307),s=n.Object;t.exports=c?function(t){return"symbol"==typeof t}:function(t){var e=o("Symbol");return i(e)&&a(e.prototype,s(t))}},6244:(t,e,r)=>{var n=r(7466);t.exports=function(t){return n(t.length)}},133:(t,e,r)=>{var n=r(7392),o=r(7293);t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol();return!String(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&n&&n<41}))},8536:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2788),a=n.WeakMap;t.exports=o(a)&&/native code/.test(i(a))},3070:(t,e,r)=>{var n=r(7854),o=r(9781),i=r(4664),a=r(9670),c=r(4948),s=n.TypeError,u=Object.defineProperty;e.f=o?u:function(t,e,r){if(a(t),e=c(e),a(r),i)try{return u(t,e,r)}catch(t){}if("get"in r||"set"in r)throw s("Accessors not supported");return"value"in r&&(t[e]=r.value),t}},1236:(t,e,r)=>{var n=r(9781),o=r(6916),i=r(5296),a=r(9114),c=r(5656),s=r(4948),u=r(2597),f=r(4664),l=Object.getOwnPropertyDescriptor;e.f=n?l:function(t,e){if(t=c(t),e=s(e),f)try{return l(t,e)}catch(t){}if(u(t,e))return a(!o(i.f,t,e),t[e])}},8006:(t,e,r)=>{var n=r(6324),o=r(748).concat("length","prototype");e.f=Object.getOwnPropertyNames||function(t){return n(t,o)}},5181:(t,e)=>{e.f=Object.getOwnPropertySymbols},7976:(t,e,r)=>{var n=r(1702);t.exports=n({}.isPrototypeOf)},6324:(t,e,r)=>{var n=r(1702),o=r(2597),i=r(5656),a=r(1318).indexOf,c=r(3501),s=n([].push);t.exports=function(t,e){var r,n=i(t),u=0,f=[];for(r in n)!o(c,r)&&o(n,r)&&s(f,r);for(;e.length>u;)o(n,r=e[u++])&&(~a(f,r)||s(f,r));return f}},5296:(t,e)=>{"use strict";var r={}.propertyIsEnumerable,n=Object.getOwnPropertyDescriptor,o=n&&!r.call({1:2},1);e.f=o?function(t){var e=n(this,t);return!!e&&e.enumerable}:r},288:(t,e,r)=>{"use strict";var n=r(1694),o=r(648);t.exports=n?{}.toString:function(){return"[object "+o(this)+"]"}},2140:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(614),a=r(111),c=n.TypeError;t.exports=function(t,e){var r,n;if("string"===e&&i(r=t.toString)&&!a(n=o(r,t)))return n;if(i(r=t.valueOf)&&!a(n=o(r,t)))return n;if("string"!==e&&i(r=t.toString)&&!a(n=o(r,t)))return n;throw c("Can't convert object to primitive value")}},3887:(t,e,r)=>{var n=r(5005),o=r(1702),i=r(8006),a=r(5181),c=r(9670),s=o([].concat);t.exports=n("Reflect","ownKeys")||function(t){var e=i.f(c(t)),r=a.f;return r?s(e,r(t)):e}},1320:(t,e,r)=>{var n=r(7854),o=r(614),i=r(2597),a=r(8880),c=r(3505),s=r(2788),u=r(9909),f=r(6530).CONFIGURABLE,l=u.get,p=u.enforce,v=String(String).split("String");(t.exports=function(t,e,r,s){var u,l=!!s&&!!s.unsafe,d=!!s&&!!s.enumerable,y=!!s&&!!s.noTargetGet,m=s&&void 0!==s.name?s.name:e;o(r)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!i(r,"name")||f&&r.name!==m)&&a(r,"name",m),(u=p(r)).source||(u.source=v.join("string"==typeof m?m:""))),t!==n?(l?!y&&t[e]&&(d=!0):delete t[e],d?t[e]=r:a(t,e,r)):d?t[e]=r:c(e,r)})(Function.prototype,"toString",(function(){return o(this)&&l(this).source||s(this)}))},4488:(t,e,r)=>{var n=r(7854).TypeError;t.exports=function(t){if(null==t)throw n("Can't call method on "+t);return t}},3505:(t,e,r)=>{var n=r(7854),o=Object.defineProperty;t.exports=function(t,e){try{o(n,t,{value:e,configurable:!0,writable:!0})}catch(r){n[t]=e}return e}},6200:(t,e,r)=>{var n=r(2309),o=r(9711),i=n("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},5465:(t,e,r)=>{var n=r(7854),o=r(3505),i="__core-js_shared__",a=n[i]||o(i,{});t.exports=a},2309:(t,e,r)=>{var n=r(1913),o=r(5465);(t.exports=function(t,e){return o[t]||(o[t]=void 0!==e?e:{})})("versions",[]).push({version:"3.19.1",mode:n?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},6091:(t,e,r)=>{var n=r(6530).PROPER,o=r(7293),i=r(1361);t.exports=function(t){return o((function(){return!!i[t]()||"​᠎"!=="​᠎"[t]()||n&&i[t].name!==t}))}},3111:(t,e,r)=>{var n=r(1702),o=r(4488),i=r(1340),a=r(1361),c=n("".replace),s="["+a+"]",u=RegExp("^"+s+s+"*"),f=RegExp(s+s+"*$"),l=function(t){return function(e){var r=i(o(e));return 1&t&&(r=c(r,u,"")),2&t&&(r=c(r,f,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},1400:(t,e,r)=>{var n=r(9303),o=Math.max,i=Math.min;t.exports=function(t,e){var r=n(t);return r<0?o(r+e,0):i(r,e)}},5656:(t,e,r)=>{var n=r(8361),o=r(4488);t.exports=function(t){return n(o(t))}},9303:t=>{var e=Math.ceil,r=Math.floor;t.exports=function(t){var n=+t;return n!=n||0===n?0:(n>0?r:e)(n)}},7466:(t,e,r)=>{var n=r(9303),o=Math.min;t.exports=function(t){return t>0?o(n(t),9007199254740991):0}},7908:(t,e,r)=>{var n=r(7854),o=r(4488),i=n.Object;t.exports=function(t){return i(o(t))}},7593:(t,e,r)=>{var n=r(7854),o=r(6916),i=r(111),a=r(2190),c=r(8173),s=r(2140),u=r(5112),f=n.TypeError,l=u("toPrimitive");t.exports=function(t,e){if(!i(t)||a(t))return t;var r,n=c(t,l);if(n){if(void 0===e&&(e="default"),r=o(n,t,e),!i(r)||a(r))return r;throw f("Can't convert object to primitive value")}return void 0===e&&(e="number"),s(t,e)}},4948:(t,e,r)=>{var n=r(7593),o=r(2190);t.exports=function(t){var e=n(t,"string");return o(e)?e:e+""}},1694:(t,e,r)=>{var n={};n[r(5112)("toStringTag")]="z",t.exports="[object z]"===String(n)},1340:(t,e,r)=>{var n=r(7854),o=r(648),i=n.String;t.exports=function(t){if("Symbol"===o(t))throw TypeError("Cannot convert a Symbol value to a string");return i(t)}},6330:(t,e,r)=>{var n=r(7854).String;t.exports=function(t){try{return n(t)}catch(t){return"Object"}}},9711:(t,e,r)=>{var n=r(1702),o=0,i=Math.random(),a=n(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},3307:(t,e,r)=>{var n=r(133);t.exports=n&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5112:(t,e,r)=>{var n=r(7854),o=r(2309),i=r(2597),a=r(9711),c=r(133),s=r(3307),u=o("wks"),f=n.Symbol,l=f&&f.for,p=s?f:f&&f.withoutSetter||a;t.exports=function(t){if(!i(u,t)||!c&&"string"!=typeof u[t]){var e="Symbol."+t;c&&i(f,t)?u[t]=f[t]:u[t]=s&&l?l(e):p(e)}return u[t]}},1361:t=>{t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},1539:(t,e,r)=>{var n=r(1694),o=r(1320),i=r(288);n||o(Object.prototype,"toString",i,{unsafe:!0})},3210:(t,e,r)=>{"use strict";var n=r(2109),o=r(3111).trim;n({target:"String",proto:!0,forced:r(6091)("trim")},{trim:function(){return o(this)}})},4747:(t,e,r)=>{var n=r(7854),o=r(8324),i=r(8509),a=r(8533),c=r(8880),s=function(t){if(t&&t.forEach!==a)try{c(t,"forEach",a)}catch(e){t.forEach=a}};for(var u in o)o[u]&&s(n[u]&&n[u].prototype);s(i)}},e={};function r(n){var o=e[n];if(void 0!==o)return o.exports;var i=e[n]={exports:{}};return t[n](i,i.exports,r),i.exports}r.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{"use strict";r(1539),r(4747);var t,e,n,o;r(3210);function i(){var t=document.body.querySelector(".board-wrapper").innerHTML;window.localStorage.setItem("one",JSON.stringify(t))}function a(r){if(t&&e){t.style.left="".concat(r.pageX-n,"px"),t.style.top="".concat(r.pageY-o,"px"),t.style.visibility="hidden";var i=document.elementFromPoint(r.clientX,r.clientY);if(t.style.visibility="",i){var a=i.closest(".items-task"),c=i.closest(".panel");if(c){var s=c.querySelector(".items");if(s.children.length||s.prepend(e),a&&a!==e){var u=a.getBoundingClientRect().top;r.pageY>window.scrollY+u+i.offsetHeight/2?i.after(e):i.before(e)}}}}}function c(){t&&e&&(t.classList.remove("dragged"),document.body.removeChild(t),e.classList.remove("droppable"),e.classList.remove("hidden"),document.body.removeEventListener("mouseup",c),document.body.removeEventListener("mousemove",a),t=void 0,e=void 0,n=0,o=0,i())}function s(r){r.addEventListener("mousedown",(function(r){if(r.preventDefault(),(e=r.target).classList.contains("items-task")){(t=r.target.cloneNode(!0)).classList.add("dragged"),document.body.appendChild(t),e.classList.add("droppable");var i=e.getBoundingClientRect(),s=i.left,u=i.top;n=r.clientX-s,o=r.clientY-u+10,document.body.addEventListener("mouseup",c),document.body.addEventListener("mousemove",a),a(r)}}))}function u(t){t&&t.classList.contains("items-task")&&(t.querySelector(".item-remove").addEventListener("click",(function(t){t.currentTarget.closest(".items-task").remove(),i()})),t.addEventListener("mouseenter",(function(t){t.currentTarget.querySelector(".item-remove").classList.remove("hidden")})),t.addEventListener("mouseleave",(function(t){t.currentTarget.querySelector(".item-remove").classList.add("hidden")})))}document.addEventListener("DOMContentLoaded",(function(){var t=function(){try{return JSON.parse(localStorage.getItem("one"))}catch(t){throw new Error("Ошибка загрузки сохраненного списка задач")}}();if(t){var e=document.body.querySelector(".board-wrapper");e.innerHTML=t,e.querySelectorAll(".items-task").forEach((function(t){u(t),s(t)}))}document.body.querySelector(".board-wrapper").querySelectorAll(".panel").forEach((function(t){var e=t.querySelector(".add-tasks-container"),r=t.querySelector(".items"),n=e.querySelector(".add-tasks-control"),o=n.querySelector(".add-tasks-cancel"),a=t.querySelector(".add-tasks-item");!function(t,e,r){t.addEventListener("click",(function(){e.classList.remove("hidden"),t.classList.add("hidden"),r.focus()}))}(a,n),function(t,e,r){r.addEventListener("click",(function(){e.classList.add("hidden"),t.classList.remove("hidden"),e.reset()}))}(a,n,o),function(t,e,r){e.addEventListener("submit",(function(n){n.preventDefault();var o=n.target[0].value.trim();""!==o&&(r.insertAdjacentHTML("beforeEnd",'<li class="items-task">\n          '.concat(o,'\n            <div class="item-remove hidden">\n              &times;\n            </div>            \n        </li>')),e.reset(),e.classList.add("hidden"),t.classList.remove("hidden"),u(r.lastChild),s(r.lastChild),i())}))}(a,n,r)}))}))})()})();