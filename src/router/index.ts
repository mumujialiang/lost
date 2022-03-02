import { createRouter, createWebHashHistory } from 'vue-router'

declare module 'vue-router' {
  interface RouteMeta {
    title?: string
  }
}

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/nav',
      component: () => import('../views/nav/ComNav.vue'),
      children: [
        {
          path: 'index',
          meta: {
            title: '首页'
          },
          component: () => import('../views/index/IndexView.vue')
        },
        {
          path: 'posting',
          meta: {
            title: '发布信息'
          },
          component: () => import('../views/posting/PostingView.vue')
        }
      ]
    },
    {
      path: '/test',
      meta: {
        title: '测试'
      },
      component: () => import('../views/test/TestView.vue')
    }
  ]
})

router.beforeEach(to => {
  window.document.title = to.meta.title || '标题'
})

export default router
