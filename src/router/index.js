import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/components/Index'
import Login from '@/components/Login'
import Join from '@/components/Join'
import About from '@/components/About'
import NotFound from '@/components/NotFound'

Vue.use(Router);

const basePath = process.env.NODE_ENV === 'production' ? '/' : '/';

const router = new Router({
  base: basePath,
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/join',
      name: 'join',
      component: Join
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '*',
      name: 'not-found',
      component: NotFound
    }
  ],
  linkExactActiveClass: 'active',
  mode: 'history'
});

export default router
