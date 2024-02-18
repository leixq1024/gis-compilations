define(["exports","./Check-3aa71481","./when-515d5295","./Math-5e38123d"],(function(t,e,n,r){"use strict";function a(t,e,r,a){this.x=n.e(t,0),this.y=n.e(e,0),this.z=n.e(r,0),this.w=n.e(a,0)}a.fromElements=function(t,e,r,o,u){return n.t(u)?(u.x=t,u.y=e,u.z=r,u.w=o,u):new a(t,e,r,o)},a.fromColor=function(t,r){return e.n.typeOf.object("color",t),n.t(r)?(r.x=t.red,r.y=t.green,r.z=t.blue,r.w=t.alpha,r):new a(t.red,t.green,t.blue,t.alpha)},a.clone=function(t,e){if(n.t(t))return n.t(e)?(e.x=t.x,e.y=t.y,e.z=t.z,e.w=t.w,e):new a(t.x,t.y,t.z,t.w)},a.packedLength=4,a.pack=function(t,r,a){return e.n.typeOf.object("value",t),e.n.defined("array",r),a=n.e(a,0),r[a++]=t.x,r[a++]=t.y,r[a++]=t.z,r[a]=t.w,r},a.unpack=function(t,r,o){return e.n.defined("array",t),r=n.e(r,0),n.t(o)||(o=new a),o.x=t[r++],o.y=t[r++],o.z=t[r++],o.w=t[r],o},a.packArray=function(t,r){e.n.defined("array",t);var o=t.length,u=4*o;if(n.t(r)){if(!Array.isArray(r)&&r.length!==u)throw new e.t("If result is a typed array, it must have exactly array.length * 4 elements");r.length!==u&&(r.length=u)}else r=new Array(u);for(var y=0;y<o;++y)a.pack(t[y],r,4*y);return r},a.unpackArray=function(t,r){if(e.n.defined("array",t),e.n.typeOf.number.greaterThanOrEquals("array.length",t.length,4),t.length%4!=0)throw new e.t("array length must be a multiple of 4.");var o=t.length;n.t(r)?r.length=o/4:r=new Array(o/4);for(var u=0;u<o;u+=4){var y=u/4;r[y]=a.unpack(t,u,r[y])}return r},a.fromArray=a.unpack,a.maximumComponent=function(t){return e.n.typeOf.object("cartesian",t),Math.max(t.x,t.y,t.z,t.w)},a.minimumComponent=function(t){return e.n.typeOf.object("cartesian",t),Math.min(t.x,t.y,t.z,t.w)},a.minimumByComponent=function(t,n,r){return e.n.typeOf.object("first",t),e.n.typeOf.object("second",n),e.n.typeOf.object("result",r),r.x=Math.min(t.x,n.x),r.y=Math.min(t.y,n.y),r.z=Math.min(t.z,n.z),r.w=Math.min(t.w,n.w),r},a.maximumByComponent=function(t,n,r){return e.n.typeOf.object("first",t),e.n.typeOf.object("second",n),e.n.typeOf.object("result",r),r.x=Math.max(t.x,n.x),r.y=Math.max(t.y,n.y),r.z=Math.max(t.z,n.z),r.w=Math.max(t.w,n.w),r},a.magnitudeSquared=function(t){return e.n.typeOf.object("cartesian",t),t.x*t.x+t.y*t.y+t.z*t.z+t.w*t.w},a.magnitude=function(t){return Math.sqrt(a.magnitudeSquared(t))};var o=new a;a.distance=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),a.subtract(t,n,o),a.magnitude(o)},a.distanceSquared=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),a.subtract(t,n,o),a.magnitudeSquared(o)},a.normalize=function(t,n){e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n);var r=a.magnitude(t);if(n.x=t.x/r,n.y=t.y/r,n.z=t.z/r,n.w=t.w/r,isNaN(n.x)||isNaN(n.y)||isNaN(n.z)||isNaN(n.w))throw new e.t("normalized result is not a number");return n},a.dot=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),t.x*n.x+t.y*n.y+t.z*n.z+t.w*n.w},a.multiplyComponents=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x*n.x,r.y=t.y*n.y,r.z=t.z*n.z,r.w=t.w*n.w,r},a.divideComponents=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x/n.x,r.y=t.y/n.y,r.z=t.z/n.z,r.w=t.w/n.w,r},a.add=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x+n.x,r.y=t.y+n.y,r.z=t.z+n.z,r.w=t.w+n.w,r},a.subtract=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x-n.x,r.y=t.y-n.y,r.z=t.z-n.z,r.w=t.w-n.w,r},a.multiplyByScalar=function(t,n,r){return e.n.typeOf.object("cartesian",t),e.n.typeOf.number("scalar",n),e.n.typeOf.object("result",r),r.x=t.x*n,r.y=t.y*n,r.z=t.z*n,r.w=t.w*n,r},a.divideByScalar=function(t,n,r){return e.n.typeOf.object("cartesian",t),e.n.typeOf.number("scalar",n),e.n.typeOf.object("result",r),r.x=t.x/n,r.y=t.y/n,r.z=t.z/n,r.w=t.w/n,r},a.negate=function(t,n){return e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n),n.x=-t.x,n.y=-t.y,n.z=-t.z,n.w=-t.w,n},a.abs=function(t,n){return e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n),n.x=Math.abs(t.x),n.y=Math.abs(t.y),n.z=Math.abs(t.z),n.w=Math.abs(t.w),n};var u=new a;a.lerp=function(t,n,r,o){return e.n.typeOf.object("start",t),e.n.typeOf.object("end",n),e.n.typeOf.number("t",r),e.n.typeOf.object("result",o),a.multiplyByScalar(n,r,u),o=a.multiplyByScalar(t,1-r,o),a.add(u,o,o)};var y=new a;a.mostOrthogonalAxis=function(t,n){e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n);var r=a.normalize(t,y);return a.abs(r,r),n=r.x<=r.y?r.x<=r.z?r.x<=r.w?a.clone(a.UNIT_X,n):a.clone(a.UNIT_W,n):r.z<=r.w?a.clone(a.UNIT_Z,n):a.clone(a.UNIT_W,n):r.y<=r.z?r.y<=r.w?a.clone(a.UNIT_Y,n):a.clone(a.UNIT_W,n):r.z<=r.w?a.clone(a.UNIT_Z,n):a.clone(a.UNIT_W,n)},a.equals=function(t,e){return t===e||n.t(t)&&n.t(e)&&t.x===e.x&&t.y===e.y&&t.z===e.z&&t.w===e.w},a.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]&&t.z===e[n+2]&&t.w===e[n+3]},a.equalsEpsilon=function(t,e,a,o){return t===e||n.t(t)&&n.t(e)&&r.n.equalsEpsilon(t.x,e.x,a,o)&&r.n.equalsEpsilon(t.y,e.y,a,o)&&r.n.equalsEpsilon(t.z,e.z,a,o)&&r.n.equalsEpsilon(t.w,e.w,a,o)},a.ZERO=Object.freeze(new a(0,0,0,0)),a.UNIT_X=Object.freeze(new a(1,0,0,0)),a.UNIT_Y=Object.freeze(new a(0,1,0,0)),a.UNIT_Z=Object.freeze(new a(0,0,1,0)),a.UNIT_W=Object.freeze(new a(0,0,0,1)),a.prototype.clone=function(t){return a.clone(this,t)},a.prototype.equals=function(t){return a.equals(this,t)},a.prototype.equalsEpsilon=function(t,e,n){return a.equalsEpsilon(this,t,e,n)},a.prototype.toString=function(){return"("+this.x+", "+this.y+", "+this.z+", "+this.w+")"};var c=new Float32Array(1),i=256;a.packFloat=function(t,o){if(e.n.typeOf.number("value",t),n.t(o)||(o=new a),c[0]=t,0===(t=c[0]))return a.clone(a.ZERO,o);var u,y=t<0?1:0;isFinite(t)?(t=Math.abs(t),u=Math.floor(r.n.logBase(t,10))+1,t/=Math.pow(10,u)):(t=.1,u=38);var f=t*i;return o.x=Math.floor(f),f=(f-o.x)*i,o.y=Math.floor(f),f=(f-o.y)*i,o.z=Math.floor(f),o.w=2*(u+38)+y,o},a.unpackFloat=function(t){e.n.typeOf.object("packedFloat",t);var n=t.w/2,r=Math.floor(n),a=2*(n-r);if(a=-(a=2*a-1),(r-=38)>=38)return a<0?Number.NEGATIVE_INFINITY:Number.POSITIVE_INFINITY;var o=a*t.x*.00390625;return o+=a*t.y*152587890625e-16,(o+=a*t.z*5.960464477539063e-8)*Math.pow(10,r)},t.a=a}));
