define(["./createTaskProcessorWorker","./ComponentDatatype-d430c7f7","./Color-39e7bd91","./getStringFromTypedArray-53c2705d","./S3MCompressType-d847073b","./Cartographic-1bbcab04","./PrimitiveType-b38a4004","./S3MPixelFormat-f1fedece","./pako_inflate-f73548c4","./when-515d5295","./Check-3aa71481","./WebGLConstants-77a84876","./FeatureDetection-7fae0d5a","./Math-5e38123d","./RuntimeError-350acae3","./Buffer-72562b71","./IndexDatatype-eefd5922","./Cartesian4-034d54d5"],(function(t,e,n,r,a,i,o,E,s,y,p,T,u,l,A,d,v,_){"use strict";function c(t,e,n,r,a,i){this.left=t,this.bottom=e,this.right=n,this.top=r,this.minHeight=a,this.maxHeight=i,this.width=n-t,this.length=r-e,this.height=i-a}function f(t,n,r,E,s,y,p){var T=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var u=0,l={},A=l.vertexAttributes=[],d=l.attrLocation={};l.instanceCount=0,l.instanceMode=0;var v=0;s.getUint32(y,!0),y+=Uint32Array.BYTES_PER_ELEMENT;var _=s.getUint16(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var c=_;_>4&&(c=_>>8,_&=15);var f=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var m=void 0,B=void 0;if(f>0){var g=s.getUint16(y,!0);g=_*Float32Array.BYTES_PER_ELEMENT,y+=Uint32Array.BYTES_PER_ELEMENT,u=f*g;var P=E.subarray(y,y+u);if(r){var U=new i.a,L=new i.a,h=new Float32Array(P.buffer,P.byteOffset,P.byteLength/4),M=new i.i;m=new i.i,B=new i.i;for(var S=new Float32Array(2*f),N=new Float64Array(2*f),R=0;R<f;R++)o.c.multiplyByPoint(n,i.a.fromElements(h[3*R],h[3*R+1],h[3*R+2],U),L),M=i.i.fromCartesian(L),N[2*R]=M.longitude,N[2*R+1]=M.latitude,0===R?(m.longitude=M.longitude,m.latitude=M.latitude,B.longitude=M.longitude,B.latitude=M.latitude):(m.longitude=Math.max(M.longitude,m.longitude),m.latitude=Math.max(M.latitude,m.latitude),B.longitude=Math.min(M.longitude,B.longitude),B.latitude=Math.min(M.latitude,B.latitude));for(R=0;R<f;R++)S[2*R]=N[2*R]-B.longitude,S[2*R+1]=N[2*R+1]-B.latitude;d.img=v,A.push({index:d.img,typedArray:S,componentsPerAttribute:2,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:2*Float32Array.BYTES_PER_ELEMENT,normalize:!1}),v++}d.aPosition=v,A.push({index:d.aPosition,typedArray:P,componentsPerAttribute:_,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:g,normalize:!1}),v++,y+=u}var D=s.getUint32(y,!0);if(y+=Uint32Array.BYTES_PER_ELEMENT,D>0){var Y=s.getUint16(y,!0);Y=c*Float32Array.BYTES_PER_ELEMENT,y+=Uint32Array.BYTES_PER_ELEMENT,u=D*Y,t.ignoreNormal||(d.aNormal=v,A.push({index:d.aNormal,typedArray:E.subarray(y,y+u),componentsPerAttribute:c,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:Y,normalize:!1}),v++),y+=u}var I=s.getUint32(y,!0);if(y+=Uint32Array.BYTES_PER_ELEMENT,I>0){var x=new Uint8Array(4*I);p.push(x.buffer);var b=s.getUint32(y,!0);b=4*Float32Array.BYTES_PER_ELEMENT,y+=Uint32Array.BYTES_PER_ELEMENT,u=I*b;for(var F=new Float32Array(E.buffer,y,4*f),C=0;C<f;C++)x[4*C]=255*F[4*C],x[4*C+1]=255*F[4*C+1],x[4*C+2]=255*F[4*C+2],x[4*C+3]=255*F[4*C+3];y+=u,d.aColor=v,A.push({index:d.aColor,typedArray:x,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.UNSIGNED_BYTE,offsetInBytes:0,strideInBytes:4,normalize:!0}),v++}var w=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT,w>0&&(y+=u=16*w);var O=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;for(var k,z,G=-1,H=0;H<O;H++){k=s.getUint32(y,!0),y+=Uint32Array.BYTES_PER_ELEMENT,z=s.getUint16(y,!0),y+=Uint16Array.BYTES_PER_ELEMENT,s.getUint16(y,!0),y+=Uint16Array.BYTES_PER_ELEMENT,u=k*z*Float32Array.BYTES_PER_ELEMENT;var W,V=E.subarray(y,y+u);if(-1!=G||20!=z&&35!=z)if(-1!==G)l.instanceBounds=new Float32Array(E.buffer,y,k*z);else{var X="aTexCoord"+H;d[X]=v++,A.push({index:d[X],typedArray:V,componentsPerAttribute:z,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:z*Float32Array.BYTES_PER_ELEMENT,normalize:!1})}else G=H,l.instanceCount=k,l.instanceMode=z,l.instanceBuffer=V,20===z?(W=20*Float32Array.BYTES_PER_ELEMENT,d.uv2=v++,A.push({index:d.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:W,instanceDivisor:1}),d.uv3=v++,A.push({index:d.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv4=v++,A.push({index:d.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.secondary_colour=v++,A.push({index:d.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv6=v++,A.push({index:d.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1})):35===z&&(W=35*Float32Array.BYTES_PER_ELEMENT,d.uv1=v++,A.push({index:d.uv1,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:0,strideInBytes:W,instanceDivisor:1,byteLength:u}),d.uv2=v++,A.push({index:d.uv2,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:4*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv3=v++,A.push({index:d.uv3,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:8*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv4=v++,A.push({index:d.uv4,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:12*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv5=v++,A.push({index:d.uv5,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:16*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv6=v++,A.push({index:d.uv6,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:20*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv7=v++,A.push({index:d.uv7,componentsPerAttribute:3,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:24*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.secondary_colour=v++,A.push({index:d.secondary_colour,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:27*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}),d.uv9=v++,A.push({index:d.uv9,componentsPerAttribute:4,componentDatatype:e.ComponentDatatype.FLOAT,normalize:!1,offsetInBytes:31*Float32Array.BYTES_PER_ELEMENT,strideInBytes:W,instanceDivisor:1}));y+=u}l.verticesCount=f,l.instanceIndex=G;var j=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var q,J=[];for(H=0;H<j;H++){var K={},Q=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var Z=s.getUint8(y,!0);y+=Uint8Array.BYTES_PER_ELEMENT,s.getUint8(y,!0),y+=Uint8Array.BYTES_PER_ELEMENT;var $=s.getUint8(y,!0);y+=Uint8Array.BYTES_PER_ELEMENT,y+=1,K.indicesCount=Q,K.indexType=Z,K.primitiveType=$;var tt=y;Q>0&&(0==Z?(y+=u=Q*Uint16Array.BYTES_PER_ELEMENT,Q%2==1&&(y+=2)):y+=u=4*Q),K.indicesTypedArray=E.subarray(tt,tt+u);var et=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT;var nt=s.getUint32(y,!0);y+=Uint32Array.BYTES_PER_ELEMENT*et,K.materialCode=nt,J.push(K)}return 2===J.length&&13===J[1].primitiveType&&J[1].indicesCount>=3&&(q=a._0x5d8d50.createEdgeDataByIndices(l,J[1],p)),t[T]={vertexPackage:l,arrIndexPackage:J,edgeGeometry:q,cartographicBounds:{max:m,min:B}},y}function m(t,n,r){var a=t.vertexAttributes,i=t.attrLocation,o=a.length;i[1===r?"instanceId":"batchId"]=o,a.push({index:o,typedArray:n,componentsPerAttribute:1,componentDatatype:e.ComponentDatatype.FLOAT,offsetInBytes:0,strideInBytes:0,instanceDivisor:r})}return new n.e,t((function(t,e){var n=t.buffer,i=t.supportCompressType,o=t.bVolume,p=null,T=null,u=null,l=t.isCoverImageryLayer,A=t.modelMatrix;if(o&&t.volbuffer.byteLength<8&&(o=!1),o){var d=t.volbuffer,v=new Uint8Array(d,8),_=s.pako.inflate(v).buffer,B=new Float64Array(_,0,1),g=new Uint32Array(_,48,1);if(0===B[0]||3200===g[0]||3201===g[0]){var P=0;0===B[0]&&(P=8),e.push(_);var U=new Float64Array(_,P,6),L=U[0],h=U[1],M=U[2],S=U[3],N=U[4]<U[5]?U[4]:U[5],R=U[4]>U[5]?U[4]:U[5];T={left:L,top:h,right:M,bottom:S,minHeight:N,maxHeight:R,width:(p=new c(L,S,M,h,N,R)).width,length:p.length,height:p.height};var D=new Uint32Array(_,48+P,7),Y=D[0],I=D[1],x=D[2],b=D[3];u={nFormat:Y,nSideBlockCount:I,nBlockLength:x,nLength:b,nWidth:D[4],nHeight:D[5],nDepth:D[6],imageArray:new Uint8Array(_,76+P,b*b*4)}}}var F=0,C=new Uint8Array(n,0,4);if(115!==C[0]||51!==C[1]||109!==C[2])return{result:!1};var w=C[3],O=(v=new Uint8Array(n,4),s.pako.inflate(v).buffer),k=new Uint8Array(O);e.push(k.buffer);var z=new DataView(O),G=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var H=new Uint8Array(O,F,G),W=G%4;W&&(W=4-W),F+=G+W;var V=r.c(H,void 0,void 0,"gbk");V=(V=V.replace(new RegExp("\r\n","gm"),"")).replace(new RegExp(":","gm"),""),z.getUint32(F,!0),F+=Uint32Array.BYTES_PER_ELEMENT;var X=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var j={};j.ignoreNormal=t.ignoreNormal;for(var q=0;q<X;q++)F=f(j,A,l,k,z,F,e);z.getUint32(F,!0),F+=Uint32Array.BYTES_PER_ELEMENT;var J=z.getUint32(F,!0);for(F+=Uint32Array.BYTES_PER_ELEMENT,q=0;q<J;q++){var K=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Q=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Z={},$=j[K].vertexPackage.instanceIndex,tt=j[K].edgeGeometry;if(-1==$){for(var et=new Float32Array(j[K].vertexPackage.verticesCount),nt=0;nt<Q;nt++){var rt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var at=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var it=0,ot=0;Z[rt]={batchId:nt};for(var Et=0;Et<at;Et++)if(ot=z.getUint32(F,!0),F+=Uint32Array.BYTES_PER_ELEMENT,it=z.getUint32(F,!0),F+=Uint32Array.BYTES_PER_ELEMENT,et.fill)et.fill(nt,ot,ot+it);else for(var st=ot+ot,yt=ot;yt<st;yt++)et[yt]=nt;Z[rt].vertexColorOffset=ot,Z[rt].vertexColorCount=it}m(j[K].vertexPackage,et,void 0)}else{var pt=j[K].vertexPackage.instanceCount;j[K].vertexPackage.instanceBuffer,j[K].vertexPackage.instanceMode;var Tt=new Float32Array(pt),ut=0;for(nt=0;nt<Q;nt++){rt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;at=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;for(Et=0;Et<at;Et++){var lt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT,Tt[ut]=ut,void 0===Z[rt]&&(Z[rt]={vertexColorCount:1,instanceIds:[],vertexColorOffset:ut}),Z[rt].instanceIds.push(lt),ut++}}m(j[K].vertexPackage,Tt,1)}j[K].pickInfo=Z;tt=j[K].edgeGeometry;if(y.t(tt)){var At,dt,vt=tt.regular.instancesData,_t=a._0x5d8d50.RegularInstanceStride;if(y.t(vt))for(dt=vt.length,At=0;At<dt;At+=_t){var ct=vt[At+9];vt[At+9]=et[ct]}var ft=tt.silhouette.instancesData;if(_t=a._0x5d8d50.SilhouetteInstanceStride,y.t(ft))for(dt=ft.length,At=0;At<dt;At+=_t){ct=ft[At+12];ft[At+12]=et[ct]}}}z.getUint32(F,!0),F+=Uint32Array.BYTES_PER_ELEMENT;var mt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Bt={};for(q=0;q<mt;q++){var gt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Pt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Ut=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Lt=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;at=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var ht=z.getUint32(F,!0);F+=Uint32Array.BYTES_PER_ELEMENT;var Mt=null;if(Lt===a.S3MCompressType.enrS3TCDXTN&&1!==i){var St=null;ht>E.S3MPixelFormat.BGR||ht===E.S3MPixelFormat.LUMINANCE_ALPHA?(St=new Uint8Array(O,F,Pt*Ut),Mt=new Uint8Array(Pt*Ut*4)):(St=new Uint16Array(O,F,at/2),Mt=new Uint16Array(Pt*Ut)),a.d.decode(Mt,Pt,Ut,St,ht),e.push(Mt.buffer),Lt=0}else Mt=new Uint8Array(O,F,at);Bt[gt]={id:gt,width:Pt,height:Ut,compressType:Lt,nFormat:ht,imageBuffer:Mt},F+=at}return{result:!0,version:w,xmlDoc:V,geoPackage:j,texturePackage:Bt,volImageBuffer:u,volBounds:T}}))}));
