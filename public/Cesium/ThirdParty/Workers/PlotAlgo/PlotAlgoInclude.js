/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

﻿/* COPYRIGHT 2012 SUPERMAP
 * 本程序只能在有效的授权许可下使用。
 * 未经许可，不得以任何手段擅自使用或传播。*/

/**
 * @requires SuperMap/BaseTypes.js
 */

/**
 * Namespace: SuperMap.Lang
 * 国际化的命名空间，包含多种语言和方法库来设置和获取当前的语言。
 */
var SuperMapAlgoPlot = window.SuperMapAlgoPlot = window.SuperMapAlgoPlot || {};

/***
 * @private
 * @type {{translate: SuperMap.PlotLang.translate}}
 */
SuperMapAlgoPlot.PlotLang = {
    /**
     * APIMethod: translate
     * 从当前语言字符串的字典查找key。
     *     getCode获取的值用来判断合适的字典。字典存储在 <SuperMap.Lang> 方法中。
     *
     * Parameters:
     * key - {String} 字典中i18n字符串值的关键字.
     * context - {Object} <SuperMap.String.format> 使用此参数。
     *
     * Returns:
     * {String} 国际化的字符串。
     */
    translate: function (key, context) {
        var dictionary = SuperMapAlgoPlot.PlotLang["zh-CN"];
        var message = dictionary && dictionary[key];
        if (!message) {
            // Message not found, fall back to message key
            message = key;
        }
        if (context) {
            message = SuperMapAlgoPlot.String.format(message, context);
        }
        return message;
    }

};


/**
 * @private
 * APIMethod: SuperMap.plotI18n
 *  <SuperMap.Lang.translate> 的别名.  当前语言字符串的字典查找key。
 *  getCode获取的值用来判断合适的字典。字典存储在 <SuperMap.Lang> 方法中。
 *
 * Parameters:
 * key - {String} 字典中i18n字符串值的关键字.
 * context - {Object} <SuperMap.String.format> 使用此参数。
 *
 * Returns:
 * {String} 国际化的字符串。
 */
SuperMapAlgoPlot.plotI18n = SuperMapAlgoPlot.PlotLang.translate;


/**
 * @private
 * */
SuperMapAlgoPlot.PlotLang["zh-CN"] = {
    //字体
    'SongTi': "宋体",
    //text
    'text': "文本",
    'textSizeLabel': "字体大小",
    'textSizeTitle': "字体大小",
    'textFaceNameLabel': "字体",
    'textFaceNameTitle': "字体",
    'textAlignLabel': "水平对齐方式",
    'textAlignTitle': "文本的水平对齐方式",
    'textVerticalAlignmentLabel': "垂直对齐方式",
    'textVerticalAlignmentTitle': "文本的垂直对齐方式",
    'textHaloRadiusLabel': "文本边框宽度",
    'textHaloRadiusTitle': "文本的外围边框的宽度",
    'textHaloColorLabel': "文本边框颜色",
    'textHaloColorTitle': "文本的外围边框的颜色",
    'textFillLabel': "文本颜色",
    'textFillTitle': "文本的颜色值",
    'textOpacityLabel': "透明度",
    'textOpacityTitle': "文本的透明度",
    'textDxLabel': "横向偏移",
    'textDxTitle': "文本的横向偏移值",
    'textDyLabel': "纵向偏移值",
    'textDyTitle': "文本的纵向偏移值",
    'textCompOpLabel': "叠加方式",
    'textCompOpTitle': "文本之间相互叠加里使用的覆盖或者是异或等运算方式",
    'expandingPointContent': "展",
    'volleyPointContent': "齐",
    'rendezvousPointContent': "会",
    'supplyPointContent': "补",
    //symbolAlgo
    //JB
    'symbolAlgo_17703': "加",
    'symbolAlgo_17704': "急",
    'symbolAlgo_21600': "冲",
    'symbolAlgo_28000_1': "危",
    'symbolAlgo_28000_2': "中",
    'symbolAlgo_28000_3': "轻",
    'symbolAlgo_315': "突击",
    'symbolAlgo_31304': "慑阻",
    'symbolAlgo_3010301': "调",
    'symbolAlgo_3010303': "出",
    'symbolAlgo_3010304': "协",

    //WJ
    'symbolAlgo_2121505': "火",
    'symbolAlgo_2121506': "墩",
    'symbolAlgo_2121507': "复",
    'symbolAlgo_2121601': "遥",
    'symbolAlgo_2121602': "障",
    'symbolAlgo_30010': "?",
    'symbolAlgo_3001101': "集",
    'symbolAlgo_3001102': "暴",
    'symbolAlgo_3001103': "骚",
    'symbolAlgo_3001104': "私",
    'symbolAlgo_3001105': "盗",
    'symbolAlgo_30020': "水",
    'symbolAlgo_3002001': "震",
    'symbolAlgo_3002004': "火",
    'symbolAlgo_30025': "滞",
    'symbolAlgo_5010301': "调",
    'symbolAlgo_5010303': "出",
    'symbolAlgo_5010304': "协",
    'symbolAlgo_5010401': "JZ",
    'symbolAlgo_5022001': "ZD0",
    'symbolAlgo_5034801': "催",
    "symbolAlgo_60203": "避",
    'symbolAlgo_60301': "爆",
    'symbolAlgo_6030101': "挖",
    'symbolAlgo_6030102': "浇",
    'symbolAlgo_6030103': "砌",
    'symbolAlgo_6030104': "装",
    'symbolAlgo_6030105': "石",
    'symbolAlgo_6030106': "沙",
    'symbolAlgo_6030107': "练",
    'symbolAlgo_60304': "隧",
    'symbolAlgo_3002501': "踏",
    'symbolAlgo_30026': "灾",
    'symbolAlgo_40104': "缉",
    'symbolAlgo_4030301': "标",
    'symbolAlgo_4030302': "劝",
    'symbolAlgo_4030303': "疏",
    'symbolAlgo_40304': "警",
    'symbolAlgo_4030401': "警",

    //basic symbol
    'polyLine': "折线",
    'parallelogram': "平行四边形",
    'circle': "圆",
    'ellipse': "椭圆",
    'annotation': "注记",
    'regularPolygon': "正多边形",
    'polygon': "多边形",
    'bezier': "贝塞尔曲线",
    'closedBesselCurve': "闭合贝塞尔曲线",
    'kidney': "集结地",
    'brace': "大括号",
    'trapezoid': "梯形",
    'rectangle': "矩形",
    'chord': "弓形",
    'sector': "扇形",
    'arc': "弧线",
    'parallel': "平行线",
    'annoframe': "注记指示框",
    'tooltipBoxM': "多角标注框",
    'runway': "跑道线",
    'curveEight': "八字形",
    'arrowLine': "箭头线",
    'pathText': "沿线注记",
    'concentricCircle': "同心圆",
    'combinedCircle': "组合圆",
    'freeCurve': "自由线",
    'nodeChain': "节点链",
    'lineMarking': "线型标注",
    'symbolTextBox': "标注框",

    'parallelFlatArrow': "平行平耳箭头",
    'multipleArrow': "多箭头",
    'trapezoidalFlatArrow': "梯形平耳箭头",
    'besselPointArrow': "贝塞尔尖耳箭头",
    'besselArrow': "普通贝塞尔箭头",
    'doubleArrow': "钳击箭头",
    'brokenSpaceTriangleArrow': "折线空三角箭头",
    'besselDovetailArrow': "贝塞尔燕尾箭头",
    'ordinaryLineArrow': "普通折线箭头",
    'besselPointedEarsTailArrow': "贝塞尔尖耳燕尾箭头",
    'besselTipArrow': "贝塞尔尖耳单点箭头",
    'besselArrowNoGraph': "普通贝塞尔箭头(不随图)",
    'brokenSpaceTriangleArrowNoGraph': "折线空三角箭头(不随图)",
    'besselPointedEarsTailArrowNoGraph': "贝塞尔尖耳燕尾箭头(不随图)",
    'ordinaryLineArrowNoGraph': "普通折线箭头(不随图)",
    'combianationArrow': "组合箭头",
    'symbolAlgo_311': '进攻方向',
    'symbolAlgo_317': '钳击',

    //new obj
    'airDeployment': "空军兵力部署",
    'airRoute': "空军航线",
    'arcRegion': "扇形区域",
    'flagGroup': "多旗",
    'lineRelation': "对象间连线",
    'polygonRegion': "多边形区域管理",
    'navyRoute': "海军航线",
    'missileRoute': "导弹航线",
    'navyDeployment': "海军兵力部署",
    'satelliteTimeWindows': "卫星时间窗",
    'satellite': "卫星",
    'symbolText': "对象标注",
    'symbolText1': "对象标注(带指示线)",
    'interferenceBeam': "干扰波束",
    'groupObject': "组合对象",

    //routeNodeTypeName
    'RENDEZVOUS': "会合点",
    'EXPANDING': "展开点",
    'VOLLEY': "齐射点",
    'STANDBY': "待机点",
    'SUPPLY': "补给点",
    'TAKEOFF': "起飞点",
    'INITIAL': "初始点",
    'VISUALINITAL': "可视初始点",
    'LANCH': "发射点",
    'TURNING': "转弯点",
    'AIMING': "瞄准点",
    'COMMONROUTE': "普通航路点",
    'WEAPONLAUNCH': "武器发射点",
    'TARGET': "目标点",
    'ATTACK': "攻击点",
    'SUPPRESS': "压制点",
    'EIGHTSPIRAL': "八字盘旋点",
    'HAPPYVALLEY': "跑马圈点",

    'LITERATESIGN': "标牌文字",

    'undoStackOverflow': '撤销的栈溢出',

    //Mapviewer
    'noContent': '无内容',
    'lableTitle': '_标签图层',
    "Distance": '距离',
    "Area": '面积:',
    "SpaceDistance": '空间距离',
    "VerticalHeight": '垂直高度',
    "LevelDistance": '水平距离',
	
	"SYMBOL_MODEL": '模型',
	"SYMBOL_POINT": '点图元',

};



/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {


/***/ }),
/* 3 */
/***/ (function(module, exports) {

!function(){"use strict";function t(e){"@babel/helpers - typeof";return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function o(t,e){return(o=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function l(e){var o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var l,r=n(e);if(o){var i=n(this).constructor;l=Reflect.construct(r,arguments,i)}else l=r.apply(this,arguments);return function(e,o){if(o&&("object"===t(o)||"function"==typeof o))return o;if(void 0!==o)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(e)}(this,l)}}function n(t){return(n=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var r=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&o(t,e)}(u,SuperMapAlgoPlot.AlgoSymbol);var n,r,i,a=l(u);function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),0===(e=a.call(this,t)).scaleValues.length&&(e.scaleValues.push(.04),e.scaleValues.push(1),e.scaleValues.push(.12)),e}return n=u,(r=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){if(!this.isEdit){var e=this.getSubSymbolScaleValue();(e>.3||e<=0)&&(e=.3),this.scaleValues[0]=e,this.scaleValues[2]=e}var o=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o);var l=this.scaleValues[0],n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t),r=l*n,i=this.scaleValues[2]*n,a=!1;if(a=0===this.scaleValues[1],0!==SuperMapAlgoPlot.PlottingUtil.polylineDistance(o)){for(var u=[],p=[],s=0,c=[],P=0;P<o.length;P++)SuperMapAlgoPlot.PlottingUtil.equalFuzzy(t[s].x,o[P].x)&&SuperMapAlgoPlot.PlottingUtil.equalFuzzy(t[s].y,o[P].y)&&(c.length>0&&(c.push(o[P]),p.push(c),c=[]),s++),c.push(o[P]);for(var f=0;f<p.length;f++){var g=SuperMapAlgoPlot.PlottingUtil.polylineDistance(p[f]),y=parseInt(g/i);0==y&&(y=1);var S=g/y;0==f&&S;for(var h=0;h<=g;h+=S){var b=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(p[f],h);if(!(b.index<0)&&(u.push(b.pt),!((b=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(p[f],h+.5*S)).index<0))){var A=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(r,p[f][b.index+1],b.pt);a?u.push(A.pntLeft):u.push(A.pntRight)}}p.length-1===f&&u.push(p[f][p[f].length-1])}this.scalePoints=[];var d=new SuperMapAlgoPlot.Point(u[1].x,u[1].y);d.isScalePoint=!0,d.tag=0,this.scalePoints.push(d),(d=new SuperMapAlgoPlot.Point(u[2].x,u[2].y)).isScalePoint=!0,d.tag=0,this.scalePoints.push(d),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,u);for(var M=u.length,v=0,m=0;m<M-1;++m){var O=new SuperMapAlgoPlot.Point(u[m].x,u[m].y),w=new SuperMapAlgoPlot.Point(u[m+1].x,u[m+1].y);v=.3*SuperMapAlgoPlot.PlottingUtil.distance(O,w);var U=[],L=SuperMapAlgoPlot.PlottingUtil.findPointOnLineByRatio(.5,u[m],u[m+1]),x=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(.5*v,u[m],L);U.push(x.pntLeft),U.push(x.pntRight),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,U)}this.finish()}}}},{key:"computeScaleValues",value:function(t,e){if(!0===e.isScalePoint){var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o),n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(o);if(0===t){var r=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(1,l[1],l[0]),i=SuperMapAlgoPlot.PlottingUtil.pointProjectToSegment(e,r.pntRight,r.pntLeft),a=SuperMapAlgoPlot.PlottingUtil.distance(i.projectPoint,o[0]);this.scaleValues[0]=a/n;var u=SuperMapAlgoPlot.PlottingUtil.pointIsRightToLine(l[0],l[1],e);this.scaleValues[1]=u?0:1}else{for(var p,s=-1,c=0,P=l.length-1;c<P;c++){var f=SuperMapAlgoPlot.PlottingUtil.pointIsOnPolyLine(e,l[c],l[c+1]),g=SuperMapAlgoPlot.PlottingUtil.pointProjectToSegment(e,l[c],l[c+1]);if(f){p=e,s=c;break}if(g.isOnline){p=g.projectPoint,s=c;break}}if(-1===s)return void(this.scaleValues[2]=.05);var y=[];(y=y.concat(l.slice(0,s+1))).push(p);var S=SuperMapAlgoPlot.PlottingUtil.polylineDistance(y)/n;if(S>=1)return;this.scaleValues[2]=S}}}}])&&e(n.prototype,r),i&&e(n,i),Object.defineProperty(n,"prototype",{writable:!1}),u}();function i(t){"@babel/helpers - typeof";return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function a(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function u(t,e){return(u=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function p(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=s(t);if(e){var n=s(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===i(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function s(t){return(s=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol15800=r;var c=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&u(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol15800);var e,o,l,n=p(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),(e=n.call(this,t)).scaleValues.length>0&&(e.scaleValues.push(.029615),e.scaleValues.push(1),e.scaleValues.push(.12)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){if(!this.isEdit){var e=this.getSubSymbolScaleValue();(e>.3||e<=0)&&(e=.3),this.scaleValues[0]=e,this.scaleValues[2]=e}var o=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o);var l=this.scaleValues[0],n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t),r=l*n,i=this.scaleValues[2]*n,a=!1;if(a=0===this.scaleValues[1],0!==SuperMapAlgoPlot.PlottingUtil.polylineDistance(o)){for(var u=[],p=[],s=0,c=[],P=0;P<o.length;P++)SuperMapAlgoPlot.PlottingUtil.equalFuzzy(t[s].x,o[P].x)&&SuperMapAlgoPlot.PlottingUtil.equalFuzzy(t[s].y,o[P].y)&&(c.length>0&&(c.push(o[P]),p.push(c),c=[]),s++),c.push(o[P]);for(var f=i,g=0;g<p.length;g++){var y=SuperMapAlgoPlot.PlottingUtil.polylineDistance(p[g]),S=parseInt(y/i);0==S&&(S=1);var h=y/S;0==g&&(f=h);for(var b=0;b<=y;b+=h){var A=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(p[g],b);if(!(A.index<0)&&(u.push(A.pt),!((A=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(p[g],b+.5*h)).index<0))){var d=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(r,p[g][A.index+1],A.pt);a?u.push(d.pntLeft):u.push(d.pntRight)}}p.length-1===g&&u.push(p[g][p[g].length-1])}this.scalePoints=[];var M=new SuperMapAlgoPlot.Point(u[1].x,u[1].y);M.isScalePoint=!0,M.tag=0,this.scalePoints.push(M);d=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(o,f);this.addScalePoint(d.pt),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,u);for(var v=u.length,m=0,O=0;O<v-1;++O){var w=new SuperMapAlgoPlot.Point(u[O].x,u[O].y),U=new SuperMapAlgoPlot.Point(u[O+1].x,u[O+1].y);m=.25*SuperMapAlgoPlot.PlottingUtil.distance(w,U);c=[];var L=new SuperMapAlgoPlot.Point(.5*(w.x+U.x),.5*(w.y+U.y)),x=SuperMapAlgoPlot.PlottingUtil.dirAngle(w,U)*SuperMapAlgoPlot.PlottingUtil.RTOD,j=SuperMapAlgoPlot.PlottingUtil.circlePoint(L,m,m,x+90),E=1.5*m,V=SuperMapAlgoPlot.PlottingUtil.circlePoint(j,E,E,x+260),T=SuperMapAlgoPlot.PlottingUtil.circlePoint(j,E,E,x+280);c.push(V),c.push(j),c.push(T),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,c)}this.finish()}}}}])&&a(e.prototype,o),l&&a(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function P(t){"@babel/helpers - typeof";return(P="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function g(t,e){return(g=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=S(t);if(e){var n=S(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===P(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function S(t){return(S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol15804=c;var h=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&g(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=y(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues.push(.05),e.scaleValues.push(0),e.scaleValues.push(.185)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);e=SuperMapAlgoPlot.PlottingUtil.clearSamePts(e),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,e);var o=SuperMapAlgoPlot.PlottingUtil.polylineDistance(e),l=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t);if(!this.isEdit){var n=this.getSubSymbolScaleValue(l);(n>.3||n<=0)&&(n=.3),this.scaleValues[2]=n,this.scaleValues[0]=.5*this.scaleValues[2]}for(var r=this.scaleValues[0]*l,i=this.scaleValues[1],a=this.scaleValues[2]*l,u=.5*r,p=o-2*a-2*u,s=a,c=0;c<2;c++){var P=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(s,e);if(-1!==P.index){var f=s+u,g=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(f,e);if(-1!==g.index){var y=[],S=[];if(y.push(P.pts),SuperMapAlgoPlot.PlottingUtil.equalFuzzy(e[P.index].x,P.pts.x)&&SuperMapAlgoPlot.PlottingUtil.equalFuzzy(e[P.index].y,P.pts.y)&&P.index+1<e.length){var h=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(r,e[P.index+1],P.pts);0===i?y.push(new SuperMapAlgoPlot.Point(h.pntRight.x,h.pntRight.y)):y.push(new SuperMapAlgoPlot.Point(h.pntLeft.x,h.pntLeft.y))}else{h=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(r,e[P.index],P.pts);0===i?y.push(new SuperMapAlgoPlot.Point(h.pntLeft.x,h.pntLeft.y)):y.push(new SuperMapAlgoPlot.Point(h.pntRight.x,h.pntRight.y))}S.push(g.pts);var b=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(r,e[g.index],g.pts);if(0===i?S.push(new SuperMapAlgoPlot.Point(b.pntLeft.x,b.pntLeft.y)):S.push(new SuperMapAlgoPlot.Point(b.pntRight.x,b.pntRight.y)),0===c){this.scalePoints=[];var A=new SuperMapAlgoPlot.Point(y[1].x,y[1].y);A.isScalePoint=!0,A.tag=0,this.scalePoints.push(A),(A=new SuperMapAlgoPlot.Point(y[0].x,y[0].y)).isScalePoint=!0,A.tag=1,this.scalePoints.push(A)}this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,y),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,S),s+=p+u}}}this.finish()}}},{key:"computeScaleValues",value:function(t,e){if(!0===e.isScalePoint){var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o),n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(o);new SuperMapAlgoPlot.Point(e.x,e.y);if(0===t){var r=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(n*this.scaleValues[2],l);if(!r.bfind)return;var i=SuperMapAlgoPlot.PlottingUtil.distance(r.pts,e)/n,a=SuperMapAlgoPlot.PlottingUtil.pointIsRightToLine(l[r.index],r.pts,e);this.scaleValues[1]=a?1:0,this.scaleValues[0]=i}else if(1===t){for(var u=0,p=-1,s=null,c=0;c<l.length-1;c++){var P=SuperMapAlgoPlot.PlottingUtil.pointProjectToSegment(e,l[c],l[c+1]);if(P.isOnline){var f=SuperMapAlgoPlot.PlottingUtil.distance(P.projectPoint,e);0==u?(u=f,p=c,s=e):f<u&&(u=f,p=c,s=e)}}if((f=SuperMapAlgoPlot.PlottingUtil.distance(e,l[0]))<u&&(u=f,p=0,s=l[0]),(f=SuperMapAlgoPlot.PlottingUtil.distance(e,l[l.length-1]))<u&&(u=f,p=l.length-1,s=l[l.length-1]),-1==p)return void(this.scaleValues[2]=0);for(var g=0,y=0;y<p;y++)g+=SuperMapAlgoPlot.PlottingUtil.distance(l[y],l[y+1]);var S=(g+=SuperMapAlgoPlot.PlottingUtil.distance(s,l[p]))/n;S>.7&&(S=.7),this.scaleValues[2]=S}}}}])&&f(e.prototype,o),l&&f(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function b(t){"@babel/helpers - typeof";return(b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function A(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function d(t,e){return(d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function M(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=v(t);if(e){var n=v(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===b(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function v(t){return(v=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol15200=h;var m=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&d(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=M(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&e.scaleValues.push(.05),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t);this.isEdit||(this.scaleValues[0]=.25*this.getSubSymbolScaleValue());var o=[];o=3>=t.length?SuperMapAlgoPlot.Primitives.getSpatialData(SuperMapAlgoPlot.SymbolType.KIDNEY,t):SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t,!0),o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o);for(var l=this.mergeDashLine(this.dashLines,[]),n=this.computeDashLine(l,o),r=0;r<n.length;r++)this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,n[r]);for(var i=0;i<4;i++){var a=Math.floor(i*o.length/4),u=new SuperMapAlgoPlot.Point(o[a].x,o[a].y),p=new SuperMapAlgoPlot.Point(o[a+1].x,o[a+1].y),s=new SuperMapAlgoPlot.Point((u.x+p.x)/2,(u.y+p.y)/2),c=SuperMapAlgoPlot.PlottingUtil.radian(p,s)*SuperMapAlgoPlot.PlottingUtil.RTOD,P=this.scaleValues[0]*e/2,f=SuperMapAlgoPlot.PlottingUtil.circlePoint(s,P,P,c),g=SuperMapAlgoPlot.PlottingUtil.circlePoint(s,4*P,4*P,c+270),y=SuperMapAlgoPlot.PlottingUtil.circlePoint(s,P,P,c+180);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[f,g,y],{lineTypeLimit:!0,surroundLineLimit:!0})}this.finish()}}}])&&A(e.prototype,o),l&&A(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function O(t){"@babel/helpers - typeof";return(O="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function w(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function U(t,e){return(U=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function L(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=x(t);if(e){var n=x(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===O(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function x(t){return(x=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol29100=m;var j=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&U(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol29100);var e,o,l,n=L(r);function r(t){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n.call(this,t)}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t);this.isEdit||(this.scaleValues[0]=.25*this.getSubSymbolScaleValue());var o=[];o=3>=t.length?SuperMapAlgoPlot.Primitives.getSpatialData(SuperMapAlgoPlot.SymbolType.KIDNEY,t):SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t,!0),o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o);for(var l=this.mergeDashLine(this.dashLines,[]),n=this.computeDashLine(l,o),r=0;r<n.length;r++)this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,n[r]);for(var i=0;i<4;i++){var a=i*(o.length-1)/4,u=new SuperMapAlgoPlot.Point(o[a].x,o[a].y),p=new SuperMapAlgoPlot.Point(o[a+1].x,o[a+1].y),s=new SuperMapAlgoPlot.Point((u.x+p.x)/2,(u.y+p.y)/2),c=SuperMapAlgoPlot.PlottingUtil.radian(s,p)*SuperMapAlgoPlot.PlottingUtil.RTOD,P=this.scaleValues[0]*e/2,f=SuperMapAlgoPlot.PlottingUtil.circlePoint(s,P,P,c),g=SuperMapAlgoPlot.PlottingUtil.circlePoint(s,4*P,4*P,c+270),y=SuperMapAlgoPlot.PlottingUtil.circlePoint(s,P,P,c+180);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[f,g,y],{surroundLineLimit:!0,lineTypeLimit:!0})}this.finish()}}}])&&w(e.prototype,o),l&&w(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function E(t){"@babel/helpers - typeof";return(E="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function V(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function T(t,e){return(T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function R(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=B(t);if(e){var n=B(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===E(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function B(t){return(B=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol29101=j;var Y=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&T(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=R(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues.push(.0375),e.scaleValues.push(.025)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);e=SuperMapAlgoPlot.PlottingUtil.clearSamePts(e);var o=SuperMapAlgoPlot.PlottingUtil.polylineDistance(e);this.isEdit||(this.scaleValues[0]=.3*this.getSubSymbolScaleValue(o),this.scaleValues[1]=.35*this.getSubSymbolScaleValue());var l=.5*o,n=180*SuperMapAlgoPlot.PlottingUtil.radian(t[0],t[1])/Math.PI,r=o*this.scaleValues[0],i=Math.sqrt(r*r+r*r)+r/2,a=l-i,u=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(a,e).pts,p=this.computeXPts(u,r,e,n),s=[];s.push(new SuperMapAlgoPlot.Point(p[0].x,p[0].y)),s.push(new SuperMapAlgoPlot.Point(p[1].x,p[1].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,s);var c=[];c.push(new SuperMapAlgoPlot.Point(p[2].x,p[2].y)),c.push(new SuperMapAlgoPlot.Point(p[3].x,p[3].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,c);var P=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(l,e).pts,f=this.computeXPts(P,r,e,n),g=[];g.push(new SuperMapAlgoPlot.Point(f[0].x,f[0].y)),g.push(new SuperMapAlgoPlot.Point(f[1].x,f[1].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,g);var y=[];y.push(new SuperMapAlgoPlot.Point(f[2].x,f[2].y)),y.push(new SuperMapAlgoPlot.Point(f[3].x,f[3].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,y);var S=l+i,h=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(S,e).pts,b=this.computeXPts(h,r,e,n),A=[];A.push(new SuperMapAlgoPlot.Point(b[0].x,b[0].y)),A.push(new SuperMapAlgoPlot.Point(b[1].x,b[1].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,A);var d=[];d.push(new SuperMapAlgoPlot.Point(b[2].x,b[2].y)),d.push(new SuperMapAlgoPlot.Point(b[3].x,b[3].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,d);for(var M=l-2*i,v=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(M,e),m=v.index,O=v.pts,w=[],U=0;U<=m;U++)w.push(e[U]);w.push(O),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,w);var L=l+2*i,x=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(L,e),j=x.index,E=x.pts,V=[];if(j<=e.length){V.push(E);for(var T=j+1;T<=e.length-1;T++)V.push(e[T])}this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,V);var R=e[0],B=e[1],Y=e[e.length-2],_=e[e.length-1],I=o*this.scaleValues[1],C=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(I,B,R),D=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(I,Y,_),N=[];N.push(R),N.push(C.pntRight),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,N);var k=[];k.push(_),k.push(D.pntLeft),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,k);var z=SuperMapAlgoPlot.PlottingUtil.circlePoint(t[0],i,i,90);this.addScalePoint(z,0),this.finish()}}},{key:"computeScaleValues",value:function(t,e){if(0===t&&!0===e.isScalePoint){var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o);l=SuperMapAlgoPlot.PlottingUtil.clearSamePts(l);var n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(l),r=.5*SuperMapAlgoPlot.PlottingUtil.distance(o[0],e)/n;r>=.12&&(r=.12),this.scaleValues[0]=r}}},{key:"computeXPts",value:function(t,e,o,l){var n=[],r=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+45),i=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+225);n.push(r),n.push(i);var a=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+135),u=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+315);return n.push(a),n.push(u),n}}])&&V(e.prototype,o),l&&V(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function _(t){"@babel/helpers - typeof";return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function I(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function C(t,e){return(C=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function D(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=N(t);if(e){var n=N(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===_(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function N(t){return(N=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol510100=Y;var k=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&C(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=D(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues.push(.5),e.scaleValues.push(.03)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){this.isEdit||(this.scaleValues[1]=this.getSubSymbolScaleValue());for(var e=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t),o=this.scaleValues[1]*e,l=this.scaleValues[0]*e,n=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(t,l).pt,r=[],i=0;i<t.length;i++){if(i===t.length-1){r.push(t[i]);break}r.push(t[i]);var a=[];if(this.intersectLineAndCircle(t[i],t[i+1],n,o,a))for(var u=0;u<a.length;u++)r.push(a[u])}for(var p=[],s=0;s<r.length;s++){if(s===r.length-1){0!==p.length&&(p.push(r[s]),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,p),p=[]);break}this.isLineInCircle(r[s],r[s+1],n,o)?0!==p.length&&(p.push(r[s]),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,p),p=[]):p.push(r[s])}this.computeSubSymbol(n,2*o),this.addScalePoint(n);var c=new SuperMapAlgoPlot.Point(n.x+o,n.y);SuperMapAlgoPlot.PlottingUtil.rotateAngle(n,30,c),this.addScalePoint(c),this.finish()}}},{key:"computeScaleValues",value:function(t,e){if(!0===e.isScalePoint){if(this.scalePoints.length<=t)return;var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.polylineDistance(o);if(0===t){for(var n=0,r=-1,i=null,a=0;a<o.length-1;a++){var u=SuperMapAlgoPlot.PlottingUtil.pointProjectToSegment(e,o[a],o[a+1]);if(SuperMapAlgoPlot.PlottingUtil.pointIsOnPolyLine(u.projectPoint,o[a],o[a+1])){var p=SuperMapAlgoPlot.PlottingUtil.distance(u.projectPoint,e);0===n?(n=p,r=a,i=u.projectPoint):p<n&&(n=p,r=a,i=u.projectPoint)}}if(-1===r)return;for(var s=0,c=0;c<r;c++)s+=SuperMapAlgoPlot.PlottingUtil.distance(o[c],o[c+1]);var P=(s+=SuperMapAlgoPlot.PlottingUtil.distance(i,o[r]))/l;P>1&&(P=1),this.scaleValues[0]=P}if(1===t){var f=this.scaleValues[0]*l,g=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(o,f);if(-1===g.index)return;var y=SuperMapAlgoPlot.PlottingUtil.distance(g.pt,e)/l;y>.4&&(y=.4),this.scaleValues[1]=y}}}},{key:"intersectLineAndCircle",value:function(t,e,o,l,n){for(var r=!1,i=SuperMapAlgoPlot.Primitives.getSpatialData(SuperMapAlgoPlot.SymbolType.CIRCLESYMBOL,[o,new SuperMapAlgoPlot.Point(o.x+l,o.y)]),a=0;a<i.length-1;a++){var u=new SuperMapAlgoPlot.Point(0,0);SuperMapAlgoPlot.PlottingUtil.intersectLineSegs(t,e,i[a],i[a+1],u)&&(r=!0,n.push(u))}if(t.x>e.x){for(var p=0;p<n.length&&p!==n.length-1;p++)if(n[p].x<n[p+1].x){var s=n[p];n[p]=n[p+1],n[p+1]=s}}else if(t.x<e.x){for(var c=0;c<n.length&&c!==n.length-1;c++)if(n[c].x>n[c+1].x){var P=n[c];n[c]=n[c+1],n[c+1]=P}}else if(t.y>e.y){for(var f=0;f<n.length&&f!==n.length-1;f++)if(n[f].y<n[f+1].y){var g=n[f];n[f]=n[f+1],n[f+1]=g}}else if(t.y<e.y)for(var y=0;y<n.length&&y!==n.length-1;y++)if(n[y].y>n[y+1].y){var S=n[y];n[y]=n[y+1],n[y+1]=S}return r}},{key:"isLineInCircle",value:function(t,e,o,l){var n=new SuperMapAlgoPlot.Point((t.x+e.x)/2,(t.y+e.y)/2);return SuperMapAlgoPlot.PlottingUtil.distance(n,o)<l}},{key:"computeSubSymbol",value:function(t,e){var o=.5*e,l=[];l.push(t),l.push(new SuperMapAlgoPlot.Point(t.x+o,t.y)),this.addCell(SuperMapAlgoPlot.SymbolType.CIRCLESYMBOL,l);var n=[];n.push(new SuperMapAlgoPlot.Point(t.x-o,t.y)),n.push(new SuperMapAlgoPlot.Point(t.x+o,t.y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,n);var r=new SuperMapAlgoPlot.Point(t.x+.75*o,t.y),i=.8*o,a=SuperMapAlgoPlot.PlottingUtil.circlePoint(r,i,i,155),u=SuperMapAlgoPlot.PlottingUtil.circlePoint(r,i,i,205),p=[];p.push(a);var s=i*(Math.cos(25*SuperMapAlgoPlot.PlottingUtil.DTOR)-Math.cos(75*SuperMapAlgoPlot.PlottingUtil.DTOR));p.push(new SuperMapAlgoPlot.Point(r.x-s,r.y)),p.push(u),p.push(r),this.addCell(SuperMapAlgoPlot.SymbolType.ARBITRARYPOLYGONSYMBOL,p,{fillLimit:!0,fill:!0})}}])&&I(e.prototype,o),l&&I(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function z(t){"@babel/helpers - typeof";return(z="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function F(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function J(t,e){return(J=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=X(t);if(e){var n=X(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===z(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function X(t){return(X=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol520100=k;var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&J(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol520100);var e,o,l,n=q(r);function r(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),n.apply(this,arguments)}return e=r,(o=[{key:"computeSubSymbol",value:function(t,e){var o=.5*e,l=[];l.push(t),l.push(new SuperMapAlgoPlot.Point(t.x+o,t.y)),this.addCell(SuperMapAlgoPlot.SymbolType.CIRCLESYMBOL,l);var n=.6*o,r=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,n,n,60),i=new SuperMapAlgoPlot.Point(t.x-.3*o,t.y),a=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,n,n,240),u=new SuperMapAlgoPlot.Point(t.x+.3*o,t.y),p=[];p.push(r),p.push(i),p.push(t),p.push(u),p.push(a),p.push(t),this.addCell(SuperMapAlgoPlot.SymbolType.ARBITRARYPOLYGONSYMBOL,p,{fillLimit:!0,fill:!0})}}])&&F(e.prototype,o),l&&F(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function K(t){"@babel/helpers - typeof";return(K="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function W(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function H(t,e){return(H=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function Q(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=Z(t);if(e){var n=Z(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===K(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function Z(t){return(Z=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol520200=G;var $=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&H(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=Q(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues.push(.05),e.scaleValues.push(.05)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){0==this.scaleValues.length?(this.scaleValues[0]=.05,this.scaleValues[1]=.05):1==this.scaleValues.length&&(this.scaleValues[1]=.5*this.getSubSymbolScaleValue());var e=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t,!1);e=SuperMapAlgoPlot.PlottingUtil.clearSamePts(e);var o=SuperMapAlgoPlot.PlottingUtil.polylineDistance(e);this.isEdit||(this.scaleValues[0]=.8*this.getSubSymbolScaleValue(o),this.scaleValues[1]=.5*this.getSubSymbolScaleValue());var l=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(e,.3*o);if(-1!==l.index){var n=l.pt,r=l.index,i=o*this.scaleValues[0]*.5,a=SuperMapAlgoPlot.PlottingUtil.radian(n,e[r+1])*SuperMapAlgoPlot.PlottingUtil.RTOD,u=SuperMapAlgoPlot.PlottingUtil.circlePoint(n,i,i,a+90),p=SuperMapAlgoPlot.PlottingUtil.circlePoint(n,i,i,a-90),s=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(i,n,u),c=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(i,n,p);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[s.pntLeft,s.pntRight]),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[c.pntLeft,c.pntRight]);var P=SuperMapAlgoPlot.PlottingUtil.findPointInPolyLine(e,.6*o);if(-1!==P.index){var f=P.pt,g=P.index,y=SuperMapAlgoPlot.PlottingUtil.radian(f,e[g+1])*SuperMapAlgoPlot.PlottingUtil.RTOD,S=SuperMapAlgoPlot.PlottingUtil.circlePoint(f,i,i,y+90),h=SuperMapAlgoPlot.PlottingUtil.circlePoint(f,i,i,y-90),b=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(i,f,S),A=SuperMapAlgoPlot.PlottingUtil.getSidePointsOfLine(i,f,h);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[b.pntLeft,b.pntRight]),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[A.pntLeft,A.pntRight]),this.addDovetailArrow(e,this.scaleValues[1]),this.addScalePoint(h,0),this.finish()}}}}},{key:"computeScaleValues",value:function(t,e){if(!0===e.isScalePoint){if(0!=t)return;var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o),this.minEditPts>o.length)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o,!1);l=SuperMapAlgoPlot.PlottingUtil.clearSamePts(l);var n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(l),r=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(.6*n,l);if(!r.bfind)return;var i=2*SuperMapAlgoPlot.PlottingUtil.distance(e,r.pts);this.scaleValues[0]=i/n}}}])&&W(e.prototype,o),l&&W(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function tt(t){"@babel/helpers - typeof";return(tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function et(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function ot(t,e){return(ot=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function lt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=nt(t);if(e){var n=nt(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===tt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function nt(t){return(nt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol520300=$;var rt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ot(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=lt(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues.push(.02),e.scaleValues.push(.01)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);e=SuperMapAlgoPlot.PlottingUtil.clearSamePts(e);var o=SuperMapAlgoPlot.PlottingUtil.polylineDistance(e);this.isEdit||(this.scaleValues[0]=.3*this.getSubSymbolScaleValue(o),this.scaleValues[1]=.15*this.getSubSymbolScaleValue(o));var l=.5*o,n=180*SuperMapAlgoPlot.PlottingUtil.radian(t[0],t[1])/Math.PI,r=o*this.scaleValues[0],i=Math.sqrt(r*r+r*r)+r/2,a=l-i,u=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(a,e).pts,p=this.computeXPts(u,r,e,n),s=[];s.push(new SuperMapAlgoPlot.Point(p[0].x,p[0].y)),s.push(new SuperMapAlgoPlot.Point(p[1].x,p[1].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,s);var c=[];c.push(new SuperMapAlgoPlot.Point(p[2].x,p[2].y)),c.push(new SuperMapAlgoPlot.Point(p[3].x,p[3].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,c);var P=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(l,e).pts,f=this.computeXPts(P,r,e,n),g=[];g.push(new SuperMapAlgoPlot.Point(f[0].x,f[0].y)),g.push(new SuperMapAlgoPlot.Point(f[1].x,f[1].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,g);var y=[];y.push(new SuperMapAlgoPlot.Point(f[2].x,f[2].y)),y.push(new SuperMapAlgoPlot.Point(f[3].x,f[3].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,y);var S=l+i,h=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(S,e).pts,b=this.computeXPts(h,r,e,n),A=[];A.push(new SuperMapAlgoPlot.Point(b[0].x,b[0].y)),A.push(new SuperMapAlgoPlot.Point(b[1].x,b[1].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,A);var d=[];d.push(new SuperMapAlgoPlot.Point(b[2].x,b[2].y)),d.push(new SuperMapAlgoPlot.Point(b[3].x,b[3].y)),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,d);var M=l-2*i,v=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(M,e);if(v.bfind){for(var m=v.index,O=v.pts,w=[],U=0;U<=m;U++)w.push(e[U]);w.push(O);var L=o*this.scaleValues[1];this.computeDashLines(w,L)}var x=l+2*i,j=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(x,e);if(j.bfind){var E=j.index,V=j.pts,T=[];if(E<=e.length){T.push(V);for(var R=E+1;R<=e.length-1;R++)T.push(e[R])}this.computeDashLines(T,L)}var B=SuperMapAlgoPlot.PlottingUtil.circlePoint(t[0],i,i,90);this.addScalePoint(B,0),this.finish()}}},{key:"computeScaleValues",value:function(t,e){if(0===t&&!0===e.isScalePoint){var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o);l=SuperMapAlgoPlot.PlottingUtil.clearSamePts(l);var n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(l),r=.5*SuperMapAlgoPlot.PlottingUtil.distance(o[0],e)/n;r>=.12&&(r=.12),this.scaleValues[0]=r}}},{key:"computeXPts",value:function(t,e,o,l){var n=[],r=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+45),i=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+225);n.push(r),n.push(i);var a=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+135),u=SuperMapAlgoPlot.PlottingUtil.circlePoint(t,e,e,l+315);return n.push(a),n.push(u),n}},{key:"computeDashLines",value:function(t,e){for(var o=this.computeDashLine(2*e,2*e,t),l=.5*e,n=0;n<o.length;n++){var r=o[n];if(!((r=SuperMapAlgoPlot.PlottingUtil.clearSamePts(r)).length<=1)){var i=new SuperMapAlgoPlot.Point(r[0].x,r[0].y),a=new SuperMapAlgoPlot.Point(r[r.length-1].x,r[r.length-1].y),u=180*SuperMapAlgoPlot.PlottingUtil.radian(i,a)/Math.PI,p=SuperMapAlgoPlot.PlottingUtil.circlePoint(i,l,l,u+90),s=SuperMapAlgoPlot.PlottingUtil.circlePoint(i,l,l,u+270),c=SuperMapAlgoPlot.PlottingUtil.circlePoint(a,l,l,u+90),P=SuperMapAlgoPlot.PlottingUtil.circlePoint(a,l,l,u+270),f=[];f.push(p),f.push(s),f.push(P),f.push(c),this.addCell(SuperMapAlgoPlot.SymbolType.ARBITRARYPOLYGONSYMBOL,f,{fillLimit:!0,fill:!0})}}}}])&&et(e.prototype,o),l&&et(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function it(t){"@babel/helpers - typeof";return(it="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function at(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function ut(t,e){return(ut=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function pt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=st(t);if(e){var n=st(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===it(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function st(t){return(st=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol520500=rt;var ct=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&ut(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=pt(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues[0]=.05,e.scaleValues[1]=.05),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);e=SuperMapAlgoPlot.PlottingUtil.clearSamePts(e);var o=SuperMapAlgoPlot.PlottingUtil.polylineDistance(e);this.isEdit||(this.scaleValues[0]=.5*this.getSubSymbolScaleValue(o),this.scaleValues[1]=.5*this.getSubSymbolScaleValue());var l=this.getLinePts(e,this.scaleValues[0]),n=new SuperMapAlgoPlot.Point((l.startPt.x+l.endPt.x)/2,(l.startPt.y+l.endPt.y)/2),r=180*SuperMapAlgoPlot.PlottingUtil.radian(l.startPt,l.endPt)/Math.PI,i=SuperMapAlgoPlot.PlottingUtil.distance(l.startPt,l.endPt);if(0<this.subSymbols.length)this.computeSubSymbol(this.subSymbols[0],n,i,r-90);else{var a=new SuperMapAlgoPlot.Point(-.5*i,.25*i),u=new SuperMapAlgoPlot.Point(-.5*i,-.25*i),p=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,a,r),s=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,u,r);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[p,s]);var c=new SuperMapAlgoPlot.Point(-.5*i,.125*i),P=new SuperMapAlgoPlot.Point(.25*i,.125*i),f=new SuperMapAlgoPlot.Point(.5*i,0),g=new SuperMapAlgoPlot.Point(.25*i,-.125*i),y=new SuperMapAlgoPlot.Point(-.5*i,-.125*i),S=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,c,r),h=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,P,r),b=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,f,r),A=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,g,r),d=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(n,y,r);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[S,h,b,A,d])}for(var M=[],v=[],m=0;m<=l.startIndex;m++)M.push(e[m]);if(M.push(l.startPt),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,M),l.endIndex<=e.length){v.push(l.endPt);for(var O=l.endIndex+1;O<=e.length-1;O++)v.push(e[O]);this.addDovetailArrow(v,this.scaleValues[1])}var w=SuperMapAlgoPlot.PlottingUtil.circlePoint(n,.5*i,.5*i,r+90);this.addScalePoint(w,0),this.finish()}}},{key:"computeScaleValues",value:function(t,e){if(0===t&&!0===e.isScalePoint){var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o);l=SuperMapAlgoPlot.PlottingUtil.clearSamePts(l);var n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(l),r=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(.5*n,l),i=2*SuperMapAlgoPlot.PlottingUtil.distance(r.pts,e)/n;this.scaleValues[0]=i<=.5?i:.5}}}])&&at(e.prototype,o),l&&at(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function Pt(t){"@babel/helpers - typeof";return(Pt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function ft(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function gt(t,e){return(gt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function yt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=St(t);if(e){var n=St(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===Pt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function St(t){return(St=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol530100=ct;var ht=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&gt(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=yt(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues[0]=.05,e.scaleValues[1]=.05),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){this.isEdit||(this.scaleValues[0]=this.getSubSymbolScaleValue(),this.scaleValues[1]=.5*this.getSubSymbolScaleValue());var e=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t),o=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t);o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o);var l=e*this.scaleValues[0],n=this.getLinePts(o,this.scaleValues[0],5/14),r=this.getLinePts(o,this.scaleValues[0],9/14),i=new SuperMapAlgoPlot.Point((n.startPt.x+n.endPt.x)/2,(n.startPt.y+n.endPt.y)/2),a=180*SuperMapAlgoPlot.PlottingUtil.radian(n.startPt,n.endPt)/Math.PI;this.createSubSymbol(i,l,a);var u=new SuperMapAlgoPlot.Point((r.startPt.x+r.endPt.x)/2,(r.startPt.y+r.endPt.y)/2),p=180*SuperMapAlgoPlot.PlottingUtil.radian(r.startPt,r.endPt)/Math.PI;this.createSubSymbol(u,l,p);var s=SuperMapAlgoPlot.PlottingUtil.circlePoint(u,.5*l,.5*l,p+90);this.addScalePoint(s);for(var c=[],P=[],f=[],g=0;g<=n.startIndex;g++)c.push(o[g]);if(c.push(n.startPt),this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,c),n.endIndex<=r.startIndex){P.push(n.endPt);for(var y=n.endIndex+1;y<=r.startIndex;y++)P.push(o[y]);P.push(r.startPt),2===o.length&&SuperMapAlgoPlot.PlottingUtil.distance(o[0],n.endPt)<=SuperMapAlgoPlot.PlottingUtil.distance(o[0],r.startPt)&&this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,P),o.length>2&&this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,P)}f.push(r.endPt);for(var S=r.endIndex+1;S<o.length;S++)f.push(o[S]);this.addArrow(f,this.scaleValues[1]),this.finish()}}},{key:"createSubSymbol",value:function(t,e,o){var l=this.getSubSymbolPts1(e);this.createSubSymbol1(t,e,o,l);var n=this.getSubSymbolPts2(e);this.createSubSymbol2(t,e,o,n)}},{key:"createSubSymbol2",value:function(t,e,o,l){for(var n=[],r=0;r<l.length;r++){var i=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(t,l[r],o);n.push(i)}this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,n,{surroundLineLimit:!0})}},{key:"createSubSymbol1",value:function(t,e,o,l){for(var n=[],r=0;r<l.length;r++){var i=SuperMapAlgoPlot.PlottingUtil.coordinateTrans(t,l[r],o);n.push(i)}this.addCell(SuperMapAlgoPlot.SymbolType.ARBITRARYPOLYGONSYMBOL,n,{surroundLineLimit:!0})}},{key:"getSubSymbolPts1",value:function(t){var e=t/2,o=[];return o.push(new SuperMapAlgoPlot.Point(2*e,0)),o.push(new SuperMapAlgoPlot.Point(0,e)),o.push(new SuperMapAlgoPlot.Point(-2*e,0)),o.push(new SuperMapAlgoPlot.Point(0,-e)),o}},{key:"getSubSymbolPts2",value:function(t){var e=t/2,o=[];return o.push(new SuperMapAlgoPlot.Point(-e,e)),o.push(new SuperMapAlgoPlot.Point(e,e)),o}},{key:"computeScaleValues",value:function(t,e){if(!0===e.isScalePoint){if(0!==t&&1!==t)return;var o=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if((o=SuperMapAlgoPlot.PlottingUtil.clearSamePts(o)).length<this.minEditPts)return;var l=SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(o);l=SuperMapAlgoPlot.PlottingUtil.clearSamePts(l);var n=SuperMapAlgoPlot.PlottingUtil.polylineDistance(l),r=SuperMapAlgoPlot.PlottingUtil.getPtsIndexByDistance(9*n/14,l),i=2*SuperMapAlgoPlot.PlottingUtil.distance(r.pts,e)/n;i<=.3&&(this.scaleValues[0]=i)}}}])&&ft(e.prototype,o),l&&ft(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();function bt(t){"@babel/helpers - typeof";return(bt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function At(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function dt(t,e){return(dt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t})(t,e)}function Mt(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(t){return!1}}();return function(){var o,l=vt(t);if(e){var n=vt(this).constructor;o=Reflect.construct(l,arguments,n)}else o=l.apply(this,arguments);return function(t,e){if(e&&("object"===bt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}(this,o)}}function vt(t){return(vt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}SuperMapAlgoPlot.AlgoSymbol530200=ht;var mt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&dt(t,e)}(r,SuperMapAlgoPlot.AlgoSymbol);var e,o,l,n=Mt(r);function r(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,r),0===(e=n.call(this,t)).scaleValues.length&&(e.scaleValues.push(.05),e.scaleValues.push(.01)),e}return e=r,(o=[{key:"calculateParts",value:function(){this.init();var t=SuperMapAlgoPlot.PlottingUtil.clonePoints(this.controlPoints);if(!((t=SuperMapAlgoPlot.PlottingUtil.clearSamePts(t)).length<this.minEditPts)){var e=[];e=3>=t.length?SuperMapAlgoPlot.Primitives.getSpatialData(SuperMapAlgoPlot.SymbolType.KIDNEY,t):SuperMapAlgoPlot.PlottingUtil.generateBeizerPointsNoCtrlPt(t,!0),e=SuperMapAlgoPlot.PlottingUtil.clearSamePts(e),this.isEdit||(this.scaleValues[0]=.5*this.getSubSymbolScaleValue(),this.scaleValues[1]=.0625*this.getSubSymbolScaleValue());for(var o=SuperMapAlgoPlot.PlottingUtil.polylineDistance(t),l=o*this.scaleValues[0],n=o*this.scaleValues[1],r=e[0],i=0,a=1;a<e.length;a++){var u=e[a],p=SuperMapAlgoPlot.PlottingUtil.distance(r,u);switch(i%4){case 0:if(p>=l){var s=SuperMapAlgoPlot.PlottingUtil.findPointInLine(r,u,l);this.addCell(SuperMapAlgoPlot.SymbolType.POLYLINESYMBOL,[r,s]),r=s,i++,a--}break;case 1:case 3:var c=3*n;if(p>c)r=SuperMapAlgoPlot.PlottingUtil.findPointInLine(r,u,c),i++,a--;break;case 2:if(p>2*n){var P=SuperMapAlgoPlot.PlottingUtil.findPointInLine(r,u,2*n);this.addCell(SuperMapAlgoPlot.SymbolType.CIRCLESYMBOL,[new SuperMapAlgoPlot.Point(.5*(r.x+P.x),.5*(r.y+P.y)),P],{fillLimit:!0,fill:!0}),r=P,i++,a--}}}this.finish()}}}])&&At(e.prototype,o),l&&At(e,l),Object.defineProperty(e,"prototype",{writable:!1}),r}();SuperMapAlgoPlot.AlgoSymbol610100=mt;SuperMapAlgoPlot.YJAlgoSymbolFactory=SuperMapAlgoPlot.YJAlgoSymbolFactory||{};SuperMapAlgoPlot.YJAlgoSymbolFactory.getAlgoSymbol=function(t,e,o){if(999!==t)return new SuperMapAlgoPlot.AlgoSymbol(o);switch(e){case 510100:return new SuperMapAlgoPlot.AlgoSymbol510100(o);case 510200:return new SuperMapAlgoPlot.AlgoSymbol15804(o);case 520100:return new SuperMapAlgoPlot.AlgoSymbol520100(o);case 520200:return new SuperMapAlgoPlot.AlgoSymbol520200(o);case 520300:return new SuperMapAlgoPlot.AlgoSymbol520300(o);case 520400:return new SuperMapAlgoPlot.AlgoSymbol15200(o);case 520500:return new SuperMapAlgoPlot.AlgoSymbol520500(o);case 530100:return new SuperMapAlgoPlot.AlgoSymbol530100(o);case 530200:return new SuperMapAlgoPlot.AlgoSymbol530200(o);case 610100:return new SuperMapAlgoPlot.AlgoSymbol610100(o);case 610200:return new SuperMapAlgoPlot.AlgoSymbol29100(o);case 610300:return new SuperMapAlgoPlot.AlgoSymbol29101(o);default:return new SuperMapAlgoPlot.AlgoSymbol(o)}},SuperMapAlgoPlot.YJAlgoSymbolFactory.isAccessServer=function(t,e){if(999!==t)return!0;switch(e){case 510100:case 510200:case 520100:case 520200:case 520300:case 520400:case 520500:case 530100:case 530200:case 610100:case 610200:case 610300:return!1;default:return!0}},SuperMapAlgoPlot.YJAlgoSymbolFactory.getSymbolWayType=function(t,e){if(999===t)switch(e){case 510100:case 510200:case 520100:case 520200:case 520300:case 520400:case 520500:case 530100:case 530200:case 610100:case 610200:case 610300:return SuperMapAlgoPlot.AddPoint_WayType.CURVE;default:return SuperMapAlgoPlot.AddPoint_WayType.UNKNOWN}},SuperMapAlgoPlot.YJAlgoSymbolFactory.getDefaultSubSymbols=function(){return[]},SuperMapAlgoPlot.YJAlgoSymbolFactory.getMinEditPts=function(t,e){if(999!==t)return 0;switch(e){case 510100:case 510200:case 520100:case 520200:case 520300:case 520400:case 520500:case 530100:case 530200:case 610100:case 610200:case 610300:return 2;default:return 0}},SuperMapAlgoPlot.YJAlgoSymbolFactory.getMaxEditPts=function(t,e){if(999!==t)return 0;switch(e){case 510100:case 510200:case 520100:case 520200:case 520300:case 520400:case 520500:case 530100:case 530200:case 610100:return 9999;case 610200:case 610300:return 3;default:return 0}},SuperMapAlgoPlot.YJAlgoSymbolFactory.getDefaultStyle=function(){return{}},SuperMapAlgoPlot.YJAlgoSymbolFactory.zoomInCalSymbol=function(){return!1}}();

/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*!
 * 
 *          iclient-plot-webgl-common.(https://iclient.supermap.io)
 *          Copyright© 2000 - 2023 SuperMap Software Co.Ltd
 *          license: Apache-2.0
 *          version: v11.1.0
 *
 */!function(){"use strict";var t=window.SuperMap=window.SuperMap||{};t.Plot=t.Plot||{},window.SuperMapAlgoPlot=t.Plot||{};function e(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}var o=function(){function t(e,o,l,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),SuperMap.Util.isArray(e)&&(n=e[3],l=e[2],o=e[1],e=e[0]),this.left=null!=e?SuperMap.Util.toFloat(e):this.left,this.bottom=null!=o?SuperMap.Util.toFloat(o):this.bottom,this.right=null!=l?SuperMap.Util.toFloat(l):this.right,this.top=null!=n?SuperMap.Util.toFloat(n):this.top,this.centerLonLat=null,this.CLASS_NAME="SuperMap.Bounds"}var o,l,n;return o=t,n=[{key:"fromString",value:function(e,o){var l=e.split(",");return t.fromArray(l,o)}},{key:"fromArray",value:function(e,o){return!0===o?new t(e[1],e[0],e[3],e[2]):new t(e[0],e[1],e[2],e[3])}},{key:"fromSize",value:function(e){return new t(0,e.h,e.w,0)}},{key:"oppositeQuadrant",value:function(t){var e="";return e+="t"===t.charAt(0)?"b":"t",e+="l"===t.charAt(1)?"r":"l"}}],(l=[{key:"clone",value:function(){return new t(this.left,this.bottom,this.right,this.top)}},{key:"equals",value:function(t){var e=!1;return null!=t&&(e=this.left===t.left&&this.right===t.right&&this.top===t.top&&this.bottom===t.bottom),e}},{key:"toString",value:function(){return[this.left,this.bottom,this.right,this.top].join(",")}},{key:"toArray",value:function(t){return!0===t?[this.bottom,this.left,this.top,this.right]:[this.left,this.bottom,this.right,this.top]}},{key:"toBBOX",value:function(t,e){null==t&&(t=6);var o=Math.pow(10,t),l=Math.round(this.left*o)/o,n=Math.round(this.bottom*o)/o,i=Math.round(this.right*o)/o,r=Math.round(this.top*o)/o;return!0===e?n+","+l+","+r+","+i:l+","+n+","+i+","+r}},{key:"getWidth",value:function(){return this.right-this.left}},{key:"getHeight",value:function(){return this.top-this.bottom}},{key:"getSize",value:function(){return new SuperMapAlgoPlot.Point(this.getWidth(),this.getHeight())}},{key:"getCenterPixel",value:function(){return new SuperMapAlgoPlot.Point((this.left+this.right)/2,(this.bottom+this.top)/2)}},{key:"getCenterLonLat",value:function(){return this.centerLonLat||(this.centerLonLat=new SuperMap.Point((this.left+this.right)/2,(this.bottom+this.top)/2)),this.centerLonLat}},{key:"scale",value:function(e,o){var l,n;return e=e||1,null==o&&(o=this.getCenterLonLat()),"SuperMap.LonLat"===o.CLASS_NAME?(l=o.lon,n=o.lat):(l=o.x,n=o.y),new t((this.left-l)*e+l,(this.bottom-n)*e+n,(this.right-l)*e+l,(this.top-n)*e+n)}},{key:"add",value:function(e,o){if(null==e||null==o)throw new TypeError("Bounds.add cannot receive null values");return new t(this.left+e,this.bottom+o,this.right+e,this.top+o)}},{key:"extend",value:function(e){var o=null;if(e){switch(e.CLASS_NAME){case"SuperMap.LonLat":o=new t(e.lon,e.lat,e.lon,e.lat);break;case"SuperMap.Geometry.Point":o=new t(e.x,e.y,e.x,e.y);break;case"SuperMap.Bounds":o=e}o&&(this.centerLonLat=null,(null==this.left||o.left<this.left)&&(this.left=o.left),(null==this.bottom||o.bottom<this.bottom)&&(this.bottom=o.bottom),(null==this.right||o.right>this.right)&&(this.right=o.right),(null==this.top||o.top>this.top)&&(this.top=o.top))}}},{key:"containsLonLat",value:function(t,e){"boolean"==typeof e&&(e={inclusive:e}),e=e||{};var o=this.contains(t.lon,t.lat,e.inclusive),l=e.worldBounds;if(l&&!o){var n=l.getWidth(),i=(l.left+l.right)/2,r=Math.round((t.lon-i)/n);o=this.containsLonLat({lon:t.lon-r*n,lat:t.lat},{inclusive:e.inclusive})}return o}},{key:"containsPixel",value:function(t,e){return this.contains(t.x,t.y,e)}},{key:"contains",value:function(t,e,o){if(null==o&&(o=!0),null==t||null==e)return!1;var l=!1;return l=o?t>=this.left&&t<=this.right&&e>=this.bottom&&e<=this.top:t>this.left&&t<this.right&&e>this.bottom&&e<this.top,l}},{key:"intersectsBounds",value:function(t,e){if("boolean"==typeof e&&(e={inclusive:e}),(e=e||{}).worldBounds){var o=this.wrapDateLine(e.worldBounds);t=t.wrapDateLine(e.worldBounds)}else o=this;null==e.inclusive&&(e.inclusive=!0);var l=!1,n=o.left===t.right||o.right===t.left||o.top===t.bottom||o.bottom===t.top;if(e.inclusive||!n){var i=t.bottom>=o.bottom&&t.bottom<=o.top||o.bottom>=t.bottom&&o.bottom<=t.top,r=t.top>=o.bottom&&t.top<=o.top||o.top>t.bottom&&o.top<t.top,a=t.left>=o.left&&t.left<=o.right||o.left>=t.left&&o.left<=t.right,s=t.right>=o.left&&t.right<=o.right||o.right>=t.left&&o.right<=t.right;l=(i||r)&&(a||s)}if(e.worldBounds&&!l){var p=e.worldBounds,u=p.getWidth(),c=!p.containsBounds(o),P=!p.containsBounds(t);c&&!P?(t=t.add(-u,0),l=o.intersectsBounds(t,{inclusive:e.inclusive})):P&&!c&&(o=o.add(-u,0),l=t.intersectsBounds(o,{inclusive:e.inclusive}))}return l}},{key:"containsBounds",value:function(t,e,o){null==e&&(e=!1),null==o&&(o=!0);var l=this.contains(t.left,t.bottom,o),n=this.contains(t.right,t.bottom,o),i=this.contains(t.left,t.top,o),r=this.contains(t.right,t.top,o);return e?l||n||i||r:l&&n&&i&&r}},{key:"determineQuadrant",value:function(t){var e="",o=this.getCenterLonLat();return e+=t.lat<o.lat?"b":"t",e+=t.lon<o.lon?"l":"r"}},{key:"wrapDateLine",value:function(t,e){var o=(e=e||{}).leftTolerance||0,l=e.rightTolerance||0,n=this.clone();if(t){for(var i=t.getWidth();n.left<t.left&&n.right-l<=t.left;)n=n.add(i,0);for(;n.left+o>=t.right&&n.right>t.right;)n=n.add(-i,0);var r=n.left+o;r<t.right&&r>t.left&&n.right-l>t.right&&(n=n.add(-i,0))}return n}},{key:"toServerJSONObject",value:function(){return{rightTop:{x:this.right,y:this.top},leftBottom:{x:this.left,y:this.bottom},left:this.left,right:this.right,top:this.top,bottom:this.bottom}}},{key:"destroy",value:function(){this.left=null,this.right=null,this.top=null,this.bottom=null,this.centerLonLat=null}}])&&e(o.prototype,l),n&&e(o,n),Object.defineProperty(o,"prototype",{writable:!1}),t}();function l(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}SuperMap.Bounds=o;var n=function(){function t(){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t)}var e,o,n;return e=t,n=[{key:"extend",value:function(t,e){if(t=t||{},e){for(var o in e){var l=e[o];void 0!==l&&(t[o]=l)}!("function"==typeof window.Event&&e instanceof window.Event)&&e.hasOwnProperty&&e.toString&&(t.toString=e.toString)}return t}},{key:"copy",value:function(t,e){var o;if(t=t||{},e)for(var l in t)void 0!==(o=e[l])&&(t[l]=o)}},{key:"reset",value:function(t){for(var e in t=t||{})if(t.p){if("object"===_typeof(t[e])&&t[e]instanceof Array){for(var o in t[e])t[e][o].destroy&&t[e][o].destroy();t[e].length=0}else"object"===_typeof(t[e])&&t[e]instanceof Object&&t[e].destroy&&t[e].destroy();t[e]=null}}},{key:"getElement",value:function(){for(var t=[],e=0,o=arguments.length;e<o;e++){var l=arguments[e];if("string"==typeof l&&(l=document.getElementById(l)),1===arguments.length)return l;t.push(l)}return t}},{key:"isElement",value:function(t){return!(!t||1!==t.nodeType)}},{key:"isArray",value:function(t){return"[object Array]"===Object.prototype.toString.call(t)}},{key:"removeItem",value:function(t,e){for(var o=t.length-1;o>=0;o--)t[o]===e&&t.splice(o,1);return t}},{key:"indexOf",value:function(t,e){if(null==t)return-1;if("function"==typeof t.indexOf)return t.indexOf(e);for(var o=0,l=t.length;o<l;o++)if(t[o]===e)return o;return-1}},{key:"modifyDOMElement",value:function(t,e,o,l,n,i,r,a){e&&(t.id=e),o&&(t.style.left=o.x+"px",t.style.top=o.y+"px"),l&&(t.style.width=l.w+"px",t.style.height=l.h+"px"),n&&(t.style.position=n),i&&(t.style.border=i),r&&(t.style.overflow=r),parseFloat(a)>=0&&parseFloat(a)<1?(t.style.filter="alpha(opacity="+100*a+")",t.style.opacity=a):1===parseFloat(a)&&(t.style.filter="",t.style.opacity="")}},{key:"applyDefaults",value:function(t,e){t=t||{};var o="function"==typeof window.Event&&e instanceof window.Event;for(var l in e)(void 0===t[l]||!o&&e.hasOwnProperty&&e[l]&&!t[l])&&(t[l]=e[l]);return!o&&e&&e.hasOwnProperty&&e.toString&&!t.toString&&(t.toString=e.toString),t}},{key:"getParameterString",value:function(t){var e=[];for(var o in t){var l,n=t[o];if(null!=n&&"function"!=typeof n)l=Array.isArray(n)||"[object Object]"===n.toString()?encodeURIComponent(JSON.stringify(n)):encodeURIComponent(n),e.push(encodeURIComponent(o)+"="+l)}return e.join("&")}},{key:"urlAppend",value:function(t,e){var o=t;if(e){0===e.indexOf("?")&&(e=e.substring(1));var l=(t+" ").split(/[?&]/);o+=" "===l.pop()?e:l.length?"&"+e:"?"+e}return o}},{key:"urlPathAppend",value:function(t,e){var o=t;if(!e)return o;0===e.indexOf("/")&&(e=e.substring(1));var l=t.split("?");return l[0].indexOf("/",l[0].length-1)<0&&(l[0]+="/"),o="".concat(l[0]).concat(e).concat(l.length>1?"?".concat(l[1]):"")}},{key:"toFloat",value:function(e,o){return null==o&&(o=t.DEFAULT_PRECISION),"number"!=typeof e&&(e=parseFloat(e)),0===o?e:parseFloat(e.toPrecision(o))}},{key:"rad",value:function(t){return t*Math.PI/180}},{key:"getParameters",value:function(t){t=null===t||void 0===t?window.location.href:t;var e="";if(StringExt.contains(t,"?")){var o=t.indexOf("?")+1,l=StringExt.contains(t,"#")?t.indexOf("#"):t.length;e=t.substring(o,l)}for(var n={},i=e.split(/[&;]/),r=0,a=i.length;r<a;++r){var s=i[r].split("=");if(s[0]){var p=s[0];try{p=decodeURIComponent(p)}catch(t){p=unescape(p)}var u=(s[1]||"").replace(/\+/g," ");try{u=decodeURIComponent(u)}catch(t){u=unescape(u)}1==(u=u.split(",")).length&&(u=u[0]),n[p]=u}}return n}},{key:"createUniqueID",value:function(e){return null==e&&(e="id_"),t.lastSeqID+=1,e+t.lastSeqID}},{key:"normalizeScale",value:function(t){return t>1?1/t:t}},{key:"getResolutionFromScale",value:function(e,o){var l;e&&(null==o&&(o="degrees"),l=1/(t.normalizeScale(e)*INCHES_PER_UNIT[o]*DOTS_PER_INCH));return l}},{key:"getScaleFromResolution",value:function(t,e){return null==e&&(e="degrees"),t*INCHES_PER_UNIT[e]*DOTS_PER_INCH}},{key:"getBrowser",value:function(){return Browser}},{key:"supportCanvas",value:function(){return t.isSupportCanvas}},{key:"isInTheSameDomain",value:function(t){if(!t)return!0;var e=t.indexOf("//"),o=document.location.toString(),l=o.indexOf("//");if(-1===e)return!0;var n,i=n=t.substring(0,e),r=o.substring(l+2);l=r.indexOf("/");var a=r.indexOf(":"),s=r.substring(0,l),p=document.location.protocol;if(-1!==a||(s+=":"+("http:"===p.toLowerCase()?80:443)),p.toLowerCase()!==i.toLowerCase())return!1;var u=(i=t.substring(e+2)).indexOf(":");e=i.indexOf("/");var c,P=i.substring(0,e);return-1!==u?c=i.substring(0,u):(c=i.substring(0,e),P+=":"+("http:"===n.toLowerCase()?80:443)),c===document.domain&&P===s}},{key:"calculateDpi",value:function(t,e,o,l,n){if(t&&e&&o){var i,r=t.getWidth(),a=t.getHeight(),s=e.w,p=e.h;if(n=n||6378137,"degree"===(l=l||"degrees").toLowerCase()||"degrees"===l.toLowerCase()||"dd"===l.toLowerCase()){var u=r/s,c=a/p;i=254/(u>c?u:c)/o/(2*Math.PI*n/360)/1e4}else{i=254/(r/s)/o/1e4}return i}}},{key:"toJSON",value:function(e){var o=e;if(null==o)return null;switch(o.constructor){case String:return o=(o=(o=(o=(o=(o=(o='"'+o.replace(/(["\\])/g,"\\$1")+'"').replace(/\n/g,"\\n")).replace(/\r/g,"\\r")).replace("<","&lt;")).replace(">","&gt;")).replace(/%/g,"%25")).replace(/&/g,"%26");case Array:for(var l="",n=0,i=o.length;n<i;n++)l+=t.toJSON(o[n]),n!==o.length-1&&(l+=",");return"["+l+"]";case Number:return isFinite(o)?String(o):null;case Boolean:return String(o);case Date:return"{'__type':\"System.DateTime\",'Year':"+o.getFullYear()+",'Month':"+(o.getMonth()+1)+",'Day':"+o.getDate()+",'Hour':"+o.getHours()+",'Minute':"+o.getMinutes()+",'Second':"+o.getSeconds()+",'Millisecond':"+o.getMilliseconds()+",'TimezoneOffset':"+o.getTimezoneOffset()+"}";default:if(null!=o.toJSON&&"function"==typeof o.toJSON)return o.toJSON();if("object"===_typeof(o)){if(o.length){for(var r=[],a=0,s=o.length;a<s;a++)r.push(t.toJSON(o[a]));return"["+r.join(",")+"]"}var p=[];for(var u in o)"function"!=typeof o[u]&&"CLASS_NAME"!==u&&"parent"!==u&&p.push("'"+u+"':"+t.toJSON(o[u]));return p.length>0?"{"+p.join(",")+"}":"{}"}return o.toString()}}},{key:"getResolutionFromScaleDpi",value:function(e,o,l,n){return n=n||6378137,l=l||"",e>0&&o>0?(e=t.normalizeScale(e),"degree"===l.toLowerCase()||"degrees"===l.toLowerCase()||"dd"===l.toLowerCase()?254/o/e/(2*Math.PI*n/360)/1e4:254/o/e/1e4):-1}},{key:"getScaleFromResolutionDpi",value:function(t,e,o,l){return l=l||6378137,o=o||"",t>0&&e>0?"degree"===o.toLowerCase()||"degrees"===o.toLowerCase()||"dd"===o.toLowerCase()?254/e/t/(2*Math.PI*l/360)/1e4:254/e/t/1e4:-1}},{key:"transformResult",value:function(t){return t.responseText&&"string"==typeof t.responseText&&(t=JSON.parse(t.responseText)),t}},{key:"copyAttributes",value:function(t,e){if(t=t||{},e)for(var o in e){var l=e[o];void 0!==l&&"CLASS_NAME"!==o&&"function"!=typeof l&&(t[o]=l)}return t}},{key:"copyAttributesWithClip",value:function(t,e,o){if(t=t||{},e)for(var l in e){var n=!1;if(o&&o.length)for(var i=0,r=o.length;i<r;i++)if(l===o[i]){n=!0;break}if(!0!==n){var a=e[l];void 0!==a&&"CLASS_NAME"!==l&&"function"!=typeof a&&(t[l]=a)}}return t}},{key:"cloneObject",value:function(e){if(null===e||"object"!==_typeof(e))return e;if(e instanceof Date){var o=new Date;return o.setTime(e.getTime()),o}if(e instanceof Array)return e.slice(0);if(e instanceof Object){var l={};for(var n in e)e.attr&&(l[n]=t.cloneObject(e[n]));return l}throw new Error("Unable to copy obj! Its type isn't supported.")}},{key:"lineIntersection",value:function(t,e,o,l){var n,i,r=null,a=(l.x-o.x)*(t.y-o.y)-(l.y-o.y)*(t.x-o.x),s=(e.x-t.x)*(t.y-o.y)-(e.y-t.y)*(t.x-o.x),p=(l.y-o.y)*(e.x-t.x)-(l.x-o.x)*(e.y-t.y);if(0!=p)i=s/p,r=(n=a/p)>=0&&i<=1&&n<=1&&i>=0?new Geometry.Point(t.x+n*(e.x-t.x),t.y+n*(e.y-t.y)):"No Intersection";else if(0==a&&0==s){var u=Math.max(t.y,e.y),c=Math.min(t.y,e.y),P=Math.max(t.x,e.x),g=Math.min(t.x,e.x);r=(o.y>=c&&o.y<=u||l.y>=c&&l.y<=u)&&o.x>=g&&o.x<=P||l.x>=g&&l.x<=P?"Coincident":"Parallel"}else r="Parallel";return r}},{key:"getTextBounds",value:function(t,e,o){document.body.appendChild(o),o.style.width="auto",o.style.height="auto",t.fontSize&&(o.style.fontSize=t.fontSize),t.fontFamily&&(o.style.fontFamily=t.fontFamily),t.fontWeight&&(o.style.fontWeight=t.fontWeight),o.style.position="relative",o.style.visibility="hidden",o.style.display="inline-block",o.innerHTML=e;var l=o.clientWidth,n=o.clientHeight;return document.body.removeChild(o),{textWidth:l,textHeight:n}}},{key:"convertPath",value:function(t,e){return e?t.replace(/\{([\w-\.]+)\}/g,function(t,o){var l;return l=e[o]?paramToString(e[o]):t,encodeURIComponent(l)}):t}}],(o=null)&&l(e.prototype,o),n&&l(e,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}n.lastSeqID=0,n.isSupportCanvas=!0,n.DEFAULT_PRECISION=14,SuperMap.Util=n;var r=function(){function t(e,o,l){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),l=l||{},this.libID=e,this.code=o,this.symbolData=l.symbolData?l.symbolData:null,this.textContent=l.textContent?l.textContent:null,this.totalNum=l.totalNum?l.totalNum:null,this.lineColor=l.color?l.lineColor:"#ff0000",this.width2D=l.width2D?l.width2D:2,this.width3D=l.width3D?l.width3D:-1,this.CLASS_NAME="SuperMap.Plot.SubSymbol"}var e,o,l;return e=t,(o=[{key:"destroy",value:function(){this.libID=null,this.code=null,this.symbolData=null,this.totalNum=null,this.lineColor=null,this.width2D=null,this.width3D=null}},{key:"clone",value:function(){var t=new SuperMap.Plot.SubSymbol(this.libID,this.code);return t.symbolData={},t.symbolData=SuperMap.Util.copyAttributes(t.symbolData,this.symbolData),t.textContent=this.textContent,t.totalNum=this.totalNum,t.lineColor=this.lineColor,t.width2D=this.width2D,t.width3D=this.width3D,t}}])&&i(e.prototype,o),l&&i(e,l),Object.defineProperty(e,"prototype",{writable:!1}),t}();SuperMap.Plot.SubSymbol=r;SuperMap.Plot.ArrowTailType={ARROWTAIL_NONE:0,ARROWTAIL_LINE:1,ARROWTAIL_CURVE:2,ARROWTAIL_COATTAIL:3,ARROWTAIL_COATTAIL_POLYBODY:4},SuperMap.Plot.ArrowHeadType={ARROWHEAD_POLYLINE:0,ARROWHEAD_TRIANGLE:1,ARROWHEAD_COATTAIL:2,ARROWHEAD_TRIANGLE_SOLID:3,ARROWHEAD_WITH_EAR:4,ARROWHEAD_WITHOUT_EAR:5,ARROWHEAD_COATTAIL_HOLLOW:6},SuperMap.Plot.ArrowBodyType={ARROWBODY_POLYLINE:0,ARROWBODY_POLYBEZIER:1,ARROWBODY_PARALLEL:2,ARROWBODY_TRAPEZOID:3,ARROWBODY_MULTIPOLYBEZIER:4,ARROWBODY_COATTAIL:5},SuperMap.Plot.SymbolType={DOTSYMBOL:1,ALGOSYMBOL:2,TEXTSYMBOL:34,ELLIPSESYMBOL:31,CIRCLESYMBOL:29,RECTANGLESYMBOL:26,ARBITRARYPOLYGONSYMBOL:32,POLYLINESYMBOL:24,PARALLELOGRAM:28,ARCSYMBOL:44,NEWARCSYMBOL:4401,REGULARPOLYGON:410,CHORDSYMBOL:370,NEWCHORDSYMBOL:3701,PIESYMBOL:380,NEWPIESYMBOL:3801,KIDNEY:390,POLYBEZIERSYMBOL:590,PARALLELLINE:48,BRACESYMBOL:400,ANNOFRAMESYMBOL:320,ANNOFRAMESYMBOLM:321,TRAPEZOIDSYMBOL:350,POLYBEZIERCLOSESYMBOL:360,GROUPOBJECT:1e3,LINERELATION:1001,INTERFERENCEBEAM:1002,POLYGONREGION:1003,ARCREGION:1004,AIRROUTE:1005,NAVYROUTE:1006,MISSILEROUTE:1007,NAVYDEPLOYMENT:1008,AIRDEPLOYMENT:1009,SATELLITE:1010,SATELLITETIMEWINDOWS:1011,SYMBOLTEXT:1012,RUNWAY:1013,CURVEEIGHT:1014,ROUTENODE:1015,ARROWLINE:1016,PATHTEXT:1017,LITERATESIGN:1018,CONCENTRICCIRCLE:1019,FLAGGROUP:1020,SYMBOLTEXT1:1021,COMBINATIONALCIRCLE:1022,FREECURVE:1023,SYMBOLTEXTBOX:1024,NODECHAIN:1025,LINEMARKING:1026,AVOIDREGION:1027,WIRE:1028,LINEARARROW:1029,PICTURE:3e3},SuperMap.Plot.LineRelationType={SOLID:0,DASH:1,ARROW:2},SuperMap.Plot.AlgoSurroundLineType={NONE:0,INNER:1,OUT:2,ALL:3},SuperMap.Plot.RouteNodeType={RENDEZVOUS:"RENDEZVOUS",EXPANDING:"EXPANDING",VOLLEY:"VOLLEY",STANDBY:"STANDBY",SUPPLY:"SUPPLY",TAKEOFF:"TAKEOFF",INITIAL:"INITIAL",VISUALINITAL:"VISUALINITAL",LANCH:"LANCH",TURNING:"TURNING",AIMING:"AIMING",COMMONROUTE:"COMMONROUTE",WEAPONLAUNCH:"WEAPONLAUNCH",TARGET:"TARGET",ATTACK:"ATTACK",SUPPRESS:"SUPPRESS",EIGHTSPIRAL:"EIGHTSPIRAL",HAPPYVALLEY:"HAPPYVALLEY"},SuperMap.Plot.RelLineText={ONLINE:0,ONLEFTLINE:1,ONRIGHTLINE:2,ONBOTHLINE:3},SuperMap.Plot.RadiusLineType={NONE:0,SOLID:1,ARROW:2},SuperMap.Plot.Position={TOP:4,BOTTOM:5,LEFT:6,RIGHT:7},SuperMap.Plot.AnnoPosition={LEFTTOP:0,LEFTBOTTOM:1,RIGHTTOP:2,RIGHTBOTTOM:3,TOP:4,BOTTOM:5,LEFT:6,RIGHT:7,MIDDLE:8,ANCHOR:9},SuperMap.Plot.ArrowLineType={DOUBLELINE:0,TRIANGLESOLID:1,NONE:2},SuperMap.Plot.TextBoxType={WITHTIPBOX:0,RECTBOX:1,LINEBOX:2,NONEBOX:3},SuperMap.Plot.PositionOffsetType={LINE:0,GRADIENTLINE:1},SuperMap.Plot.AlignType={LEFT:0,RIGHT:1,UP:2,DOWN:3,VERTICALCENTER:4,HORIZONTALCENTER:5},SuperMap.Plot.EditMode={ADDCONTROLPOINT:0,EDITCONTROLPOINT:1,EDITCIRCUMRECTANGLE:2,REMOVECONTROLPOINT:3};SuperMap.Plot.EqualLargeType={WIDTH:0,HEIGHT:1,SAME:2},SuperMap.Plot.UniformDistributionType={LEVEL:0,VERTICAL:1};SuperMap.Plot.TransactionType={CREATE:0,EDIT:1,REMOVE:2};function a(t,e){for(var o=0;o<e.length;o++){var l=e[o];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(t,l.key,l)}}function s(){return(s="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,o){var l=function(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=p(t)););return t}(t,e);if(l){var n=Object.getOwnPropertyDescriptor(l,e);return n.get?n.get.call(arguments.length<3?t:o):n.value}}).apply(this,arguments)}function p(t){return(p=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}
/* Copyright© 2000 - 2018 SuperMap Software Co.Ltd. All rights reserved.
 * This program are made available under the terms of the Apache License, Version 2.0

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
__webpack_require__(1);
__webpack_require__(2);
__webpack_require__(3);
__webpack_require__(0);



/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ })
/******/ ]);