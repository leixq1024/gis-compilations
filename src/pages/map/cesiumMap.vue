<template>
    <div id="cesiumContainer"></div>
</template>

<script setup>
import { onMounted } from 'vue';
onMounted(async () => {
    // 初始化需要设置 场景类型 光源配置 s3m图层加载
    const map = new Cesium.map('cesiumContainer')
    map.scene.shadowMap.darkness = 1.275; //设置第二重烘焙纹理的效果（明暗程度）
    map.scene.skyAtmosphere.brightnessShift = 0.4;  //修改大气的亮度
    map.scene.debugShowFramesPerSecond = true;
    map.scene.hdrEnabled = false;
    map.scene.sun.show = true;
    // 01设置环境光的强度-新处理CBD场景
    map.scene.lightSource.ambientLightColor = new Cesium.Color(0.65, 0.65, 0.65, 1);
    // 添加光源
    const position = new Cesium.Cartesian3.fromDegrees(116.261209157595, 39.3042238956531, 480);
    const dirLightOptions = {
        targetPosition: new Cesium.Cartesian3.fromDegrees(116.261209157595, 39.3042238956531, 430),
        color: new Cesium.Color(1.0, 1.0, 1.0, 1),
        intensity: 0.55
    };
    const directionalLight = new Cesium.DirectionalLight(position, dirLightOptions);
    map.scene.addLightSource(directionalLight)
    const promise = await map.scene.open("http://www.supermapol.com/realspace/services/3D-NewCBD/rest/realspace");
    map.flyTo(promise);
    window.cesiumMap = map
})
</script>

<style  lang ="scss" scoped>
#cesiumContainer {
    position: relative;
    width: 100%;
    height: 99%;
    display: flex;
    align-items: center;
    justify-content: center;

    ::v-deep .cesium-map {
        flex: 1;
        height: 100%;
        width: 100%;
    }

    ::v-deep .cesium-map-cesiumWidgetContainer {
        height: 100%;
        width: 100%;
    }
}
</style>