define(["exports","./Check-3aa71481","./when-515d5295","./Math-5e38123d"],(function(t,e,n,r){"use strict";function a(t,e){this.x=n.e(t,0),this.y=n.e(e,0)}a.fromElements=function(t,e,r){return n.t(r)?(r.x=t,r.y=e,r):new a(t,e)},a.clone=function(t,e){if(n.t(t))return n.t(e)?(e.x=t.x,e.y=t.y,e):new a(t.x,t.y)},a.fromCartesian3=a.clone,a.fromCartesian4=a.clone,a.packedLength=2,a.pack=function(t,r,a){return e.n.typeOf.object("value",t),e.n.defined("array",r),a=n.e(a,0),r[a++]=t.x,r[a]=t.y,r},a.unpack=function(t,r,o){return e.n.defined("array",t),r=n.e(r,0),n.t(o)||(o=new a),o.x=t[r++],o.y=t[r],o},a.packArray=function(t,r){e.n.defined("array",t);var o=t.length,u=2*o;if(n.t(r)){if(!Array.isArray(r)&&r.length!==u)throw new e.t("If result is a typed array, it must have exactly array.length * 2 elements");r.length!==u&&(r.length=u)}else r=new Array(u);for(var y=0;y<o;++y)a.pack(t[y],r,2*y);return r},a.unpackArray=function(t,r){if(e.n.defined("array",t),e.n.typeOf.number.greaterThanOrEquals("array.length",t.length,2),t.length%2!=0)throw new e.t("array length must be a multiple of 2.");var o=t.length;n.t(r)?r.length=o/2:r=new Array(o/2);for(var u=0;u<o;u+=2){var y=u/2;r[y]=a.unpack(t,u,r[y])}return r},a.fromArray=a.unpack,a.maximumComponent=function(t){return e.n.typeOf.object("cartesian",t),Math.max(t.x,t.y)},a.minimumComponent=function(t){return e.n.typeOf.object("cartesian",t),Math.min(t.x,t.y)},a.minimumByComponent=function(t,n,r){return e.n.typeOf.object("first",t),e.n.typeOf.object("second",n),e.n.typeOf.object("result",r),r.x=Math.min(t.x,n.x),r.y=Math.min(t.y,n.y),r},a.maximumByComponent=function(t,n,r){return e.n.typeOf.object("first",t),e.n.typeOf.object("second",n),e.n.typeOf.object("result",r),r.x=Math.max(t.x,n.x),r.y=Math.max(t.y,n.y),r},a.magnitudeSquared=function(t){return e.n.typeOf.object("cartesian",t),t.x*t.x+t.y*t.y},a.magnitude=function(t){return Math.sqrt(a.magnitudeSquared(t))};var o=new a;a.distance=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),a.subtract(t,n,o),a.magnitude(o)},a.distanceSquared=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),a.subtract(t,n,o),a.magnitudeSquared(o)},a.normalize=function(t,n){e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n);var r=a.magnitude(t);if(n.x=t.x/r,n.y=t.y/r,isNaN(n.x)||isNaN(n.y))throw new e.t("normalized result is not a number");return n},a.dot=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),t.x*n.x+t.y*n.y},a.multiplyComponents=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x*n.x,r.y=t.y*n.y,r},a.divideComponents=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x/n.x,r.y=t.y/n.y,r},a.add=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x+n.x,r.y=t.y+n.y,r},a.subtract=function(t,n,r){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),e.n.typeOf.object("result",r),r.x=t.x-n.x,r.y=t.y-n.y,r},a.multiplyByScalar=function(t,n,r){return e.n.typeOf.object("cartesian",t),e.n.typeOf.number("scalar",n),e.n.typeOf.object("result",r),r.x=t.x*n,r.y=t.y*n,r},a.divideByScalar=function(t,n,r){return e.n.typeOf.object("cartesian",t),e.n.typeOf.number("scalar",n),e.n.typeOf.object("result",r),r.x=t.x/n,r.y=t.y/n,r},a.negate=function(t,n){return e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n),n.x=-t.x,n.y=-t.y,n},a.abs=function(t,n){return e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n),n.x=Math.abs(t.x),n.y=Math.abs(t.y),n};var u=new a;a.lerp=function(t,n,r,o){return e.n.typeOf.object("start",t),e.n.typeOf.object("end",n),e.n.typeOf.number("t",r),e.n.typeOf.object("result",o),a.multiplyByScalar(n,r,u),o=a.multiplyByScalar(t,1-r,o),a.add(u,o,o)};var y=new a,c=new a;a.angleBetween=function(t,n){return e.n.typeOf.object("left",t),e.n.typeOf.object("right",n),a.normalize(t,y),a.normalize(n,c),r.n.acosClamped(a.dot(y,c))};var i=new a;a.mostOrthogonalAxis=function(t,n){e.n.typeOf.object("cartesian",t),e.n.typeOf.object("result",n);var r=a.normalize(t,i);return a.abs(r,r),n=r.x<=r.y?a.clone(a.UNIT_X,n):a.clone(a.UNIT_Y,n)},a.equals=function(t,e){return t===e||n.t(t)&&n.t(e)&&t.x===e.x&&t.y===e.y},a.equalsArray=function(t,e,n){return t.x===e[n]&&t.y===e[n+1]},a.equalsEpsilon=function(t,e,a,o){return t===e||n.t(t)&&n.t(e)&&r.n.equalsEpsilon(t.x,e.x,a,o)&&r.n.equalsEpsilon(t.y,e.y,a,o)},a.ZERO=Object.freeze(new a(0,0)),a.UNIT_X=Object.freeze(new a(1,0)),a.UNIT_Y=Object.freeze(new a(0,1)),a.prototype.clone=function(t){return a.clone(this,t)},a.prototype.equals=function(t){return a.equals(this,t)},a.prototype.equalsEpsilon=function(t,e,n){return a.equalsEpsilon(this,t,e,n)},a.prototype.toString=function(){return"("+this.x+", "+this.y+")"},t.r=a}));
