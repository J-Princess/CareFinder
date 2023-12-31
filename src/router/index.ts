import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import { getAuth, onAuthStateChanged } from 'firebase/auth';


const routes: Array<RouteRecordRaw> = [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/find',
      name: 'finder',
      component: () => import ('../views/FindHos.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/sign',
      name: 'signup',
      component: () => import('../views/Signup.vue')
    },
    { path: '/lib',
    name: 'library',
    component: () => import('../components/Library.vue'),},
    { path: '/hospit',
    name: 'hospital',
    component: () => import('../components/Hospit.vue'),},
    { path: '/profile',
    name: 'profile',
    component: () => import('../components/ProfileView.vue'),
    meta: {
       requiresAuth: true,
      }
  },{
    path: '/enter',
    name: 'entry',
    component: () => import('../components/Entries.vue')
  },
    {
      path: '/:catchAll(.*)*',
      name: 'error', 
      component: () => import('../views/NotFound.vue')
    }
  ];

  const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  });
  


const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const ejectListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        ejectListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next('/profile');
    } else {
      alert("You don't have access, signup to share");
      next('/sign');
    }
  } else {
    next();
  }
});


export default router
