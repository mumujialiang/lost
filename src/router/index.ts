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
        },
        {
          path: 'friendLink',
          meta: {
            title: '友情链接'
          },
          component: () => import('../views/friendLink/FriendLinkView.vue')
        },
        {
          path: 'about',
          meta: {
            title: '关于我们'
          },
          component: () => import('../views/about/AboutView.vue')
        },
        {
          path: 'leaveWord',
          meta: {
            title: '留言'
          },
          component: () => import('../views/leaveWord/LeaveWordView.vue')
        },
        {
          path: 'login',
          meta: {
            title: '登录'
          },
          component: () => import('../views/login/LoginView.vue')
        },
        {
          path: 'register',
          meta: {
            title: '注册'
          },
          component: () => import('../views/register/RegisterView.vue')
        },
        {
          path: 'user',
          meta: {
            title: '个人中心'
          },
          component: () => import('../views/user/UserView.vue'),
          children: [
            {
              path: 'account',
              component: () =>
                import('../views/user/components/account/ComAccount.vue')
            },
            {
              path: 'posting',
              component: () =>
                import('../views/user/components/posting/ComPosting.vue')
            },
            {
              path: 'contact',
              component: () =>
                import('../views/user/components/contact/ComContact.vue')
            },
            {
              path: 'system',
              component: () =>
                import('../views/user/components/system/ComSystem.vue')
            }
          ]
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
