<!-- cesium => 空间测量  -->
<template>
    <div class="measure">
        <a-button type='primary' @click="handleDistance">测距</a-button>
        <a-button type='primary' @click="handlerArea">测面</a-button>
        <a-button type='primary' @click="handlerHeight">测高</a-button>
        <a-button status='warning' @click="clearAll">清除</a-button>
    </div>
</template>

<script setup>
/**
 * @description 目前测高功能没有做等值线分析,后面可以补充
 */
let disEvent, areaEvent, heightEvent
const measureCurClass = () => {
    const body = document.querySelector('body')
    body.classList.toggle("measureCur");
    body.classList.toggle("measureCur");
}
/**
 * @function 测距功能
 * ? 目前不知道不清除监听对象会不会导致一些问题
 */
const handleDistance = () => {
    disEvent = new Cesium.MeasureHandler(window.cesiumMap, Cesium.MeasureMode.Distance, 0);
    disEvent.measureEvt.addEventListener(function (result) {
        const dis = Number(result.distance);
        const distance = dis > 1000 ? (dis / 1000).toFixed(2) + 'km' : dis.toFixed(2) + 'm';
        disEvent.disLabel.text = '距离:' + distance;
    });
    disEvent.activeEvt.addEventListener(function (isActive) {
        if (isActive == true) {
            window.cesiumMap.enableCursorStyle = false;
            window.cesiumMap._element.style.cursor = '';
            measureCurClass()
            window.cesiumMap.scene.pickPointEnabled = pickPointEnabled;
        }
        else {
            window.cesiumMap.enableCursorStyle = true;
            const body = document.querySelector('body')
            body.classList.toggle("measureCur");
            window.cesiumMap.scene.pickPointEnabled = false;
        }
    });
    disEvent.activate()
}
/**
 * @function 测面功能
 * ? 目前不知道不清除监听对象会不会导致一些问题
 */
const handlerArea = () => {
    const viewer = window.cesiumMap || {}
    areaEvent = new Cesium.MeasureHandler(window.cesiumMap, Cesium.MeasureMode.Area, 0);
    areaEvent.measureEvt.addEventListener(function (result) {
        const mj = Number(result.area);
        const area = mj > 1000000 ? (mj / 1000000).toFixed(2) + 'km²' : mj.toFixed(2) + '㎡'
        areaEvent.areaLabel.text = '面积:' + area;
    });
    areaEvent.activeEvt.addEventListener(function (isActive) {
        if (isActive == true) {
            viewer.enableCursorStyle = false;
            viewer._element.style.cursor = '';
            measureCurClass()
            viewer.scene.pickPointEnabled = pickPointEnabled;
        }
        else {
            viewer.enableCursorStyle = true;
            const body = document.querySelector('body')
            body.classList.toggle("measureCur");
            viewer.scene.pickPointEnabled = false;
        }
    });
    areaEvent.activate()
}
/**
 * @function 测高功能
 * ? 目前不知道不清除监听对象会不会导致一些问题
 */
const handlerHeight = () => {
    const viewer = window.cesiumMap
    heightEvent = new Cesium.MeasureHandler(viewer, Cesium.MeasureMode.DVH);
    heightEvent.measureEvt.addEventListener(function (result) {
        var distance = result.distance > 1000 ? (result.distance / 1000).toFixed(2) + 'km' : result.distance + 'm';
        var vHeight = result.verticalHeight > 1000 ? (result.verticalHeight / 1000).toFixed(2) + 'km' : result.verticalHeight + 'm';
        var hDistance = result.horizontalDistance > 1000 ? (result.horizontalDistance / 1000).toFixed(2) + 'km' : result.horizontalDistance + 'm';
        heightEvent.disLabel.text = '空间距离:' + distance;
        heightEvent.vLabel.text = '垂直高度:' + vHeight;
        heightEvent.hLabel.text = '水平距离:' + hDistance;
        //实时等高线显示
        // const lineHeight = Number(result.endHeight);
        // if (isShowLine) updateContourLine(lineHeight)
    });
    heightEvent.activeEvt.addEventListener(function (isActive) {
        if (isActive == true) {
            viewer.enableCursorStyle = false;
            viewer._element.style.cursor = '';
            measureCurClass()
            viewer.scene.pickPointEnabled = pickPointEnabled;
        }
        else {
            viewer.enableCursorStyle = true;
            const body = document.querySelector('body')
            body.classList.toggle("measureCur");
            viewer.scene.pickPointEnabled = false;
        }
    });
    heightEvent.activate()
}
/**
 * @function 清除绘制结果
 */
const clearAll = () => {
    disEvent && disEvent.clear();
    areaEvent && areaEvent.clear();
    heightEvent && heightEvent.clear();
}
// const updateContourLine = (height) => {
//     const viewer = window.cesiumMap
//     viewer.scene.globe.HypsometricSetting.hypsometricSetting.MaxVisibleValue = height;
//     viewer.scene.globe.HypsometricSetting.hypsometricSetting.MinVisibleValue = height;
//     if (!setHypFlag) return;
//     for (let i = 0; i < layers.length; i++) {
//         if (layers[i].hypsometricSetting.hypsometricSetting) {
//             layers[i].hypsometricSetting.hypsometricSetting.MaxVisibleValue = height;
//             layers[i].hypsometricSetting.hypsometricSetting.MinVisibleValue = height;
      
//     }
// };
</script>

<style lang="scss" scoped>
.measure {
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
    box-sizing: border-box;
}
</style>