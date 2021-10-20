import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

import Home from '@/views/Home';
import Profile from '@/views/Profile';

  // const user_token = localStorage.getItem('app_user_bearer_token');

  const router = new Router({ 
    mode: 'history',
    linkExactActiveClass: 'active',
    base: process.env.VUE_APP_BASE_URL,
    routes: [
    {
    path: '/',
    name: 'home',
    component: Home,
    meta: {
    title: 'Home',
    },
    /*async beforeEnter (to, from, next) { 

    }*/
    },
    { 
      path: '/profile',
      name: 'profile',
      component: Profile,
      meta: { 
        title: 'Profile',
      }
    }
  ],
});

router.beforeEach((to, from, next) => {
  const nearestPathWithTitle = to.matched.slice().reverse().find(path => path.meta && path.meta.title)
  if (nearestPathWithTitle) document.title = `${nearestPathWithTitle.meta.title} - ${process.env.VUE_APP_NAME}`
  next();
});

export default router;