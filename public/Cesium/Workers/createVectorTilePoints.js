define(["./AttributeCompression-f9ee669b","./Cartographic-1bbcab04","./Rectangle-e170be8b","./Math-5e38123d","./createTaskProcessorWorker","./Cartesian2-1b9b0d8a","./Check-3aa71481","./when-515d5295"],(function(a,r,e,n,t,i,o,s){"use strict";var c=32767,u=new r.i,b=new r.a,p=new e.s,f=new e.n,h={min:void 0,max:void 0};return t((function(t,i){var o=new Uint16Array(t.positions);!function(a){a=new Float64Array(a);var r=0;h.min=a[r++],h.max=a[r++],e.s.unpack(a,r,p),r+=e.s.packedLength,e.n.unpack(a,r,f)}(t.packedBuffer);var s=p,d=f,l=h.min,w=h.max,g=o.length/3,k=o.subarray(0,g),m=o.subarray(g,2*g),v=o.subarray(2*g,3*g);a.r.zigZagDeltaDecode(k,m,v);for(var y=new Float64Array(o.length),C=0;C<g;++C){var A=k[C],x=m[C],D=v[C],F=n.n.lerp(s.west,s.east,A/c),R=n.n.lerp(s.south,s.north,x/c),T=n.n.lerp(l,w,D/c),z=r.i.fromRadians(F,R,T,u),B=d.cartographicToCartesian(z,b);r.a.pack(B,y,3*C)}return i.push(y.buffer),{positions:y.buffer}}))}));
