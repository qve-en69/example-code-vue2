import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Main',
    component: () => import('@/pages/Main.vue'),
  },
  {
    path: '/cocktails/:id',
    name: 'Cocktail',
    component: () => import('@/pages/Cocktail.vue')
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
