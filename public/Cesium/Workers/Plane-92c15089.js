define(["exports","./Cartographic-1bbcab04","./Check-3aa71481","./when-515d5295","./Math-5e38123d","./PrimitiveType-b38a4004"],(function(n,e,t,a,o,r){"use strict";function i(n,a){if(t.n.typeOf.object("normal",n),!o.n.equalsEpsilon(e.a.magnitude(n),1,o.n.EPSILON6))throw new t.t("normal must be normalized.");t.n.typeOf.number("distance",a),this.normal=e.a.clone(n),this.distance=a}i.fromPointNormal=function(n,r,c){if(t.n.typeOf.object("point",n),t.n.typeOf.object("normal",r),!o.n.equalsEpsilon(e.a.magnitude(r),1,o.n.EPSILON6))throw new t.t("normal must be normalized.");var l=-e.a.dot(r,n);return a.t(c)?(e.a.clone(r,c.normal),c.distance=l,c):new i(r,l)};var c=new e.a;i.fromCartesian4=function(n,r){t.n.typeOf.object("coefficients",n);var l=e.a.fromCartesian4(n,c),m=n.w;if(!o.n.equalsEpsilon(e.a.magnitude(l),1,o.n.EPSILON6))throw new t.t("normal must be normalized.");return a.t(r)?(e.a.clone(l,r.normal),r.distance=m,r):new i(l,m)},i.getPointDistance=function(n,a){return t.n.typeOf.object("plane",n),t.n.typeOf.object("point",a),e.a.dot(n.normal,a)+n.distance};var l=new e.a;i.projectPointOntoPlane=function(n,o,r){t.n.typeOf.object("plane",n),t.n.typeOf.object("point",o),a.t(r)||(r=new e.a);var c=i.getPointDistance(n,o),m=e.a.multiplyByScalar(n.normal,c,l);return e.a.subtract(o,m,r)};var m=new e.a;i.transform=function(n,a,o){return t.n.typeOf.object("plane",n),t.n.typeOf.object("transform",a),r.c.multiplyByPointAsVector(a,n.normal,c),e.a.normalize(c,c),e.a.multiplyByScalar(n.normal,-n.distance,m),r.c.multiplyByPoint(a,m,m),i.fromPointNormal(m,c,o)},i.clone=function(n,o){return t.n.typeOf.object("plane",n),a.t(o)?(e.a.clone(n.normal,o.normal),o.distance=n.distance,o):new i(n.normal,n.distance)},i.equals=function(n,a){return t.n.typeOf.object("left",n),t.n.typeOf.object("right",a),n.distance===a.distance&&e.a.equals(n.normal,a.normal)},i.ORIGIN_XY_PLANE=Object.freeze(new i(e.a.UNIT_Z,0)),i.ORIGIN_YZ_PLANE=Object.freeze(new i(e.a.UNIT_X,0)),i.ORIGIN_ZX_PLANE=Object.freeze(new i(e.a.UNIT_Y,0)),n.n=i}));
