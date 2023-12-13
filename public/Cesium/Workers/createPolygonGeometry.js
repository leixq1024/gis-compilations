define(["./when-515d5295","./Rectangle-e170be8b","./ArcType-98a7a011","./arrayFill-4d3cc415","./BoundingRectangle-409afd17","./buildModuleUrl-dba4ec07","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./Check-3aa71481","./ComponentDatatype-d430c7f7","./EllipsoidGeodesic-e5406761","./EllipsoidTangentPlane-fd839d7b","./GeometryAttribute-9bc31a7f","./GeometryInstance-c11993d9","./GeometryOffsetAttribute-800f7650","./GeometryPipeline-137aa28e","./IndexDatatype-eefd5922","./Math-5e38123d","./PrimitiveType-b38a4004","./PolygonGeometryLibrary-e3bb7139","./PolygonPipeline-b8b35011","./VertexFormat-e844760b","./WindingOrder-8479ef05","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Cartesian4-034d54d5","./IntersectionTests-5fa33dbd","./Plane-92c15089","./FeatureDetection-7fae0d5a","./AttributeCompression-f9ee669b","./EncodedCartesian3-d74c1b81","./arrayRemoveDuplicates-a4c6347e","./EllipsoidRhumbLine-f50fdea6","./GeometryAttributes-7d904f0f"],(function(t,e,o,r,a,i,n,s,l,u,p,c,g,d,h,m,y,f,_,v,b,T,w,x,P,A,I,C,E,H,D,N,O,R,F,G){"use strict";var B=new s.i,S=new s.i;function L(t,e,o,r){var a=r.cartesianToCartographic(t,B).height,i=r.cartesianToCartographic(e,S);i.height=a,r.cartographicToCartesian(i,e);var n=r.cartesianToCartographic(o,S);n.height=a-100,r.cartographicToCartesian(n,o)}var V=new a.n,k=new s.a,M=new s.a,z=new s.a,U=new s.a,W=new s.a,Y=new s.a,j=new s.a,q=new s.a,K=new s.a,Q=new n.r,Z=new n.r,J=new s.a,X=new g.a,$=new _.r,tt=new _.r;function et(e){var o=e.vertexFormat,a=e.geometry,i=e.shadowVolume,l=a.attributes.position.values,p=l.length,c=e.wall,d=e.top,m=e.bottom;if(o.st||o.normal||o.tangent||o.bitangent||i){var y=e.boundingRectangle,v=e.tangentPlane,b=e.ellipsoid,T=e.stRotation,w=e.perPositionHeight,x=Q;x.x=y.x,x.y=y.y;var P,A=e.isComputeTexCoord?new Float32Array(p):new Float32Array(p/3*2),I=o.st?A:void 0;o.normal&&(P=w&&d&&!c?a.attributes.normal.values:new Float32Array(p));var C=o.tangent?new Float32Array(p):void 0,E=o.bitangent?new Float32Array(p):void 0,H=i?new Float32Array(p):void 0,D=0,N=0,O=M,R=z,F=U,G=!0,B=$,S=tt;if(0!==T){var V=g.a.fromAxisAngle(v._plane.normal,T,X);B=_.r.fromQuaternion(V,B),V=g.a.fromAxisAngle(v._plane.normal,-T,X),S=_.r.fromQuaternion(V,S)}else B=_.r.clone(_.r.IDENTITY,B),S=_.r.clone(_.r.IDENTITY,S);var et=0;(d&&m||c)&&(et=p/2,p/=2);var ot=1,rt=[];if(o.st&&c&&e.isComputeTexCoord){let t=[...e.outerPositions,e.outerPositions[0]];for(let e=1;e<t.length;e++){ot+=s.a.distance(t[e-1],t[e]),rt.push(ot)}}for(var at=0;at<p;at+=3){var it=s.a.fromArray(l,at,J);if(o.st){var nt=_.r.multiplyByVector(B,it,k);nt=b.scaleToGeodeticSurface(nt,nt);var st=v.projectPointOntoPlane(nt,Z);n.r.subtract(st,x,st);var lt=f.n.clamp(st.x/y.width,0,1),ut=f.n.clamp(st.y/y.height,0,1);if(c&&ot>1){let t=Math.ceil(at/6)-1;lt=rt[t]?rt[t]/ot:0,I[D]=1-lt,I[D+1]=1,I[D+2]=0,I[D+et]=1-lt,I[D+1+et]=0,I[D+2+et]=0}m&&(I[D+et]=lt,I[D+1+et]=ut,e.isComputeTexCoord&&(I[D+2+et]=-1)),d&&(I[D]=lt,I[D+1]=ut,e.isComputeTexCoord&&(I[D+2]=1)),e.isComputeTexCoord?D+=3:D+=2}if(o.normal||o.tangent||o.bitangent||i){var pt=N+1,ct=N+2;if(c){if(at+3<p){var gt=s.a.fromArray(l,at+3,W);if(G){var dt=s.a.fromArray(l,at+p,Y);w&&L(it,gt,dt,b),s.a.subtract(gt,it,gt),s.a.subtract(dt,it,dt),O=s.a.normalize(s.a.cross(dt,gt,O),O),G=!1}s.a.equalsEpsilon(gt,it,f.n.EPSILON10)&&(G=!0)}(o.tangent||o.bitangent)&&(F=b.geodeticSurfaceNormal(it,F),o.tangent&&(R=s.a.normalize(s.a.cross(F,O,R),R)))}else O=b.geodeticSurfaceNormal(it,O),(o.tangent||o.bitangent)&&(w&&(j=s.a.fromArray(P,N,j),q=s.a.cross(s.a.UNIT_Z,j,q),q=s.a.normalize(_.r.multiplyByVector(S,q,q),q),o.bitangent&&(K=s.a.normalize(s.a.cross(j,q,K),K))),R=s.a.cross(s.a.UNIT_Z,O,R),R=s.a.normalize(_.r.multiplyByVector(S,R,R),R),o.bitangent&&(F=s.a.normalize(s.a.cross(O,R,F),F)));o.normal&&(e.wall?(P[N+et]=O.x,P[pt+et]=O.y,P[ct+et]=O.z):m&&(P[N+et]=-O.x,P[pt+et]=-O.y,P[ct+et]=-O.z),(d&&!w||c)&&(P[N]=O.x,P[pt]=O.y,P[ct]=O.z)),i&&(c&&(O=b.geodeticSurfaceNormal(it,O)),H[N+et]=-O.x,H[pt+et]=-O.y,H[ct+et]=-O.z),o.tangent&&(e.wall?(C[N+et]=R.x,C[pt+et]=R.y,C[ct+et]=R.z):m&&(C[N+et]=-R.x,C[pt+et]=-R.y,C[ct+et]=-R.z),d&&(w?(C[N]=q.x,C[pt]=q.y,C[ct]=q.z):(C[N]=R.x,C[pt]=R.y,C[ct]=R.z))),o.bitangent&&(m&&(E[N+et]=F.x,E[pt+et]=F.y,E[ct+et]=F.z),d&&(w?(E[N]=K.x,E[pt]=K.y,E[ct]=K.z):(E[N]=F.x,E[pt]=F.y,E[ct]=F.z))),N+=3}}o.st&&(a.attributes.st=new g.r({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:e.isComputeTexCoord?3:2,values:I})),o.normal&&(a.attributes.normal=new g.r({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:P})),o.tangent&&(a.attributes.tangent=new g.r({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:C})),o.bitangent&&(a.attributes.bitangent=new g.r({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:E})),i&&(a.attributes.extrudeDirection=new g.r({componentDatatype:u.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H}))}if(e.extrude&&t.t(e.offsetAttribute)){var ht=l.length/3,mt=new Uint8Array(ht);if(e.offsetAttribute===h.I.TOP)d&&m||c?mt=r.d(mt,1,0,ht/2):d&&(mt=r.d(mt,1));else{var yt=e.offsetAttribute===h.I.NONE?0:1;mt=r.d(mt,yt)}a.attributes.applyOffset=new g.r({componentDatatype:u.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:mt})}return a}var ot=new s.i,rt=new s.i,at={west:0,east:0},it=new p.D;function nt(r,a,i,n,s){if(s=t.e(s,new e.s),!t.t(r)||r.length<3)return s.west=0,s.north=0,s.south=0,s.east=0,s;if(i===o.D.RHUMB)return e.s.fromCartesianArray(r,a,s);it.ellipsoid.equals(a)||(it=new p.D(void 0,void 0,a)),s.west=Number.POSITIVE_INFINITY,s.east=Number.NEGATIVE_INFINITY,s.south=Number.POSITIVE_INFINITY,s.north=Number.NEGATIVE_INFINITY,at.west=Number.POSITIVE_INFINITY,at.east=Number.NEGATIVE_INFINITY;for(var l,u=1/f.n.chordLength(n,a.maximumRadius),c=r.length,g=a.cartesianToCartographic(r[0],rt),d=ot,h=1;h<c;h++)l=d,d=g,g=a.cartesianToCartographic(r[h],l),it.setEndPoints(d,g),lt(it,u,s,at);return l=d,d=g,g=a.cartesianToCartographic(r[0],l),it.setEndPoints(d,g),lt(it,u,s,at),s.east-s.west>at.west-at.east&&(s.east=at.east,s.west=at.west),s}var st=new s.i;function lt(t,e,o,r){for(var a=t.surfaceDistance,i=Math.ceil(a*e),n=i>0?a/(i-1):Number.POSITIVE_INFINITY,s=0,l=0;l<i;l++){var u=t.interpolateUsingSurfaceDistance(s,st);s+=n;var p=u.longitude,c=u.latitude;o.west=Math.min(o.west,p),o.east=Math.max(o.east,p),o.south=Math.min(o.south,c),o.north=Math.max(o.north,c),r.west=p>0?Math.min(p,r.west):r.west,r.east=p<0?Math.max(p,r.east):r.east}}var ut=[];function pt(t,e,o,r,a,i,n,s,l,u,p){var g,h={walls:[]};if(i||n){var m,f,_=v.g.createGeometryFromPositions(t,e,o,a,s,l),T=_.attributes.position.values,x=_.indices;if(i&&n){var P=T.concat(T);m=P.length/3,(f=y.IndexDatatype.createTypedArray(m,2*x.length)).set(x);var A=x.length,I=m/2;for(g=0;g<A;g+=3){var C=f[g]+I,E=f[g+1]+I,H=f[g+2]+I;f[g+A]=H,f[g+1+A]=E,f[g+2+A]=C}if(_.attributes.position.values=P,a&&s.normal){var D=_.attributes.normal.values;_.attributes.normal.values=new Float32Array(P.length),_.attributes.normal.values.set(D)}_.indices=f}else if(n){for(m=T.length/3,f=y.IndexDatatype.createTypedArray(m,x.length),g=0;g<x.length;g+=3)f[g]=x[g+2],f[g+1]=x[g+1],f[g+2]=x[g];_.indices=f}h.topAndBottom=new d.m({geometry:_})}var N,O=r.outerRing,R=c.s.fromPoints(O,t),F=R.projectPointsOntoPlane(O,ut),G=b.T.computeWindingOrder2D(F);G===w.F.CLOCKWISE&&(O=O.slice().reverse()),u&&(N=v.g.computeWallGeometry(O,t,o,a,l,p),h.walls.push(new d.m({geometry:N})));var B=r.holes;for(g=0;g<B.length;g++){var S=B[g];F=(R=c.s.fromPoints(S,t)).projectPointsOntoPlane(S,ut),(G=b.T.computeWindingOrder2D(F))===w.F.COUNTER_CLOCKWISE&&(S=S.slice().reverse()),N=v.g.computeWallGeometry(S,t,o,a,l),h.walls.push(new d.m({geometry:N}))}return h}function ct(r){if(l.n.typeOf.object("options",r),l.n.typeOf.object("options.polygonHierarchy",r.polygonHierarchy),t.t(r.perPositionHeight)&&r.perPositionHeight&&t.t(r.height))throw new l.t("Cannot use both options.perPositionHeight and options.height");if(t.t(r.arcType)&&r.arcType!==o.D.GEODESIC&&r.arcType!==o.D.RHUMB)throw new l.t("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");var a=r.polygonHierarchy,i=t.e(r.vertexFormat,T.n.DEFAULT),n=t.e(r.ellipsoid,e.n.WGS84),s=t.e(r.granularity,f.n.RADIANS_PER_DEGREE),u=t.e(r.stRotation,0),p=t.e(r.perPositionHeight,!1),c=p&&t.t(r.extrudedHeight),g=t.e(r.height,0),d=t.e(r.extrudedHeight,g);if(!c){var h=Math.max(g,d);d=Math.min(g,d),g=h}this._vertexFormat=T.n.clone(i),this._ellipsoid=e.n.clone(n),this._granularity=s,this._stRotation=u,this._height=g,this._extrudedHeight=d,this._closeTop=t.e(r.closeTop,!0),this._closeBottom=t.e(r.closeBottom,!0),this._extrudeOutering=t.e(r.extrudeOutering,!0),this._polygonHierarchy=a,this._perPositionHeight=p,this._perPositionHeightExtrude=c,this._shadowVolume=t.e(r.shadowVolume,!1),this._workerName="createPolygonGeometry",this._offsetAttribute=r.offsetAttribute,this._arcType=t.e(r.arcType,o.D.GEODESIC),this._groundBottomAltitude=t.e(r.groundBottomAltitude,0),this._groundExtrudedHeight=t.e(r.groundExtrudedHeight,0),this._rectangle=void 0,this._textureCoordinateRotationPoints=void 0,this._isComputeTexCoord=r.isComputeTexCoord,this._isWall=t.e(r.isWall,!1),this.packedLength=v.g.computeHierarchyPackedLength(a)+e.n.packedLength+T.n.packedLength+12}ct.fromPositions=function(e){return e=t.e(e,t.e.EMPTY_OBJECT),l.n.defined("options.positions",e.positions),new ct({polygonHierarchy:{positions:e.positions},height:e.height,extrudedHeight:e.extrudedHeight,vertexFormat:e.vertexFormat,stRotation:e.stRotation,ellipsoid:e.ellipsoid,granularity:e.granularity,perPositionHeight:e.perPositionHeight,closeTop:e.closeTop,closeBottom:e.closeBottom,offsetAttribute:e.offsetAttribute,arcType:e.arcType,isComputeTexCoord:e.isComputeTexCoord,isWall:e.isWall})},ct.pack=function(o,r,a){return l.n.typeOf.object("value",o),l.n.defined("array",r),a=t.e(a,0),a=v.g.packPolygonHierarchy(o._polygonHierarchy,r,a),e.n.pack(o._ellipsoid,r,a),a+=e.n.packedLength,T.n.pack(o._vertexFormat,r,a),a+=T.n.packedLength,r[a++]=o._height,r[a++]=o._extrudedHeight,r[a++]=o._granularity,r[a++]=o._stRotation,r[a++]=o._perPositionHeightExtrude?1:0,r[a++]=o._perPositionHeight?1:0,r[a++]=o._closeTop?1:0,r[a++]=o._closeBottom?1:0,r[a++]=o._shadowVolume?1:0,r[a++]=t.e(o._offsetAttribute,-1),r[a++]=o._arcType,r[a]=o.packedLength,r};var gt=e.n.clone(e.n.UNIT_SPHERE),dt=new T.n,ht={polygonHierarchy:{}};return ct.unpack=function(o,r,a){l.n.defined("array",o),r=t.e(r,0);var i=v.g.unpackPolygonHierarchy(o,r);r=i.startingIndex,delete i.startingIndex;var n=e.n.unpack(o,r,gt);r+=e.n.packedLength;var s=T.n.unpack(o,r,dt);r+=T.n.packedLength;var u=o[r++],p=o[r++],c=o[r++],g=o[r++],d=1===o[r++],h=1===o[r++],m=1===o[r++],y=1===o[r++],f=1===o[r++],_=o[r++],b=o[r++],w=o[r];return t.t(a)||(a=new ct(ht)),a._polygonHierarchy=i,a._ellipsoid=e.n.clone(n,a._ellipsoid),a._vertexFormat=T.n.clone(s,a._vertexFormat),a._height=u,a._extrudedHeight=p,a._granularity=c,a._stRotation=g,a._perPositionHeightExtrude=d,a._perPositionHeight=h,a._closeTop=m,a._closeBottom=y,a._shadowVolume=f,a._offsetAttribute=-1===_?void 0:_,a._arcType=b,a.packedLength=w,a},ct.computeRectangle=function(r,a){l.n.typeOf.object("options",r),l.n.typeOf.object("options.polygonHierarchy",r.polygonHierarchy);var i=t.e(r.granularity,f.n.RADIANS_PER_DEGREE),n=t.e(r.arcType,o.D.GEODESIC);if(n!==o.D.GEODESIC&&n!==o.D.RHUMB)throw new l.t("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");var s=r.polygonHierarchy,u=t.e(r.ellipsoid,e.n.WGS84);return nt(s.positions,u,n,i,a)},ct.createGeometry=function(e){var o=e._vertexFormat,a=e._ellipsoid,n=e._granularity,s=e._stRotation,l=e._polygonHierarchy,p=e._perPositionHeight,_=e._closeTop,T=e._closeBottom,w=e._arcType,x=l.positions;if(!(x.length<3)){var P=c.s.fromPoints(x,a),A=v.g.polygonsFromHierarchy(l,P.projectPointsOntoPlane.bind(P),!p,a),I=A.hierarchy,C=A.polygons;if(0!==I.length){x=I[0].outerRing;var E,H=v.g.computeBoundingRectangle(P.plane.normal,P.projectPointOntoPlane.bind(P),x,s,V),D=[],N=e._height,O=e._extrudedHeight,R=e._perPositionHeightExtrude||!f.n.equalsEpsilon(N,O,0,f.n.EPSILON2),F={perPositionHeight:p,vertexFormat:o,geometry:void 0,tangentPlane:P,boundingRectangle:H,ellipsoid:a,stRotation:s,bottom:!1,top:!0,wall:!1,extrude:!1,arcType:w,outerPositions:x,isComputeTexCoord:e._isComputeTexCoord};if(R)for(F.extrude=!0,F.top=_,F.bottom=T,F.shadowVolume=e._shadowVolume,F.offsetAttribute=e._offsetAttribute,E=0;E<C.length;E++){var G,B=pt(a,C[E],n,I[E],p,_,T,o,w,e._extrudeOutering,e._isWall);_&&T?(G=B.topAndBottom,F.geometry=v.g.scaleToGeodeticHeightExtruded(G.geometry,N,O,a,p)):_?((G=B.topAndBottom).geometry.attributes.position.values=b.T.scaleToGeodeticHeight(G.geometry.attributes.position.values,N,a,!p),F.geometry=G.geometry):T&&((G=B.topAndBottom).geometry.attributes.position.values=b.T.scaleToGeodeticHeight(G.geometry.attributes.position.values,O,a,!0),F.geometry=G.geometry),(_||T)&&(F.wall=!1,G.geometry=et(F),D.push(G));var S=B.walls;F.wall=!0;for(var L=0;L<S.length;L++){var k=S[L];F.top=!1,F.bottom=!1,F.geometry=v.g.scaleToGeodeticHeightExtruded(k.geometry,N,O,a,p),k.geometry=et(F),D.push(k)}}else for(E=0;E<C.length;E++){var M=new d.m({geometry:v.g.createGeometryFromPositions(a,C[E],n,p,o,w)});if(M.geometry.attributes.position.values=b.T.scaleToGeodeticHeight(M.geometry.attributes.position.values,N,a,!p),F.geometry=M.geometry,M.geometry=et(F),t.t(e._offsetAttribute)){var z=M.geometry.attributes.position.values.length,U=new Uint8Array(z/3),W=e._offsetAttribute===h.I.NONE?0:1;r.d(U,W),M.geometry.attributes.applyOffset=new g.r({componentDatatype:u.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:U})}D.push(M)}var Y=m.F.combineInstances(D)[0];Y.attributes.position.values=new Float64Array(Y.attributes.position.values),Y.indices=y.IndexDatatype.createTypedArray(Y.attributes.position.values.length/3,Y.indices);var j=Y.attributes,q=i.c.fromVertices(j.position.values);return o.position||delete j.position,new g.T({attributes:j,indices:Y.indices,primitiveType:Y.primitiveType,boundingSphere:q,offsetAttribute:e._offsetAttribute})}}},ct.createShadowVolume=function(t,e,o){var r=t._granularity,a=t._ellipsoid,i=t._groundBottomAltitude+t._groundExtrudedHeight,n=t._groundBottomAltitude?t._groundBottomAltitude:e(r,a),s=i!==t._groundBottomAltitude?i:o(r,a);return new ct({polygonHierarchy:t._polygonHierarchy,ellipsoid:a,stRotation:t._stRotation,granularity:r,perPositionHeight:!1,extrudedHeight:n,height:s,vertexFormat:T.n.POSITION_ONLY,shadowVolume:!0,arcType:t._arcType})},Object.defineProperties(ct.prototype,{rectangle:{get:function(){if(!t.t(this._rectangle)){var e=this._polygonHierarchy.positions;this._rectangle=nt(e,this._ellipsoid,this._arcType,this._granularity)}return this._rectangle}},textureCoordinateRotationPoints:{get:function(){return t.t(this._textureCoordinateRotationPoints)||(this._textureCoordinateRotationPoints=function(t){var e=-t._stRotation;if(0===e)return[0,0,0,1,1,0];var o=t._ellipsoid,r=t._polygonHierarchy.positions,a=t.rectangle;return g.T._textureCoordinateRotationPoints(r,e,o,a)}(this)),this._textureCoordinateRotationPoints}}}),function(o,r){return t.t(r)&&(o=ct.unpack(o,r)),o._ellipsoid=e.n.clone(o._ellipsoid),ct.createGeometry(o)}}));