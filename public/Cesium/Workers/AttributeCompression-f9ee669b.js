define(["exports","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./Check-3aa71481","./when-515d5295","./Math-5e38123d"],(function(e,n,t,o,r,a){"use strict";var c=1/256,d={octEncodeInRange:function(e,n,r){o.n.defined("vector",e),o.n.defined("result",r);var c=t.a.magnitudeSquared(e);if(Math.abs(c-1)>a.n.EPSILON6)throw new o.t("vector must be normalized.");if(r.x=e.x/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),r.y=e.y/(Math.abs(e.x)+Math.abs(e.y)+Math.abs(e.z)),e.z<0){var d=r.x,i=r.y;r.x=(1-Math.abs(i))*a.n.signNotZero(d),r.y=(1-Math.abs(d))*a.n.signNotZero(i)}return r.x=a.n.toSNorm(r.x,n),r.y=a.n.toSNorm(r.y,n),r},octEncode:function(e,n){return d.octEncodeInRange(e,255,n)}},i=new n.r,f=new Uint8Array(1);function u(e){return f[0]=e,f[0]}d.octEncodeToCartesian4=function(e,n){return d.octEncodeInRange(e,65535,i),n.x=u(i.x*c),n.y=u(i.x),n.z=u(i.y*c),n.w=u(i.y),n},d.octDecodeInRange=function(e,n,r,c){if(o.n.defined("result",c),e<0||e>r||n<0||n>r)throw new o.t("x and y must be unsigned normalized integers between 0 and "+r);if(c.x=a.n.fromSNorm(e,r),c.y=a.n.fromSNorm(n,r),c.z=1-(Math.abs(c.x)+Math.abs(c.y)),c.z<0){var d=c.x;c.x=(1-Math.abs(c.y))*a.n.signNotZero(d),c.y=(1-Math.abs(d))*a.n.signNotZero(c.y)}return t.a.normalize(c,c)},d.octDecode=function(e,n,t){return d.octDecodeInRange(e,n,255,t)},d.octDecodeFromCartesian4=function(e,n){o.n.typeOf.object("encoded",e),o.n.typeOf.object("result",n);var t=e.x,r=e.y,a=e.z,c=e.w;if(t<0||t>255||r<0||r>255||a<0||a>255||c<0||c>255)throw new o.t("x, y, z, and w must be unsigned normalized integers between 0 and 255");var i=256*t+r,f=256*a+c;return d.octDecodeInRange(i,f,65535,n)},d.octPackFloat=function(e){return o.n.defined("encoded",e),256*e.x+e.y};var s=new n.r;function h(e){return e>>1^-(1&e)}d.octEncodeFloat=function(e){return d.octEncode(e,s),d.octPackFloat(s)},d.octDecodeFloat=function(e,n){o.n.defined("value",e);var t=e/256,r=Math.floor(t),a=256*(t-r);return d.octDecode(r,a,n)},d.octPack=function(e,n,t,r){o.n.defined("v1",e),o.n.defined("v2",n),o.n.defined("v3",t),o.n.defined("result",r);var a=d.octEncodeFloat(e),c=d.octEncodeFloat(n),i=d.octEncode(t,s);return r.x=65536*i.x+a,r.y=65536*i.y+c,r},d.octUnpack=function(e,n,t,r){o.n.defined("packed",e),o.n.defined("v1",n),o.n.defined("v2",t),o.n.defined("v3",r);var a=e.x/65536,c=Math.floor(a),i=65536*(a-c);a=e.y/65536;var f=Math.floor(a),u=65536*(a-f);d.octDecodeFloat(i,n),d.octDecodeFloat(u,t),d.octDecode(c,f,r)},d.compressTextureCoordinates=function(e){return o.n.defined("textureCoordinates",e),4096*(4095*e.x|0)+(4095*e.y|0)},d.decompressTextureCoordinates=function(e,n){o.n.defined("compressed",e),o.n.defined("result",n);var t=e/4096,r=Math.floor(t);return n.x=r/4095,n.y=(e-4096*r)/4095,n},d.zigZagDeltaDecode=function(e,n,t){o.n.defined("uBuffer",e),o.n.defined("vBuffer",n),o.n.typeOf.number.equals("uBuffer.length","vBuffer.length",e.length,n.length),r.t(t)&&o.n.typeOf.number.equals("uBuffer.length","heightBuffer.length",e.length,t.length);for(var a=e.length,c=0,d=0,i=0,f=0;f<a;++f)c+=h(e[f]),d+=h(n[f]),e[f]=c,n[f]=d,r.t(t)&&(i+=h(t[f]),t[f]=i)},d.octShortToFloat=function(e){return a.n.clamp(3051850947599719e-20*e,-1,1)},d.octShortDecode=function(e,n,r){if(o.n.defined("result",r),r.x=d.octShortToFloat(e),r.y=d.octShortToFloat(n),r.z=1-(Math.abs(r.x)+Math.abs(r.y)),r.z<0){var c=r.x;r.x=(1-Math.abs(r.y))*a.n.signNotZero(c),r.y=(1-Math.abs(c))*a.n.signNotZero(r.y)}return t.a.normalize(r,r)},e.r=d}));
