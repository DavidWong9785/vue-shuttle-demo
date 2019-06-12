import DemoLayout from '@/views/layout/DemoLayout'

import router from '@/router'
import store from '@/store'

import taskStore from './store'

// 首页子路由
const taskMenus = [
  {
    name: 'mainPage',
    component: () => import('./Main.vue'),
    path: '/main/page',
    meta: {
      displayName: '子路由'
    }
  }
]

const pluginRoute = {
  path: '/main',
  component: DemoLayout,
  props: {
    taskMenus
  },
  name: 'main',
  hidden: true,
  sort: 0,
  redirect: '/main/page',
  children: [].concat(taskMenus)
}

const main = {
  install: () => {
    router.addRoutes([pluginRoute])
    store.registerModule('taskStore', taskStore)
  },
  name: 'main',
  enable: true
}
console.log('main', main)
export default main
