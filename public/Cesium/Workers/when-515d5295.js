define(["exports"],(function(n){"use strict";function t(n,t){return n??t}
/**
    @license
    when.js - https://github.com/cujojs/when

    MIT License (c) copyright B Cavalier & J Hann

   * A lightweight CommonJS Promises/A and when() implementation
   * when is part of the cujo.js family of libraries (http://cujojs.com/)
   *
   * Licensed under the MIT License at:
   * http://www.opensource.org/licenses/mit-license.php
   *
   * @version 1.7.1
   */
var r,e,u;function o(n,t,r,e){return i(n).then(t,r,e)}function i(n){var t,r;return n instanceof c?t=n:a(n)?(r=s(),n.then((function(n){r.resolve(n)}),(function(n){r.reject(n)}),(function(n){r.progress(n)})),t=r.promise):t=function(n){var t=new c((function(t){try{return i(t?t(n):n)}catch(n){return f(n)}}));return t}(n),t}function c(n){this.then=n}function f(n){var t=new c((function(t,r){try{return r?i(r(n)):f(n)}catch(n){return f(n)}}));return t}function s(){var n,t,r,e,o,a;return n=new c(h),t=[],r=[],e=function(n,e,u){var o,i;return o=s(),i="function"==typeof u?function(n){try{o.progress(u(n))}catch(n){o.progress(n)}}:function(n){o.progress(n)},t.push((function(t){t.then(n,e).then(o.resolve,o.reject,i)})),r.push(i),o.promise},o=function(n){return v(r,n),n},a=function(n){return n=i(n),e=n.then,a=i,o=y,v(t,n),r=t=u,n},{then:h,resolve:l,reject:p,progress:g,promise:n,resolver:{resolve:l,reject:p,progress:g}};function h(n,t,r){return e(n,t,r)}function l(n){return a(n)}function p(n){return a(f(n))}function g(n){return o(n)}}function a(n){return n&&"function"==typeof n.then}function h(n,t,r,e,u){return g(2,arguments),o(n,(function(n){var i,c,f,a,h,l,p,v,g,j;if(g=n.length>>>0,i=Math.max(0,Math.min(t,g)),f=[],c=g-i+1,a=[],h=s(),i)for(v=h.progress,p=function(n){a.push(n),--c||(l=p=y,h.reject(a))},l=function(n){f.push(n),--i||(l=p=y,h.resolve(f))},j=0;j<g;++j)j in n&&o(n[j],w,m,v);else h.resolve(f);return h.then(r,e,u);function m(n){p(n)}function w(n){l(n)}}))}function l(n,t,r,e){return g(1,arguments),p(n,j).then(t,r,e)}function p(n,t){return o(n,(function(n){var r,e,u,i,c,f;if(u=e=n.length>>>0,r=[],f=s(),u)for(i=function(n,e){o(n,t).then((function(n){r[e]=n,--u||f.resolve(r)}),f.reject)},c=0;c<e;c++)c in n?i(n[c],c):--u;else f.resolve(r);return f.promise}))}function v(n,t){for(var r,e=0;r=n[e++];)r(t)}function g(n,t){for(var r,e=t.length;e>n;)if(null!=(r=t[--e])&&"function"!=typeof r)throw new Error("arg "+e+" must be a function")}function y(){}function j(n){return n}t.EMPTY_OBJECT=Object.freeze({}),o.defer=s,o.resolve=i,o.reject=function(n){return o(n,f)},o.join=function(){return p(arguments,j)},o.all=l,o.map=p,o.reduce=function(n,t){var u=e.call(arguments,1);return o(n,(function(n){var e;return e=n.length,u[0]=function(n,r,u){return o(n,(function(n){return o(r,(function(r){return t(n,r,u,e)}))}))},r.apply(n,u)}))},o.any=function(n,t,r,e){return h(n,1,(function(n){return t?t(n[0]):n[0]}),r,e)},o.some=h,o.allSettled=function(n,t,r,e){return g(1,arguments),o(n,(function(n){var u,i,c,f,a,h,l,p,v;for(l=n.length>>>0,p=n.length>>>0,u=[],i=[],h=(c=s()).progress,a=function(n){i.push(n),--p||(f=a=y,c.resolve(u))},f=function(n,t){u[t]=n,--p||(f=a=y,c.resolve(u))},v=0;v<l;++v)switch(v){case 0:o(n[v],m,g,h);break;case 1:o(n[v],w,g,h);break;case 2:o(n[v],b,g,h);break;case 3:o(n[v],d,g,h);break;case 4:o(n[v],k,g,h);break;default:o(n[v],j,g,h)}return c.then(t,r,e);function g(n){a(n)}function j(n){f(n,0)}function m(n){f(n,0)}function w(n){f(n,1)}function b(n){f(n,2)}function d(n){f(n,3)}function k(n){f(n,4)}}))},o.chain=function(n,t,r){var e=arguments.length>2;return o(n,(function(n){return n=e?r:n,t.resolve(n),n}),(function(n){return t.reject(n),f(n)}),t.progress)},o.isPromise=a,c.prototype={always:function(n,t){return this.then(n,n,t)},otherwise:function(n){return this.then(u,n)},yield:function(n){return this.then((function(){return n}))},spread:function(n){return this.then((function(t){return l(t,(function(t){return n.apply(u,t)}))}))}},e=[].slice,r=[].reduce||function(n){var t,r,e,u,o;if(o=0,u=(t=Object(this)).length>>>0,(r=arguments).length<=1)for(;;){if(o in t){e=t[o++];break}if(++o>=u)throw new TypeError}else e=r[1];for(;o<u;++o)o in t&&(e=n(e,t[o],o,t));return e},n.c=o,n.e=t,n.t=function(n){return null!=n}}));
