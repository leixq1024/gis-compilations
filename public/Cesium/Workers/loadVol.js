define(["./createTaskProcessorWorker","./Cartographic-1bbcab04","./Cartesian4-034d54d5","./pako_inflate-f73548c4","./Rectangle-e170be8b","./when-515d5295","./Check-3aa71481","./Math-5e38123d"],(function(t,e,n,r,a,l,i,h){"use strict";var o=function(){var t,e=(t=!0,function(e,n){var r=t?function(){if(n){var t=n.apply(e,arguments);return n=null,t}}:function(){};return t=!1,r}),n=function(){var t=e(this,(function(){return t.toString().search("(((.+)+)+)+$").toString().constructor(t).search("(((.+)+)+)+$")}));t();var n=!0;return function(t,e){var r=n?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return n=!1,r}}(),r=n(this,(function(){return r.toString().search("(((.+)+)+)+$").toString().constructor(r).search("(((.+)+)+)+$")}));r();var a=!0;return function(t,e){var n=a?function(){if(e){var n=e.apply(t,arguments);return e=null,n}}:function(){};return a=!1,n}}(),c=o(void 0,(function(){return c.toString().search("(((.+)+)+)+$").toString().constructor(c).search("(((.+)+)+)+$")}));c();var u=Object.freeze({UNLOAD:0,LOADING:1,LOADED:2,VOLLOADED:3,PARSING:4,PARSED:5,TRANSFORMING:6,TRANSFORMED:7,LOST:8,LOADVOL:9,FAILED:10,VOLFAILED:11});function d(t){var n=new e.a(1,255,65025);(n=e.a.multiplyByScalar(n,t,n)).x=n.x-Math.floor(n.x),n.y=n.y-Math.floor(n.y),n.z=n.z-Math.floor(n.z);var r=new e.a,a=new e.a(1/255,1/255,0);return r.x=n.y*a.x,r.y=n.z*a.y,r.z=n.z*a.z,n=e.a.subtract(n,r,n)}function s(t,e,r,a){for(var l=t._nLength*t._nLength*4,i=new Array(l),h=r-e,o=e,c=0;c<t.cellDepth;c++)for(var u=parseInt(c/t._nSideBlockCount)*t._nBlockLength,s=c%t._nSideBlockCount*t._nBlockLength,f=-1;f<t._nBlockLength-1;f++)for(var _=-1;_<t._nBlockLength-1;_++){var g=Math.min(_,t.validWidth-1),v=Math.min(f,t.validHeight-1);g=Math.max(0,g),v=Math.max(0,v);var y,p,L=0;if(t.ySpan>0&&(L=t.validHeight-t.cellHeight),g<t.cellWidth&&v>=L?(p=0,y=c*t.cellHeight*t.cellWidth+(t.validHeight-1-v)*t.cellWidth+g):g<t.cellWidth?(p=0==t.xSpan?1:2,y=c*t.cellHeight*t.cellWidth+(t.validHeight-t.cellHeight-1-v)*t.cellWidth+g):v>=L?(p=1,y=c*t.cellHeight*t.cellWidth+(t.validHeight-1-v)*t.cellWidth+g-t.cellWidth):(p=3,y=c*t.cellHeight*t.cellWidth+(t.validHeight-t.cellHeight-1-v)*t.cellWidth+g-t.cellWidth),!(y<0)){var S=a[p][y],x=new n.a(0,0,0,0);if(-9999!=S){S<e||S>r?S=o:o=S;var w=d(S=(S-e)/h);x.x=w.x,x.y=w.y,x.z=w.z,x.w=1}var B=255*x.x,W=255*x.y,D=255*x.z,H=255*x.w;i[4*(y=(u+f)*t._nLength+s+_)]=parseInt(B),i[4*y+1]=parseInt(W),i[4*y+2]=parseInt(D),i[4*y+3]=parseInt(H)}}return new Uint8Array(i,0,l)}return t((function(t,e){for(var l=t.arrayWork,i=[],h=0;h<l.length;h++)if(l[h]._s3mLoadState===u.LOADED){var o=l[h]._arrayBuffer.slice(16,l[h]._arrayBuffer.byteLength),c=r.pako.inflate(o).buffer;l[h]._arrayBuffer=c,l[h]._s3mLoadState=u.TRANSFORMED,i.push({index:h,buffer:c})}var d=t.textureLevel,f=t._availableNode,_=t._time,g=t._layerBounds,v=t._minFiltration,y=t._maxFiltration;d.cellWidth=t._cellWidth,d.cellHeight=t._cellHeight,d.cellDepth=t._cellDepth;var p=function(t,e,r,l,i,h,o){for(var c=t.length,u=[],d=0;d<c;d++)u.push(t[d]._arrayBuffer.slice(36,t[d]._arrayBuffer.byteLength));var f=4*e.cellWidth*e.cellHeight*e.cellDepth,_=t[0],g=t[c-1],v=e.cellWidth,y=e.cellHeight;o.EndCol-1==g._x&&(v=o.Width-g._x*v),o.EndRow-1==g._y&&(y=o.Height-g._y*y),e.startCol=_._x,e.startRow=_._y,e.endCol=g._x,e.endRow=g._y,e.ySpan=g._y-_._y,e.xSpan=g._x-_._x,e.ySpan>0&&(y+=e.cellHeight),e.xSpan>0&&(v+=e.cellWidth),e._nSideBlockCount=Math.ceil(Math.sqrt(e.cellDepth)),e._nBlockLength=Math.max(y,v)+2,e._nLength=function(t){for(var e=1;e<t;)e<<=1;return e}(e._nBlockLength*e._nSideBlockCount-2),e.validWidth=v,e.validHeight=y,e.bounds=new a.s(_._dataBounds.west,g._dataBounds.south,g._dataBounds.east,_._dataBounds.north);var p=new a.s(l.west,l.south,l.east,l.north);e.multiResolutionTranslation=new n.a((_._dataBounds.west-p.west)/p.width,(g._dataBounds.south-p.south)/p.height,p.width/e.bounds.width,p.height/e.bounds.height);for(var L=[],S=0;S<r;S++){var x=[];for(d=0;d<u.length;d++){var w=new Float32Array(u[d].slice(S*f,(S+1)*f));x.push(w)}L.push(s(e,i,h,x))}return L}(l,d,_,g,v,y,f);return{textureLevel:d,imageDatas:p,unzipTile:i}}))}));
