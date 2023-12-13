define(["./when-515d5295","./Cartographic-1bbcab04","./Check-3aa71481","./EllipsoidGeometry-305ab354","./VertexFormat-e844760b","./Math-5e38123d","./arrayFill-4d3cc415","./buildModuleUrl-dba4ec07","./Rectangle-e170be8b","./Intersect-53434a77","./PrimitiveType-b38a4004","./Cartesian4-034d54d5","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Event-9821f5d9","./Cartesian2-1b9b0d8a","./ComponentDatatype-d430c7f7","./GeometryAttribute-9bc31a7f","./FeatureDetection-7fae0d5a","./GeometryAttributes-7d904f0f","./GeometryOffsetAttribute-800f7650","./IndexDatatype-eefd5922"],(function(e,t,r,a,i,n,o,c,s,d,u,b,l,m,p,f,y,v,k,G,P,_){"use strict";function h(r){var i=e.e(r.radius,1),n={radii:new t.a(i,i,i),stackPartitions:r.stackPartitions,slicePartitions:r.slicePartitions,vertexFormat:r.vertexFormat};this._ellipsoidGeometry=new a.b(n),this._workerName="createSphereGeometry"}h.packedLength=a.b.packedLength,h.pack=function(e,t,i){return r.n.typeOf.object("value",e),a.b.pack(e._ellipsoidGeometry,t,i)};var w=new a.b,x={radius:void 0,radii:new t.a,vertexFormat:new i.n,stackPartitions:void 0,slicePartitions:void 0};return h.unpack=function(r,n,o){var c=a.b.unpack(r,n,w);return x.vertexFormat=i.n.clone(c._vertexFormat,x.vertexFormat),x.stackPartitions=c._stackPartitions,x.slicePartitions=c._slicePartitions,e.t(o)?(t.a.clone(c._radii,x.radii),o._ellipsoidGeometry=new a.b(x),o):(x.radius=c._radii.x,new h(x))},h.createGeometry=function(e){return a.b.createGeometry(e._ellipsoidGeometry)},function(t,r){return e.t(r)&&(t=h.unpack(t,r)),h.createGeometry(t)}}));
