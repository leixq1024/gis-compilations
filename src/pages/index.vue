<template>
    <div class="container">
        <leftMenu class="left__aside" />
        <main class="gis__main">
            <header class="gis__header">
                <article class="gis__header--position">
                    <section>位置拾取结果：</section>
                    <section style="color:#009a29;">
                        <span style="color:#0e42d2;">经度：</span>
                        {{ positionPickData['longitude']}}
                    </section>
                    <section style="color:#009a29;">
                        <span style="color:#0e42d2;">纬度：</span>
                        {{ positionPickData['latitude']}}
                    </section>
                    <section style="color:#009a29;">
                        <span style="color:#0e42d2;">高度：</span>
                        {{ positionPickData['height'] }}
                    </section>
                </article>
            </header>
            <div style="display: flex; gap: .5rem;height: 100%;">
                <div class="gis__content">
                    <cesiumMap />
                    <!-- 左侧菜单功能面板  -->
                    <div v-show="componentName!==''" class="gis__content__fun-content">
                        <component :is="componentList[componentName]"></component>
                    </div>
                </div>
                <aside class="right__aside">
                    <mapType />
                    <layerManage />
                    <!-- 功能区域 -->
                    <tools class="map__tools" />
                </aside>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, markRaw, provide } from 'vue'
import leftMenu from '../pages/leftMenu/index.vue'
import cesiumMap from './map/cesiumMap.vue'
import mapType from './map/components/cesium/mapType.vue'
import layerManage from './map/components/cesium/layerManage.vue';
import tools from './tools/cesium/index.vue'
import measure from './map/components/cesium/measure.vue'
const positionPickData = ref({})
// 需要加载的组件名称
const componentName = ref('')
const componentList = ref({
    'measure': markRaw(measure)
})
/**
 * @function 更新拾取到的位置信息
 * @param {*} positionData 坐标信息
 */
const updatePositionPickData = (positionData) => {
    positionPickData.value = positionData
}
/**
 * @funciton 设置显示组件名称,如果为空,则不显示
 * @param {string} name
 */
const updateComponentName = name => {
    componentName.value = name
}
provide('updatePositionPickData', updatePositionPickData)
provide('updateComponentName', updateComponentName)
</script>

<style  lang="scss" scoped>
.container {
    position: relative;
    width: 100%;
    height: 100%;
    background-color: #f2f3f5;
    display: flex;
    padding: .5rem;
    box-sizing: border-box;
    gap: .5rem;
}

.gis__main {
    display: flex;
    flex: 1;
    flex-direction: column;
    gap: .5rem;
}

.left__aside {
    max-width: 15rem;
    background: #fff;
}

.gis__header {
    width: 100%;
    height: 3.125rem;
    background: #fff;
    display: flex;
    align-items: center;
    padding: 0 8px;

    &--position {
        display: flex;
        gap: 0 4px;
    }
}

.gis__content {
    position: relative;
    flex: 1;
    box-sizing: border-box;
    display: flex;
    overflow: hidden;
    border-radius: .5rem;
    align-items: center;
    justify-content: center;

    &__fun-content {
        position: absolute;
        min-height: 100px;
        min-width: 350px;
        width: fit-content;
        height: fit-content;
        border: 1px solid #e5e6eb;
        border-radius: 8px;
        overflow: hidden;
        z-index: 1024;
        left: 24px;
        top: 24px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, .1);
        background: #fff;
    }
}

.right__aside {
    width: 15rem;
    /* background-color: #fff; */
    display: flex;
    flex-direction: column;
    gap: .5rem;

    .map__tools {
        flex: 1;
        display: flex;
        flex-direction: column;
    }
}
</style>