"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[265],{8086:(t,n,r)=>{r.d(n,{extractColors:()=>l});var e=r(7413);const o="https://local-image.spotify.com";let i=function(t){return t[t.ARRAY_BUFFER=0]="ARRAY_BUFFER",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t}({});var a=r(4424),s=r.n(a);var u=r(330);const c=new function(){return s()('(()=>{"use strict";var t={607:(t,r,n)=>{var e=n(5547),o=n(3454),i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not a function")}},8466:(t,r,n)=>{var e=n(5620).has;t.exports=function(t){return e(t),t}},5312:(t,r,n)=>{var e=n(5692),o=TypeError;t.exports=function(t,r){if(e(r,t))return t;throw new o("Incorrect invocation")}},4738:(t,r,n)=>{var e=n(2922),o=String,i=TypeError;t.exports=function(t){if(e(t))return t;throw new i(o(t)+" is not an object")}},3458:(t,r,n)=>{var e=n(3238),o=n(645),i=n(1024),a=function(t){return function(r,n,a){var s,u=e(r),c=i(u),f=o(a,c);if(t&&n!=n){for(;c>f;)if((s=u[f++])!=s)return!0}else for(;c>f;f++)if((t||f in u)&&u[f]===n)return t||f||0;return!t&&-1}};t.exports={includes:a(!0),indexOf:a(!1)}},7477:(t,r,n)=>{var e=n(4738),o=n(8170);t.exports=function(t,r,n,i){try{return i?r(e(n)[0],n[1]):r(n)}catch(r){o(t,"throw",r)}}},5067:(t,r,n)=>{var e=n(5207),o=e({}.toString),i=e("".slice);t.exports=function(t){return i(o(t),8,-1)}},1331:(t,r,n)=>{var e=n(7804),o=n(5547),i=n(5067),a=n(5553)("toStringTag"),s=Object,u="Arguments"===i(function(){return arguments}());t.exports=e?i:function(t){var r,n,e;return void 0===t?"Undefined":null===t?"Null":"string"==typeof(n=function(t,r){try{return t[r]}catch(t){}}(r=s(t),a))?n:u?i(r):"Object"===(e=i(r))&&o(r.callee)?"Arguments":e}},469:(t,r,n)=>{var e=n(3531),o=n(66),i=n(9070),a=n(2030);t.exports=function(t,r,n){for(var s=o(r),u=a.f,c=i.f,f=0;f<s.length;f++){var h=s[f];e(t,h)||n&&e(n,h)||u(t,h,c(r,h))}}},7472:(t,r,n)=>{var e=n(5392);t.exports=!e((function(){function t(){}return t.prototype.constructor=null,Object.getPrototypeOf(new t)!==t.prototype}))},9925:t=>{t.exports=function(t,r){return{value:t,done:r}}},9238:(t,r,n)=>{var e=n(1724),o=n(2030),i=n(7999);t.exports=e?function(t,r,n){return o.f(t,r,i(1,n))}:function(t,r,n){return t[r]=n,t}},7999:t=>{t.exports=function(t,r){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:r}}},8638:(t,r,n)=>{var e=n(3561),o=n(2030),i=n(7999);t.exports=function(t,r,n){var a=e(r);a in t?o.f(t,a,i(0,n)):t[a]=n}},7416:(t,r,n)=>{var e=n(6543),o=n(2030);t.exports=function(t,r,n){return n.get&&e(n.get,r,{getter:!0}),n.set&&e(n.set,r,{setter:!0}),o.f(t,r,n)}},3300:(t,r,n)=>{var e=n(5547),o=n(2030),i=n(6543),a=n(4143);t.exports=function(t,r,n,s){s||(s={});var u=s.enumerable,c=void 0!==s.name?s.name:r;if(e(n)&&i(n,c,s),s.global)u?t[r]=n:a(r,n);else{try{s.unsafe?t[r]&&(u=!0):delete t[r]}catch(t){}u?t[r]=n:o.f(t,r,{value:n,enumerable:!1,configurable:!s.nonConfigurable,writable:!s.nonWritable})}return t}},9711:(t,r,n)=>{var e=n(3300);t.exports=function(t,r,n){for(var o in r)e(t,o,r[o],n);return t}},4143:(t,r,n)=>{var e=n(5628),o=Object.defineProperty;t.exports=function(t,r){try{o(e,t,{value:r,configurable:!0,writable:!0})}catch(n){e[t]=r}return r}},1724:(t,r,n)=>{var e=n(5392);t.exports=!e((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},7694:(t,r,n)=>{var e=n(5628),o=n(2922),i=e.document,a=o(i)&&o(i.createElement);t.exports=function(t){return a?i.createElement(t):{}}},8270:t=>{t.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},6262:(t,r,n)=>{var e,o,i=n(5628),a=n(8270),s=i.process,u=i.Deno,c=s&&s.versions||u&&u.version,f=c&&c.v8;f&&(o=(e=f.split("."))[0]>0&&e[0]<4?1:+(e[0]+e[1])),!o&&a&&(!(e=a.match(/Edge\\/(\\d+)/))||e[1]>=74)&&(e=a.match(/Chrome\\/(\\d+)/))&&(o=+e[1]),t.exports=o},1989:t=>{t.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},3937:(t,r,n)=>{var e=n(5628),o=n(9070).f,i=n(9238),a=n(3300),s=n(4143),u=n(469),c=n(5416);t.exports=function(t,r){var n,f,h,l,p,v=t.target,g=t.global,d=t.stat;if(n=g?e:d?e[v]||s(v,{}):(e[v]||{}).prototype)for(f in r){if(l=r[f],h=t.dontCallGetSet?(p=o(n,f))&&p.value:n[f],!c(g?f:v+(d?".":"#")+f,t.forced)&&void 0!==h){if(typeof l==typeof h)continue;u(l,h)}(t.sham||h&&h.sham)&&i(l,"sham",!0),a(n,f,l,t)}}},5392:t=>{t.exports=function(t){try{return!!t()}catch(t){return!0}}},6913:(t,r,n)=>{var e=n(8209),o=n(607),i=n(9232),a=e(e.bind);t.exports=function(t,r){return o(t),void 0===r?t:i?a(t,r):function(){return t.apply(r,arguments)}}},9232:(t,r,n)=>{var e=n(5392);t.exports=!e((function(){var t=function(){}.bind();return"function"!=typeof t||t.hasOwnProperty("prototype")}))},5304:(t,r,n)=>{var e=n(9232),o=Function.prototype.call;t.exports=e?o.bind(o):function(){return o.apply(o,arguments)}},4930:(t,r,n)=>{var e=n(1724),o=n(3531),i=Function.prototype,a=e&&Object.getOwnPropertyDescriptor,s=o(i,"name"),u=s&&"something"===function(){}.name,c=s&&(!e||e&&a(i,"name").configurable);t.exports={EXISTS:s,PROPER:u,CONFIGURABLE:c}},5198:(t,r,n)=>{var e=n(5207),o=n(607);t.exports=function(t,r,n){try{return e(o(Object.getOwnPropertyDescriptor(t,r)[n]))}catch(t){}}},8209:(t,r,n)=>{var e=n(5067),o=n(5207);t.exports=function(t){if("Function"===e(t))return o(t)}},5207:(t,r,n)=>{var e=n(9232),o=Function.prototype,i=o.call,a=e&&o.bind.bind(i,i);t.exports=e?a:function(t){return function(){return i.apply(t,arguments)}}},6341:(t,r,n)=>{var e=n(5628),o=n(5547);t.exports=function(t,r){return arguments.length<2?(n=e[t],o(n)?n:void 0):e[t]&&e[t][r];var n}},1740:t=>{t.exports=function(t){return{iterator:t,next:t.next,done:!1}}},9755:(t,r,n)=>{var e=n(1331),o=n(2698),i=n(7930),a=n(1463),s=n(5553)("iterator");t.exports=function(t){if(!i(t))return o(t,s)||o(t,"@@iterator")||a[e(t)]}},9392:(t,r,n)=>{var e=n(5304),o=n(607),i=n(4738),a=n(3454),s=n(9755),u=TypeError;t.exports=function(t,r){var n=arguments.length<2?s(t):r;if(o(n))return i(e(n,t));throw new u(a(t)+" is not iterable")}},2698:(t,r,n)=>{var e=n(607),o=n(7930);t.exports=function(t,r){var n=t[r];return o(n)?void 0:e(n)}},7625:(t,r,n)=>{var e=n(607),o=n(4738),i=n(5304),a=n(2501),s=n(1740),u="Invalid size",c=RangeError,f=TypeError,h=Math.max,l=function(t,r){this.set=t,this.size=h(r,0),this.has=e(t.has),this.keys=e(t.keys)};l.prototype={getIterator:function(){return s(o(i(this.keys,this.set)))},includes:function(t){return i(this.has,this.set,t)}},t.exports=function(t){o(t);var r=+t.size;if(r!=r)throw new f(u);var n=a(r);if(n<0)throw new c(u);return new l(t,n)}},5628:function(t,r,n){var e=function(t){return t&&t.Math===Math&&t};t.exports=e("object"==typeof globalThis&&globalThis)||e("object"==typeof window&&window)||e("object"==typeof self&&self)||e("object"==typeof n.g&&n.g)||e("object"==typeof this&&this)||function(){return this}()||Function("return this")()},3531:(t,r,n)=>{var e=n(5207),o=n(4874),i=e({}.hasOwnProperty);t.exports=Object.hasOwn||function(t,r){return i(o(t),r)}},6710:t=>{t.exports={}},5913:(t,r,n)=>{var e=n(6341);t.exports=e("document","documentElement")},7199:(t,r,n)=>{var e=n(1724),o=n(5392),i=n(7694);t.exports=!e&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},3415:(t,r,n)=>{var e=n(5207),o=n(5392),i=n(5067),a=Object,s=e("".split);t.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(t){return"String"===i(t)?s(t,""):a(t)}:a},8833:(t,r,n)=>{var e=n(5207),o=n(5547),i=n(8866),a=e(Function.toString);o(i.inspectSource)||(i.inspectSource=function(t){return a(t)}),t.exports=i.inspectSource},5972:(t,r,n)=>{var e,o,i,a=n(1337),s=n(5628),u=n(2922),c=n(9238),f=n(3531),h=n(8866),l=n(2992),p=n(6710),v="Object already initialized",g=s.TypeError,d=s.WeakMap;if(a||h.state){var b=h.state||(h.state=new d);b.get=b.get,b.has=b.has,b.set=b.set,e=function(t,r){if(b.has(t))throw new g(v);return r.facade=t,b.set(t,r),r},o=function(t){return b.get(t)||{}},i=function(t){return b.has(t)}}else{var m=l("state");p[m]=!0,e=function(t,r){if(f(t,m))throw new g(v);return r.facade=t,c(t,m,r),r},o=function(t){return f(t,m)?t[m]:{}},i=function(t){return f(t,m)}}t.exports={set:e,get:o,has:i,enforce:function(t){return i(t)?o(t):e(t,{})},getterFor:function(t){return function(r){var n;if(!u(r)||(n=o(r)).type!==t)throw new g("Incompatible receiver, "+t+" required");return n}}}},5525:(t,r,n)=>{var e=n(5553),o=n(1463),i=e("iterator"),a=Array.prototype;t.exports=function(t){return void 0!==t&&(o.Array===t||a[i]===t)}},5547:t=>{var r="object"==typeof document&&document.all;t.exports=void 0===r&&void 0!==r?function(t){return"function"==typeof t||t===r}:function(t){return"function"==typeof t}},5416:(t,r,n)=>{var e=n(5392),o=n(5547),i=/#|\\.prototype\\./,a=function(t,r){var n=u[s(t)];return n===f||n!==c&&(o(r)?e(r):!!r)},s=a.normalize=function(t){return String(t).replace(i,".").toLowerCase()},u=a.data={},c=a.NATIVE="N",f=a.POLYFILL="P";t.exports=a},7930:t=>{t.exports=function(t){return null==t}},2922:(t,r,n)=>{var e=n(5547);t.exports=function(t){return"object"==typeof t?null!==t:e(t)}},5988:t=>{t.exports=!1},6610:(t,r,n)=>{var e=n(6341),o=n(5547),i=n(5692),a=n(8675),s=Object;t.exports=a?function(t){return"symbol"==typeof t}:function(t){var r=e("Symbol");return o(r)&&i(r.prototype,s(t))}},9833:(t,r,n)=>{var e=n(5304);t.exports=function(t,r,n){for(var o,i,a=n?t:t.iterator,s=t.next;!(o=e(s,a)).done;)if(void 0!==(i=r(o.value)))return i}},1783:(t,r,n)=>{var e=n(6913),o=n(5304),i=n(4738),a=n(3454),s=n(5525),u=n(1024),c=n(5692),f=n(9392),h=n(9755),l=n(8170),p=TypeError,v=function(t,r){this.stopped=t,this.result=r},g=v.prototype;t.exports=function(t,r,n){var d,b,m,w,x,y,S,_=n&&n.that,O=!(!n||!n.AS_ENTRIES),I=!(!n||!n.IS_RECORD),M=!(!n||!n.IS_ITERATOR),E=!(!n||!n.INTERRUPTED),R=e(r,_),j=function(t){return d&&l(d,"normal",t),new v(!0,t)},A=function(t){return O?(i(t),E?R(t[0],t[1],j):R(t[0],t[1])):E?R(t,j):R(t)};if(I)d=t.iterator;else if(M)d=t;else{if(!(b=h(t)))throw new p(a(t)+" is not iterable");if(s(b)){for(m=0,w=u(t);w>m;m++)if((x=A(t[m]))&&c(g,x))return x;return new v(!1)}d=f(t,b)}for(y=I?t.next:d.next;!(S=o(y,d)).done;){try{x=A(S.value)}catch(t){l(d,"throw",t)}if("object"==typeof x&&x&&c(g,x))return x}return new v(!1)}},8170:(t,r,n)=>{var e=n(5304),o=n(4738),i=n(2698);t.exports=function(t,r,n){var a,s;o(t);try{if(!(a=i(t,"return"))){if("throw"===r)throw n;return n}a=e(a,t)}catch(t){s=!0,a=t}if("throw"===r)throw n;if(s)throw a;return o(a),n}},6652:(t,r,n)=>{var e=n(5304),o=n(5572),i=n(9238),a=n(9711),s=n(5553),u=n(5972),c=n(2698),f=n(9479).IteratorPrototype,h=n(9925),l=n(8170),p=s("toStringTag"),v="IteratorHelper",g="WrapForValidIterator",d=u.set,b=function(t){var r=u.getterFor(t?g:v);return a(o(f),{next:function(){var n=r(this);if(t)return n.nextHandler();try{var e=n.done?void 0:n.nextHandler();return h(e,n.done)}catch(t){throw n.done=!0,t}},return:function(){var n=r(this),o=n.iterator;if(n.done=!0,t){var i=c(o,"return");return i?e(i,o):h(void 0,!0)}if(n.inner)try{l(n.inner.iterator,"normal")}catch(t){return l(o,"throw",t)}return l(o,"normal"),h(void 0,!0)}})},m=b(!0),w=b(!1);i(w,p,"Iterator Helper"),t.exports=function(t,r){var n=function(n,e){e?(e.iterator=n.iterator,e.next=n.next):e=n,e.type=r?g:v,e.nextHandler=t,e.counter=0,e.done=!1,d(this,e)};return n.prototype=r?m:w,n}},2029:(t,r,n)=>{var e=n(5304),o=n(607),i=n(4738),a=n(1740),s=n(6652),u=n(7477),c=s((function(){var t=this.iterator,r=i(e(this.next,t));if(!(this.done=!!r.done))return u(t,this.mapper,[r.value,this.counter++],!0)}));t.exports=function(t){return i(this),o(t),new c(a(this),{mapper:t})}},9479:(t,r,n)=>{var e,o,i,a=n(5392),s=n(5547),u=n(2922),c=n(5572),f=n(5401),h=n(3300),l=n(5553),p=n(5988),v=l("iterator"),g=!1;[].keys&&("next"in(i=[].keys())?(o=f(f(i)))!==Object.prototype&&(e=o):g=!0),!u(e)||a((function(){var t={};return e[v].call(t)!==t}))?e={}:p&&(e=c(e)),s(e[v])||h(e,v,(function(){return this})),t.exports={IteratorPrototype:e,BUGGY_SAFARI_ITERATORS:g}},1463:t=>{t.exports={}},1024:(t,r,n)=>{var e=n(7450);t.exports=function(t){return e(t.length)}},6543:(t,r,n)=>{var e=n(5207),o=n(5392),i=n(5547),a=n(3531),s=n(1724),u=n(4930).CONFIGURABLE,c=n(8833),f=n(5972),h=f.enforce,l=f.get,p=String,v=Object.defineProperty,g=e("".slice),d=e("".replace),b=e([].join),m=s&&!o((function(){return 8!==v((function(){}),"length",{value:8}).length})),w=String(String).split("String"),x=t.exports=function(t,r,n){"Symbol("===g(p(r),0,7)&&(r="["+d(p(r),/^Symbol\\(([^)]*)\\)/,"$1")+"]"),n&&n.getter&&(r="get "+r),n&&n.setter&&(r="set "+r),(!a(t,"name")||u&&t.name!==r)&&(s?v(t,"name",{value:r,configurable:!0}):t.name=r),m&&n&&a(n,"arity")&&t.length!==n.arity&&v(t,"length",{value:n.arity});try{n&&a(n,"constructor")&&n.constructor?s&&v(t,"prototype",{writable:!1}):t.prototype&&(t.prototype=void 0)}catch(t){}var e=h(t);return a(e,"source")||(e.source=b(w,"string"==typeof r?r:"")),t};Function.prototype.toString=x((function(){return i(this)&&l(this).source||c(this)}),"toString")},5779:t=>{var r=Math.ceil,n=Math.floor;t.exports=Math.trunc||function(t){var e=+t;return(e>0?n:r)(e)}},5572:(t,r,n)=>{var e,o=n(4738),i=n(3742),a=n(1989),s=n(6710),u=n(5913),c=n(7694),f=n(2992),h="prototype",l="script",p=f("IE_PROTO"),v=function(){},g=function(t){return"<"+l+">"+t+"</"+l+">"},d=function(t){t.write(g("")),t.close();var r=t.parentWindow.Object;return t=null,r},b=function(){try{e=new ActiveXObject("htmlfile")}catch(t){}var t,r,n;b="undefined"!=typeof document?document.domain&&e?d(e):(r=c("iframe"),n="java"+l+":",r.style.display="none",u.appendChild(r),r.src=String(n),(t=r.contentWindow.document).open(),t.write(g("document.F=Object")),t.close(),t.F):d(e);for(var o=a.length;o--;)delete b[h][a[o]];return b()};s[p]=!0,t.exports=Object.create||function(t,r){var n;return null!==t?(v[h]=o(t),n=new v,v[h]=null,n[p]=t):n=b(),void 0===r?n:i.f(n,r)}},3742:(t,r,n)=>{var e=n(1724),o=n(1089),i=n(2030),a=n(4738),s=n(3238),u=n(5265);r.f=e&&!o?Object.defineProperties:function(t,r){a(t);for(var n,e=s(r),o=u(r),c=o.length,f=0;c>f;)i.f(t,n=o[f++],e[n]);return t}},2030:(t,r,n)=>{var e=n(1724),o=n(7199),i=n(1089),a=n(4738),s=n(3561),u=TypeError,c=Object.defineProperty,f=Object.getOwnPropertyDescriptor,h="enumerable",l="configurable",p="writable";r.f=e?i?function(t,r,n){if(a(t),r=s(r),a(n),"function"==typeof t&&"prototype"===r&&"value"in n&&p in n&&!n[p]){var e=f(t,r);e&&e[p]&&(t[r]=n.value,n={configurable:l in n?n[l]:e[l],enumerable:h in n?n[h]:e[h],writable:!1})}return c(t,r,n)}:c:function(t,r,n){if(a(t),r=s(r),a(n),o)try{return c(t,r,n)}catch(t){}if("get"in n||"set"in n)throw new u("Accessors not supported");return"value"in n&&(t[r]=n.value),t}},9070:(t,r,n)=>{var e=n(1724),o=n(5304),i=n(5085),a=n(7999),s=n(3238),u=n(3561),c=n(3531),f=n(7199),h=Object.getOwnPropertyDescriptor;r.f=e?h:function(t,r){if(t=s(t),r=u(r),f)try{return h(t,r)}catch(t){}if(c(t,r))return a(!o(i.f,t,r),t[r])}},3817:(t,r,n)=>{var e=n(9864),o=n(1989).concat("length","prototype");r.f=Object.getOwnPropertyNames||function(t){return e(t,o)}},68:(t,r)=>{r.f=Object.getOwnPropertySymbols},5401:(t,r,n)=>{var e=n(3531),o=n(5547),i=n(4874),a=n(2992),s=n(7472),u=a("IE_PROTO"),c=Object,f=c.prototype;t.exports=s?c.getPrototypeOf:function(t){var r=i(t);if(e(r,u))return r[u];var n=r.constructor;return o(n)&&r instanceof n?n.prototype:r instanceof c?f:null}},5692:(t,r,n)=>{var e=n(5207);t.exports=e({}.isPrototypeOf)},9864:(t,r,n)=>{var e=n(5207),o=n(3531),i=n(3238),a=n(3458).indexOf,s=n(6710),u=e([].push);t.exports=function(t,r){var n,e=i(t),c=0,f=[];for(n in e)!o(s,n)&&o(e,n)&&u(f,n);for(;r.length>c;)o(e,n=r[c++])&&(~a(f,n)||u(f,n));return f}},5265:(t,r,n)=>{var e=n(9864),o=n(1989);t.exports=Object.keys||function(t){return e(t,o)}},5085:(t,r)=>{var n={}.propertyIsEnumerable,e=Object.getOwnPropertyDescriptor,o=e&&!n.call({1:2},1);r.f=o?function(t){var r=e(this,t);return!!r&&r.enumerable}:n},3085:(t,r,n)=>{var e=n(5304),o=n(5547),i=n(2922),a=TypeError;t.exports=function(t,r){var n,s;if("string"===r&&o(n=t.toString)&&!i(s=e(n,t)))return s;if(o(n=t.valueOf)&&!i(s=e(n,t)))return s;if("string"!==r&&o(n=t.toString)&&!i(s=e(n,t)))return s;throw new a("Can\'t convert object to primitive value")}},66:(t,r,n)=>{var e=n(6341),o=n(5207),i=n(3817),a=n(68),s=n(4738),u=o([].concat);t.exports=e("Reflect","ownKeys")||function(t){var r=i.f(s(t)),n=a.f;return n?u(r,n(t)):r}},4202:(t,r,n)=>{var e=n(7930),o=TypeError;t.exports=function(t){if(e(t))throw new o("Can\'t call method on "+t);return t}},7575:(t,r,n)=>{var e=n(5620),o=n(7785),i=e.Set,a=e.add;t.exports=function(t){var r=new i;return o(t,(function(t){a(r,t)})),r}},7960:(t,r,n)=>{var e=n(8466),o=n(5620),i=n(7575),a=n(1369),s=n(7625),u=n(7785),c=n(9833),f=o.has,h=o.remove;t.exports=function(t){var r=e(this),n=s(t),o=i(r);return a(r)<=n.size?u(r,(function(t){n.includes(t)&&h(o,t)})):c(n.getIterator(),(function(t){f(r,t)&&h(o,t)})),o}},5620:(t,r,n)=>{var e=n(5207),o=Set.prototype;t.exports={Set,add:e(o.add),has:e(o.has),remove:e(o.delete),proto:o}},2846:(t,r,n)=>{var e=n(8466),o=n(5620),i=n(1369),a=n(7625),s=n(7785),u=n(9833),c=o.Set,f=o.add,h=o.has;t.exports=function(t){var r=e(this),n=a(t),o=new c;return i(r)>n.size?u(n.getIterator(),(function(t){h(r,t)&&f(o,t)})):s(r,(function(t){n.includes(t)&&f(o,t)})),o}},4330:(t,r,n)=>{var e=n(8466),o=n(5620).has,i=n(1369),a=n(7625),s=n(7785),u=n(9833),c=n(8170);t.exports=function(t){var r=e(this),n=a(t);if(i(r)<=n.size)return!1!==s(r,(function(t){if(n.includes(t))return!1}),!0);var f=n.getIterator();return!1!==u(f,(function(t){if(o(r,t))return c(f,"normal",!1)}))}},9426:(t,r,n)=>{var e=n(8466),o=n(1369),i=n(7785),a=n(7625);t.exports=function(t){var r=e(this),n=a(t);return!(o(r)>n.size)&&!1!==i(r,(function(t){if(!n.includes(t))return!1}),!0)}},7209:(t,r,n)=>{var e=n(8466),o=n(5620).has,i=n(1369),a=n(7625),s=n(9833),u=n(8170);t.exports=function(t){var r=e(this),n=a(t);if(i(r)<n.size)return!1;var c=n.getIterator();return!1!==s(c,(function(t){if(!o(r,t))return u(c,"normal",!1)}))}},7785:(t,r,n)=>{var e=n(5207),o=n(9833),i=n(5620),a=i.Set,s=i.proto,u=e(s.forEach),c=e(s.keys),f=c(new a).next;t.exports=function(t,r,n){return n?o({iterator:c(t),next:f},r):u(t,r)}},4739:(t,r,n)=>{var e=n(6341),o=function(t){return{size:t,has:function(){return!1},keys:function(){return{next:function(){return{done:!0}}}}}};t.exports=function(t){var r=e("Set");try{(new r)[t](o(0));try{return(new r)[t](o(-1)),!1}catch(t){return!0}}catch(t){return!1}}},1369:(t,r,n)=>{var e=n(5198),o=n(5620);t.exports=e(o.proto,"size","get")||function(t){return t.size}},675:(t,r,n)=>{var e=n(8466),o=n(5620),i=n(7575),a=n(7625),s=n(9833),u=o.add,c=o.has,f=o.remove;t.exports=function(t){var r=e(this),n=a(t).getIterator(),o=i(r);return s(n,(function(t){c(r,t)?f(o,t):u(o,t)})),o}},4841:(t,r,n)=>{var e=n(8466),o=n(5620).add,i=n(7575),a=n(7625),s=n(9833);t.exports=function(t){var r=e(this),n=a(t).getIterator(),u=i(r);return s(n,(function(t){o(u,t)})),u}},2992:(t,r,n)=>{var e=n(7995),o=n(1188),i=e("keys");t.exports=function(t){return i[t]||(i[t]=o(t))}},8866:(t,r,n)=>{var e=n(5628),o=n(4143),i="__core-js_shared__",a=e[i]||o(i,{});t.exports=a},7995:(t,r,n)=>{var e=n(5988),o=n(8866);(t.exports=function(t,r){return o[t]||(o[t]=void 0!==r?r:{})})("versions",[]).push({version:"3.35.0",mode:e?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.0/LICENSE",source:"https://github.com/zloirock/core-js"})},2083:(t,r,n)=>{var e=n(6262),o=n(5392),i=n(5628).String;t.exports=!!Object.getOwnPropertySymbols&&!o((function(){var t=Symbol("symbol detection");return!i(t)||!(Object(t)instanceof Symbol)||!Symbol.sham&&e&&e<41}))},645:(t,r,n)=>{var e=n(2501),o=Math.max,i=Math.min;t.exports=function(t,r){var n=e(t);return n<0?o(n+r,0):i(n,r)}},3238:(t,r,n)=>{var e=n(3415),o=n(4202);t.exports=function(t){return e(o(t))}},2501:(t,r,n)=>{var e=n(5779);t.exports=function(t){var r=+t;return r!=r||0===r?0:e(r)}},7450:(t,r,n)=>{var e=n(2501),o=Math.min;t.exports=function(t){return t>0?o(e(t),9007199254740991):0}},4874:(t,r,n)=>{var e=n(4202),o=Object;t.exports=function(t){return o(e(t))}},1086:(t,r,n)=>{var e=n(5304),o=n(2922),i=n(6610),a=n(2698),s=n(3085),u=n(5553),c=TypeError,f=u("toPrimitive");t.exports=function(t,r){if(!o(t)||i(t))return t;var n,u=a(t,f);if(u){if(void 0===r&&(r="default"),n=e(u,t,r),!o(n)||i(n))return n;throw new c("Can\'t convert object to primitive value")}return void 0===r&&(r="number"),s(t,r)}},3561:(t,r,n)=>{var e=n(1086),o=n(6610);t.exports=function(t){var r=e(t,"string");return o(r)?r:r+""}},7804:(t,r,n)=>{var e={};e[n(5553)("toStringTag")]="z",t.exports="[object z]"===String(e)},3454:t=>{var r=String;t.exports=function(t){try{return r(t)}catch(t){return"Object"}}},1188:(t,r,n)=>{var e=n(5207),o=0,i=Math.random(),a=e(1..toString);t.exports=function(t){return"Symbol("+(void 0===t?"":t)+")_"+a(++o+i,36)}},8675:(t,r,n)=>{var e=n(2083);t.exports=e&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},1089:(t,r,n)=>{var e=n(1724),o=n(5392);t.exports=e&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1337:(t,r,n)=>{var e=n(5628),o=n(5547),i=e.WeakMap;t.exports=o(i)&&/native code/.test(String(i))},5553:(t,r,n)=>{var e=n(5628),o=n(7995),i=n(3531),a=n(1188),s=n(2083),u=n(8675),c=e.Symbol,f=o("wks"),h=u?c.for||c:c&&c.withoutSetter||a;t.exports=function(t){return i(f,t)||(f[t]=s&&i(c,t)?c[t]:h("Symbol."+t)),f[t]}},3961:(t,r,n)=>{var e=n(3937),o=n(5628),i=n(5312),a=n(4738),s=n(5547),u=n(5401),c=n(7416),f=n(8638),h=n(5392),l=n(3531),p=n(5553),v=n(9479).IteratorPrototype,g=n(1724),d=n(5988),b="constructor",m="Iterator",w=p("toStringTag"),x=TypeError,y=o[m],S=d||!s(y)||y.prototype!==v||!h((function(){y({})})),_=function(){if(i(this,v),u(this)===v)throw new x("Abstract class Iterator not directly constructable")},O=function(t,r){g?c(v,t,{configurable:!0,get:function(){return r},set:function(r){if(a(this),this===v)throw new x("You can\'t redefine this property");l(this,t)?this[t]=r:f(this,t,r)}}):v[t]=r};l(v,w)||O(w,m),!S&&l(v,b)&&v[b]!==Object||O(b,_),_.prototype=v,e({global:!0,constructor:!0,forced:S},{Iterator:_})},3338:(t,r,n)=>{var e=n(3937),o=n(1783),i=n(607),a=n(4738),s=n(1740);e({target:"Iterator",proto:!0,real:!0},{every:function(t){a(this),i(t);var r=s(this),n=0;return!o(r,(function(r,e){if(!t(r,n++))return e()}),{IS_RECORD:!0,INTERRUPTED:!0}).stopped}})},1164:(t,r,n)=>{var e=n(3937),o=n(5304),i=n(607),a=n(4738),s=n(1740),u=n(6652),c=n(7477),f=n(5988),h=u((function(){for(var t,r,n=this.iterator,e=this.predicate,i=this.next;;){if(t=a(o(i,n)),this.done=!!t.done)return;if(r=t.value,c(n,e,[r,this.counter++],!0))return r}}));e({target:"Iterator",proto:!0,real:!0,forced:f},{filter:function(t){return a(this),i(t),new h(s(this),{predicate:t})}})},8910:(t,r,n)=>{var e=n(3937),o=n(2029);e({target:"Iterator",proto:!0,real:!0,forced:n(5988)},{map:o})},32:(t,r,n)=>{var e=n(3937),o=n(1783),i=n(607),a=n(4738),s=n(1740),u=TypeError;e({target:"Iterator",proto:!0,real:!0},{reduce:function(t){a(this),i(t);var r=s(this),n=arguments.length<2,e=n?void 0:arguments[1],c=0;if(o(r,(function(r){n?(n=!1,e=r):e=t(e,r,c),c++}),{IS_RECORD:!0}),n)throw new u("Reduce of empty iterator with no initial value");return e}})},6743:(t,r,n)=>{var e=n(3937),o=n(7960);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("difference")},{difference:o})},8205:(t,r,n)=>{var e=n(3937),o=n(5392),i=n(2846);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("intersection")||o((function(){return"3,2"!==Array.from(new Set([1,2,3]).intersection(new Set([3,2])))}))},{intersection:i})},8627:(t,r,n)=>{var e=n(3937),o=n(4330);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("isDisjointFrom")},{isDisjointFrom:o})},1900:(t,r,n)=>{var e=n(3937),o=n(9426);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("isSubsetOf")},{isSubsetOf:o})},143:(t,r,n)=>{var e=n(3937),o=n(7209);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("isSupersetOf")},{isSupersetOf:o})},5706:(t,r,n)=>{var e=n(3937),o=n(675);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("symmetricDifference")},{symmetricDifference:o})},7242:(t,r,n)=>{var e=n(3937),o=n(4841);e({target:"Set",proto:!0,real:!0,forced:!n(4739)("union")},{union:o})}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var i=r[e]={exports:{}};return t[e].call(i.exports,i,i.exports,n),i.exports}n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),(()=>{n(3961),n(1164),n(8910);let t=function(t){return t[t.HEX=0]="HEX",t[t.HEXA=1]="HEXA",t[t.RGB=2]="RGB",t[t.RGBA=3]="RGBA",t[t.HSL=4]="HSL",t[t.HSLA=5]="HSLA",t}({});function r(t,r,n=1e-6){return Math.abs(t-r)<n}function e(t){return t.toString(16).padStart(2,"0")}function o(t){return`${parseFloat((100*t).toFixed(1))}%`}function i(t){t=t.replace(/^#?([a-f\\d])([a-f\\d])([a-f\\d])$/i,(function(t,r,n,e){return r+r+n+n+e+e}));const r=/^#?(?<r>[a-f\\d]{2})(?<g>[a-f\\d]{2})(?<b>[a-f\\d]{2})(?<a>[a-f\\d]{2})?$/i.exec(t),n=r?.groups?.r,e=r?.groups?.g,o=r?.groups?.b,i=r?.groups?.a;if(void 0===n||void 0===e||void 0===o)throw new Error(`Invalid hex color code "${t}"`);return{r:n,g:e,b:o,a:i}}function a(t){const{a:r}=i(t);if(!r)return 1;return function(t,r,n){const e=t.toLocaleString("en",{useGrouping:!1,minimumFractionDigits:r,maximumFractionDigits:n});return Number(e)}(parseInt(r,16)/255,0,2)}function s(t){return t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4)}function u({rgb:{r:t,g:r,b:n}}){return.2126*s(t/255)+.7152*s(r/255)+.0722*s(n/255)}function c(t,r){const n=u(t),e=u(r);return(Math.max(n,e)+.05)/(Math.min(n,e)+.05)}class f{constructor(t,r,n,e=1){this.rgb=t,this.hsl=r,this.hsv=n,this.a=e}static BLACK=f.fromRGB({r:0,g:0,b:0});static WHITE=f.fromRGB({r:255,g:255,b:255});static fromRGB(t,n){if(t.r<0||t.g<0||t.b<0||t.r>255||t.g>255||t.b>255||n&&n<0||n&&n>1)throw Error(`Invalid RGB color: ${JSON.stringify(t)}, alpha: ${n}`);const e=function({r:t,g:n,b:e}){const o=t/255,i=n/255,a=e/255,s=Math.max(o,i,a),u=Math.min(o,i,a),c=s-u;let f;const h=(s+u)/2,l=s;f=r(c,0)?0:r(l,o)?60*(0+(i-a)/c):r(l,i)?60*(2+(a-o)/c):60*(4+(o-i)/c),f%=360,f<0&&(f+=360);const p=0===h||1===h?0:(l-h)/Math.min(h,1-h);return{h:Math.round(f),s:p,l:h}}(t),o=function({r:t,g:n,b:e}){const o=t/255,i=n/255,a=e/255,s=Math.max(o,i,a),u=s-Math.min(o,i,a);let c;const f=s;c=r(u,0)?0:r(f,o)?60*(0+(i-a)/u):r(f,i)?60*(2+(a-o)/u):60*(4+(o-i)/u),c%=360,c<0&&(c+=360);const h=0===f?0:u/f;return{h:Math.round(c),s:h,v:f}}(t);return new f(t,e,o,n)}static fromHex(t,r){const n=function(t){const{r,g:n,b:e}=i(t);return{r:parseInt(r,16),g:parseInt(n,16),b:parseInt(e,16)}}(t),e=a(t);return f.fromRGB(n,r??e)}static fromHSV(t,r){const n=function({h:t,s:r,v:n}){const e=n*r,o=t/60,i=e*(1-Math.abs(o%2-1));let a;a=o>=0&&o<=1?[e,i,0]:o>1&&o<=2?[i,e,0]:o>2&&o<=3?[0,e,i]:o>3&&o<=4?[0,i,e]:o>4&&o<=5?[i,0,e]:o>5&&o<=6?[e,0,i]:[0,0,0];const s=n-e;return{r:Math.round(255*(a[0]+s)),g:Math.round(255*(a[1]+s)),b:Math.round(255*(a[2]+s))}}(t);return f.fromRGB(n,r)}static fromHSL(t,r){const n=function({h:t,s:r,l:n}){const e=(1-Math.abs(2*n-1))*r,o=t/60,i=e*(1-Math.abs(o%2-1));let a;a=o>=0&&o<=1?[e,i,0]:o>1&&o<=2?[i,e,0]:o>2&&o<=3?[0,e,i]:o>3&&o<=4?[0,i,e]:o>4&&o<=5?[i,0,e]:o>5&&o<=6?[e,0,i]:[0,0,0];const s=n-e/2;return{r:Math.round(255*(a[0]+s)),g:Math.round(255*(a[1]+s)),b:Math.round(255*(a[2]+s))}}(t);return f.fromRGB(n,r)}static fromInt(t,r){const n=function(t){return{r:t>>16&255,g:t>>8&255,b:255&t}}(t);return f.fromRGB(n,r)}static fromCSS(t,r){const n=function(t,r){const n=t.match(/^rgba?\\((\\d+),\\s*(\\d+),\\s*(\\d+)(?:,\\s*(\\d+(?:\\.\\d+)?))?\\)$/);if(n){const[t,e,o,i]=n.slice(1),a=r??parseFloat(i);return f.fromRGB({r:parseInt(t,10),g:parseInt(e,10),b:parseInt(o,10)},Number.isNaN(a)?void 0:a)}return null}(t,r);if(n)return n;const e=function(t,r){const n=t.match(/^#([0-9a-f]{3}|[0-9a-f]{6}|[0-9a-f]{8})$/i);if(n){const t=n[1];return f.fromHex(t,r)}return null}(t,r);if(e)return e;const o=function(t,r){const n=t.match(/^hsla?\\((\\d+),\\s*(\\d+)%,\\s*(\\d+)%(?:,\\s*(\\d*(?:\\.\\d+)?))?\\)$/);if(n){const[t,e,o,i]=n.slice(1),a=r??parseFloat(i);return f.fromHSL({h:parseInt(t,10),s:parseInt(e,10)/100,l:parseInt(o,10)/100},Number.isNaN(a)?void 0:a)}return null}(t,r);if(o)return o;throw new Error(`Invalid or unsupported CSS color: ${t}`)}toCSS(r){switch(r){case t.HEX:return`#${e((n=this).rgb.r)}${e(n.rgb.g)}${e(n.rgb.b)}`;case t.HEXA:return function(t){return`#${e(t.rgb.r)}${e(t.rgb.g)}${e(t.rgb.b)}${e(Math.floor(255*t.a))}`}(this);case t.RGB:return function(t){return`rgb(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b})`}(this);case t.RGBA:return function(t){return`rgba(${t.rgb.r}, ${t.rgb.g}, ${t.rgb.b}, ${t.a})`}(this);case t.HSL:return function(t){const{h:r,s:n,l:e}=t.hsl;return`hsl(${r}, ${o(n)}, ${o(e)})`}(this);case t.HSLA:return function(t){const{h:r,s:n,l:e}=t.hsl;return`hsla(${r}, ${o(n)}, ${o(e)}, ${t.a})`}(this);default:throw new Error("Invalid or unsupported CSSColorFormat!")}var n}contrastAdjust(t,r=4.5){let n=f.BLACK;return"light"===t&&(n=f.WHITE),function(t,r,n){if(r!==f.BLACK&&r!==f.WHITE)throw new Error("Only supports contrast calculation between black and white.");let e=c(t,r);if(e>=n)return t;let o=t.hsv.v,i=r===f.WHITE?-.02:.02,a=Number.MAX_VALUE,s=null;for(let r=0;r<100&&a>.07&&o>=0&&o<=1;r++){o=Math.min(o+i,1),s=f.fromHSV({h:t.hsv.h,s:t.hsl.s,v:o}),e=c(s,f.WHITE);const r=Math.round(10*Math.abs(e-n))/10;r>a&&(i*=-.5),a=r}return null===s?t:s}(this,n,r)}toString(){return`${this.rgb.r},${this.rgb.g},${this.rgb.b},${this.a}`}stringify(){return JSON.stringify(this)}static parse(t){const{rgb:r,hsl:n,hsv:e,a:o}=JSON.parse(t);return new f(r,n,e,o)}}class h{constructor(t,r){this.color=t,this.population=r}static fromColor(t,r){return new h(t,r)}static fromRGB(t,r){return new h(f.fromRGB(t),r)}}class l{constructor(t,r=[]){this._comparator=t,this._data=r}swap(t,r){[this._data[t],this._data[r]]=[this._data[r],this._data[t]]}compare(t,r){return this._comparator(this._data[t],this._data[r])}bubbleUp(t){for(;t>0;){const r=t-1>>>1;if(this.compare(t,r)>=0)break;this.swap(t,r),t=r}}bubbleDown(t){const r=this._data.length;for(;;){const n=1+(t<<1),e=n+1;let o=t;if(n<r&&this.compare(n,o)<=0&&(o=n),e<r&&this.compare(e,o)<0&&(o=e),o===t)break;this.swap(o,t),t=o}}size(){return this._data.length}push(t){this._data.push(t),this.bubbleUp(this._data.length-1)}pop(){if(0===this._data.length)return null;this.swap(0,this._data.length-1);const t=this._data.pop();return this.bubbleDown(0),t}clone(){return new l(this._comparator,[...this._data])}*popAll(){for(;this._data.length>0;)yield this.pop()}}const p=31;function v(t){const r=(t>>>10&31)<<3,n=(t>>>5&31)<<3,e=(t>>>0&31)<<3;return f.fromRGB({r,g:n,b:e})}function g(t,r){return Math.round((t>>>3)/r)<<3}function d({rgb:{r:t,g:r,b:n}},{rgb:{r:e,g:o,b:i}}){return t*p*p+r*p+n-(e*p*p+o*p+i)}function b({rgb:{r:t,g:r,b:n}},{rgb:{r:e,g:o,b:i}}){return r*p*p+t*p+n-(o*p*p+e*p+i)}function m({rgb:{r:t,g:r,b:n}},{rgb:{r:e,g:o,b:i}}){return n*p*p+r*p+t-(i*p*p+o*p+e)}class w{constructor(t,r){this.min=t,this.max=r}size(){return this.max-this.min+1}clampTo(t){this.min=this.max=t}extendTo(t){this.min=Math.min(this.min,t),this.max=Math.max(this.max,t)}}class x{_population=0;_spanR=new w(0,0);_spanG=new w(0,0);_spanB=new w(0,0);constructor(t){this._swatches=t,this.fitBox()}getVolume(){return this._spanR.size()*this._spanG.size()*this._spanB.size()}getColorCount(){return this._swatches.length}getAverageColor(){let t=0,r=0,n=0,e=0;for(const{color:o,population:i}of this._swatches)e+=i,t+=i*o.rgb.r,r+=i*o.rgb.g,n+=i*o.rgb.b;const o=g(t,e),i=g(r,e),a=g(n,e);return h.fromRGB({r:o,g:i,b:a},e)}canSplit(){return this.getColorCount()>1}split(){if(!this.canSplit())throw new Error("Can not split a box with only 1 color");const t=this.findSplitPoint(),r=new x(this._swatches.slice(t+1,this._swatches.length));return this._swatches.splice(t+1),this.fitBox(),r}fitBox(){this._population=0;for(let t=0;t<this._swatches.length;t++){const{color:r,population:n}=this._swatches[t];this._population+=n,0===t?(this._spanR.clampTo(r.rgb.r),this._spanG.clampTo(r.rgb.g),this._spanB.clampTo(r.rgb.b)):(this._spanR.extendTo(r.rgb.r),this._spanG.extendTo(r.rgb.g),this._spanB.extendTo(r.rgb.b))}}findSplitPoint(){const t=this.getLongestDimensionComparator();this._swatches.sort(((r,n)=>t(r.color,n.color)));const r=Math.floor(this._population/2);for(let t=0,n=0;t<this._swatches.length;t++)if(n+=this._swatches[t].population,n>=r)return Math.min(this._swatches.length-1,t);return 0}getLongestDimensionComparator(){const t=this._spanR.size(),r=this._spanG.size(),n=this._spanB.size();return t>=r&&t>=n?d:r>=t&&r>=n?b:m}}class y{queue=new l(((t,r)=>r.getVolume()-t.getVolume()));_swatches=[];constructor(t){this._options=t}static fromPixels(t,r){return new y(r).quantize(t)}quantize(t){const r=new Array(32768).fill(0);let n=0,e=0,o=0;for(let e=t.next();!e.done;e=t.next()){n++;r[((i=e.value)>>>0&255)>>3<<10|(i>>>8&255)>>3<<5|(i>>>16&255)>>3]++}var i;for(let t=0;t<r.length;t++){const n=r[t];if(0===n)continue;const i=v(t);(void 0===this._options.filter||this._options.filter(i))&&(e++,o+=i.hsv.s,this._swatches.push(h.fromColor(i,n)))}return this._swatches.length>this._options.maxColors&&(this._swatches=this.quantizePixels(this._options.maxColors)),{swatches:this._swatches,totalPixels:n,totalColors:e,totalSaturationFromHSV:o}}quantizePixels(t){this.queue.push(new x(this._swatches)),this.splitBoxes(t);const r=Array.from(this.queue.popAll()).map((t=>t.getAverageColor())),n=this._options.filter;return void 0!==n?r.filter((t=>n(t.color))):r}splitBoxes(t){for(;this.queue.size()<t;){const t=this.queue.pop();if(null===t||!t.canSplit())return;this.queue.push(t.split()),this.queue.push(t)}}}n(6743),n(8205),n(8627),n(1900),n(143),n(5706),n(7242),n(3338),n(32);function S(t,r){return t.reduce(((t,n)=>null!==t&&r(t)>r(n)?t:n),null)}const _=30,O=80,I=2,M=.0016,E=.3,R=.1,j=45,A=.4,T=.6,P=.1,B=.02;function C(t,r,n){return(t-r)/(n-r)}function G(t){return(t%=360)<0?360+t:t}function $(t,r){const n=function(t){let r=Number.MAX_VALUE;for(const n of t)r=Math.min(r,n);r=-1*Math.abs(r);let n=0,e=360;for(const o of t){const t=G(o+r);t<180&&t>n&&(n=t),t>=180&&t<e&&(e=t)}return n=G(n-r),e=G(e-r),{hue1:Math.min(n,e),hue2:Math.max(n,e)}}(t);let e=0;return r>=n.hue1&&r<=n.hue2?C(G(r),n.hue1,n.hue2):(e=360-n.hue2,C(G(r+e),0,G(n.hue1+e)))}function F(t,r){const n=t.map((t=>t.color.hsv.h)),e=function(t){let r=0,n=0;for(const e of t)r+=Math.cos(e/180*Math.PI),n+=Math.sin(e/180*Math.PI);const e=r/t.length,o=n/t.length,i=180*Math.atan2(o,e)/Math.PI%360;return i>=0?i:360-Math.abs(i)}(n),o=$(n,e);return o>A||o<T?t.filter((t=>{return t.population/r>B||(n=t.color.hsv.h,o=e,i=j,Math.min(Math.abs(o-n),360-Math.abs(o-n))<i);var n,o,i})):t}function z({color:{hsv:t},population:r},n,e){return(n?1:function(t){const r=function(t,r,n){const e=(n-r)/2+r-r,o=t-r,i=(e-Math.abs(e-o))/e;return Math.max(0,Math.min(i,1))}(t,_,O);return-1*Math.abs(r*I)}(t.h))+r/e+t.s*t.v}function H(t,r,n,e){const o=e/n;if(o<R)return null;const i=t.filter((t=>t.population/r>=M)).filter((t=>!(o>=R+P)||function({hsv:t}){return(t.v>.85||t.v<.15)&&t.s<.2||t.v<.15||t.s<.2||t.s<.2&&t.v<.4?0:(t.v+t.s)/2}(t.color)>=E));if(0===i.length)return null;const a=F(i,r),s=function(t){return t.map((t=>t.color.hsv.h)).every((t=>t>=_&&t<=O))}(a);return S(a,(t=>z(t,s,r)))}const L={min:.3,target:.5,max:.7},D={min:0,target:.26,max:.45},k={min:.55,target:.74,max:1},N={min:.35,target:1,max:1},U={min:0,target:.3,max:.4},q={saturation:.24,luminance:.52,population:.24},V={vibrantLight:{lightness:k,saturation:N,weights:q},vibrant:{lightness:L,saturation:N,weights:q},vibrantDark:{lightness:D,saturation:N,weights:q},mutedLight:{lightness:k,saturation:U,weights:q},muted:{lightness:L,saturation:U,weights:q},mutedDark:{lightness:D,saturation:U,weights:q}},W=h.fromRGB({r:83,g:83,b:83},1),X=h.fromRGB({r:83,g:83,b:83},1),J=h.fromRGB({r:127,g:127,b:127},1);function Y(t,r){const{color:{hsl:n}}=t;return n.s>=r.saturation.min&&n.s<=r.saturation.max&&n.l>=r.lightness.min&&n.l<=r.lightness.max}function K(t,r,n){const{color:{hsl:e}}=t;let o=0,i=0,a=0;return r.weights.saturation>0&&(o=r.weights.saturation*(1-Math.abs(e.s-r.saturation.target))),r.weights.luminance>0&&(i=r.weights.luminance*(1-Math.abs(e.l-r.lightness.target))),r.weights.population>0&&(a=r.weights.population*(t.population/n)),o+i+a}let Q=function(t){return t[t.ARRAY_BUFFER=0]="ARRAY_BUFFER",t[t.IMAGE_BITMAP=1]="IMAGE_BITMAP",t}({});const Z=self;const tt=t=>!function({hsl:t}){return t.l<=.05}(t)&&!function({hsl:t}){return t.l>=.95}(t)&&!function({hsl:t}){return t.h>=10&&t.h<=37&&t.s<=.82}(t)&&function({hsv:t}){return t.v>.2}(t);Z.addEventListener("message",(t=>{const[r,n]=t.data,e=function(t){if(t.source===Q.IMAGE_BITMAP){const r=t.data,n=new OffscreenCanvas(r.width,r.height).getContext("2d");return n.drawImage(r,0,0,r.width,r.height),n.getImageData(0,0,r.width,r.height).data.buffer}return t.data}(n),o=function*(t,r){const n=new Uint32Array(t),e=Math.ceil(n.length/r);for(let t=0;t<n.length;t+=e)yield n[t]}(e,2e4),i=y.fromPixels(o,{maxColors:16,filter:tt}),{visRefSwatch:a,visRefDarkSwatch:s,visRefLightSwatch:u}=function(t,r,n,e,o=V){const i=new Set,a=S(t,(t=>t.population)),s={};for(const[r,n]of Object.entries(o)){const e=S(t.filter((t=>!i.has(t.color.toString()))).filter((t=>Y(t,n))),(t=>K(t,n,a?.population||1)));null!==e&&(s[r]=e,i.add(e.color.toString()))}const u=H(Object.values(s),r,n,e),c=u?h.fromColor(u.color.contrastAdjust("dark"),1):null,f=u?h.fromColor(u.color.contrastAdjust("light"),1):null;return{dominantSwatch:a,visRefSwatch:u||W,visRefDarkSwatch:c||X,visRefLightSwatch:f||J,visRefIsFallback:null===u,targetSwatches:s}}(i.swatches,i.totalPixels,i.totalColors,i.totalSaturationFromHSV);Z.postMessage([r,{colorRawJson:a.color.stringify(),colorLightJson:u.color.stringify(),colorDarkJson:s.color.stringify()}])}))})()})();\n',"Worker",void 0,void 0)};let f=0;async function h(t){const n=f++,r=new Promise(((t,r)=>{c.addEventListener("message",(r=>{const[o,i]=r.data;o===n&&t({colorRaw:e.Il.parse(i.colorRawJson),colorDark:e.Il.parse(i.colorDarkJson),colorLight:e.Il.parse(i.colorLightJson)})})),c.addEventListener("error",r)}));return c.postMessage([n,t],[t.data]),await r}async function l(t){let n;try{n=await async function(t){const n=new Image;return n.crossOrigin="anonymous",function(t){const n=0===t.indexOf("spotify:image:"),r=0===t.indexOf("spotify:mosaic:"),e=0===t.indexOf("spotify:localfileimage:");return n||r||e}(t)?n.src=`${o}?uri=${encodeURIComponent(t)}`:n.src=t,await n.decode(),n}(t)}catch(t){return Promise.resolve(u.ab)}const r=n.naturalWidth,e=n.naturalHeight;if("createImageBitmap"in window&&"OffscreenCanvas"in window){const t=await window.createImageBitmap(n);return await async function(t){return await h({source:i.IMAGE_BITMAP,data:t})}(t)}const a=document.createElement("canvas"),s=a.getContext("2d");return a.width=r,a.height=e,s.drawImage(n,0,0,r,e),await async function(t){return await h({source:i.ARRAY_BUFFER,data:t.data.buffer})}(s.getImageData(0,0,r,e))}}}]);
//# sourceMappingURL=265.js.map