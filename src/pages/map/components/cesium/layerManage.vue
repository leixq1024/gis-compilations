<!-- cesium=>图层管理 -->
<template>
    <div class="layer__list">
        <a-card title="图层管理" hoverable>
            <template #extra>
                <a-link @click="clearLayer">清除图层</a-link>
            </template>
            <div class="layer__scroll">
                <!-- <a-tree ref="layerTree" :only-check-leaf="false" :showLine="true" blockNode :data="treeData" checkable -->
                <!-- :checked-keys="checkedKeys" @check="handleTreeCheck" /> -->
                <a-spin dot />
            </div>
        </a-card>
    </div>
</template>

<script setup lang="js">
import { ref } from 'vue'
import { addLayer, removeTerrain, removeImages } from '/src/utils/cesiumUtils'
// const treeData = ref([
//     {
//         title: '地形图层',
//         key: '0-0',
//         children: [
//             {
//                 title: '珠峰地形',
//                 key: '0-0-0',
//                 mapInfo: {
//                     url: 'http://www.supermapol.com/realspace/services/3D-dxyx_ios2/rest/realspace/datas/DatasetDEM_1@sichuanTer',
//                     type: '地形'
//                 }
//             },
//             {
//                 title: '四川地形',
//                 key: '0-0-1',
//                 mapInfo: {
//                     url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/DatasetDEM',
//                     type: '地形'
//                 }
//             },
//         ],
//     },
//     {
//         title: '影像图层',
//         key: '1-0',
//         children: [
//             {
//                 title: '四川影像',
//                 key: '1-0-0',
//                 mapInfo: {
//                     url: 'http://www.supermapol.com/realspace/services/3D-dixingyingxiang/rest/realspace/datas/MosaicResult',
//                     type: '影像'
//                 }
//             },
//         ],
//     },
//     {
//         title: 'S3M图层',
//         key: '2-0',
//         children: [
//             {
//                 title: '大教堂',
//                 key: '2-0-0',
//                 mapInfo: {
//                     url: 'http://www.supermapol.com/realspace/services/3D-suofeiya_church/rest/realspace',
//                     type: 'S3m图层'
//                 }
//             },
//         ],
//     },
//     {
//         title: 'MVT图层',
//         key: '3-0',
//         children: [
//             {
//                 title: '测试用Mvt图层',
//                 key: '3-0-0',
//                 mapInfo: {
//                     url: 'http://www.supermapol.com/realspace/services/map-mvt-JingJinDiQuDiTu/restjsr/v1/vectortile/maps/%E4%BA%AC%E6%B4%A5%E5%9C%B0%E5%8C%BA%E5%9C%B0%E5%9B%BE',
//                     type: 'Mvt图层'
//                 }
//             },
//         ],
//     },
// ])
// const layerTree = ref(null)
const checkedKeys = ref([])
// 图层树复选框选中事件
const handleTreeCheck = (curSelectNodeKey, data) => {
    const { key, mapInfo } = data['node'] || {}
    checkedKeys.value = [key]
    addLayer(mapInfo)
}

// 清除图层
const clearLayer = () => {
    checkedKeys.value = []
    removeTerrain()
    removeImages()
}
</script>

<style  lang="scss" scoped>
.layer__list {
    max-height: 250px;

    ::v-deep .arco-card {
        height: 100%;
        display: flex;
        flex-direction: column;

        &-body {
            flex: 1;
            overflow: hidden;
        }
    }
}

.layer__scroll {
    min-height: 200px;
    height: 100%;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>