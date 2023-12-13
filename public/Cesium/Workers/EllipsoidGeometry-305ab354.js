define(["exports","./arrayFill-4d3cc415","./buildModuleUrl-dba4ec07","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./ComponentDatatype-d430c7f7","./when-515d5295","./Check-3aa71481","./Rectangle-e170be8b","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./GeometryOffsetAttribute-800f7650","./IndexDatatype-eefd5922","./Math-5e38123d","./PrimitiveType-b38a4004","./VertexFormat-e844760b"],(function(t,e,a,n,i,r,o,m,s,c,u,f,p,d,l,_){"use strict";var h=new i.a,v=new i.a,y=new i.a,b=new i.a,w=new i.a(1,1,1),k=Math.cos,C=Math.sin;function A(t){t=o.e(t,o.e.EMPTY_OBJECT);var e=o.e(t.radii,w),a=o.e(t.innerRadii,e),n=o.e(t.minimumClock,0),r=o.e(t.maximumClock,d.n.TWO_PI),s=o.e(t.minimumCone,0),c=o.e(t.maximumCone,d.n.PI),u=Math.round(o.e(t.stackPartitions,64)),f=Math.round(o.e(t.slicePartitions,64)),p=o.e(t.vertexFormat,_.n.DEFAULT);if(f<3)throw new m.t("options.slicePartitions cannot be less than three.");if(u<3)throw new m.t("options.stackPartitions cannot be less than three.");this._radii=i.a.clone(e),this._innerRadii=i.a.clone(a),this._minimumClock=n,this._maximumClock=r,this._minimumCone=s,this._maximumCone=c,this._stackPartitions=u,this._slicePartitions=f,this._vertexFormat=_.n.clone(p),this._offsetAttribute=t.offsetAttribute,this._workerName="createEllipsoidGeometry"}A.packedLength=2*i.a.packedLength+_.n.packedLength+7,A.pack=function(t,e,a){if(!o.t(t))throw new m.t("value is required");if(!o.t(e))throw new m.t("array is required");return a=o.e(a,0),i.a.pack(t._radii,e,a),a+=i.a.packedLength,i.a.pack(t._innerRadii,e,a),a+=i.a.packedLength,_.n.pack(t._vertexFormat,e,a),a+=_.n.packedLength,e[a++]=t._minimumClock,e[a++]=t._maximumClock,e[a++]=t._minimumCone,e[a++]=t._maximumCone,e[a++]=t._stackPartitions,e[a++]=t._slicePartitions,e[a]=o.e(t._offsetAttribute,-1),e};var x,P=new i.a,g=new i.a,T=new _.n,F={radii:P,innerRadii:g,vertexFormat:T,minimumClock:void 0,maximumClock:void 0,minimumCone:void 0,maximumCone:void 0,stackPartitions:void 0,slicePartitions:void 0,offsetAttribute:void 0};A.unpack=function(t,e,a){if(!o.t(t))throw new m.t("array is required");e=o.e(e,0);var n=i.a.unpack(t,e,P);e+=i.a.packedLength;var r=i.a.unpack(t,e,g);e+=i.a.packedLength;var s=_.n.unpack(t,e,T);e+=_.n.packedLength;var c=t[e++],u=t[e++],f=t[e++],p=t[e++],d=t[e++],l=t[e++],h=t[e];return o.t(a)?(a._radii=i.a.clone(n,a._radii),a._innerRadii=i.a.clone(r,a._innerRadii),a._vertexFormat=_.n.clone(s,a._vertexFormat),a._minimumClock=c,a._maximumClock=u,a._minimumCone=f,a._maximumCone=p,a._stackPartitions=d,a._slicePartitions=l,a._offsetAttribute=-1===h?void 0:h,a):(F.minimumClock=c,F.maximumClock=u,F.minimumCone=f,F.maximumCone=p,F.stackPartitions=d,F.slicePartitions=l,F.offsetAttribute=-1===h?void 0:h,new A(F))},A.createGeometry=function(t){var n=t._radii;if(!(n.x<=0||n.y<=0||n.z<=0)){var m=t._innerRadii;if(!(m.x<=0||m.y<=0||m.z<=0)){var _=t._minimumClock,w=t._maximumClock,A=t._minimumCone,x=t._maximumCone,P=t._vertexFormat,g=t._slicePartitions+1,T=t._stackPartitions+1;(g=Math.round(g*Math.abs(w-_)/d.n.TWO_PI))<2&&(g=2),(T=Math.round(T*Math.abs(x-A)/d.n.PI))<2&&(T=2);var F,D,I=0,L=[A],O=[_];for(F=0;F<T;F++)L.push(A+F*(x-A)/(T-1));for(L.push(x),D=0;D<g;D++)O.push(_+D*(w-_)/(g-1));O.push(w);var M=L.length,z=O.length,E=0,N=1,R=m.x!==n.x||m.y!==n.y||m.z!==n.z,G=!1,U=!1,S=!1;R&&(N=2,A>0&&(G=!0,E+=g-1),x<Math.PI&&(U=!0,E+=g-1),(w-_)%d.n.TWO_PI?(S=!0,E+=2*(T-1)+1):E+=1);var W=z*M*N,q=new Float64Array(3*W),B=e.d(new Array(W),!1),Y=e.d(new Array(W),!1),J=g*T*N,V=6*(J+E+1-(g+T)*N),X=p.IndexDatatype.createTypedArray(J,V),Z=P.normal?new Float32Array(3*W):void 0,j=P.tangent?new Float32Array(3*W):void 0,H=P.bitangent?new Float32Array(3*W):void 0,K=P.st?new Float32Array(2*W):void 0,Q=new Array(M),$=new Array(M);for(F=0;F<M;F++)Q[F]=C(L[F]),$[F]=k(L[F]);var tt=new Array(z),et=new Array(z);for(D=0;D<z;D++)et[D]=k(O[D]),tt[D]=C(O[D]);for(F=0;F<M;F++)for(D=0;D<z;D++)q[I++]=n.x*Q[F]*et[D],q[I++]=n.y*Q[F]*tt[D],q[I++]=n.z*$[F];var at,nt,it,rt,ot=W/2;if(R)for(F=0;F<M;F++)for(D=0;D<z;D++)q[I++]=m.x*Q[F]*et[D],q[I++]=m.y*Q[F]*tt[D],q[I++]=m.z*$[F],B[ot]=!0,F>0&&F!==M-1&&0!==D&&D!==z-1&&(Y[ot]=!0),ot++;for(I=0,F=1;F<M-2;F++)for(at=F*z,nt=(F+1)*z,D=1;D<z-2;D++)X[I++]=nt+D,X[I++]=nt+D+1,X[I++]=at+D+1,X[I++]=nt+D,X[I++]=at+D+1,X[I++]=at+D;if(R){var mt=M*z;for(F=1;F<M-2;F++)for(at=mt+F*z,nt=mt+(F+1)*z,D=1;D<z-2;D++)X[I++]=nt+D,X[I++]=at+D,X[I++]=at+D+1,X[I++]=nt+D,X[I++]=at+D+1,X[I++]=nt+D+1}if(R){if(G)for(rt=M*z,F=1;F<z-2;F++)X[I++]=F,X[I++]=F+1,X[I++]=rt+F+1,X[I++]=F,X[I++]=rt+F+1,X[I++]=rt+F;if(U)for(it=M*z-z,rt=M*z*N-z,F=1;F<z-2;F++)X[I++]=it+F+1,X[I++]=it+F,X[I++]=rt+F,X[I++]=it+F+1,X[I++]=rt+F,X[I++]=rt+F+1}if(S){for(F=1;F<M-2;F++)rt=z*M+z*F,it=z*F,X[I++]=rt,X[I++]=it+z,X[I++]=it,X[I++]=rt,X[I++]=rt+z,X[I++]=it+z;for(F=1;F<M-2;F++)rt=z*M+z*(F+1)-1,it=z*(F+1)-1,X[I++]=it+z,X[I++]=rt,X[I++]=it,X[I++]=it+z,X[I++]=rt+z,X[I++]=rt}var st=new u.t;P.position&&(st.position=new c.r({componentDatatype:r.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:q}));var ct,ut=0,ft=0,pt=0,dt=0,lt=W/2,_t=s.n.fromCartesian3(n),ht=s.n.fromCartesian3(m);if(P.st||P.normal||P.tangent||P.bitangent){for(F=0;F<W;F++){ct=B[F]?ht:_t;var vt=i.a.fromArray(q,3*F,h),yt=ct.geodeticSurfaceNormal(vt,v);if(P.st){var bt=Math.atan2(yt.y,yt.x);bt<0&&(bt+=d.n.TWO_PI),K[ut++]=bt/d.n.TWO_PI,K[ut++]=Math.asin(yt.z)/Math.PI+.5}if(P.normal&&(Y[F]&&i.a.negate(yt,yt),Z[ft++]=yt.x,Z[ft++]=yt.y,Z[ft++]=yt.z),P.tangent||P.bitangent){var wt,kt=y,Ct=0;if(B[F]&&(Ct=lt),wt=!G&&F>=Ct&&F<Ct+2*z?i.a.UNIT_X:i.a.UNIT_Z,i.a.cross(wt,yt,kt),i.a.normalize(kt,kt),P.tangent&&(j[pt++]=kt.x,j[pt++]=kt.y,j[pt++]=kt.z),P.bitangent){var At=i.a.cross(yt,kt,b);i.a.normalize(At,At),H[dt++]=At.x,H[dt++]=At.y,H[dt++]=At.z}}}P.st&&(st.st=new c.r({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:K})),P.normal&&(st.normal=new c.r({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:Z})),P.tangent&&(st.tangent=new c.r({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:j})),P.bitangent&&(st.bitangent=new c.r({componentDatatype:r.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:H}))}if(o.t(t._offsetAttribute)){var xt=q.length,Pt=new Uint8Array(xt/3),gt=t._offsetAttribute===f.I.NONE?0:1;e.d(Pt,gt),st.applyOffset=new c.r({componentDatatype:r.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:Pt})}return new c.T({attributes:st,indices:X,primitiveType:l._0x38df4a.TRIANGLES,boundingSphere:a.c.fromEllipsoid(_t),offsetAttribute:t._offsetAttribute})}}},A.getUnitEllipsoid=function(){return o.t(x)||(x=A.createGeometry(new A({radii:new i.a(1,1,1),vertexFormat:_.n.POSITION_ONLY}))),x},t.b=A}));