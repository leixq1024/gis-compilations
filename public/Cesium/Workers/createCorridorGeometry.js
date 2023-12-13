define(["./arrayFill-4d3cc415","./arrayRemoveDuplicates-a4c6347e","./buildModuleUrl-dba4ec07","./Cartographic-1bbcab04","./Check-3aa71481","./ComponentDatatype-d430c7f7","./PolylineVolumeGeometryLibrary-ae5f3405","./CorridorGeometryLibrary-a6333a0d","./when-515d5295","./Rectangle-e170be8b","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./GeometryOffsetAttribute-800f7650","./IndexDatatype-eefd5922","./Math-5e38123d","./PolygonPipeline-b8b35011","./PrimitiveType-b38a4004","./VertexFormat-e844760b","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Cartesian2-1b9b0d8a","./Cartesian4-034d54d5","./EllipsoidTangentPlane-fd839d7b","./IntersectionTests-5fa33dbd","./Plane-92c15089","./PolylinePipeline-bf1462fc","./EllipsoidGeodesic-e5406761","./EllipsoidRhumbLine-f50fdea6","./FeatureDetection-7fae0d5a","./WindingOrder-8479ef05"],(function(t,e,a,r,n,i,o,s,d,l,u,c,f,m,h,p,g,v,y,b,A,_,T,w,E,N,I,P,O,D,x,F){"use strict";var M=new r.a,L=new r.a,S=new r.a,C=new r.a,V=new r.a,G=new r.a,k=new r.a,R=new r.a;function H(t,e){for(var a=0;a<t.length;a++)t[a]=e.scaleToGeodeticSurface(t[a],t[a]);return t}function z(t,e,a,n,i,o){var d=t.normals,l=t.tangents,u=t.bitangents,c=r.a.normalize(r.a.cross(a,e,k),k);o.normal&&s.T.addAttribute(d,e,n,i),o.tangent&&s.T.addAttribute(l,c,n,i),o.bitangent&&s.T.addAttribute(u,a,n,i)}function U(t,e,a){var n,o,l,f=t.positions,p=t.corners,g=t.endPositions,v=t.lefts,y=t.normals,b=new c.t,A=0,_=0,T=0;for(o=0;o<f.length;o+=2)A+=l=f[o].length-3,T+=2*l,_+=f[o+1].length-3;for(A+=3,_+=3,o=0;o<p.length;o++){n=p[o];var w=p[o].leftPositions;d.t(w)?(A+=l=w.length,T+=l):(_+=l=p[o].rightPositions.length,T+=l)}var E,N=d.t(g);N&&(A+=E=g[0].length-3,_+=E,T+=6*(E/=3));var I,P,O,D,x,F,V=A+_,H=new Float64Array(V),U={normals:e.normal?new Float32Array(V):void 0,tangents:e.tangent?new Float32Array(V):void 0,bitangents:e.bitangent?new Float32Array(V):void 0},Y=0,B=V-1,W=M,q=L,J=E/2,j=m.IndexDatatype.createTypedArray(V/3,T),K=0;if(N){F=S,x=C;var Q=g[0];for(W=r.a.fromArray(y,0,W),q=r.a.fromArray(v,0,q),o=0;o<J;o++)F=r.a.fromArray(Q,3*(J-1-o),F),x=r.a.fromArray(Q,3*(J+o),x),s.T.addAttribute(H,x,Y),s.T.addAttribute(H,F,void 0,B),z(U,W,q,Y,B,e),D=(P=Y/3)+1,O=(I=(B-2)/3)-1,j[K++]=I,j[K++]=P,j[K++]=O,j[K++]=O,j[K++]=P,j[K++]=D,Y+=3,B-=3}var X,Z,$=0,tt=0,et=f[$++],at=f[$++];for(H.set(et,Y),H.set(at,B-at.length+1),q=r.a.fromArray(v,tt,q),l=at.length-3,o=0;o<l;o+=3)X=a.geodeticSurfaceNormal(r.a.fromArray(et,o,k),k),Z=a.geodeticSurfaceNormal(r.a.fromArray(at,l-o,R),R),z(U,W=r.a.normalize(r.a.add(X,Z,W),W),q,Y,B,e),D=(P=Y/3)+1,O=(I=(B-2)/3)-1,j[K++]=I,j[K++]=P,j[K++]=O,j[K++]=O,j[K++]=P,j[K++]=D,Y+=3,B-=3;for(X=a.geodeticSurfaceNormal(r.a.fromArray(et,l,k),k),Z=a.geodeticSurfaceNormal(r.a.fromArray(at,l,R),R),W=r.a.normalize(r.a.add(X,Z,W),W),tt+=3,o=0;o<p.length;o++){var rt,nt,it,ot=(n=p[o]).leftPositions,st=n.rightPositions,dt=G,lt=S,ut=C;if(W=r.a.fromArray(y,tt,W),d.t(ot)){for(z(U,W,q,void 0,B,e),B-=3,nt=D,it=O,rt=0;rt<ot.length/3;rt++)dt=r.a.fromArray(ot,3*rt,dt),j[K++]=nt,j[K++]=it-rt-1,j[K++]=it-rt,s.T.addAttribute(H,dt,void 0,B),lt=r.a.fromArray(H,3*(it-rt-1),lt),ut=r.a.fromArray(H,3*nt,ut),z(U,W,q=r.a.normalize(r.a.subtract(lt,ut,q),q),void 0,B,e),B-=3;dt=r.a.fromArray(H,3*nt,dt),lt=r.a.subtract(r.a.fromArray(H,3*it,lt),dt,lt),ut=r.a.subtract(r.a.fromArray(H,3*(it-rt),ut),dt,ut),z(U,W,q=r.a.normalize(r.a.add(lt,ut,q),q),Y,void 0,e),Y+=3}else{for(z(U,W,q,Y,void 0,e),Y+=3,nt=O,it=D,rt=0;rt<st.length/3;rt++)dt=r.a.fromArray(st,3*rt,dt),j[K++]=nt,j[K++]=it+rt,j[K++]=it+rt+1,s.T.addAttribute(H,dt,Y),lt=r.a.fromArray(H,3*nt,lt),ut=r.a.fromArray(H,3*(it+rt),ut),z(U,W,q=r.a.normalize(r.a.subtract(lt,ut,q),q),Y,void 0,e),Y+=3;dt=r.a.fromArray(H,3*nt,dt),lt=r.a.subtract(r.a.fromArray(H,3*(it+rt),lt),dt,lt),ut=r.a.subtract(r.a.fromArray(H,3*it,ut),dt,ut),z(U,W,q=r.a.normalize(r.a.negate(r.a.add(ut,lt,q),q),q),void 0,B,e),B-=3}for(et=f[$++],at=f[$++],et.splice(0,3),at.splice(at.length-3,3),H.set(et,Y),H.set(at,B-at.length+1),l=at.length-3,tt+=3,q=r.a.fromArray(v,tt,q),rt=0;rt<at.length;rt+=3)X=a.geodeticSurfaceNormal(r.a.fromArray(et,rt,k),k),Z=a.geodeticSurfaceNormal(r.a.fromArray(at,l-rt,R),R),z(U,W=r.a.normalize(r.a.add(X,Z,W),W),q,Y,B,e),P=(D=Y/3)-1,I=(O=(B-2)/3)+1,j[K++]=I,j[K++]=P,j[K++]=O,j[K++]=O,j[K++]=P,j[K++]=D,Y+=3,B-=3;Y-=3,B+=3}if(z(U,W=r.a.fromArray(y,y.length-3,W),q,Y,B,e),N){Y+=3,B-=3,F=S,x=C;var ct=g[1];for(o=0;o<J;o++)F=r.a.fromArray(ct,3*(E-o-1),F),x=r.a.fromArray(ct,3*o,x),s.T.addAttribute(H,F,void 0,B),s.T.addAttribute(H,x,Y),z(U,W,q,Y,B,e),P=(D=Y/3)-1,I=(O=(B-2)/3)+1,j[K++]=I,j[K++]=P,j[K++]=O,j[K++]=O,j[K++]=P,j[K++]=D,Y+=3,B-=3}if(b.position=new u.r({componentDatatype:i.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:H}),e.st){var ft,mt,ht=new Float32Array(V/3*2),pt=0;if(N){A/=3,_/=3;var gt=Math.PI/(E+1);mt=1/(A-E+1),ft=1/(_-E+1);var vt,yt=E/2;for(o=yt+1;o<E+1;o++)vt=h.n.PI_OVER_TWO+gt*o,ht[pt++]=ft*(1+Math.cos(vt)),ht[pt++]=.5*(1+Math.sin(vt));for(o=1;o<_-E+1;o++)ht[pt++]=o*ft,ht[pt++]=0;for(o=E;o>yt;o--)vt=h.n.PI_OVER_TWO-o*gt,ht[pt++]=1-ft*(1+Math.cos(vt)),ht[pt++]=.5*(1+Math.sin(vt));for(o=yt;o>0;o--)vt=h.n.PI_OVER_TWO-gt*o,ht[pt++]=1-mt*(1+Math.cos(vt)),ht[pt++]=.5*(1+Math.sin(vt));for(o=A-E;o>0;o--)ht[pt++]=o*mt,ht[pt++]=1;for(o=1;o<yt+1;o++)vt=h.n.PI_OVER_TWO+gt*o,ht[pt++]=mt*(1+Math.cos(vt)),ht[pt++]=.5*(1+Math.sin(vt))}else{for(mt=1/((A/=3)-1),ft=1/((_/=3)-1),o=0;o<_;o++)ht[pt++]=o*ft,ht[pt++]=0;for(o=A;o>0;o--)ht[pt++]=(o-1)*mt,ht[pt++]=1}b.st=new u.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:ht})}return e.normal&&(b.normal=new u.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:U.normals})),e.tangent&&(b.tangent=new u.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:U.tangents})),e.bitangent&&(b.bitangent=new u.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:U.bitangents})),{attributes:b,indices:j}}function Y(t,e,a){a[e++]=t[0],a[e++]=t[1],a[e++]=t[2];for(var r=3;r<t.length;r+=3){var n=t[r],i=t[r+1],o=t[r+2];a[e++]=n,a[e++]=i,a[e++]=o,a[e++]=n,a[e++]=i,a[e++]=o}return a[e++]=t[0],a[e++]=t[1],a[e++]=t[2],a}function B(e,a){var n=new v.n({position:a.position,normal:a.normal||a.bitangent||e.shadowVolume,tangent:a.tangent,bitangent:a.normal||a.bitangent,st:a.st}),o=e.ellipsoid,l=U(s.T.computePositions(e),n,o),c=e.height,h=e.extrudedHeight,g=l.attributes,y=l.indices,b=g.position.values,A=b.length,_=new Float64Array(6*A),T=new Float64Array(A);T.set(b);var w=new Float64Array(4*A);w=Y(b=p.T.scaleToGeodeticHeight(b,c,o),0,w),w=Y(T=p.T.scaleToGeodeticHeight(T,h,o),2*A,w),_.set(b),_.set(T,A),_.set(w,2*A),g.position.values=_,g=function(t,e){if(!(e.normal||e.tangent||e.bitangent||e.st))return t;var a,n,i=t.position.values;(e.normal||e.bitangent)&&(a=t.normal.values,n=t.bitangent.values);var o,d=t.position.values.length/18,l=3*d,u=2*d,c=2*l;if(e.normal||e.bitangent||e.tangent){var f=e.normal?new Float32Array(6*l):void 0,m=e.tangent?new Float32Array(6*l):void 0,h=e.bitangent?new Float32Array(6*l):void 0,p=M,g=L,v=S,y=C,b=V,A=G,_=c;for(o=0;o<l;o+=3){var T=_+c;p=r.a.fromArray(i,o,p),g=r.a.fromArray(i,o+l,g),v=r.a.fromArray(i,(o+3)%l,v),g=r.a.subtract(g,p,g),v=r.a.subtract(v,p,v),y=r.a.normalize(r.a.cross(g,v,y),y),e.normal&&(s.T.addAttribute(f,y,T),s.T.addAttribute(f,y,T+3),s.T.addAttribute(f,y,_),s.T.addAttribute(f,y,_+3)),(e.tangent||e.bitangent)&&(A=r.a.fromArray(a,o,A),e.bitangent&&(s.T.addAttribute(h,A,T),s.T.addAttribute(h,A,T+3),s.T.addAttribute(h,A,_),s.T.addAttribute(h,A,_+3)),e.tangent&&(b=r.a.normalize(r.a.cross(A,y,b),b),s.T.addAttribute(m,b,T),s.T.addAttribute(m,b,T+3),s.T.addAttribute(m,b,_),s.T.addAttribute(m,b,_+3))),_+=6}if(e.normal){for(f.set(a),o=0;o<l;o+=3)f[o+l]=-a[o],f[o+l+1]=-a[o+1],f[o+l+2]=-a[o+2];t.normal.values=f}else t.normal=void 0;if(e.bitangent?(h.set(n),h.set(n,l),t.bitangent.values=h):t.bitangent=void 0,e.tangent){var w=t.tangent.values;m.set(w),m.set(w,l),t.tangent.values=m}}if(e.st){var E=t.st.values,N=new Float32Array(6*u);N.set(E),N.set(E,u);for(var I=2*u,P=0;P<2;P++){for(N[I++]=E[0],N[I++]=E[1],o=2;o<u;o+=2){var O=E[o],D=E[o+1];N[I++]=O,N[I++]=D,N[I++]=O,N[I++]=D}N[I++]=E[0],N[I++]=E[1]}t.st.values=N}return t}(g,a);var E,N=A/3;if(e.shadowVolume){var I=g.normal.values;A=I.length;var P=new Float32Array(6*A);for(E=0;E<A;E++)I[E]=-I[E];P.set(I,A),P=Y(I,4*A,P),g.extrudeDirection=new u.r({componentDatatype:i.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:P}),a.normal||(g.normal=void 0)}if(d.t(e.offsetAttribute)){var O=new Uint8Array(6*N);if(e.offsetAttribute===f.I.TOP)O=t.d(O,1,0,N),O=t.d(O,1,2*N,4*N);else{var D=e.offsetAttribute===f.I.NONE?0:1;O=t.d(O,D)}g.applyOffset=new u.r({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:O})}var x=y.length,F=N+N,k=m.IndexDatatype.createTypedArray(_.length/3,2*x+3*F);k.set(y);var R,H,z,B,W=x;for(E=0;E<x;E+=3){var q=y[E],J=y[E+1],j=y[E+2];k[W++]=j+N,k[W++]=J+N,k[W++]=q+N}for(E=0;E<F;E+=2)z=(R=E+F)+1,B=(H=R+F)+1,k[W++]=R,k[W++]=H,k[W++]=z,k[W++]=z,k[W++]=H,k[W++]=B;return{attributes:g,indices:k}}var W=new r.a,q=new r.a,J=new r.i;function j(t,e,a,n,i,o){var s=r.a.subtract(e,t,W);r.a.normalize(s,s);var d=a.geodeticSurfaceNormal(t,q),l=r.a.cross(s,d,W);r.a.multiplyByScalar(l,n,l);var u=i.latitude,c=i.longitude,f=o.latitude,m=o.longitude;r.a.add(t,l,q),a.cartesianToCartographic(q,J);var h=J.latitude,p=J.longitude;u=Math.min(u,h),c=Math.min(c,p),f=Math.max(f,h),m=Math.max(m,p),r.a.subtract(t,l,q),a.cartesianToCartographic(q,J),h=J.latitude,p=J.longitude,u=Math.min(u,h),c=Math.min(c,p),f=Math.max(f,h),m=Math.max(m,p),i.latitude=u,i.longitude=c,o.latitude=f,o.longitude=m}var K=new r.a,Q=new r.a,X=new r.i,Z=new r.i;function $(t,a,n,i,s){t=H(t,a);var u=e.u(t,r.a.equalsEpsilon),c=u.length;if(c<2||n<=0)return new l.s;var f,m,h=.5*n;if(X.latitude=Number.POSITIVE_INFINITY,X.longitude=Number.POSITIVE_INFINITY,Z.latitude=Number.NEGATIVE_INFINITY,Z.longitude=Number.NEGATIVE_INFINITY,i===o.O.ROUNDED){var p=u[0];r.a.subtract(p,u[1],K),r.a.normalize(K,K),r.a.multiplyByScalar(K,h,K),r.a.add(p,K,Q),a.cartesianToCartographic(Q,J),f=J.latitude,m=J.longitude,X.latitude=Math.min(X.latitude,f),X.longitude=Math.min(X.longitude,m),Z.latitude=Math.max(Z.latitude,f),Z.longitude=Math.max(Z.longitude,m)}for(var g=0;g<c-1;++g)j(u[g],u[g+1],a,h,X,Z);var v=u[c-1];r.a.subtract(v,u[c-2],K),r.a.normalize(K,K),r.a.multiplyByScalar(K,h,K),r.a.add(v,K,Q),j(v,Q,a,h,X,Z),i===o.O.ROUNDED&&(a.cartesianToCartographic(Q,J),f=J.latitude,m=J.longitude,X.latitude=Math.min(X.latitude,f),X.longitude=Math.min(X.longitude,m),Z.latitude=Math.max(Z.latitude,f),Z.longitude=Math.max(Z.longitude,m));var y=d.t(s)?s:new l.s;return y.north=Z.latitude,y.south=X.latitude,y.east=Z.longitude,y.west=X.longitude,y}function tt(t){var e=(t=d.e(t,d.e.EMPTY_OBJECT)).positions,a=t.width;n.n.defined("options.positions",e),n.n.defined("options.width",a);var i=d.e(t.height,0),s=d.e(t.extrudedHeight,i);this._positions=e,this._ellipsoid=l.n.clone(d.e(t.ellipsoid,l.n.WGS84)),this._vertexFormat=v.n.clone(d.e(t.vertexFormat,v.n.DEFAULT)),this._width=a,this._height=Math.max(i,s),this._extrudedHeight=Math.min(i,s),this._cornerType=d.e(t.cornerType,o.O.ROUNDED),this._granularity=d.e(t.granularity,h.n.RADIANS_PER_DEGREE),this._shadowVolume=d.e(t.shadowVolume,!1),this._workerName="createCorridorGeometry",this._offsetAttribute=t.offsetAttribute,this._rectangle=void 0,this.packedLength=1+e.length*r.a.packedLength+l.n.packedLength+v.n.packedLength+7}tt.pack=function(t,e,a){n.n.defined("value",t),n.n.defined("array",e),a=d.e(a,0);var i=t._positions,o=i.length;e[a++]=o;for(var s=0;s<o;++s,a+=r.a.packedLength)r.a.pack(i[s],e,a);return l.n.pack(t._ellipsoid,e,a),a+=l.n.packedLength,v.n.pack(t._vertexFormat,e,a),a+=v.n.packedLength,e[a++]=t._width,e[a++]=t._height,e[a++]=t._extrudedHeight,e[a++]=t._cornerType,e[a++]=t._granularity,e[a++]=t._shadowVolume?1:0,e[a]=d.e(t._offsetAttribute,-1),e};var et=l.n.clone(l.n.UNIT_SPHERE),at=new v.n,rt={positions:void 0,ellipsoid:et,vertexFormat:at,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,shadowVolume:void 0,offsetAttribute:void 0};return tt.unpack=function(t,e,a){n.n.defined("array",t),e=d.e(e,0);for(var i=t[e++],o=new Array(i),s=0;s<i;++s,e+=r.a.packedLength)o[s]=r.a.unpack(t,e);var u=l.n.unpack(t,e,et);e+=l.n.packedLength;var c=v.n.unpack(t,e,at);e+=v.n.packedLength;var f=t[e++],m=t[e++],h=t[e++],p=t[e++],g=t[e++],y=1===t[e++],b=t[e];return d.t(a)?(a._positions=o,a._ellipsoid=l.n.clone(u,a._ellipsoid),a._vertexFormat=v.n.clone(c,a._vertexFormat),a._width=f,a._height=m,a._extrudedHeight=h,a._cornerType=p,a._granularity=g,a._shadowVolume=y,a._offsetAttribute=-1===b?void 0:b,a):(rt.positions=o,rt.width=f,rt.height=m,rt.extrudedHeight=h,rt.cornerType=p,rt.granularity=g,rt.shadowVolume=y,rt.offsetAttribute=-1===b?void 0:b,new tt(rt))},tt.computeRectangle=function(t,e){var a=(t=d.e(t,d.e.EMPTY_OBJECT)).positions,r=t.width;return n.n.defined("options.positions",a),n.n.defined("options.width",r),$(a,d.e(t.ellipsoid,l.n.WGS84),r,d.e(t.cornerType,o.O.ROUNDED),e)},tt.createGeometry=function(n){var o=n._positions,l=n._width,c=n._ellipsoid;o=H(o,c);var m=e.u(o,r.a.equalsEpsilon);if(!(m.length<2||l<=0)){var v,y=n._height,b=n._extrudedHeight,A=!h.n.equalsEpsilon(y,b,0,h.n.EPSILON2),_=n._vertexFormat,T={ellipsoid:c,positions:m,width:l,cornerType:n._cornerType,granularity:n._granularity,saveAttributes:!0};if(A)T.height=y,T.extrudedHeight=b,T.shadowVolume=n._shadowVolume,T.offsetAttribute=n._offsetAttribute,v=B(T,_);else if((v=U(s.T.computePositions(T),_,c)).attributes.position.values=p.T.scaleToGeodeticHeight(v.attributes.position.values,y,c),d.t(n._offsetAttribute)){var w=n._offsetAttribute===f.I.NONE?0:1,E=v.attributes.position.values.length,N=new Uint8Array(E/3);t.d(N,w),v.attributes.applyOffset=new u.r({componentDatatype:i.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:N})}var I=v.attributes,P=a.c.fromVertices(I.position.values,void 0,3);return _.position||(v.attributes.position.values=void 0),new u.T({attributes:I,indices:v.indices,primitiveType:g._0x38df4a.TRIANGLES,boundingSphere:P,offsetAttribute:n._offsetAttribute})}},tt.createShadowVolume=function(t,e,a){var r=t._granularity,n=t._ellipsoid,i=e(r,n),o=a(r,n);return new tt({positions:t._positions,width:t._width,cornerType:t._cornerType,ellipsoid:n,granularity:r,extrudedHeight:i,height:o,vertexFormat:v.n.POSITION_ONLY,shadowVolume:!0})},Object.defineProperties(tt.prototype,{rectangle:{get:function(){return d.t(this._rectangle)||(this._rectangle=$(this._positions,this._ellipsoid,this._width,this._cornerType)),this._rectangle}},textureCoordinateRotationPoints:{get:function(){return[0,0,0,1,1,0]}}}),function(t,e){return d.t(e)&&(t=tt.unpack(t,e)),t._ellipsoid=l.n.clone(t._ellipsoid),tt.createGeometry(t)}}));