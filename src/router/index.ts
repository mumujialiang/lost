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
