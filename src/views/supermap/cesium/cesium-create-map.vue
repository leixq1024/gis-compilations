<template>
  <CommonPage>
    <div id="cesiumMap" h-800 w-full></div>
  </CommonPage>
</template>

<script setup>
import { onMounted } from 'vue'
/**
 * @function 初始化三维场景
 */
const initMap = () => {
  // 创建三维场景
  new Cesium.Viewer('cesiumMap')
}
onMounted(() => {
  initMap()
})
</script>
