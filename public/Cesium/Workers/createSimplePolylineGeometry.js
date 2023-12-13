define(["./when-515d5295","./Rectangle-e170be8b","./ArcType-98a7a011","./buildModuleUrl-dba4ec07","./Cartographic-1bbcab04","./Color-39e7bd91","./ComponentDatatype-d430c7f7","./Check-3aa71481","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./IndexDatatype-eefd5922","./Math-5e38123d","./PolylinePipeline-bf1462fc","./PrimitiveType-b38a4004","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./FeatureDetection-7fae0d5a","./WebGLConstants-77a84876","./Cartesian2-1b9b0d8a","./Cartesian4-034d54d5","./EllipsoidGeodesic-e5406761","./EllipsoidRhumbLine-f50fdea6","./IntersectionTests-5fa33dbd","./Plane-92c15089"],(function(e,t,r,a,o,n,i,l,s,c,p,f,y,d,h,u,g,v,T,b,m,_,w,B,k){"use strict";function D(e,t,r,a,o,i,l){var s,c=y.v.numberOfPoints(e,t,o),p=r.red,f=r.green,d=r.blue,h=r.alpha,u=a.red,g=a.green,v=a.blue,T=a.alpha;if(n.e.equals(r,a)){for(s=0;s<c;s++)i[l++]=n.e.floatToByte(p),i[l++]=n.e.floatToByte(f),i[l++]=n.e.floatToByte(d),i[l++]=n.e.floatToByte(h);return l}var b=(u-p)/c,m=(g-f)/c,_=(v-d)/c,w=(T-h)/c,B=l;for(s=0;s<c;s++)i[B++]=n.e.floatToByte(p+s*b),i[B++]=n.e.floatToByte(f+s*m),i[B++]=n.e.floatToByte(d+s*_),i[B++]=n.e.floatToByte(h+s*w);return B}function E(a){var i=(a=e.e(a,e.e.EMPTY_OBJECT)).positions,s=a.colors,c=e.e(a.colorsPerVertex,!1);if(!e.t(i)||i.length<2)throw new l.t("At least two positions are required.");if(e.t(s)&&(c&&s.length<i.length||!c&&s.length<i.length-1))throw new l.t("colors has an invalid length.");this._positions=i,this._colors=s,this._colorsPerVertex=c,this._arcType=e.e(a.arcType,r.D.GEODESIC),this._granularity=e.e(a.granularity,f.n.RADIANS_PER_DEGREE),this._ellipsoid=e.e(a.ellipsoid,t.n.WGS84),this._workerName="createSimplePolylineGeometry";var p=1+i.length*o.a.packedLength;p+=e.t(s)?1+s.length*n.e.packedLength:1,this.packedLength=p+t.n.packedLength+3}E.pack=function(r,a,i){if(!e.t(r))throw new l.t("value is required");if(!e.t(a))throw new l.t("array is required");i=e.e(i,0);var s,c=r._positions,p=c.length;for(a[i++]=p,s=0;s<p;++s,i+=o.a.packedLength)o.a.pack(c[s],a,i);var f=r._colors;for(p=e.t(f)?f.length:0,a[i++]=p,s=0;s<p;++s,i+=n.e.packedLength)n.e.pack(f[s],a,i);return t.n.pack(r._ellipsoid,a,i),i+=t.n.packedLength,a[i++]=r._colorsPerVertex?1:0,a[i++]=r._arcType,a[i]=r._granularity,a},E.unpack=function(r,a,i){if(!e.t(r))throw new l.t("array is required");a=e.e(a,0);var s,c=r[a++],p=new Array(c);for(s=0;s<c;++s,a+=o.a.packedLength)p[s]=o.a.unpack(r,a);var f=(c=r[a++])>0?new Array(c):void 0;for(s=0;s<c;++s,a+=n.e.packedLength)f[s]=n.e.unpack(r,a);var y=t.n.unpack(r,a);a+=t.n.packedLength;var d=1===r[a++],h=r[a++],u=r[a];return e.t(i)?(i._positions=p,i._colors=f,i._ellipsoid=y,i._colorsPerVertex=d,i._arcType=h,i._granularity=u,i):new E({positions:p,colors:f,ellipsoid:y,colorsPerVertex:d,arcType:h,granularity:u})};var A=new Array(2),P=new Array(2),L={positions:A,height:P,ellipsoid:void 0,minDistance:void 0,granularity:void 0};return E.createGeometry=function(t){var l,h,u,g,v,T=t._positions,b=t._colors,m=t._colorsPerVertex,_=t._arcType,w=t._granularity,B=t._ellipsoid,k=f.n.chordLength(w,B.maximumRadius),E=e.t(b)&&!m,C=T.length,G=0;if(_===r.D.GEODESIC||_===r.D.RHUMB){var x,I,R;_===r.D.GEODESIC?(x=f.n.chordLength(w,B.maximumRadius),I=y.v.numberOfPoints,R=y.v.generateArc):(x=w,I=y.v.numberOfPointsRhumbLine,R=y.v.generateRhumbArc);var S=y.v.extractHeights(T,B),O=L;if(_===r.D.GEODESIC?O.minDistance=k:O.granularity=w,O.ellipsoid=B,E){var U=0;for(l=0;l<C-1;l++)U+=I(T[l],T[l+1],x)+1;h=new Float64Array(3*U),g=new Uint8Array(4*U),O.positions=A,O.height=P;var V=0;for(l=0;l<C-1;++l){A[0]=T[l],A[1]=T[l+1],P[0]=S[l],P[1]=S[l+1];var q=R(O);if(e.t(b)){var N=q.length/3;v=b[l];for(var F=0;F<N;++F)g[V++]=n.e.floatToByte(v.red),g[V++]=n.e.floatToByte(v.green),g[V++]=n.e.floatToByte(v.blue),g[V++]=n.e.floatToByte(v.alpha)}h.set(q,G),G+=q.length}}else if(O.positions=T,O.height=S,h=new Float64Array(R(O)),e.t(b)){for(g=new Uint8Array(h.length/3*4),l=0;l<C-1;++l){G=D(T[l],T[l+1],b[l],b[l+1],k,g,G)}var M=b[C-1];g[G++]=n.e.floatToByte(M.red),g[G++]=n.e.floatToByte(M.green),g[G++]=n.e.floatToByte(M.blue),g[G++]=n.e.floatToByte(M.alpha)}}else{u=E?2*C-2:C,h=new Float64Array(3*u),g=e.t(b)?new Uint8Array(4*u):void 0;var H=0,W=0;for(l=0;l<C;++l){var Y=T[l];if(E&&l>0&&(o.a.pack(Y,h,H),H+=3,v=b[l-1],g[W++]=n.e.floatToByte(v.red),g[W++]=n.e.floatToByte(v.green),g[W++]=n.e.floatToByte(v.blue),g[W++]=n.e.floatToByte(v.alpha)),E&&l===C-1)break;o.a.pack(Y,h,H),H+=3,e.t(b)&&(v=b[l],g[W++]=n.e.floatToByte(v.red),g[W++]=n.e.floatToByte(v.green),g[W++]=n.e.floatToByte(v.blue),g[W++]=n.e.floatToByte(v.alpha))}}var z=new c.t;z.position=new s.r({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:h}),e.t(b)&&(z.color=new s.r({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:4,values:g,normalize:!0}));var J=2*((u=h.length/3)-1),j=p.IndexDatatype.createTypedArray(u,J),K=0;for(l=0;l<u-1;++l)j[K++]=l,j[K++]=l+1;return new s.T({attributes:z,indices:j,primitiveType:d._0x38df4a.LINES,boundingSphere:a.c.fromPoints(T)})},function(r,a){return e.t(a)&&(r=E.unpack(r,a)),r._ellipsoid=t.n.clone(r._ellipsoid),E.createGeometry(r)}}));
