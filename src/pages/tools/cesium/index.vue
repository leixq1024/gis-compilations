<template>
    <a-card title="通用功能" hoverable>
        <div class="tools">
            <a-button type='secondary' @click="flytoTools">回到原点</a-button>
            <a-button type='secondary' @click="fullScreenTools">全屏</a-button>
            <a-button type='secondary' @click="fullFigureTools">全图</a-button>
            <a-button type='secondary' @click="zoomInTools">放大</a-button>
            <a-button type='secondary' @click="zoomOutTools">缩小</a-button>
            <a-button type='secondary' @click="positionPickUpTools">位置拾取</a-button>
        </div>
    </a-card>
</template>

<script setup >
import { inject } from 'vue';
const updatePositionPickData = inject('updatePositionPickData')
/**
 * @function 回到原点
 */
const flytoTools = () => {
    window.cesiumMap.scene.camera.flyTo({
        destination: new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
        orientation: {
            heading: 1.4059101895600987,
            pitch: -0.20917672793046682,
            roll: 2.708944180085382e-13
        }
    });
}
/**
 * @function 全屏显示
 */
const fullScreenTools = () => {
    Cesium.Fullscreen.requestFullscreen(window.cesiumMap.scene.canvas)
}
/**
 * @function 全图
 */
const fullFigureTools = () => {
    window.cesiumMap.scene.camera.flyTo({
        destination: new Cesium.Cartesian3(
            - 4082998.8864254,
            15237959.291386751,
            9107987.0310351
        ),
        orientation: {
            heading: 6.283185307179586,
            pitch: -1.5707963267948966,
            roll: 0
        }
    });
}
/**
 * @funcion 放大
 */
const zoomInTools = () => {
    let cameraHeight = window.cesiumMap.scene.globe.ellipsoid.cartesianToCartographic(window.cesiumMap.camera.position).height;
    let moveRate = cameraHeight / 5.0;
    window.cesiumMap.camera.moveForward(moveRate);
}
/**
 * @function 缩小
 */
const zoomOutTools = () => {
    let cameraHeight = window.cesiumMap.scene.globe.ellipsoid.cartesianToCartographic(window.cesiumMap.camera.position).height;
    let moveRate = cameraHeight / 5.0;
    window.cesiumMap.camera.moveBackward(moveRate);
}
/**
 * @function 位置拾取
 */
const positionPickUpTools = () => {
    const handler = new Cesium.ScreenSpaceEventHandler(window.cesiumMap.scene.canvas);
    //设置鼠标左键单击回调事件
    handler.setInputAction(function (e) {
        //首先移除之前添加的点
        window.cesiumMap.entities.removeAll();
        //获取点击位置笛卡尔坐标
        const position = window.cesiumMap.scene.pickPosition(e.position);
        //将笛卡尔坐标转化为经纬度坐标
        const cartographic = Cesium.Cartographic.fromCartesian(position);
        const longitude = Cesium.Math.toDegrees(cartographic.longitude);
        const latitude = Cesium.Math.toDegrees(cartographic.latitude);
        const height = cartographic.height < 0 ? 0 : cartographic.height;
        //在点击位置添加对应点
        window.cesiumMap.entities.add(new Cesium.Entity({
            point: new Cesium.PointGraphics({
                color: new Cesium.Color(1, 1, 0),
                pixelSize: 10,
                outlineColor: new Cesium.Color(0, 1, 1)
            }),
            position: Cesium.Cartesian3.fromDegrees(longitude, latitude, height + 0.5)
        }));
        // 更新顶部的点位信息
        updatePositionPickData({ longitude, latitude, height })
        handler.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK)//移除事件
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
}
</script>

<style lang="scss" scoped>
::v-deep .arco-card {
    height: 100%;
    display: flex;
    flex-direction: column;

    &-body {
        flex: 1;
        overflow: hidden;
        overflow-y: auto;

        .tools {
            height: 100%;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            grid-auto-rows: min(50px);
            gap: 8px;
        }
    }
}

::v-deep.arco-btn {
    width: 100%;
    height: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style> 