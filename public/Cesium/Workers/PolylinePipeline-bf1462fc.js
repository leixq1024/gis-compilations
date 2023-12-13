define(["exports","./Cartographic-1bbcab04","./when-515d5295","./Check-3aa71481","./Rectangle-e170be8b","./EllipsoidGeodesic-e5406761","./EllipsoidRhumbLine-f50fdea6","./IntersectionTests-5fa33dbd","./Math-5e38123d","./PrimitiveType-b38a4004","./Plane-92c15089"],(function(a,r,e,n,t,i,o,c,s,u,h){"use strict";var l={numberOfPoints:function(a,e,n){var t=r.a.distance(a,e);return Math.ceil(t/n)},numberOfPointsRhumbLine:function(a,r,e){var n=Math.pow(a.longitude-r.longitude,2)+Math.pow(a.latitude-r.latitude,2);return Math.ceil(Math.sqrt(n/(e*e)))}},f=new r.i;l.extractHeights=function(a,r){for(var e=a.length,n=new Array(e),t=0;t<e;t++){var i=a[t];n[t]=r.cartesianToCartographic(i,f).height}return n};var g=new u.c,p=new r.a,v=new r.a,d=new h.n(r.a.UNIT_X,0),m=new r.a,w=new h.n(r.a.UNIT_X,0),T=new r.a,y=new r.a,P=[];function A(a,r,e){var n,t=P;if(t.length=a,r===e){for(n=0;n<a;n++)t[n]=r;return t}var i=(e-r)/a;for(n=0;n<a;n++){var o=r+n*i;t[n]=o}return t}var b=new r.i,C=new r.i,S=new r.a,R=new r.a,D=new r.a,E=new i.D,G=new o.M;function M(a,e,n,t,i,o,c,s,u){var h=t.scaleToGeodeticSurface(a,R),f=t.scaleToGeodeticSurface(e,D),g=l.numberOfPoints(a,e,n),p=t.cartesianToCartographic(h,b),v=t.cartesianToCartographic(f,C),d=A(g,i,o);u>0&&(d=function(a,r){var e=P;e.length=a;for(var n=0;n<a;n++)e[n]+=r*Math.sin(Math.PI*n/a);return e}(g,u)),E.setEndPoints(p,v);var m=E.surfaceDistance/g,w=s;p.height=i;var T=t.cartographicToCartesian(p,S);r.a.pack(T,c,w),w+=3;for(var y=1;y<g;y++){var G=E.interpolateUsingSurfaceDistance(y*m,C);G.height=d[y],T=t.cartographicToCartesian(G,S),r.a.pack(T,c,w),w+=3}return w}function N(a,e,n,t,i,c,s,u){var h=t.scaleToGeodeticSurface(a,R),f=t.scaleToGeodeticSurface(e,D),g=t.cartesianToCartographic(h,b),p=t.cartesianToCartographic(f,C),v=l.numberOfPointsRhumbLine(g,p,n),d=A(v,i,c);G.ellipsoid.equals(t)||(G=new o.M(void 0,void 0,t)),G.setEndPoints(g,p);var m=G.surfaceDistance/v,w=u;g.height=i;var T=t.cartographicToCartesian(g,S);r.a.pack(T,s,w),w+=3;for(var y=1;y<v;y++){var P=G.interpolateUsingSurfaceDistance(y*m,C);P.height=d[y],T=t.cartographicToCartesian(P,S),r.a.pack(T,s,w),w+=3}return w}l.wrapLongitude=function(a,n){var t=[],i=[];if(e.t(a)&&a.length>0){n=e.e(n,u.c.IDENTITY);var o=u.c.inverseTransformation(n,g),s=u.c.multiplyByPoint(o,r.a.ZERO,p),l=r.a.normalize(u.c.multiplyByPointAsVector(o,r.a.UNIT_Y,v),v),f=h.n.fromPointNormal(s,l,d),P=r.a.normalize(u.c.multiplyByPointAsVector(o,r.a.UNIT_X,m),m),A=h.n.fromPointNormal(s,P,w),b=1;t.push(r.a.clone(a[0]));for(var C=t[0],S=a.length,R=1;R<S;++R){var D=a[R];if(h.n.getPointDistance(A,C)<0||h.n.getPointDistance(A,D)<0){var E=c.h.lineSegmentPlane(C,D,f,T);if(e.t(E)){var G=r.a.multiplyByScalar(l,5e-9,y);h.n.getPointDistance(f,C)<0&&r.a.negate(G,G),t.push(r.a.add(E,G,new r.a)),i.push(b+1),r.a.negate(G,G),t.push(r.a.add(E,G,new r.a)),b=1}}t.push(r.a.clone(a[R])),b++,C=D}i.push(b)}return{positions:t,lengths:i}},l.generateArc=function(a){e.t(a)||(a={});var i=a.positions;if(!e.t(i))throw new n.t("options.positions is required.");var o=i.length,c=e.e(a.ellipsoid,t.n.WGS84),u=e.e(a.height,0),h=Array.isArray(u);if(o<1)return[];if(1===o){var f=c.scaleToGeodeticSurface(i[0],R);if(0!==(u=h?u[0]:u)){var g=c.geodeticSurfaceNormal(f,S);r.a.multiplyByScalar(g,u,g),r.a.add(f,g,f)}return[f.x,f.y,f.z]}var p=a.minDistance;if(!e.t(p)){var v=e.e(a.granularity,s.n.RADIANS_PER_DEGREE);p=s.n.chordLength(v,c.maximumRadius)}var d,m=0;for(d=0;d<o-1;d++)m+=l.numberOfPoints(i[d],i[d+1],p);var w=a.hMax,T=3*(m+1),y=new Array(T),A=0;for(d=0;d<o-1;d++){A=M(i[d],i[d+1],p,c,h?u[d]:u,h?u[d+1]:u,y,A,w)}P.length=0;var C=i[o-1],D=c.cartesianToCartographic(C,b);D.height=h?u[o-1]:u;var E=c.cartographicToCartesian(D,S);return r.a.pack(E,y,T-3),y};var I=new r.i,k=new r.i;l.generateRhumbArc=function(a){e.t(a)||(a={});var i=a.positions;if(!e.t(i))throw new n.t("options.positions is required.");var o=i.length,c=e.e(a.ellipsoid,t.n.WGS84),u=e.e(a.height,0),h=Array.isArray(u);if(o<1)return[];if(1===o){var f=c.scaleToGeodeticSurface(i[0],R);if(0!==(u=h?u[0]:u)){var g=c.geodeticSurfaceNormal(f,S);r.a.multiplyByScalar(g,u,g),r.a.add(f,g,f)}return[f.x,f.y,f.z]}var p,v,d=e.e(a.granularity,s.n.RADIANS_PER_DEGREE),m=0,w=c.cartesianToCartographic(i[0],I);for(p=0;p<o-1;p++)v=c.cartesianToCartographic(i[p+1],k),m+=l.numberOfPointsRhumbLine(w,v,d),w=r.i.clone(v,I);var T=3*(m+1),y=new Array(T),A=0;for(p=0;p<o-1;p++){A=N(i[p],i[p+1],d,c,h?u[p]:u,h?u[p+1]:u,y,A)}P.length=0;var C=i[o-1],D=c.cartesianToCartographic(C,b);D.height=h?u[o-1]:u;var E=c.cartographicToCartesian(D,S);return r.a.pack(E,y,T-3),y},l.generateCartesianArc=function(a){for(var e=l.generateArc(a),n=e.length/3,t=new Array(n),i=0;i<n;i++)t[i]=r.a.unpack(e,3*i);return t},l.generateCartesianRhumbArc=function(a){for(var e=l.generateRhumbArc(a),n=e.length/3,t=new Array(n),i=0;i<n;i++)t[i]=r.a.unpack(e,3*i);return t},a.v=l}));
