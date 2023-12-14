<!-- cesium=>添加图层 -->
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
        <n-button type="warning" dashed @click="handleDestroyObject">销毁场景</n-button>
        <n-button type="primary" dashed @click="handleCreateMapTerrainProvider">
          创建场景的同时也将地形添加进去
        </n-button>
        <n-button type="primary" dashed @click="handleAddTerrainProvider">添加地形图层</n-button>
        <n-button type="primary" dashed @click="handleAddImageryProvider">添加影像图层</n-button>
        <n-button type="primary" dashed @click="handleOpenS3M">添加S3M图层(倾斜模型)</n-button>
        <n-button type="primary" dashed @click="handleChangeMorphingMode">添加MVT图层</n-button>
      </div>
      <div border="1px solid #efeff5" relative h-full overflow-hidden>
        <div id="cesiumMap" :key="mapKey" absolute bottom-12px left-12px right-12px top-12px></div>
      </div>
      <div border="1px solid #efeff5" overflow-hidden p-24>
        <div h-750 overflow-y-auto>
          <n-code :code="code" language="javascript" />
        </div>
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
const initMap = async () => {
  if (cesiumMap.value) await handleDestroyObject()
  cesiumMap.value = new Cesium.Viewer('cesiumMap')
  // 设置相机位置
  cesiumMap.value.scene.camera.setView({
    destination: new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
    orientation: {
      heading: 1.4059101895600987,
      pitch: -0.20917672793046682,
      roll: 2.708944180085382e-13,
    },
  })
}
// 销毁场景
const handleDestroyObject = () => {
  // 释放场景
  Cesium.destroyObject(cesiumMap.value)
  cesiumMap.value = null
  // 刷新组件
  mapKey.value += 1
}
// 添加地形图层
const handleAddTerrainProvider = () => {
  // 创建完三维场景后再增加地形图层
  const terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM', //地形服务的地址
    isSct: true, //地形服务源自SuperMap iServer发布时需设置isSct为true
  })
  cesiumMap.value.terrainProvider = terrainProvider
}
// 创建三维场景的时候也将地形添加进去
const handleCreateMapTerrainProvider = async () => {
  if (cesiumMap.value) await handleDestroyObject()
  cesiumMap.value = new Cesium.Viewer('cesiumMap', {
    // 创建三维场景时就添加图层
    terrainProvider: new Cesium.CesiumTerrainProvider({
      url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM', //地形服务的地址
      isSct: true, //地形服务源自SuperMap iServer发布时需设置isSct为true
    }),
  })
  // 设置相机位置
  cesiumMap.value.scene.camera.setView({
    destination: new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
    orientation: {
      heading: 1.4059101895600987,
      pitch: -0.20917672793046682,
      roll: 2.708944180085382e-13,
    },
  })
}
// 添加影像图层
const handleAddImageryProvider = () => {
  cesiumMap.value.imageryLayers.addImageryProvider(
    new Cesium.SuperMapImageryProvider({
      url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
    })
  )
}
// 添加单个S3M图层
const handleOpenS3M = () => {
  const scene = cesiumMap.value.scene
  // 返回一个Promise对象
  const promise = scene.open(
    'http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace'
  )
  Cesium.when(promise, function () {
    //设置相机位置，定位至模型
    scene.camera.setView({
      //将经度、纬度、高度的坐标转换为笛卡尔坐标
      destination: new Cesium.Cartesian3(-2653915.6463913363, 3571045.726807149, 4570293.566342328),
      orientation: {
        heading: 2.1953426301495345,
        pitch: -0.33632707158103625,
        roll: 6.283185307179586,
      },
    })
  })
}
`)
const cesiumMap = ref(null)
const mapKey = ref(0)
// 创建三维场景
const initMap = async () => {
  if (cesiumMap.value) await handleDestroyObject()
  cesiumMap.value = new Cesium.Viewer('cesiumMap')
  // 设置相机位置
  cesiumMap.value.scene.camera.setView({
    destination: new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
    orientation: {
      heading: 1.4059101895600987,
      pitch: -0.20917672793046682,
      roll: 2.708944180085382e-13,
    },
  })
}
// 销毁场景
const handleDestroyObject = () => {
  // 释放场景
  Cesium.destroyObject(cesiumMap.value)
  cesiumMap.value = null
  // 刷新组件
  mapKey.value += 1
}
// 添加地形图层
const handleAddTerrainProvider = () => {
  // 创建完三维场景后再增加地形图层
  const terrainProvider = new Cesium.CesiumTerrainProvider({
    url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM', //地形服务的地址
    isSct: true, //地形服务源自SuperMap iServer发布时需设置isSct为true
  })
  cesiumMap.value.terrainProvider = terrainProvider
}
// 创建三维场景的时候也将地形添加进去
const handleCreateMapTerrainProvider = async () => {
  if (cesiumMap.value) await handleDestroyObject()
  cesiumMap.value = new Cesium.Viewer('cesiumMap', {
    // 创建三维场景时就添加图层
    terrainProvider: new Cesium.CesiumTerrainProvider({
      url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM', //地形服务的地址
      isSct: true, //地形服务源自SuperMap iServer发布时需设置isSct为true
    }),
  })
  // 设置相机位置
  cesiumMap.value.scene.camera.setView({
    destination: new Cesium.Cartesian3(-1206939.1925299785, 5337998.241228442, 3286279.2424502545),
    orientation: {
      heading: 1.4059101895600987,
      pitch: -0.20917672793046682,
      roll: 2.708944180085382e-13,
    },
  })
}
// 添加影像图层
const handleAddImageryProvider = () => {
  cesiumMap.value.imageryLayers.addImageryProvider(
    new Cesium.SuperMapImageryProvider({
      url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
    })
  )
}
// 添加单个S3M图层
const handleOpenS3M = () => {
  const scene = cesiumMap.value.scene
  // 返回一个Promise对象
  const promise = scene.open(
    'http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace'
  )
  Cesium.when(promise, function () {
    //设置相机位置，定位至模型
    scene.camera.setView({
      //将经度、纬度、高度的坐标转换为笛卡尔坐标
      destination: new Cesium.Cartesian3(-2653915.6463913363, 3571045.726807149, 4570293.566342328),
      orientation: {
        heading: 2.1953426301495345,
        pitch: -0.33632707158103625,
        roll: 6.283185307179586,
      },
    })
  })
}
onMounted(() => {
  initMap()
})
</script>
<style lang="scss" scoped>
.map-container {
  position: relative;
  grid-template-areas:
    'header header'
    'right left';
  grid-template-rows: 50px 1fr;
  grid-template-columns: 2fr 1fr;
  display: grid;
  gap: 24px;
}
</style>
