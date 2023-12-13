define(["./when-515d5295","./Rectangle-e170be8b","./ArcType-98a7a011","./arrayFill-4d3cc415","./buildModuleUrl-dba4ec07","./Check-3aa71481","./ComponentDatatype-d430c7f7","./EllipsoidTangentPlane-fd839d7b","./GeometryAttribute-9bc31a7f","./GeometryAttributes-7d904f0f","./GeometryInstance-c11993d9","./GeometryOffsetAttribute-800f7650","./GeometryPipeline-137aa28e","./IndexDatatype-eefd5922","./Math-5e38123d","./PolygonGeometryLibrary-e3bb7139","./PolygonPipeline-b8b35011","./PrimitiveType-b38a4004","./WindingOrder-8479ef05","./Cartographic-1bbcab04","./Intersect-53434a77","./Event-9821f5d9","./RuntimeError-350acae3","./WebGLConstants-77a84876","./Cartesian2-1b9b0d8a","./Cartesian4-034d54d5","./IntersectionTests-5fa33dbd","./Plane-92c15089","./FeatureDetection-7fae0d5a","./AttributeCompression-f9ee669b","./EncodedCartesian3-d74c1b81","./arrayRemoveDuplicates-a4c6347e","./EllipsoidRhumbLine-f50fdea6"],(function(e,t,i,r,n,o,a,s,p,d,u,c,y,l,g,h,f,b,m,v,_,E,H,D,P,T,A,C,I,O,w,x,L){"use strict";var G=[],R=[];function S(e,t,r,n,o){var c=s.s.fromPoints(t,e).projectPointsOntoPlane(t,G);f.T.computeWindingOrder2D(c)===m.F.CLOCKWISE&&(c.reverse(),t=t.slice().reverse());var y,g,v=t.length,_=0;if(n)for(y=new Float64Array(2*v*3),g=0;g<v;g++){var E=t[g],H=t[(g+1)%v];y[_++]=E.x,y[_++]=E.y,y[_++]=E.z,y[_++]=H.x,y[_++]=H.y,y[_++]=H.z}else{var D=0;if(o===i.D.GEODESIC)for(g=0;g<v;g++)D+=h.g.subdivideLineCount(t[g],t[(g+1)%v],r);else if(o===i.D.RHUMB)for(g=0;g<v;g++)D+=h.g.subdivideRhumbLineCount(e,t[g],t[(g+1)%v],r);for(y=new Float64Array(3*D),g=0;g<v;g++){var P;o===i.D.GEODESIC?P=h.g.subdivideLine(t[g],t[(g+1)%v],r,R):o===i.D.RHUMB&&(P=h.g.subdivideRhumbLine(e,t[g],t[(g+1)%v],r,R));for(var T=P.length,A=0;A<T;++A)y[_++]=P[A]}}var C=2*(v=y.length/3),I=l.IndexDatatype.createTypedArray(v,C);for(_=0,g=0;g<v-1;g++)I[_++]=g,I[_++]=g+1;return I[_++]=v-1,I[_++]=0,new u.m({geometry:new p.T({attributes:new d.t({position:new p.r({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y})}),indices:I,primitiveType:b._0x38df4a.LINES})})}function k(e,t,r,n,o){var c=s.s.fromPoints(t,e).projectPointsOntoPlane(t,G);f.T.computeWindingOrder2D(c)===m.F.CLOCKWISE&&(c.reverse(),t=t.slice().reverse());var y,g,v=t.length,_=new Array(v),E=0;if(n)for(y=new Float64Array(2*v*3*2),g=0;g<v;++g){_[g]=E/3;var H=t[g],D=t[(g+1)%v];y[E++]=H.x,y[E++]=H.y,y[E++]=H.z,y[E++]=D.x,y[E++]=D.y,y[E++]=D.z}else{var P=0;if(o===i.D.GEODESIC)for(g=0;g<v;g++)P+=h.g.subdivideLineCount(t[g],t[(g+1)%v],r);else if(o===i.D.RHUMB)for(g=0;g<v;g++)P+=h.g.subdivideRhumbLineCount(e,t[g],t[(g+1)%v],r);for(y=new Float64Array(3*P*2),g=0;g<v;++g){var T;_[g]=E/3,o===i.D.GEODESIC?T=h.g.subdivideLine(t[g],t[(g+1)%v],r,R):o===i.D.RHUMB&&(T=h.g.subdivideRhumbLine(e,t[g],t[(g+1)%v],r,R));for(var A=T.length,C=0;C<A;++C)y[E++]=T[C]}}v=y.length/6;var I=_.length,O=2*(2*v+I),w=l.IndexDatatype.createTypedArray(v,O);for(E=0,g=0;g<v;++g)w[E++]=g,w[E++]=(g+1)%v,w[E++]=g+v,w[E++]=(g+1)%v+v;for(g=0;g<I;g++){var x=_[g];w[E++]=x,w[E++]=x+v}return new u.m({geometry:new p.T({attributes:new d.t({position:new p.r({componentDatatype:a.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:y})}),indices:w,primitiveType:b._0x38df4a.LINES})})}function N(r){if(o.n.typeOf.object("options",r),o.n.typeOf.object("options.polygonHierarchy",r.polygonHierarchy),r.perPositionHeight&&e.t(r.height))throw new o.t("Cannot use both options.perPositionHeight and options.height");if(e.t(r.arcType)&&r.arcType!==i.D.GEODESIC&&r.arcType!==i.D.RHUMB)throw new o.t("Invalid arcType. Valid options are ArcType.GEODESIC and ArcType.RHUMB.");var n=r.polygonHierarchy,a=e.e(r.ellipsoid,t.n.WGS84),s=e.e(r.granularity,g.n.RADIANS_PER_DEGREE),p=e.e(r.perPositionHeight,!1),d=p&&e.t(r.extrudedHeight),u=e.e(r.arcType,i.D.GEODESIC),c=e.e(r.height,0),y=e.e(r.extrudedHeight,c);if(!d){var l=Math.max(c,y);y=Math.min(c,y),c=l}this._ellipsoid=t.n.clone(a),this._granularity=s,this._height=c,this._extrudedHeight=y,this._arcType=u,this._polygonHierarchy=n,this._perPositionHeight=p,this._perPositionHeightExtrude=d,this._offsetAttribute=r.offsetAttribute,this._workerName="createPolygonOutlineGeometry",this.packedLength=h.g.computeHierarchyPackedLength(n)+t.n.packedLength+8}N.pack=function(i,r,n){return o.n.typeOf.object("value",i),o.n.defined("array",r),n=e.e(n,0),n=h.g.packPolygonHierarchy(i._polygonHierarchy,r,n),t.n.pack(i._ellipsoid,r,n),n+=t.n.packedLength,r[n++]=i._height,r[n++]=i._extrudedHeight,r[n++]=i._granularity,r[n++]=i._perPositionHeightExtrude?1:0,r[n++]=i._perPositionHeight?1:0,r[n++]=i._arcType,r[n++]=e.e(i._offsetAttribute,-1),r[n]=i.packedLength,r};var U=t.n.clone(t.n.UNIT_SPHERE),B={polygonHierarchy:{}};return N.unpack=function(i,r,n){o.n.defined("array",i),r=e.e(r,0);var a=h.g.unpackPolygonHierarchy(i,r);r=a.startingIndex,delete a.startingIndex;var s=t.n.unpack(i,r,U);r+=t.n.packedLength;var p=i[r++],d=i[r++],u=i[r++],c=1===i[r++],y=1===i[r++],l=i[r++],g=i[r++],f=i[r];return e.t(n)||(n=new N(B)),n._polygonHierarchy=a,n._ellipsoid=t.n.clone(s,n._ellipsoid),n._height=p,n._extrudedHeight=d,n._granularity=u,n._perPositionHeight=y,n._perPositionHeightExtrude=c,n._arcType=l,n._offsetAttribute=-1===g?void 0:g,n.packedLength=f,n},N.fromPositions=function(t){return t=e.e(t,e.e.EMPTY_OBJECT),o.n.defined("options.positions",t.positions),new N({polygonHierarchy:{positions:t.positions},height:t.height,extrudedHeight:t.extrudedHeight,ellipsoid:t.ellipsoid,granularity:t.granularity,perPositionHeight:t.perPositionHeight,arcType:t.arcType,offsetAttribute:t.offsetAttribute})},N.createGeometry=function(t){var i=t._ellipsoid,o=t._granularity,s=t._polygonHierarchy,d=t._perPositionHeight,u=t._arcType,l=h.g.polygonOutlinesFromHierarchy(s,!d,i);if(0!==l.length){var b,m,v,_=[],E=g.n.chordLength(o,i.maximumRadius),H=t._height,D=t._extrudedHeight;if(t._perPositionHeightExtrude||!g.n.equalsEpsilon(H,D,0,g.n.EPSILON2))for(v=0;v<l.length;v++){if((b=k(i,l[v],E,d,u)).geometry=h.g.scaleToGeodeticHeightExtruded(b.geometry,H,D,i,d),e.t(t._offsetAttribute)){var P=b.geometry.attributes.position.values.length/3,T=new Uint8Array(P);t._offsetAttribute===c.I.TOP?T=r.d(T,1,0,P/2):(m=t._offsetAttribute===c.I.NONE?0:1,T=r.d(T,m)),b.geometry.attributes.applyOffset=new p.r({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:T})}_.push(b)}else for(v=0;v<l.length;v++){if((b=S(i,l[v],E,d,u)).geometry.attributes.position.values=f.T.scaleToGeodeticHeight(b.geometry.attributes.position.values,H,i,!d),e.t(t._offsetAttribute)){var A=b.geometry.attributes.position.values.length,C=new Uint8Array(A/3);m=t._offsetAttribute===c.I.NONE?0:1,r.d(C,m),b.geometry.attributes.applyOffset=new p.r({componentDatatype:a.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:C})}_.push(b)}var I=y.F.combineInstances(_)[0],O=n.c.fromVertices(I.attributes.position.values);return new p.T({attributes:I.attributes,indices:I.indices,primitiveType:I.primitiveType,boundingSphere:O,offsetAttribute:t._offsetAttribute})}},function(i,r){return e.t(r)&&(i=N.unpack(i,r)),i._ellipsoid=t.n.clone(i._ellipsoid),N.createGeometry(i)}}));
