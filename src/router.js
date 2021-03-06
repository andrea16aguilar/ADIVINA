import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Login.vue'
import Temas from './views/Temas.vue'
import Niveles from './views/Niveles.vue'
import TecnologiaFacil from './views/TecnologiaFacil.vue'
import informatica2 from './views/informatica2.vue'
import Español from './views/Español.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/temas',
      name: 'temas',
      component: Temas
    },
    {
      path: '/nivel',
      name: 'nivel',
      component: Niveles
    },
    {
      path: '/informaticafacil',
      name: 'informaticafacil',
      component: TecnologiaFacil
    },
    {
      path: '/informatica2',
      name: 'informatica2',
      component: informatica2
    },
    {
      path: '/Lenguaje1',
      name: 'Lenguaje1',
      component: Español
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
