import Vue from 'vue';
import VueRouter from 'vue-router';
import Portfolio from '../views/Portfolio.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio,
    meta: {headerSection: "portfolio"}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
