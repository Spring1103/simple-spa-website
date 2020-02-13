import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import PageOne from '@/components/PageOne'
import PageTwo from '@/components/PageTwo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/page-one',
      name: 'PageOne',
      component: PageOne
    },
    {
      path: '/page-two',
      name: 'PageTwo',
      component: PageTwo
    }
  ]
})
