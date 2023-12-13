const Layout = () => import('@/layout/index.vue')
export default {
  name: 'GIS',
  path: '/supmermap',
  component: Layout,
  redirect: '/supmermap',
  meta: {
    title: '超图示例集',
    icon: 'material-symbols:auto-awesome-outline-rounded',
    order: 1,
  },
  children: [
    {
      name: 'Cesium',
      path: 'cesium',
      redirect: '/supmermap/cesium/cesiumCreateMap',
      meta: {
        title: 'Cesium示例',
        icon: 'material-symbols:auto-awesome-outline-rounded',
        role: ['admin'],
        requireAuth: true,
      },
      children: [
        {
          name: 'cesiumCreateMap',
          path: 'cesiumCreateMap',
          component: () => import('./cesium/cesium-create-map.vue'),
          meta: {
            title: '创建三维场景',
            icon: 'material-symbols:auto-awesome-outline-rounded',
            role: ['admin'],
            requireAuth: true,
          },
        },
        {
          name: 'a-1-2',
          path: 'a-1-2',
          component: () => import('../multi-menu/a-1/a-1-2/index.vue'),
          meta: {
            title: 'a-1-2',
            icon: 'ic:baseline-menu',
            role: ['admin'],
            requireAuth: true,
          },
        },
      ],
    },
    {
      name: 'Openlayers',
      path: 'multiple-menu',
      component: () => import('../multi-menu/a-1/index.vue'),
      meta: {
        title: 'Openlayers示例',
        icon: 'ic:baseline-menu',
        role: ['admin'],
        requireAuth: true,
      },
      children: [
        {
          name: 'a-1-1',
          path: 'a-1-1',
          component: () => import('../multi-menu/a-1/a-1-1/index.vue'),
          meta: {
            title: 'a-1-1',
            icon: 'ic:baseline-menu',
            role: ['admin'],
            requireAuth: true,
          },
        },
        {
          name: 'a-1-2',
          path: 'a-1-2',
          component: () => import('../multi-menu/a-1/a-1-2/index.vue'),
          meta: {
            title: 'a-1-2',
            icon: 'ic:baseline-menu',
            role: ['admin'],
            requireAuth: true,
          },
        },
      ],
    },
  ],
}
