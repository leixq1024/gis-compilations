define(["./when-515d5295","./Rectangle-e170be8b","./arrayRemoveDuplicates-a4c6347e","./BoundingRectangle-409afd17","./buildModuleUrl-dba4ec07","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./ComponentDatatype-d430c7f7","./PolylineVolumeGeometryLibrary-ae5f3405","./Check-3aa71481","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./GeometryPipeline-137aa28e","./IndexDatatype-eefd5922","./Math-5e38123d","./PolygonPipeline-b8b35011","./PrimitiveType-b38a4004","./VertexFormat-e844760b","./WindingOrder-8479ef05","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Cartesian4-034d54d5","./EllipsoidTangentPlane-fd839d7b","./IntersectionTests-5fa33dbd","./Plane-92c15089","./PolylinePipeline-bf1462fc","./EllipsoidGeodesic-e5406761","./EllipsoidRhumbLine-f50fdea6","./FeatureDetection-7fae0d5a","./AttributeCompression-f9ee669b","./EncodedCartesian3-d74c1b81"],(function(e,t,n,a,r,o,i,s,p,l,c,d,u,h,y,g,m,f,v,b,_,P,k,L,w,C,E,T,A,D,F,R,G){"use strict";function x(n){var a=(n=e.e(n,e.e.EMPTY_OBJECT)).polylinePositions,r=n.shapePositions;if(!e.t(a))throw new l.t("options.polylinePositions is required.");if(!e.t(r))throw new l.t("options.shapePositions is required.");this._positions=a,this._shape=r,this._ellipsoid=t.n.clone(e.e(n.ellipsoid,t.n.WGS84)),this._cornerType=e.e(n.cornerType,p.O.ROUNDED),this._vertexFormat=f.n.clone(e.e(n.vertexFormat,f.n.DEFAULT)),this._granularity=e.e(n.granularity,y.n.RADIANS_PER_DEGREE),this._workerName="createPolylineVolumeGeometry",this.enuCenter=e.e(n.enuCenter,i.a.ZERO);var s=1+a.length*i.a.packedLength;s+=1+r.length*o.r.packedLength+i.a.packedLength,this.packedLength=s+t.n.packedLength+f.n.packedLength+2}x.pack=function(n,a,r){if(!e.t(n))throw new l.t("value is required");if(!e.t(a))throw new l.t("array is required");r=e.e(r,0);var s,p=n._positions,c=p.length;for(a[r++]=c,s=0;s<c;++s,r+=i.a.packedLength)i.a.pack(p[s],a,r);var d=n._shape;for(c=d.length,a[r++]=c,s=0;s<c;++s,r+=o.r.packedLength)o.r.pack(d[s],a,r);return t.n.pack(n._ellipsoid,a,r),r+=t.n.packedLength,f.n.pack(n._vertexFormat,a,r),r+=f.n.packedLength,a[r++]=n._cornerType,a[r++]=n._granularity,i.a.pack(n.enuCenter,a,r),a};var O=t.n.clone(t.n.UNIT_SPHERE),I=new f.n,q={polylinePositions:void 0,shapePositions:void 0,ellipsoid:O,vertexFormat:I,cornerType:void 0,granularity:void 0,enuCenter:void 0};x.unpack=function(n,a,r){if(!e.t(n))throw new l.t("array is required");a=e.e(a,0);var s,p=n[a++],c=new Array(p);for(s=0;s<p;++s,a+=i.a.packedLength)c[s]=i.a.unpack(n,a);p=n[a++];var d=new Array(p);for(s=0;s<p;++s,a+=o.r.packedLength)d[s]=o.r.unpack(n,a);var u=t.n.unpack(n,a,O);a+=t.n.packedLength;var h=f.n.unpack(n,a,I);a+=f.n.packedLength;var y,g=n[a++],m=n[a++];return y=i.a.unpack(n,a),e.t(r)?(r._positions=c,r._shape=d,r._ellipsoid=t.n.clone(u,r._ellipsoid),r._vertexFormat=f.n.clone(h,r._vertexFormat),r._cornerType=g,r._granularity=m,r.enuCenter=y,r):(q.polylinePositions=c,q.shapePositions=d,q.cornerType=g,q.granularity=m,q.enuCenter=y,new x(q))};var S=new a.n;return x.createGeometry=function(t){for(var o=t._positions,l=n.u(o,i.a.equalsEpsilon),y=l.length,f=new Array(y),b=0;b<y;b++)f[b]=i.a.clone(l[b]);var _=t._shape;if(_=p.K.removeDuplicatesFromShape(_),!(l.length<2||_.length<3)){g.T.computeWindingOrder2D(_)===v.F.CLOCKWISE&&_.reverse();var P=a.n.fromPoints(_,S),k={};if(k.combinedPositions=p.K.computePositions(f,_,P,t,!0),!i.a.equals(t.enuCenter,i.a.ZERO)){var L=new Array(y);for(b=0;b<y;b++)L[b]=i.a.clone(l[b]);k.combinedLocalPositions=p.K.computeLocalPositions(L,_,P,t,!0,t.enuCenter)}return function(t,n,a,o){var i=t.combinedPositions,p=t.combinedLocalPositions,l=new d.t;o.position&&(l.position=new c.r({componentDatatype:s.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:i}));var y,f,v,b,_,P,k=n.length,L=i.length/3,w=(L-2*k)/(2*k),C=g.T.triangulate(n),E=(w-1)*k*6+2*C.length,T=h.IndexDatatype.createTypedArray(L,E),A=2*k,D=0;for(y=0;y<w-1;y++){for(f=0;f<k-1;f++)P=(v=2*f+y*k*2)+A,_=(b=v+1)+A,T[D++]=b,T[D++]=v,T[D++]=_,T[D++]=_,T[D++]=v,T[D++]=P;_=(b=1+(v=2*k-2+y*k*2))+A,P=v+A,T[D++]=b,T[D++]=v,T[D++]=_,T[D++]=_,T[D++]=v,T[D++]=P}if(o.st||o.tangent||o.bitangent){var F,R,G=new Float32Array(2*L),x=1/(w-1),O=1/a.height,I=a.height/2,q=0;for(y=0;y<w;y++){for(F=y*x,R=O*(n[0].y+I),G[q++]=F,G[q++]=R,f=1;f<k;f++)R=O*(n[f].y+I),G[q++]=F,G[q++]=R,G[q++]=F,G[q++]=R;R=O*(n[0].y+I),G[q++]=F,G[q++]=R}for(f=0;f<k;f++)F=0,R=O*(n[f].y+I),G[q++]=F,G[q++]=R;for(f=0;f<k;f++)F=(w-1)*x,R=O*(n[f].y+I),G[q++]=F,G[q++]=R;l.st=new c.r({componentDatatype:s.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:new Float32Array(G)})}var S=L-2*k;for(y=0;y<C.length;y+=3){var N=C[y]+S,U=C[y+1]+S,W=C[y+2]+S;T[D++]=N,T[D++]=U,T[D++]=W,T[D++]=W+k,T[D++]=U+k,T[D++]=N+k}var B=new c.T({attributes:l,indices:T,boundingSphere:r.c.fromVertices(i),primitiveType:m._0x38df4a.TRIANGLES});if(o.normal&&(B=u.F.computeNormal(B)),o.tangent||o.bitangent){try{B=u.F.computeTangentAndBitangent(B)}catch{r.e("polyline-volume-tangent-bitangent","Unable to compute tangents and bitangents for polyline volume geometry")}o.tangent||(B.attributes.tangent=void 0),o.bitangent||(B.attributes.bitangent=void 0),o.st||(B.attributes.st=void 0)}return e.t(p)&&(B.attributes.position.values=p,B.attributes.position.componentDatatype=s.ComponentDatatype.FLOAT),B}(k,_,P,t._vertexFormat)}},function(n,a){return e.t(a)&&(n=x.unpack(n,a)),n._ellipsoid=t.n.clone(n._ellipsoid),x.createGeometry(n)}}));
