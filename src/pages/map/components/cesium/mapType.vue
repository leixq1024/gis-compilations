<!-- 三维场景类型 -->
<template>
    <div class="status">
        <a-card title="当前场景类型" hoverable>
            <a-radio-group direction="vertical" v-model="status">
                <a-radio value="SCENE3D">3D(立体场景)</a-radio>
                <a-radio value="SCENE2D">2D(平面场景)</a-radio>
                <a-radio value="COLUMBUS_VIEW">2.5D(哥伦布地图)</a-radio>
            </a-radio-group>
        </a-card>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
const status = ref('SCENE3D');
watch(status, (newValue) => {
    window.cesiumMap.scene.mode = Cesium.SceneMode[newValue];
}) 
</script>

<style  scoped>
::v-deep .arco-card-body {
    padding: 0;
}
</style>