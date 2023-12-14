<!-- cesium=>创建场景 -->
<template>
  <CommonPage>
    <div class="map-container" relative h-full>
      <div
        border="1px solid #efeff5"
        style="grid-area: header"
        flex
        gap-12
        flex-items-center
        pl-12
        pr-12
      >
        <n-button type="primary" dashed @click="initMap">创建三维场景</n-button>
        <n-button type="primary" dashed @click="handleDestroyObject">销毁场景</n-button>
        <n-button type="primary" dashed @click="handleChange2DModel">2D模式</n-button>
        <n-button type="primary" dashed @click="handleChange25DModel">2.5D模式</n-button>
        <n-button type="primary" dashed @click="handleChange3DMode">3D模式</n-button>
        <n-button type="error" dashed @click="handleChangeMorphingMode">变形模式</n-button>
      </div>
      <div border="1px solid #efeff5" relative>
        <div id="cesiumMap" :key="mapKey" absolute bottom-12px left-12px right-12px top-12px></div>
      </div>
      <div border="1px solid #efeff5" p-24>
        <n-code :code="code" language="javascript" />
      </div>
    </div>
  </CommonPage>
</template>

<script setup>
import { ref } from 'vue'
const code = ref(`
const cesiumMap = ref(null)
const mapKey = ref(0)
// 创建三维场景
const initMap = () => {
  cesiumMap.value = new Cesium.Viewer('cesiumMap')
}
// 2.D模式
const handleChange25DModel = () => {
  cesiumMap.value.scene.mode = 1
}
// 2D模式
const handleChange2DModel = () => {
  cesiumMap.value.scene.mode = 2
}
// 变形模式(变形功能疑似有问题)
const handleChangeMorphingMode = () => {
  cesiumMap.value.scene.mode = 0
}
// 3D模式
const handleChange3DMode = () => {
  cesiumMap.value.scene.mode = 3
}
// 销毁场景
const handleDestroyObject = () => {
  // 释放场景
  Cesium.destroyObject(cesiumMap.value)
  cesiumMap.value = null
  // 刷新组件
  mapKey.value += 1
}
`)
const cesiumMap = ref(null)
const mapKey = ref(0)
// 创建三维模型
const initMap = async () => {
  if (cesiumMap.value) await handleDestroyObject()
  cesiumMap.value = new Cesium.Viewer('cesiumMap')
}
// 2.D模式
const handleChange25DModel = () => {
  cesiumMap.value.scene.mode = 1
}
// 2D模式
const handleChange2DModel = () => {
  cesiumMap.value.scene.mode = 2
}
// 变形模式(变形功能疑似有问题)
const handleChangeMorphingMode = () => {
  // cesiumMap.value.scene.mode = 0
}
// 3D模式
const handleChange3DMode = () => {
  cesiumMap.value.scene.mode = 3
}
// 销毁场景
const handleDestroyObject = () => {
  // 释放场景
  Cesium.destroyObject(cesiumMap.value)
  cesiumMap.value = null
  // 刷新组件
  mapKey.value += 1
}
onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.map-container {
  grid-template-areas:
    'header header'
    'right left';
  grid-template-rows: 50px 1fr;
  grid-template-columns: 2fr 1fr;
  display: grid;
  gap: 24px;
}
</style>
