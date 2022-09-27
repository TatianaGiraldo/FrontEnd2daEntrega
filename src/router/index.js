import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import dashboard from '../views/dashboard.vue'
import register from '../views/register.vue'
import page from '../views/page.vue'
import videos from '../views/videos.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/videos',
    name: 'videos',
    component: videos
  },
  {
    path: '/dashboard',
    name: 'inicio',
    component: dashboard
  },
  {
    path: '/page',
    name: 'page',
    component: page
  },
  {
    path: '/register',
    name: 'Registro',
    component: register
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
