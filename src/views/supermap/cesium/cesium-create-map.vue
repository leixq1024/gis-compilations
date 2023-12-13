<template>
  <CommonPage>
    <div class="map-container" relative h-full>
      <div border="1px solid #efeff5" style="grid-area: header" flex flex-items-center pl-12 pr-12>
        <n-button strong secondary type="primary" @click="initMap">初始化三维场景</n-button>
      </div>
      <div border="1px solid #efeff5" relative>
        <div id="cesiumMap" absolute bottom-12px left-12px right-12px top-12px></div>
      </div>
      <div border="1px solid #efeff5" p-24>
        <n-code :code="code" language="javascript" inline />
      </div>
    </div>
  </CommonPage>
</template>

<script setup>
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
hljs.registerLanguage('javascript', javascript)
import { ref } from 'vue'
const code = ref(`
    new Cesium.Viewer('cesiumMap')
`)
/**
 * @function 初始化三维场景
 */
const initMap = () => {
  new Cesium.Viewer('cesiumMap')
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
