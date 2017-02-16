import Vue from 'vue'
import Router from 'vue-router'
import pending from 'components/pending'
import pantry from 'components/pantry'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'pantry',
      component: pantry
    },
    {
      path: '/pending',
      name: 'pending',
      component: pending
    }
  ]
})
