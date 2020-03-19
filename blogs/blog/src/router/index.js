import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Times from '../views/Times.vue'
import Leave from '../views/Leave.vue'
import Blogs from '../views/Blogs.vue'
import Blogsdetail from '../components/blogDetail/blogDetail.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Home',
    redirect: '/'
  },
  {
    path: '/About',
    name: 'About',
    component: About
  },
  {
    path: '/Times',
    name: 'Times',
    component: Times
  },
  {
    path: '/Leave',
    name: 'Leave',
    component: Leave
  },
  {
    path: '/Blogs/:id',
    name: 'Blogs',
    component: Blogs
  },
  {
    path: '/detail/:id',
    name: 'Blogsdetail',
    component: Blogsdetail
  },
  
]

const router = new VueRouter({
  routes
})

export default router
