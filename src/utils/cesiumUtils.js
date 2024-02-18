let iamgesLayer = null
/**
 * @function 添加图层
 * @param layerInfo 图层信息
 */
export const addLayer = (layerInfo = {}) => {
    const { url, type } = layerInfo || {}
    const factory = {
        '地形': addTerrain(url),
        '影像': addImages(url),
        'S3m图层': addScpLayer(url),
        'Mvt图层': addMvtLayer(url)
    }
    factory[type]
}
/**
 * @function 添加地形图层
 * @param {*} url 图层服务 
 */
const addTerrain = (url) => {
    removeTerrain()
    const terrainProvider = new Cesium.CesiumTerrainProvider({
        url: url,
        requestWaterMask: true,//请求水体效果所需要的海岸线数据
        requestVertexNormals: true,//请求地形照明数据
    })
    window.cesiumMap.terrainProvider = terrainProvider
}
/**
 * @function 清除地形图层
 */
export const removeTerrain = () => {
    window.cesiumMap.terrainProvider = new Cesium.EllipsoidTerrainProvider({})
}

/**
 * @function 添加影像图层
 * @param {string} url 图层服务地址
 */
export const addImages = (url) => {
    iamgesLayer && removeImages()
    let layer = new Cesium.SuperMapImageryProvider({
        url: url  //影像服务的地址
    });
    iamgesLayer = window.cesiumMap.imageryLayers.addImageryProvider(layer)
}
/**
 * @function 清除影像图层
 */
export const removeImages = () => {
    window.cesiumMap.scene.imageryLayers.remove(iamgesLayer)
    iamgesLayer = null
}
/**
 * @function 添加S3m三维切片模型
 * @parma {string} url 图层服务地址
 */
export const addScpLayer = (url) => {
    window.cesiumMap.scene.open(url)
}
/**
 * @function 添加Mvt图层
 * @param {*} url 图层服务地址
 */
export const addMvtLayer = (url) => {
    window.cesiumMap.scene.addVectorTilesMap({
        url: url,  //MVT的服务地址
        canvasWidth: 512,
        name: 'testMVT',
    });
}