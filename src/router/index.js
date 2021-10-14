import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/cocktails',
    name: 'Main',
    component: () => import('@/pages/Main.vue'),
  },
  {
    path: '/cocktail/:id',
    name: 'Cocktail',
    component: () => import('@/pages/Cocktail.vue')
  },
  {
    path: '*',
    redirect: '/cocktails'
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
