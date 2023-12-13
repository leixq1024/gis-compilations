define(["./buildModuleUrl-dba4ec07","./BoxGeometry-995be07a","./Cartographic-1bbcab04","./Color-39e7bd91","./CylinderGeometry-9c20d2a4","./when-515d5295","./EllipsoidGeometry-305ab354","./IndexDatatype-eefd5922","./PrimitiveType-b38a4004","./createTaskProcessorWorker","./Check-3aa71481","./Rectangle-e170be8b","./Math-5e38123d","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./arrayFill-4d3cc415","./ComponentDatatype-d430c7f7","./WebGLConstants-77a84876","./GeometryAttribute-9bc31a7f","./Cartesian2-1b9b0d8a","./FeatureDetection-7fae0d5a","./Cartesian4-034d54d5","./GeometryAttributes-7d904f0f","./GeometryOffsetAttribute-800f7650","./VertexFormat-e844760b","./CylinderGeometryLibrary-4c16342b"],(function(e,t,a,n,r,i,c,o,d,s,l,f,u,h,b,p,y,v,g,m,x,I,k,w,A,B,O){"use strict";function C(e){this.offset=e.offset,this.count=e.count,this.color=e.color,this.batchIds=e.batchIds}var L=new a.a,E=d.c.packedLength+a.a.packedLength,U=d.c.packedLength+2,M=d.c.packedLength+a.a.packedLength,F=a.a.packedLength+1,T={modelMatrix:new d.c,boundingVolume:new e.c};function V(e,t){var n=t*E,r=a.a.unpack(e,n,L);n+=a.a.packedLength;var i=d.c.unpack(e,n,T.modelMatrix);d.c.multiplyByScale(i,r,i);var c=T.boundingVolume;return a.a.clone(a.a.ZERO,c.center),c.radius=Math.sqrt(3),T}function G(e,t){var n=t*U,r=e[n++],i=e[n++],c=a.a.fromElements(r,r,i,L),o=d.c.unpack(e,n,T.modelMatrix);d.c.multiplyByScale(o,c,o);var s=T.boundingVolume;return a.a.clone(a.a.ZERO,s.center),s.radius=Math.sqrt(2),T}function R(e,t){var n=t*M,r=a.a.unpack(e,n,L);n+=a.a.packedLength;var i=d.c.unpack(e,n,T.modelMatrix);d.c.multiplyByScale(i,r,i);var c=T.boundingVolume;return a.a.clone(a.a.ZERO,c.center),c.radius=1,T}function S(e,t){var n=t*F,r=e[n++],i=a.a.unpack(e,n,L),c=d.c.fromTranslation(i,T.modelMatrix);d.c.multiplyByUniformScale(c,r,c);var o=T.boundingVolume;return a.a.clone(a.a.ZERO,o.center),o.radius=1,T}var D=new a.a;function P(t,r,c,o,s){if(i.t(r)){for(var l=c.length,f=o.attributes.position.values,u=o.indices,h=t.positions,b=t.vertexBatchIds,p=t.indices,y=t.batchIds,v=t.batchTableColors,g=t.batchedIndices,m=t.indexOffsets,x=t.indexCounts,I=t.boundingVolumes,k=t.modelMatrix,w=t.center,A=t.positionOffset,B=t.batchIdIndex,O=t.indexOffset,L=t.batchedIndicesOffset,E=0;E<l;++E){var U=s(r,E),M=U.modelMatrix;d.c.multiply(k,M,M);for(var F=c[E],T=f.length,V=0;V<T;V+=3){var G=a.a.unpack(f,V,D);d.c.multiplyByPoint(M,G,G),a.a.subtract(G,w,G),a.a.pack(G,h,3*A+V),b[B++]=F}for(var R=u.length,S=0;S<R;++S)p[O+S]=u[S]+A;var P=E+L;g[P]=new C({offset:O,count:R,color:n.e.fromRgba(v[F]),batchIds:[F]}),y[P]=F,m[P]=O,x[P]=R,I[P]=e.c.transform(U.boundingVolume,M),A+=T/3,O+=R}t.positionOffset=A,t.batchIdIndex=B,t.indexOffset=O,t.batchedIndicesOffset+=l}}var Z=new a.a,q=new d.c;function W(t,a,r){var i=r.length,c=2+i*e.c.packedLength+1+function(e){for(var t=e.length,a=0,r=0;r<t;++r)a+=n.e.packedLength+3+e[r].batchIds.length;return a}(a),o=new Float64Array(c),d=0;o[d++]=t,o[d++]=i;for(var s=0;s<i;++s)e.c.pack(r[s],o,d),d+=e.c.packedLength;var l=a.length;o[d++]=l;for(var f=0;f<l;++f){var u=a[f];n.e.pack(u.color,o,d),d+=n.e.packedLength,o[d++]=u.offset,o[d++]=u.count;var h=u.batchIds,b=h.length;o[d++]=b;for(var p=0;p<b;++p)o[d++]=h[p]}return o}return s((function(e,n){var s=i.t(e.boxes)?new Float32Array(e.boxes):void 0,l=i.t(e.boxBatchIds)?new Uint16Array(e.boxBatchIds):void 0,f=i.t(e.cylinders)?new Float32Array(e.cylinders):void 0,u=i.t(e.cylinderBatchIds)?new Uint16Array(e.cylinderBatchIds):void 0,h=i.t(e.ellipsoids)?new Float32Array(e.ellipsoids):void 0,b=i.t(e.ellipsoidBatchIds)?new Uint16Array(e.ellipsoidBatchIds):void 0,p=i.t(e.spheres)?new Float32Array(e.spheres):void 0,y=i.t(e.sphereBatchIds)?new Uint16Array(e.sphereBatchIds):void 0,v=i.t(s)?l.length:0,g=i.t(f)?u.length:0,m=i.t(h)?b.length:0,x=i.t(p)?y.length:0,I=t.c.getUnitBox(),k=r.x.getUnitCylinder(),w=c.b.getUnitEllipsoid(),A=I.attributes.position.values,B=k.attributes.position.values,O=w.attributes.position.values,C=A.length*v;C+=B.length*g,C+=O.length*(m+x);var L=I.indices,E=k.indices,U=w.indices,M=L.length*v;M+=E.length*g,M+=U.length*(m+x);var F=new Float32Array(C),T=new Uint16Array(C/3),D=o.IndexDatatype.createTypedArray(C/3,M),_=v+g+m+x,N=new Uint16Array(_),Y=new Array(_),j=new Uint32Array(_),z=new Uint32Array(_),H=new Array(_);!function(e){var t=new Float64Array(e),n=0;a.a.unpack(t,n,Z),n+=a.a.packedLength,d.c.unpack(t,n,q)}(e.packedBuffer);var J={batchTableColors:new Uint32Array(e.batchTableColors),positions:F,vertexBatchIds:T,indices:D,batchIds:N,batchedIndices:Y,indexOffsets:j,indexCounts:z,boundingVolumes:H,positionOffset:0,batchIdIndex:0,indexOffset:0,batchedIndicesOffset:0,modelMatrix:q,center:Z};P(J,s,l,I,V),P(J,f,u,k,G),P(J,h,b,w,R),P(J,p,y,w,S);var K=W(D.BYTES_PER_ELEMENT,Y,H);return n.push(F.buffer,T.buffer,D.buffer),n.push(N.buffer,j.buffer,z.buffer),n.push(K.buffer),{positions:F.buffer,vertexBatchIds:T.buffer,indices:D.buffer,indexOffsets:j.buffer,indexCounts:z.buffer,batchIds:N.buffer,packedBuffer:K.buffer}}))}));
