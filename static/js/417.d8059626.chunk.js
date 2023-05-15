/*! For license information please see 417.d8059626.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[417],{417:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var r,o=n(9439),i=n(2791),a=n(7689),c=n(9627),u=n(168),s=n(7924).ZP.ul(r||(r=(0,u.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  gap: 15px;\n  align-items: center;\n  justify-content: center;\n  padding: 15px;\n\n  & li {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n    gap: 5px;\n    width: 200px;\n    padding: 5px;\n    box-shadow: 0 1px 4px #0000004d, -23px 0 20px -23px #000c,\n      23px 0 20px -23px #000c, inset 0 0 40px #0000001a;\n\n    & img {\n      margin-right: auto;\n      margin-left: auto;\n    }\n    & span {\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      width: 100px;\n      height: 150px;\n      border: solid 0.5px black;\n      background-color: grey;\n    }\n    & p {\n      padding: 5px;\n      text-align: center;\n      font-size: 16px;\n      height: 60px;\n    }\n\n    & b {\n      text-align: center;\n      font-size: 16px;\n    }\n  }\n"]))),l=n(184),h=function(){var t=(0,a.UO)().movieId,e=(0,i.useState)([]),n=(0,o.Z)(e,2),r=n[0],u=n[1];return(0,i.useEffect)((function(){(0,c.TP)(t,"credits").then((function(t){return u(t.cast)})).catch(console.log)}),[t]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)(s,{children:r.map((function(t){return(0,l.jsxs)("li",{children:[t.profile_path?(0,l.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(t.profile_path),alt:t.name,width:"100"}):(0,l.jsx)("span",{children:"No photo"}),(0,l.jsx)("b",{children:t.name}),(0,l.jsx)("p",{children:t.character})]},t.cast_id)}))})})}},9627:function(t,e,n){n.d(e,{Df:function(){return u},TP:function(){return f},gH:function(){return l}});var r=n(5861),o=n(1243);function i(){i=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",c=o.asyncIterator||"@@asyncIterator",u=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(Z){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof p?e:p,a=Object.create(i.prototype),c=new _(o||[]);return r(a,"_invoke",{value:j(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(Z){return{type:"throw",arg:Z}}}t.wrap=l;var f={};function p(){}function d(){}function v(){}var y={};s(y,a,(function(){return this}));var g=Object.getPrototypeOf,m=g&&g(g(N([])));m&&m!==e&&n.call(m,a)&&(y=m);var x=v.prototype=p.prototype=Object.create(y);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function b(t,e){function o(r,i,a,c){var u=h(t[r],t,i);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"==typeof l&&n.call(l,"__await")?e.resolve(l.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(l).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function j(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return O()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function _(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function N(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:O}}function O(){return{value:void 0,done:!0}}return d.prototype=v,r(x,"constructor",{value:v,configurable:!0}),r(v,"constructor",{value:d,configurable:!0}),d.displayName=s(v,u,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,u,"GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},w(b.prototype),s(b.prototype,c,(function(){return this})),t.AsyncIterator=b,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new b(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(x),s(x,u,"Generator"),s(x,a,(function(){return this})),s(x,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=N,_.prototype={constructor:_,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),u=n.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:N(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}var a="https://api.themoviedb.org/3/",c="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTgwN2RlOWE5YjEzNTg0ZjNhNzFlNjM0M2RkYjRjZSIsInN1YiI6IjYzZDNmYjQyZjE0ZGFkMDBiZDQ4MjE4ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b3kkZc4VCGcVeJvumOr9cUF9SnkSJkGMQsfEBPaQeCI";function u(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(i().mark((function t(){var e,n,r,u;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={trends:"trending/movie/week"},n={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(c),"Content-Type":"application/json"}},r="".concat(a).concat(e.trends),t.next=5,o.Z.get(r,n);case 5:return u=t.sent,t.abrupt("return",u.data.results);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function l(){return h.apply(this,arguments)}function h(){return h=(0,r.Z)(i().mark((function t(){var e,n,r,u,s,l=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=l.length>0&&void 0!==l[0]?l[0]:"",n={search:"search/movie"},r={params:{query:e,language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(c),"Content-Type":"application/json"}},u="".concat(a).concat(n.search),t.next=6,o.Z.get(u,r);case 6:return s=t.sent,t.abrupt("return",s.data.results);case 8:case"end":return t.stop()}}),t)}))),h.apply(this,arguments)}function f(t){return p.apply(this,arguments)}function p(){return p=(0,r.Z)(i().mark((function t(e){var n,r,u,s,l,h=arguments;return i().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=h.length>1&&void 0!==h[1]?h[1]:"details",r={details:"movie/".concat(e),credits:"movie/".concat(e,"/credits"),reviews:"movie/".concat(e,"/reviews"),videos:"movie/".concat(e,"/videos")},u={params:{language:"en-US",include_adult:!1},headers:{Authorization:"Bearer ".concat(c),"Content-Type":"application/json"}},s="".concat(a).concat(r[n]),t.next=6,o.Z.get(s,u);case 6:return l=t.sent,t.abrupt("return",l.data);case 8:case"end":return t.stop()}}),t)}))),p.apply(this,arguments)}}}]);
//# sourceMappingURL=417.d8059626.chunk.js.map