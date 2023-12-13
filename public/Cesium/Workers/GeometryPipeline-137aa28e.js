define(["exports","./AttributeCompression-f9ee669b","./Cartesian2-1b9b0d8a","./Cartographic-1bbcab04","./Check-3aa71481","./when-515d5295","./Math-5e38123d","./buildModuleUrl-dba4ec07","./Cartesian4-034d54d5","./ComponentDatatype-d430c7f7","./EncodedCartesian3-d74c1b81","./Intersect-53434a77","./GeometryAttribute-9bc31a7f","./IndexDatatype-eefd5922","./IntersectionTests-5fa33dbd","./PrimitiveType-b38a4004","./Plane-92c15089"],(function(e,t,r,a,n,i,o,s,u,p,l,v,c,f,y,m,d){"use strict";var h=new a.a,b=new a.a,w=new a.a;function g(e,t,s,u,p){var l,v,c,f,y,m,d,g;if(n.n.defined("point",e),n.n.defined("p0",t),n.n.defined("p1",s),n.n.defined("p2",u),i.t(p)||(p=new a.a),i.t(t.z)){if(a.a.equalsEpsilon(e,t,o.n.EPSILON14))return a.a.clone(a.a.UNIT_X,p);if(a.a.equalsEpsilon(e,s,o.n.EPSILON14))return a.a.clone(a.a.UNIT_Y,p);if(a.a.equalsEpsilon(e,u,o.n.EPSILON14))return a.a.clone(a.a.UNIT_Z,p);l=a.a.subtract(s,t,h),v=a.a.subtract(u,t,b),c=a.a.subtract(e,t,w),f=a.a.dot(l,l),y=a.a.dot(l,v),m=a.a.dot(l,c),d=a.a.dot(v,v),g=a.a.dot(v,c)}else{if(r.r.equalsEpsilon(e,t,o.n.EPSILON14))return a.a.clone(a.a.UNIT_X,p);if(r.r.equalsEpsilon(e,s,o.n.EPSILON14))return a.a.clone(a.a.UNIT_Y,p);if(r.r.equalsEpsilon(e,u,o.n.EPSILON14))return a.a.clone(a.a.UNIT_Z,p);l=r.r.subtract(s,t,h),v=r.r.subtract(u,t,b),c=r.r.subtract(e,t,w),f=r.r.dot(l,l),y=r.r.dot(l,v),m=r.r.dot(l,c),d=r.r.dot(v,v),g=r.r.dot(v,c)}p.y=d*m-y*g,p.z=f*g-y*m;var T=f*d-y*y;return 0!==p.y&&(p.y/=T),0!==p.z&&(p.z/=T),p.x=1-p.y-p.z,p}var T={calculateACMR:function(e){var t=(e=i.e(e,i.e.EMPTY_OBJECT)).indices,r=e.maximumIndex,a=i.e(e.cacheSize,24);if(!i.t(t))throw new n.t("indices is required.");var o=t.length;if(o<3||o%3!=0)throw new n.t("indices length must be a multiple of three.");if(r<=0)throw new n.t("maximumIndex must be greater than zero.");if(a<3)throw new n.t("cacheSize must be greater than two.");if(!i.t(r)){r=0;for(var s=0,u=t[s];s<o;)u>r&&(r=u),u=t[++s]}for(var p=[],l=0;l<r+1;l++)p[l]=0;for(var v=a+1,c=0;c<o;++c)v-p[t[c]]>a&&(p[t[c]]=v,++v);return(v-a+1)/(o/3)}};T.tipsify=function(e){var t,r=(e=i.e(e,i.e.EMPTY_OBJECT)).indices,a=e.maximumIndex,o=i.e(e.cacheSize,24);function s(e,r,a,n,i,o,s){for(var u,p=-1,l=-1,v=0;v<a.length;){var c=a[v];n[c].numLiveTriangles&&(u=0,i-n[c].timeStamp+2*n[c].numLiveTriangles<=r&&(u=i-n[c].timeStamp),(u>l||-1===l)&&(l=u,p=c)),++v}return-1===p?function(e,r,a,n){for(;r.length>=1;){var i=r[r.length-1];if(r.splice(r.length-1,1),e[i].numLiveTriangles>0)return i}for(;t<n;){if(e[t].numLiveTriangles>0)return++t-1;++t}return-1}(n,o,0,s):p}if(!i.t(r))throw new n.t("indices is required.");var u=r.length;if(u<3||u%3!=0)throw new n.t("indices length must be a multiple of three.");if(a<=0)throw new n.t("maximumIndex must be greater than zero.");if(o<3)throw new n.t("cacheSize must be greater than two.");var p=0,l=0,v=r[l],c=u;if(i.t(a))p=a+1;else{for(;l<c;)v>p&&(p=v),v=r[++l];if(-1===p)return 0;++p}var f,y=[];for(f=0;f<p;f++)y[f]={numLiveTriangles:0,timeStamp:0,vertexTriangles:[]};l=0;for(var m=0;l<c;)y[r[l]].vertexTriangles.push(m),++y[r[l]].numLiveTriangles,y[r[l+1]].vertexTriangles.push(m),++y[r[l+1]].numLiveTriangles,y[r[l+2]].vertexTriangles.push(m),++y[r[l+2]].numLiveTriangles,++m,l+=3;var d=0,h=o+1;t=1;var b,w,g,T,x=[],A=[],I=0,S=[],P=u/3,N=[];for(f=0;f<P;f++)N[f]=!1;for(;-1!==d;){x=[],T=(w=y[d]).vertexTriangles.length;for(var E=0;E<T;++E)if(!N[m=w.vertexTriangles[E]]){N[m]=!0,l=m+m+m;for(var O=0;O<3;++O)g=r[l],x.push(g),A.push(g),S[I]=g,++I,--(b=y[g]).numLiveTriangles,h-b.timeStamp>o&&(b.timeStamp=h,++h),++l}d=s(0,o,x,y,h,A,p)}return S};var x={};function A(e,t,r,a,n){e[t++]=r,e[t++]=a,e[t++]=a,e[t++]=n,e[t++]=n,e[t]=r}function I(e){var t={};for(var r in e)if(e.hasOwnProperty(r)&&i.t(e[r])&&i.t(e[r].values)){var a=e[r];t[r]=new c.r({componentDatatype:a.componentDatatype,componentsPerAttribute:a.componentsPerAttribute,normalize:a.normalize,values:[]})}return t}function S(e,t,r){for(var a in t)if(t.hasOwnProperty(a)&&i.t(t[a])&&i.t(t[a].values))for(var n=t[a],o=0;o<n.componentsPerAttribute;++o)e[a].values.push(n.values[r*n.componentsPerAttribute+o])}x.toWireframe=function(e){if(!i.t(e))throw new n.t("geometry is required.");var t=e.indices;if(i.t(t)){switch(e.primitiveType){case m._0x38df4a.TRIANGLES:e.indices=function(e){for(var t=e.length,r=t/3*6,a=f.IndexDatatype.createTypedArray(t,r),n=0,i=0;i<t;i+=3,n+=6)A(a,n,e[i],e[i+1],e[i+2]);return a}(t);break;case m._0x38df4a.TRIANGLE_STRIP:e.indices=function(e){var t=e.length;if(t>=3){var r=6*(t-2),a=f.IndexDatatype.createTypedArray(t,r);A(a,0,e[0],e[1],e[2]);for(var n=6,i=3;i<t;++i,n+=6)A(a,n,e[i-1],e[i],e[i-2]);return a}return new Uint16Array}(t);break;case m._0x38df4a.TRIANGLE_FAN:e.indices=function(e){if(e.length>0){for(var t=e.length-1,r=6*(t-1),a=f.IndexDatatype.createTypedArray(t,r),n=e[0],i=0,o=1;o<t;++o,i+=6)A(a,i,n,e[o],e[o+1]);return a}return new Uint16Array}(t);break;default:throw new n.t("geometry.primitiveType must be TRIANGLES, TRIANGLE_STRIP, or TRIANGLE_FAN.")}e.primitiveType=m._0x38df4a.LINES}return e},x.createLineSegmentsForVectors=function(e,t,r){if(t=i.e(t,"normal"),!i.t(e))throw new n.t("geometry is required.");if(!i.t(e.attributes.position))throw new n.t("geometry.attributes.position is required.");if(!i.t(e.attributes[t]))throw new n.t("geometry.attributes must have an attribute with the same name as the attributeName parameter, "+t+".");r=i.e(r,1e4);for(var a=e.attributes.position.values,o=e.attributes[t].values,u=a.length,l=new Float64Array(2*u),v=0,f=0;f<u;f+=3)l[v++]=a[f],l[v++]=a[f+1],l[v++]=a[f+2],l[v++]=a[f]+o[f]*r,l[v++]=a[f+1]+o[f+1]*r,l[v++]=a[f+2]+o[f+2]*r;var y,d=e.boundingSphere;return i.t(d)&&(y=new s.c(d.center,d.radius+r)),new c.T({attributes:{position:new c.r({componentDatatype:p.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:l})},primitiveType:m._0x38df4a.LINES,boundingSphere:y})},x.createAttributeLocations=function(e){if(!i.t(e))throw new n.t("geometry is required.");var t,r=["position","positionHigh","positionLow","position3DHigh","position3DLow","position2DHigh","position2DLow","pickColor","normal","st","tangent","bitangent","extrudeDirection","compressedAttributes"],a=e.attributes,o={},s=0,u=r.length;for(t=0;t<u;++t){var p=r[t];i.t(a[p])&&(o[p]=s++)}for(var l in a)a.hasOwnProperty(l)&&!i.t(o[l])&&(o[l]=s++);return o},x.reorderForPreVertexCache=function(e){if(!i.t(e))throw new n.t("geometry is required.");var t=c.T.computeNumberOfVertices(e),r=e.indices;if(i.t(r)){for(var a=new Int32Array(t),o=0;o<t;o++)a[o]=-1;for(var s,u=r,l=u.length,v=f.IndexDatatype.createTypedArray(t,l),y=0,m=0,d=0;y<l;)-1!==(s=a[u[y]])?v[m]=s:(a[s=u[y]]=d,v[m]=d,++d),++y,++m;e.indices=v;var h=e.attributes;for(var b in h)if(h.hasOwnProperty(b)&&i.t(h[b])&&i.t(h[b].values)){for(var w=h[b],g=w.values,T=0,x=w.componentsPerAttribute,A=p.ComponentDatatype.createTypedArray(w.componentDatatype,d*x);T<t;){var I=a[T];if(-1!==I)for(var S=0;S<x;S++)A[x*I+S]=g[x*T+S];++T}w.values=A}}return e},x.reorderForPostVertexCache=function(e,t){if(!i.t(e))throw new n.t("geometry is required.");var r=e.indices;if(e.primitiveType===m._0x38df4a.TRIANGLES&&i.t(r)){for(var a=r.length,o=0,s=0;s<a;s++)r[s]>o&&(o=r[s]);e.indices=T.tipsify({indices:r,maximumIndex:o,cacheSize:t})}return e},x.fitToUnsignedShortIndices=function(e){if(!i.t(e))throw new n.t("geometry is required.");if(i.t(e.indices)&&e.primitiveType!==m._0x38df4a.TRIANGLES&&e.primitiveType!==m._0x38df4a.LINES&&e.primitiveType!==m._0x38df4a.POINTS)throw new n.t("geometry.primitiveType must equal to PrimitiveType.TRIANGLES, PrimitiveType.LINES, or PrimitiveType.POINTS.");var t=[],r=c.T.computeNumberOfVertices(e);if(i.t(e.indices)&&r>=o.n.SIXTY_FOUR_KILOBYTES){var a,s=[],u=[],p=0,l=I(e.attributes),v=e.indices,f=v.length;e.primitiveType===m._0x38df4a.TRIANGLES?a=3:e.primitiveType===m._0x38df4a.LINES?a=2:e.primitiveType===m._0x38df4a.POINTS&&(a=1);for(var y=0;y<f;y+=a){for(var d=0;d<a;++d){var h=v[y+d],b=s[h];i.t(b)||(b=p++,s[h]=b,S(l,e.attributes,h)),u.push(b)}p+a>=o.n.SIXTY_FOUR_KILOBYTES&&(t.push(new c.T({attributes:l,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV})),s=[],u=[],p=0,l=I(e.attributes))}0!==u.length&&t.push(new c.T({attributes:l,indices:u,primitiveType:e.primitiveType,boundingSphere:e.boundingSphere,boundingSphereCV:e.boundingSphereCV}))}else t.push(e);return t};var P=new a.a,N=new a.i;x.projectTo2D=function(e,t,r,o,s){if(!i.t(e))throw new n.t("geometry is required.");if(!i.t(t))throw new n.t("attributeName is required.");if(!i.t(r))throw new n.t("attributeName3D is required.");if(!i.t(o))throw new n.t("attributeName2D is required.");if(!i.t(e.attributes[t]))throw new n.t("geometry must have attribute matching the attributeName argument: "+t+".");if(e.attributes[t].componentDatatype!==p.ComponentDatatype.DOUBLE)throw new n.t("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");for(var u=e.attributes[t],l=(s=i.t(s)?s:new v.s).ellipsoid,f=u.values,y=new Float64Array(f.length),m=0,d=0;d<f.length;d+=3){var h=a.a.fromArray(f,d,P),b=l.cartesianToCartographic(h,N);if(!i.t(b))throw new n.t("Could not project point ("+h.x+", "+h.y+", "+h.z+") to 2D.");var w=s.project(b,P);y[m++]=w.x,y[m++]=w.y,y[m++]=w.z}return e.attributes[r]=u,e.attributes[o]=new c.r({componentDatatype:p.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y}),delete e.attributes[t],e};var E={high:0,low:0};x.encodeAttribute=function(e,t,r,a){if(!i.t(e))throw new n.t("geometry is required.");if(!i.t(t))throw new n.t("attributeName is required.");if(!i.t(r))throw new n.t("attributeHighName is required.");if(!i.t(a))throw new n.t("attributeLowName is required.");if(!i.t(e.attributes[t]))throw new n.t("geometry must have attribute matching the attributeName argument: "+t+".");if(e.attributes[t].componentDatatype!==p.ComponentDatatype.DOUBLE)throw new n.t("The attribute componentDatatype must be ComponentDatatype.DOUBLE.");for(var o=e.attributes[t],s=o.values,u=s.length,v=new Float32Array(u),f=new Float32Array(u),y=0;y<u;++y)l.t.encode(s[y],E),v[y]=E.high,f[y]=E.low;var m=o.componentsPerAttribute;return e.attributes[r]=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:m,values:v}),e.attributes[a]=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:m,values:f}),delete e.attributes[t],e};var O=new a.a;function L(e,t){if(i.t(t))for(var r=t.values,n=r.length,o=0;o<n;o+=3)a.a.unpack(r,o,O),m.c.multiplyByPoint(e,O,O),a.a.pack(O,r,o)}function D(e,t){if(i.t(t))for(var r=t.values,n=r.length,o=0;o<n;o+=3)a.a.unpack(r,o,O),m.r.multiplyByVector(e,O,O),O=a.a.normalize(O,O),a.a.pack(O,r,o)}var z=new m.c,_=new m.r;x.transformToWorldCoordinates=function(e){if(!i.t(e))throw new n.t("instance is required.");var t=e.modelMatrix;if(m.c.equals(t,m.c.IDENTITY))return e;var r=e.geometry.attributes;L(t,r.position),L(t,r.prevPosition),L(t,r.nextPosition),(i.t(r.normal)||i.t(r.tangent)||i.t(r.bitangent))&&(m.c.inverse(t,z),m.c.transpose(z,z),m.c.getRotation(z,_),D(_,r.normal),D(_,r.tangent),D(_,r.bitangent));var a=e.geometry.boundingSphere;return i.t(a)&&(e.geometry.boundingSphere=s.c.transform(a,t,a)),e.modelMatrix=m.c.clone(m.c.IDENTITY),e};var q=new a.a;function C(e,t){var r,o,u,l,v=e.length,y=e[0].modelMatrix,d=i.t(e[0][t].indices),h=e[0][t].primitiveType;for(o=1;o<v;++o){if(!m.c.equals(e[o].modelMatrix,y))throw new n.t("All instances must have the same modelMatrix.");if(i.t(e[o][t].indices)!==d)throw new n.t("All instance geometries must have an indices or not have one.");if(e[o][t].primitiveType!==h)throw new n.t("All instance geometries must have the same primitiveType.")}var b,w,g,T,x=function(e,t){var r,a=e.length,n={},o=e[0][t].attributes;for(r in o)if(o.hasOwnProperty(r)&&i.t(o[r])&&i.t(o[r].values)){for(var s=o[r],u=s.values.length,l=!0,v=1;v<a;++v){var f=e[v][t].attributes[r];if(!i.t(f)||s.componentDatatype!==f.componentDatatype||s.componentsPerAttribute!==f.componentsPerAttribute||s.normalize!==f.normalize){l=!1;break}u+=f.values.length}l&&(n[r]=new c.r({componentDatatype:s.componentDatatype,componentsPerAttribute:s.componentsPerAttribute,normalize:s.normalize,values:p.ComponentDatatype.createTypedArray(s.componentDatatype,u)}),s.isInstanceAttribute&&(n[r].isInstanceAttribute=!0))}return n}(e,t);for(r in x)if(x.hasOwnProperty(r))for(b=x[r].values,l=0,o=0;o<v;++o)for(g=(w=e[o][t].attributes[r].values).length,u=0;u<g;++u)b[l++]=w[u];if(d){var A=0;for(o=0;o<v;++o)A+=e[o][t].indices.length;var I=c.T.computeNumberOfVertices(new c.T({attributes:x,primitiveType:m._0x38df4a.POINTS})),S=f.IndexDatatype.createTypedArray(I,A),P=0,N=0;for(o=0;o<v;++o){var E=e[o][t].indices,O=E.length;for(l=0;l<O;++l)S[P++]=N+E[l];N+=c.T.computeNumberOfVertices(e[o][t])}T=S}var L,D=new a.a,z=0;for(o=0;o<v;++o){if(L=e[o][t].boundingSphere,!i.t(L)){D=void 0;break}a.a.add(L.center,D,D)}if(i.t(D))for(a.a.divideByScalar(D,v,D),o=0;o<v;++o){L=e[o][t].boundingSphere;var _=a.a.magnitude(a.a.subtract(L.center,D,q))+L.radius;_>z&&(z=_)}return new c.T({attributes:x,indices:T,primitiveType:h,boundingSphere:i.t(D)?new s.c(D,z):void 0})}x.combineInstances=function(e){if(!i.t(e)||e.length<1)throw new n.t("instances is required and must have length greater than zero.");for(var t=[],r=[],a=e.length,o=0;o<a;++o){var s=e[o];i.t(s.geometry)?t.push(s):i.t(s.westHemisphereGeometry)&&i.t(s.eastHemisphereGeometry)&&r.push(s)}var u=[];return t.length>0&&u.push(C(t,"geometry")),r.length>0&&(u.push(C(r,"westHemisphereGeometry")),u.push(C(r,"eastHemisphereGeometry"))),u};var R=new a.a,G=new a.a,F=new a.a,k=new a.a;x.computeNormal=function(e){if(!i.t(e))throw new n.t("geometry is required.");if(!i.t(e.attributes.position)||!i.t(e.attributes.position.values))throw new n.t("geometry.attributes.position.values is required.");if(!i.t(e.indices))throw new n.t("geometry.indices is required.");if(e.indices.length<2||e.indices.length%3!=0)throw new n.t("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==m._0x38df4a.TRIANGLES)throw new n.t("geometry.primitiveType must be PrimitiveType.TRIANGLES.");var t,r=e.indices,s=e.attributes,u=s.position.values,l=s.position.values.length/3,v=r.length,f=new Array(l),y=new Array(v/3),d=new Array(v);for(t=0;t<l;t++)f[t]={indexOffset:0,count:0,currentCount:0};var h=0;for(t=0;t<v;t+=3){var b=r[t],w=r[t+1],g=r[t+2],T=3*b,x=3*w,A=3*g;G.x=u[T],G.y=u[T+1],G.z=u[T+2],F.x=u[x],F.y=u[x+1],F.z=u[x+2],k.x=u[A],k.y=u[A+1],k.z=u[A+2],f[b].count++,f[w].count++,f[g].count++,a.a.subtract(F,G,F),a.a.subtract(k,G,k),y[h]=a.a.cross(F,k,new a.a),h++}var I,S=0;for(t=0;t<l;t++)f[t].indexOffset+=S,S+=f[t].count;for(h=0,t=0;t<v;t+=3){var P=(I=f[r[t]]).indexOffset+I.currentCount;d[P]=h,I.currentCount++,d[P=(I=f[r[t+1]]).indexOffset+I.currentCount]=h,I.currentCount++,d[P=(I=f[r[t+2]]).indexOffset+I.currentCount]=h,I.currentCount++,h++}var N=new Float32Array(3*l);for(t=0;t<l;t++){var E=3*t;if(I=f[t],a.a.clone(a.a.ZERO,R),I.count>0){for(h=0;h<I.count;h++)a.a.add(R,y[d[I.indexOffset+h]],R);a.a.equalsEpsilon(a.a.ZERO,R,o.n.EPSILON10)&&a.a.clone(y[d[I.indexOffset]],R)}a.a.equalsEpsilon(a.a.ZERO,R,o.n.EPSILON10)&&(R.z=1),a.a.normalize(R,R),N[E]=R.x,N[E+1]=R.y,N[E+2]=R.z}return e.attributes.normal=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:N}),e};var B=new a.a,U=new a.a,V=new a.a;x.computeTangentAndBitangent=function(e){if(!i.t(e))throw new n.t("geometry is required.");var t=e.attributes,r=e.indices;if(!i.t(t.position)||!i.t(t.position.values))throw new n.t("geometry.attributes.position.values is required.");if(!i.t(t.normal)||!i.t(t.normal.values))throw new n.t("geometry.attributes.normal.values is required.");if(!i.t(t.st)||!i.t(t.st.values))throw new n.t("geometry.attributes.st.values is required.");if(!i.t(r))throw new n.t("geometry.indices is required.");if(r.length<2||r.length%3!=0)throw new n.t("geometry.indices length must be greater than 0 and be a multiple of 3.");if(e.primitiveType!==m._0x38df4a.TRIANGLES)throw new n.t("geometry.primitiveType must be PrimitiveType.TRIANGLES.");var o,s,u,l,v=e.attributes.position.values,f=e.attributes.normal.values,y=e.attributes.st.values,d=e.attributes.position.values.length/3,h=r.length,b=new Array(3*d);for(o=0;o<b.length;o++)b[o]=0;for(o=0;o<h;o+=3){var w=r[o],g=r[o+1],T=r[o+2];u=3*g,l=3*T;var x=2*w,A=2*g,I=2*T,S=v[s=3*w],P=v[s+1],N=v[s+2],E=y[x],O=y[x+1],L=y[A+1]-O,D=y[I+1]-O,z=1/((y[A]-E)*D-(y[I]-E)*L),_=(D*(v[u]-S)-L*(v[l]-S))*z,q=(D*(v[u+1]-P)-L*(v[l+1]-P))*z,C=(D*(v[u+2]-N)-L*(v[l+2]-N))*z;b[s]+=_,b[s+1]+=q,b[s+2]+=C,b[u]+=_,b[u+1]+=q,b[u+2]+=C,b[l]+=_,b[l+1]+=q,b[l+2]+=C}var R=new Float32Array(3*d),G=new Float32Array(3*d);for(o=0;o<d;o++){u=(s=3*o)+1,l=s+2;var F=a.a.fromArray(f,s,B),k=a.a.fromArray(b,s,V),M=a.a.dot(F,k);a.a.multiplyByScalar(F,M,U),a.a.normalize(a.a.subtract(k,U,k),k),R[s]=k.x,R[u]=k.y,R[l]=k.z,a.a.normalize(a.a.cross(F,k,k),k),G[s]=k.x,G[u]=k.y,G[l]=k.z}return e.attributes.tangent=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:R}),e.attributes.bitangent=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:3,values:G}),e};var M=new r.r,Y=new a.a,Z=new a.a,H=new a.a,W=new r.r;function X(e){switch(e.primitiveType){case m._0x38df4a.TRIANGLE_FAN:return function(e){var t=c.T.computeNumberOfVertices(e);if(t<3)throw new n.t("The number of vertices must be at least three.");var r=f.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=1,r[1]=0,r[2]=2;for(var a=3,i=3;i<t;++i)r[a++]=i-1,r[a++]=0,r[a++]=i;return e.indices=r,e.primitiveType=m._0x38df4a.TRIANGLES,e}(e);case m._0x38df4a.TRIANGLE_STRIP:return function(e){var t=c.T.computeNumberOfVertices(e);if(t<3)throw new n.t("The number of vertices must be at least 3.");var r=f.IndexDatatype.createTypedArray(t,3*(t-2));r[0]=0,r[1]=1,r[2]=2,t>3&&(r[3]=0,r[4]=2,r[5]=3);for(var a=6,i=3;i<t-1;i+=2)r[a++]=i,r[a++]=i-1,r[a++]=i+1,i+2<t&&(r[a++]=i,r[a++]=i+1,r[a++]=i+2);return e.indices=r,e.primitiveType=m._0x38df4a.TRIANGLES,e}(e);case m._0x38df4a.TRIANGLES:return function(e){if(i.t(e.indices))return e;var t=c.T.computeNumberOfVertices(e);if(t<3)throw new n.t("The number of vertices must be at least three.");if(t%3!=0)throw new n.t("The number of vertices must be a multiple of three.");for(var r=f.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e);case m._0x38df4a.LINE_STRIP:return function(e){var t=c.T.computeNumberOfVertices(e);if(t<2)throw new n.t("The number of vertices must be at least two.");var r=f.IndexDatatype.createTypedArray(t,2*(t-1));r[0]=0,r[1]=1;for(var a=2,i=2;i<t;++i)r[a++]=i-1,r[a++]=i;return e.indices=r,e.primitiveType=m._0x38df4a.LINES,e}(e);case m._0x38df4a.LINE_LOOP:return function(e){var t=c.T.computeNumberOfVertices(e);if(t<2)throw new n.t("The number of vertices must be at least two.");var r=f.IndexDatatype.createTypedArray(t,2*t);r[0]=0,r[1]=1;for(var a=2,i=2;i<t;++i)r[a++]=i-1,r[a++]=i;return r[a++]=t-1,r[a]=0,e.indices=r,e.primitiveType=m._0x38df4a.LINES,e}(e);case m._0x38df4a.LINES:return function(e){if(i.t(e.indices))return e;var t=c.T.computeNumberOfVertices(e);if(t<2)throw new n.t("The number of vertices must be at least two.");if(t%2!=0)throw new n.t("The number of vertices must be a multiple of 2.");for(var r=f.IndexDatatype.createTypedArray(t,t),a=0;a<t;++a)r[a]=a;return e.indices=r,e}(e)}return e}function j(e,t){Math.abs(e.y)<o.n.EPSILON6&&(e.y=t?-o.n.EPSILON6:o.n.EPSILON6)}x.compressVertices=function(e){if(!i.t(e))throw new n.t("geometry is required.");var o,s,u=e.attributes.extrudeDirection;if(i.t(u)){var l=u.values;s=l.length/3;var v=new Float32Array(2*s),f=0;for(o=0;o<s;++o)a.a.fromArray(l,3*o,Y),a.a.equals(Y,a.a.ZERO)?f+=2:(W=t.r.octEncodeInRange(Y,65535,W),v[f++]=W.x,v[f++]=W.y);return e.attributes.compressedAttributes=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:2,values:v}),delete e.attributes.extrudeDirection,e}var y=e.attributes.normal,m=e.attributes.st,d=i.t(y),h=i.t(m);if(!d&&!h)return e;var b,w,g,T,x=e.attributes.tangent,A=e.attributes.bitangent,I=i.t(x),S=i.t(A);d&&(b=y.values),h&&(w=m.values),I&&(g=x.values),S&&(T=A.values);var P=s=(d?b.length:w.length)/(d?3:2),N=h&&d?2:1;N+=I||S?1:0;var E=new Float32Array(P*=N),O=0;for(o=0;o<s;++o){h&&(r.r.fromArray(w,2*o,M),E[O++]=t.r.compressTextureCoordinates(M));var L=3*o;d&&i.t(g)&&i.t(T)?(a.a.fromArray(b,L,Y),a.a.fromArray(g,L,Z),a.a.fromArray(T,L,H),t.r.octPack(Y,Z,H,M),E[O++]=M.x,E[O++]=M.y):(d&&(a.a.fromArray(b,L,Y),E[O++]=t.r.octEncodeFloat(Y)),I&&(a.a.fromArray(g,L,Y),E[O++]=t.r.octEncodeFloat(Y)),S&&(a.a.fromArray(T,L,Y),E[O++]=t.r.octEncodeFloat(Y)))}return e.attributes.compressedAttributes=new c.r({componentDatatype:p.ComponentDatatype.FLOAT,componentsPerAttribute:N,values:E}),d&&delete e.attributes.normal,h&&delete e.attributes.st,S&&delete e.attributes.bitangent,I&&delete e.attributes.tangent,e};var J=new a.a;function K(e,t,r,n){a.a.add(e,a.a.multiplyByScalar(a.a.subtract(t,e,J),e.y/(e.y-t.y),J),r),a.a.clone(r,n),j(r,!0),j(n,!1)}var Q=new a.a,$=new a.a,ee=new a.a,te=new a.a,re={positions:new Array(7),indices:new Array(9)};function ae(e,t,r){if(!(e.x>=0||t.x>=0||r.x>=0)){!function(e,t,r){if(0!==e.y&&0!==t.y&&0!==r.y)return j(e,e.y<0),j(t,t.y<0),void j(r,r.y<0);var a=Math.abs(e.y),n=Math.abs(t.y),i=Math.abs(r.y),s=(a>n?a>i?o.n.sign(e.y):o.n.sign(r.y):n>i?o.n.sign(t.y):o.n.sign(r.y))<0;j(e,s),j(t,s),j(r,s)}(e,t,r);var a=e.y<0,n=t.y<0,i=r.y<0,s=0;s+=a?1:0,s+=n?1:0;var u=re.indices;1===(s+=i?1:0)?(u[1]=3,u[2]=4,u[5]=6,u[7]=6,u[8]=5,a?(K(e,t,Q,ee),K(e,r,$,te),u[0]=0,u[3]=1,u[4]=2,u[6]=1):n?(K(t,r,Q,ee),K(t,e,$,te),u[0]=1,u[3]=2,u[4]=0,u[6]=2):i&&(K(r,e,Q,ee),K(r,t,$,te),u[0]=2,u[3]=0,u[4]=1,u[6]=0)):2===s&&(u[2]=4,u[4]=4,u[5]=3,u[7]=5,u[8]=6,a?n?i||(K(r,e,Q,ee),K(r,t,$,te),u[0]=0,u[1]=1,u[3]=0,u[6]=2):(K(t,r,Q,ee),K(t,e,$,te),u[0]=2,u[1]=0,u[3]=2,u[6]=1):(K(e,t,Q,ee),K(e,r,$,te),u[0]=1,u[1]=2,u[3]=1,u[6]=0));var p=re.positions;return p[0]=e,p[1]=t,p[2]=r,p.length=3,(1===s||2===s)&&(p[3]=Q,p[4]=$,p[5]=ee,p[6]=te,p.length=7),re}}function ne(e,t){var r=e.attributes;if(0!==r.position.values.length){for(var a in r)if(r.hasOwnProperty(a)&&i.t(r[a])&&i.t(r[a].values)){var n=r[a];n.values=p.ComponentDatatype.createTypedArray(n.componentDatatype,n.values)}var o=c.T.computeNumberOfVertices(e);return e.indices=f.IndexDatatype.createTypedArray(o,e.indices),t&&(e.boundingSphere=s.c.fromVertices(r.position.values)),e}}function ie(e){var t=e.attributes,r={};for(var a in t)if(t.hasOwnProperty(a)&&i.t(t[a])&&i.t(t[a].values)){var n=t[a];r[a]=new c.r({componentDatatype:n.componentDatatype,componentsPerAttribute:n.componentsPerAttribute,normalize:n.normalize,values:[]})}return new c.T({attributes:r,indices:[],primitiveType:e.primitiveType})}function oe(e,t,r){var a=i.t(e.geometry.boundingSphere);t=ne(t,a),r=ne(r,a),i.t(r)&&!i.t(t)?e.geometry=r:!i.t(r)&&i.t(t)?e.geometry=t:(e.westHemisphereGeometry=t,e.eastHemisphereGeometry=r,e.geometry=void 0)}function se(e,t){var r=new e,a=new e,n=new e;return function(i,o,s,u,p,l,v,c){var f=e.fromArray(p,i*t,r),y=e.fromArray(p,o*t,a),m=e.fromArray(p,s*t,n);e.multiplyByScalar(f,u.x,f),e.multiplyByScalar(y,u.y,y),e.multiplyByScalar(m,u.z,m);var d=e.add(f,y,f);e.add(d,m,d),c&&e.normalize(d,d),e.pack(d,l,v*t)}}var ue=se(u.a,4),pe=se(a.a,3),le=se(r.r,2),ve=new a.a,ce=new a.a,fe=new a.a,ye=new a.a;function me(e,t,r,n,s,u,p,l,v,c,f,y,m,d,h,b){if(i.t(u)||i.t(p)||i.t(l)||i.t(v)||i.t(c)||0!==d){var w=g(n,a.a.fromArray(s,3*e,ve),a.a.fromArray(s,3*t,ce),a.a.fromArray(s,3*r,fe),ye);if(i.t(u)&&pe(e,t,r,w,u,y.normal.values,b,!0),i.t(c)){var T,x=a.a.fromArray(c,3*e,ve),A=a.a.fromArray(c,3*t,ce),I=a.a.fromArray(c,3*r,fe);a.a.multiplyByScalar(x,w.x,x),a.a.multiplyByScalar(A,w.y,A),a.a.multiplyByScalar(I,w.z,I),a.a.equals(x,a.a.ZERO)&&a.a.equals(A,a.a.ZERO)&&a.a.equals(I,a.a.ZERO)?((T=ve).x=0,T.y=0,T.z=0):(T=a.a.add(x,A,x),a.a.add(T,I,T),a.a.normalize(T,T)),a.a.pack(T,y.extrudeDirection.values,3*b)}if(i.t(f)&&function(e,t,r,a,n,i,s){var u=n[e]*a.x,p=n[t]*a.y,l=n[r]*a.z;i[s]=u+p+l>o.n.EPSILON6?1:0}(e,t,r,w,f,y.applyOffset.values,b),i.t(p)&&pe(e,t,r,w,p,y.tangent.values,b,!0),i.t(l)&&pe(e,t,r,w,l,y.bitangent.values,b,!0),i.t(v)&&le(e,t,r,w,v,y.st.values,b),d>0)for(var S=0;S<d;S++){var P=m[S];de(e,t,r,w,b,h[P],y[P])}}}function de(e,t,r,a,n,i,o){var s=i.componentsPerAttribute,u=i.values,p=o.values;switch(s){case 4:ue(e,t,r,a,u,p,n,!1);break;case 3:pe(e,t,r,a,u,p,n,!1);break;case 2:le(e,t,r,a,u,p,n,!1);break;default:p[n]=u[e]*a.x+u[t]*a.y+u[r]*a.z}}function he(e,t,r,a,n,i){var o=e.position.values.length/3;if(-1!==n){var s=a[n],u=r[s];return-1===u?(r[s]=o,e.position.values.push(i.x,i.y,i.z),t.push(o),o):(t.push(u),u)}return e.position.values.push(i.x,i.y,i.z),t.push(o),o}var be={position:!0,normal:!0,bitangent:!0,tangent:!0,st:!0,extrudeDirection:!0,applyOffset:!0};function we(e){var t=e.geometry,r=t.attributes,n=r.position.values,o=i.t(r.normal)?r.normal.values:void 0,s=i.t(r.bitangent)?r.bitangent.values:void 0,u=i.t(r.tangent)?r.tangent.values:void 0,p=i.t(r.st)?r.st.values:void 0,l=i.t(r.extrudeDirection)?r.extrudeDirection.values:void 0,v=i.t(r.applyOffset)?r.applyOffset.values:void 0,c=t.indices,f=[];for(var y in r)r.hasOwnProperty(y)&&!be[y]&&i.t(r[y])&&f.push(y);var m,d,h,b,w=f.length,g=ie(t),T=ie(t),x=[];x.length=n.length/3;var A=[];for(A.length=n.length/3,b=0;b<x.length;++b)x[b]=-1,A[b]=-1;var I=c.length;for(b=0;b<I;b+=3){var S=c[b],P=c[b+1],N=c[b+2],E=a.a.fromArray(n,3*S),O=a.a.fromArray(n,3*P),L=a.a.fromArray(n,3*N),D=ae(E,O,L);if(i.t(D)&&D.positions.length>3)for(var z=D.positions,_=D.indices,q=_.length,C=0;C<q;++C){var R=_[C],G=z[R];G.y<0?(m=T.attributes,d=T.indices,h=x):(m=g.attributes,d=g.indices,h=A),me(S,P,N,G,n,o,u,s,p,l,v,m,f,w,r,he(m,d,h,c,R<3?b+R:-1,G))}else i.t(D)&&(E=D.positions[0],O=D.positions[1],L=D.positions[2]),E.y<0?(m=T.attributes,d=T.indices,h=x):(m=g.attributes,d=g.indices,h=A),me(S,P,N,E,n,o,u,s,p,l,v,m,f,w,r,he(m,d,h,c,b,E)),me(S,P,N,O,n,o,u,s,p,l,v,m,f,w,r,he(m,d,h,c,b+1,O)),me(S,P,N,L,n,o,u,s,p,l,v,m,f,w,r,he(m,d,h,c,b+2,L))}oe(e,T,g)}var ge=d.n.fromPointNormal(a.a.ZERO,a.a.UNIT_Y),Te=new a.a,xe=new a.a;function Ae(e,t,r,n,s,u,p){if(i.t(p)){var l=a.a.fromArray(n,3*e,ve);a.a.equalsEpsilon(l,r,o.n.EPSILON10)?u.applyOffset.values[s]=p[e]:u.applyOffset.values[s]=p[t]}}function Ie(e){var t,r=e.geometry,n=r.attributes,s=n.position.values,u=i.t(n.applyOffset)?n.applyOffset.values:void 0,p=r.indices,l=ie(r),v=ie(r),c=p.length,f=[];f.length=s.length/3;var m=[];for(m.length=s.length/3,t=0;t<f.length;++t)f[t]=-1,m[t]=-1;for(t=0;t<c;t+=2){var d=p[t],h=p[t+1],b=a.a.fromArray(s,3*d,ve),w=a.a.fromArray(s,3*h,ce);Math.abs(b.y)<o.n.EPSILON6&&(b.y<0?b.y=-o.n.EPSILON6:b.y=o.n.EPSILON6),Math.abs(w.y)<o.n.EPSILON6&&(w.y<0?w.y=-o.n.EPSILON6:w.y=o.n.EPSILON6);var g=l.attributes,T=l.indices,x=m,A=v.attributes,I=v.indices,S=f,P=y.h.lineSegmentPlane(b,w,ge,fe);if(i.t(P)){var N=a.a.multiplyByScalar(a.a.UNIT_Y,5*o.n.EPSILON9,Te);b.y<0&&(a.a.negate(N,N),g=v.attributes,T=v.indices,x=f,A=l.attributes,I=l.indices,S=m);var E=a.a.add(P,N,xe);Ae(d,h,b,s,he(g,T,x,p,t,b),g,u),Ae(d,h,E,s,he(g,T,x,p,-1,E),g,u),a.a.negate(N,N),a.a.add(P,N,E),Ae(d,h,E,s,he(A,I,S,p,-1,E),A,u),Ae(d,h,w,s,he(A,I,S,p,t+1,w),A,u)}else{var O,L,D;b.y<0?(O=v.attributes,L=v.indices,D=f):(O=l.attributes,L=l.indices,D=m),Ae(d,h,b,s,he(O,L,D,p,t,b),O,u),Ae(d,h,w,s,he(O,L,D,p,t+1,w),O,u)}}oe(e,v,l)}var Se=new r.r,Pe=new r.r,Ne=new a.a,Ee=new a.a,Oe=new a.a,Le=new a.a,De=new a.a,ze=new a.a,_e=new a.a,qe=new u.a;function Ce(e){for(var t=e.attributes,r=t.position.values,n=t.prevPosition.values,i=t.nextPosition.values,o=r.length,s=0;s<o;s+=3){var u=a.a.unpack(r,s,Ne);if(!(u.x>0)){var p=a.a.unpack(n,s,Ee);(u.y<0&&p.y>0||u.y>0&&p.y<0)&&(s-3>0?(n[s]=r[s-3],n[s+1]=r[s-2],n[s+2]=r[s-1]):a.a.pack(u,n,s));var l=a.a.unpack(i,s,Oe);(u.y<0&&l.y>0||u.y>0&&l.y<0)&&(s+3<o?(i[s]=r[s+3],i[s+1]=r[s+4],i[s+2]=r[s+5]):a.a.pack(u,i,s))}}}var Re=5*o.n.EPSILON9,Ge=o.n.EPSILON6;x.splitLongitude=function(e){if(!i.t(e))throw new n.t("instance is required.");var t=e.geometry,p=t.boundingSphere;if(i.t(p)&&(p.center.x-p.radius>0||s.c.intersectPlane(p,d.n.ORIGIN_ZX_PLANE)!==v.S.INTERSECTING))return e;if(t.geometryType!==c.Sr.NONE)switch(t.geometryType){case c.Sr.POLYLINES:!function(e){var t,n,s,p=e.geometry,l=p.attributes,v=l.position.values,c=l.prevPosition.values,f=l.nextPosition.values,m=l.expandAndWidth.values,d=i.t(l.st)?l.st.values:void 0,h=i.t(l.color)?l.color.values:void 0,b=i.t(l.dist)?l.dist.values:void 0,w=ie(p),g=ie(p),T=!1,x=v.length/3;for(t=0;t<x;t+=4){var A=t,I=t+2,S=a.a.fromArray(v,3*A,Ne),P=a.a.fromArray(v,3*I,Ee);if(Math.abs(S.y)<Ge)for(S.y=Ge*(P.y<0?-1:1),v[3*t+1]=S.y,v[3*(t+1)+1]=S.y,n=3*A;n<3*A+12;n+=3)c[n]=v[3*t],c[n+1]=v[3*t+1],c[n+2]=v[3*t+2];if(Math.abs(P.y)<Ge)for(P.y=Ge*(S.y<0?-1:1),v[3*(t+2)+1]=P.y,v[3*(t+3)+1]=P.y,n=3*A;n<3*A+12;n+=3)f[n]=v[3*(t+2)],f[n+1]=v[3*(t+2)+1],f[n+2]=v[3*(t+2)+2];var N=w.attributes,E=w.indices,O=g.attributes,L=g.indices,D=y.h.lineSegmentPlane(S,P,ge,Le);if(i.t(D)){T=!0;var z=a.a.multiplyByScalar(a.a.UNIT_Y,Re,De);S.y<0&&(a.a.negate(z,z),N=g.attributes,E=g.indices,O=w.attributes,L=w.indices);var _=a.a.add(D,z,ze);N.position.values.push(S.x,S.y,S.z,S.x,S.y,S.z),N.position.values.push(_.x,_.y,_.z),N.position.values.push(_.x,_.y,_.z),N.prevPosition.values.push(c[3*A],c[3*A+1],c[3*A+2]),N.prevPosition.values.push(c[3*A+3],c[3*A+4],c[3*A+5]),N.prevPosition.values.push(S.x,S.y,S.z,S.x,S.y,S.z),N.nextPosition.values.push(_.x,_.y,_.z),N.nextPosition.values.push(_.x,_.y,_.z),N.nextPosition.values.push(_.x,_.y,_.z),N.nextPosition.values.push(_.x,_.y,_.z),a.a.negate(z,z),a.a.add(D,z,_),O.position.values.push(_.x,_.y,_.z),O.position.values.push(_.x,_.y,_.z),O.position.values.push(P.x,P.y,P.z,P.x,P.y,P.z),O.prevPosition.values.push(_.x,_.y,_.z),O.prevPosition.values.push(_.x,_.y,_.z),O.prevPosition.values.push(_.x,_.y,_.z),O.prevPosition.values.push(_.x,_.y,_.z),O.nextPosition.values.push(P.x,P.y,P.z,P.x,P.y,P.z),O.nextPosition.values.push(f[3*I],f[3*I+1],f[3*I+2]),O.nextPosition.values.push(f[3*I+3],f[3*I+4],f[3*I+5]);var q=r.r.fromArray(m,2*A,Se),C=Math.abs(q.y);N.expandAndWidth.values.push(-1,C,1,C),N.expandAndWidth.values.push(-1,-C,1,-C),O.expandAndWidth.values.push(-1,C,1,C),O.expandAndWidth.values.push(-1,-C,1,-C);var R=a.a.magnitudeSquared(a.a.subtract(D,S,Oe));if(R/=a.a.magnitudeSquared(a.a.subtract(P,S,Oe)),i.t(h)){var G=u.a.fromArray(h,4*A,qe),F=u.a.fromArray(h,4*I,qe),k=o.n.lerp(G.x,F.x,R),B=o.n.lerp(G.y,F.y,R),U=o.n.lerp(G.z,F.z,R),V=o.n.lerp(G.w,F.w,R);for(n=4*A;n<4*A+8;++n)N.color.values.push(h[n]);for(N.color.values.push(k,B,U,V),N.color.values.push(k,B,U,V),O.color.values.push(k,B,U,V),O.color.values.push(k,B,U,V),n=4*I;n<4*I+8;++n)O.color.values.push(h[n])}if(i.t(d)){var M=r.r.fromArray(d,2*A,Se),Y=r.r.fromArray(d,2*(t+3),Pe),Z=o.n.lerp(M.x,Y.x,R);for(n=2*A;n<2*A+4;++n)N.st.values.push(d[n]);for(N.st.values.push(Z,M.y),N.st.values.push(Z,Y.y),O.st.values.push(Z,M.y),O.st.values.push(Z,Y.y),n=2*I;n<2*I+4;++n)O.st.values.push(d[n])}if(i.t(b)){var H=a.a.fromArray(b,3*A,_e),W=a.a.fromArray(b,3*I,_e),X=o.n.lerp(H.x,W.x,R);for(n=3*A;n<3*A+6;++n)N.dist.values.push(b[n]);for(N.dist.values.push(X,H.y,H.z),N.dist.values.push(X,H.y,H.z),O.dist.values.push(X,W.y,W.z),O.dist.values.push(X,W.y,W.z),n=3*I;n<3*I+6;++n)O.dist.values.push(b[n])}s=N.position.values.length/3-4,E.push(s,s+2,s+1),E.push(s+1,s+2,s+3),s=O.position.values.length/3-4,L.push(s,s+2,s+1),L.push(s+1,s+2,s+3)}else{var j,J;for(S.y<0?(j=g.attributes,J=g.indices):(j=w.attributes,J=w.indices),j.position.values.push(S.x,S.y,S.z),j.position.values.push(S.x,S.y,S.z),j.position.values.push(P.x,P.y,P.z),j.position.values.push(P.x,P.y,P.z),n=3*t;n<3*t+12;++n)j.prevPosition.values.push(c[n]),j.nextPosition.values.push(f[n]);for(n=2*t;n<2*t+8;++n)j.expandAndWidth.values.push(m[n]),i.t(d)&&j.st.values.push(d[n]);if(i.t(h))for(n=4*t;n<4*t+16;++n)j.color.values.push(h[n]);if(i.t(b))for(n=3*t;n<3*t+12;++n)j.dist.values.push(b[n]);s=j.position.values.length/3-4,J.push(s,s+2,s+1),J.push(s+1,s+2,s+3)}}T&&(Ce(g),Ce(w)),oe(e,g,w)}(e);break;case c.Sr.TRIANGLES:we(e);break;case c.Sr.LINES:Ie(e)}else X(t),t.primitiveType===m._0x38df4a.TRIANGLES?we(e):t.primitiveType===m._0x38df4a.LINES&&Ie(e);return e},e.F=x}));