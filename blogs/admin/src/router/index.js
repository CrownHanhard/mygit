import Vue from 'vue'
import VueRouter from 'vue-router'
import Bannerlist from '../views/Bannerlist.vue'
import About from '../views/About.vue'
import Bannerupload from '../views/Bannerupload.vue'
import uploadBlog from '../views/uploadBlog.vue'
import blogList from '../views/blogList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Bannerlist',
    component: Bannerlist
  },
  {
    path: '/Bannerlist',
    redirect: '/'
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Bannerupload',
    name: 'Bannerupload',
    component: Bannerupload
  },
  {
    path: '/uploadBlog',
    name: 'uploadBlog',
    component: uploadBlog
  },
  {
    path: '/blogList',
    name: 'blogList',
    component: blogList
  },
  
]

const router = new VueRouter({
  routes
})

export default router
