define(["./AttributeCompression-f9ee669b","./Cartographic-1bbcab04","./Color-39e7bd91","./when-515d5295","./Rectangle-e170be8b","./IndexDatatype-eefd5922","./Math-5e38123d","./OrientedBoundingBox-57407e6e","./createTaskProcessorWorker","./Cartesian2-1b9b0d8a","./Check-3aa71481","./FeatureDetection-7fae0d5a","./WebGLConstants-77a84876","./buildModuleUrl-dba4ec07","./Intersect-53434a77","./PrimitiveType-b38a4004","./Cartesian4-034d54d5","./RuntimeError-350acae3","./Event-9821f5d9","./EllipsoidTangentPlane-fd839d7b","./IntersectionTests-5fa33dbd","./Plane-92c15089","./GeometryAttribute-9bc31a7f","./PolygonPipeline-b8b35011","./WindingOrder-8479ef05","./ComponentDatatype-d430c7f7","./EllipsoidRhumbLine-f50fdea6"],(function(e,a,r,n,t,i,o,f,s,d,c,u,h,b,l,p,g,y,v,I,m,w,x,A,N,T,k){"use strict";var E=new a.a,L=new t.n,P=new t.s,C={min:void 0,max:void 0,indexBytesPerElement:void 0};function O(e,a,n){var t=a.length,i=2+t*f.b.packedLength+1+function(e){for(var a=e.length,n=0,t=0;t<a;++t)n+=r.e.packedLength+3+e[t].batchIds.length;return n}(n),o=new Float64Array(i),s=0;o[s++]=e,o[s++]=t;for(var d=0;d<t;++d)f.b.pack(a[d],o,s),s+=f.b.packedLength;var c=n.length;o[s++]=c;for(var u=0;u<c;++u){var h=n[u];r.e.pack(h.color,o,s),s+=r.e.packedLength,o[s++]=h.offset,o[s++]=h.count;var b=h.batchIds,l=b.length;o[s++]=l;for(var p=0;p<l;++p)o[s++]=b[p]}return o}var U=new a.a,F=new a.a,B=new a.a,D=new a.a,S=new a.a,R=new a.i,_=new t.s;return s((function(s,d){var c;!function(e){var r=new Float64Array(e),n=0;C.indexBytesPerElement=r[n++],C.min=r[n++],C.max=r[n++],a.a.unpack(r,n,E),n+=a.a.packedLength,t.n.unpack(r,n,L),n+=t.n.packedLength,t.s.unpack(r,n,P)}(s.packedBuffer),c=2===C.indexBytesPerElement?new Uint16Array(s.indices):new Uint32Array(s.indices);var u,h,b,l=new Uint16Array(s.positions),p=new Uint32Array(s.counts),g=new Uint32Array(s.indexCounts),y=new Uint32Array(s.batchIds),v=new Uint32Array(s.batchTableColors),I=new Array(p.length),m=E,w=L,x=P,A=C.min,N=C.max,T=s.minimumHeights,k=s.maximumHeights;n.t(T)&&n.t(k)&&(T=new Float32Array(T),k=new Float32Array(k));var G=l.length/2,M=l.subarray(0,G),Y=l.subarray(G,2*G);e.r.zigZagDeltaDecode(M,Y);var V=new Float32Array(3*G);for(u=0;u<G;++u){var H=M[u],W=Y[u],z=o.n.lerp(x.west,x.east,H/32767),Z=o.n.lerp(x.south,x.north,W/32767),j=a.i.fromRadians(z,Z,0,R),q=w.cartographicToCartesian(j,U);a.a.pack(q,V,3*u)}var J=p.length,K=new Array(J),Q=new Array(J),X=0,$=0;for(u=0;u<J;++u)K[u]=X,Q[u]=$,X+=p[u],$+=g[u];var ee,ae=new Float32Array(3*G*2),re=new Uint16Array(2*G),ne=new Uint32Array(Q.length),te=new Uint32Array(g.length),ie=[],oe={};for(u=0;u<J;++u)b=v[u],n.t(oe[b])?(oe[b].positionLength+=p[u],oe[b].indexLength+=g[u],oe[b].batchIds.push(u)):oe[b]={positionLength:p[u],indexLength:g[u],offset:0,indexOffset:0,batchIds:[u]};var fe=0,se=0;for(b in oe)if(oe.hasOwnProperty(b)){(ee=oe[b]).offset=fe,ee.indexOffset=se;var de=2*ee.positionLength,ce=2*ee.indexLength+6*ee.positionLength;fe+=de,se+=ce,ee.indexLength=ce}var ue=[];for(b in oe)oe.hasOwnProperty(b)&&(ee=oe[b],ue.push({color:r.e.fromRgba(parseInt(b)),offset:ee.indexOffset,count:ee.indexLength,batchIds:ee.batchIds}));for(u=0;u<J;++u){var he=(ee=oe[b=v[u]]).offset,be=3*he,le=he,pe=K[u],ge=p[u],ye=y[u],ve=A,Ie=N;n.t(T)&&n.t(k)&&(ve=T[u],Ie=k[u]);var me=Number.POSITIVE_INFINITY,we=Number.NEGATIVE_INFINITY,xe=Number.POSITIVE_INFINITY,Ae=Number.NEGATIVE_INFINITY;for(h=0;h<ge;++h){var Ne=a.a.unpack(V,3*pe+3*h,U);w.scaleToGeodeticSurface(Ne,Ne);var Te=w.cartesianToCartographic(Ne,R),ke=Te.latitude,Ee=Te.longitude;me=Math.min(ke,me),we=Math.max(ke,we),xe=Math.min(Ee,xe),Ae=Math.max(Ee,Ae);var Le=w.geodeticSurfaceNormal(Ne,F),Pe=a.a.multiplyByScalar(Le,ve,B),Ce=a.a.add(Ne,Pe,D);Pe=a.a.multiplyByScalar(Le,Ie,Pe);var Oe=a.a.add(Ne,Pe,S);a.a.subtract(Oe,m,Oe),a.a.subtract(Ce,m,Ce),a.a.pack(Oe,ae,be),a.a.pack(Ce,ae,be+3),re[le]=ye,re[le+1]=ye,be+=6,le+=2}(x=_).west=xe,x.east=Ae,x.south=me,x.north=we,I[u]=f.b.fromRectangle(x,A,N,w);var Ue=ee.indexOffset,Fe=Q[u],Be=g[u];for(ne[u]=Ue,h=0;h<Be;h+=3){var De=c[Fe+h]-pe,Se=c[Fe+h+1]-pe,Re=c[Fe+h+2]-pe;ie[Ue++]=2*De+he,ie[Ue++]=2*Se+he,ie[Ue++]=2*Re+he,ie[Ue++]=2*Re+1+he,ie[Ue++]=2*Se+1+he,ie[Ue++]=2*De+1+he}for(h=0;h<ge;++h){var _e=h,Ge=(h+1)%ge;ie[Ue++]=2*_e+1+he,ie[Ue++]=2*Ge+he,ie[Ue++]=2*_e+he,ie[Ue++]=2*_e+1+he,ie[Ue++]=2*Ge+1+he,ie[Ue++]=2*Ge+he}ee.offset+=2*ge,ee.indexOffset=Ue,te[u]=Ue-ne[u]}ie=i.IndexDatatype.createTypedArray(ae.length/3,ie);for(var Me=ue.length,Ye=0;Ye<Me;++Ye){for(var Ve=ue[Ye].batchIds,He=0,We=Ve.length,ze=0;ze<We;++ze)He+=te[Ve[ze]];ue[Ye].count=He}var Ze=O(2===ie.BYTES_PER_ELEMENT?i.IndexDatatype.UNSIGNED_SHORT:i.IndexDatatype.UNSIGNED_INT,I,ue);return d.push(ae.buffer,ie.buffer,ne.buffer,te.buffer,re.buffer,Ze.buffer),{positions:ae.buffer,indices:ie.buffer,indexOffsets:ne.buffer,indexCounts:te.buffer,batchIds:re.buffer,packedBuffer:Ze.buffer}}))}));