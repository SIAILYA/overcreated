import Vue from 'vue';
import VueRouter from 'vue-router';
import Portfolio from '../views/Portfolio.vue';
import NotFound from '../views/NotFound.vue';
import Contacts from '../views/Contacts.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/404"
  },
  {
    path: '/404',
    name: '404',
    component: NotFound,
    meta: {headerSection: "not_found", themeColor: "red"}
  },
  {
    path: '/',
    name: 'Portfolio',
    component: Portfolio,
    meta: {headerSection: "portfolio", themeColor: "green"}
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
    meta: {headerSection: "contacts", themeColor: "blue"}
  },
  {
    path: '/resume',
    name: 'Resume',
    component: Resume,
    meta: {headerSection: "resume", themeColor: "pink"}
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.afterEach((to, from) => {
  document.documentElement.setAttribute("theme", to.meta.themeColor)
})

export default router;
