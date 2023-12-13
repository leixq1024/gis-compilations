define(["./when-515d5295","./buildModuleUrl-dba4ec07","./Cartographic-1bbcab04","./Check-3aa71481","./ComponentDatatype-d430c7f7","./FrustumGeometry-2a42c495","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./PrimitiveType-b38a4004","./Rectangle-e170be8b","./Math-5e38123d","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Cartesian4-034d54d5","./Plane-92c15089","./VertexFormat-e844760b","./Cartesian2-1b9b0d8a","./FeatureDetection-7fae0d5a"],(function(e,t,n,a,r,i,o,c,u,p,f,s,d,m,_,k,g,h,y,b){"use strict";function l(t){a.n.typeOf.object("options",t),a.n.typeOf.object("options.frustum",t.frustum),a.n.typeOf.object("options.origin",t.origin),a.n.typeOf.object("options.orientation",t.orientation);var r,c,u=t.frustum,p=t.orientation,f=t.origin,s=e.e(t._drawNearPlane,!0);u instanceof i.f?(r=0,c=i.f.packedLength):u instanceof i.r&&(r=1,c=i.r.packedLength),this._frustumType=r,this._frustum=u.clone(),this._origin=n.a.clone(f),this._orientation=o.a.clone(p),this._drawNearPlane=s,this._workerName="createFrustumOutlineGeometry",this.packedLength=2+c+n.a.packedLength+o.a.packedLength}l.pack=function(t,r,c){a.n.typeOf.object("value",t),a.n.defined("array",r),c=e.e(c,0);var u=t._frustumType,p=t._frustum;return r[c++]=u,0===u?(i.f.pack(p,r,c),c+=i.f.packedLength):(i.r.pack(p,r,c),c+=i.r.packedLength),n.a.pack(t._origin,r,c),c+=n.a.packedLength,o.a.pack(t._orientation,r,c),r[c+=o.a.packedLength]=t._drawNearPlane?1:0,r};var w=new i.f,L=new i.r,v=new o.a,P=new n.a;return l.unpack=function(t,r,c){a.n.defined("array",t),r=e.e(r,0);var u,p=t[r++];0===p?(u=i.f.unpack(t,r,w),r+=i.f.packedLength):(u=i.r.unpack(t,r,L),r+=i.r.packedLength);var f=n.a.unpack(t,r,P);r+=n.a.packedLength;var s=o.a.unpack(t,r,v),d=1===t[r+=o.a.packedLength];if(!e.t(c))return new l({frustum:u,origin:f,orientation:s,_drawNearPlane:d});var m=p===c._frustumType?c._frustum:void 0;return c._frustum=u.clone(m),c._frustumType=p,c._origin=n.a.clone(f,c._origin),c._orientation=o.a.clone(s,c._orientation),c._drawNearPlane=d,c},l.createGeometry=function(e){var n=e._frustumType,a=e._frustum,p=e._origin,f=e._orientation,s=e._drawNearPlane,d=new Float64Array(24);i.D._computeNearFarPlanes(p,f,n,a,d);for(var m,_,k=new c.t({position:new o.r({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:d})}),g=s?2:1,h=new Uint16Array(8*(g+1)),y=s?0:1;y<2;++y)_=4*y,h[m=s?8*y:0]=_,h[m+1]=_+1,h[m+2]=_+1,h[m+3]=_+2,h[m+4]=_+2,h[m+5]=_+3,h[m+6]=_+3,h[m+7]=_;for(y=0;y<2;++y)_=4*y,h[m=8*(g+y)]=_,h[m+1]=_+4,h[m+2]=_+1,h[m+3]=_+5,h[m+4]=_+2,h[m+5]=_+6,h[m+6]=_+3,h[m+7]=_+7;return new o.T({attributes:k,indices:h,primitiveType:u._0x38df4a.LINES,boundingSphere:t.c.fromVertices(d)})},function(t,n){return e.t(n)&&(t=l.unpack(t,n)),l.createGeometry(t)}}));
