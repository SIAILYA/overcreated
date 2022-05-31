import Portfolio from "@/views/Portfolio.vue";
import Resume from "@/views/Resume.vue";
import Timeline from "@/views/Timeline.vue";
import Contacts from "@/views/Contacts.vue";

import Admin from "@/views/admin/Admin.vue";
import Login from "@/views/admin/Login.vue";
import Topics from "@/views/admin/Topics.vue";

import {createRouter, createWebHistory} from "vue-router"

const routes = [
  {
    path: "/",
    component: Portfolio
  },
  {
    path: "/resume",
    component: Resume
  },
  {
    path: "/contacts",
    component: Contacts
  },
  {
    path: "/timeline",
    component: Timeline
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/admin",
    component: Admin,
    redirect: "/admin/projects/list",
    children: [
      {
        path: "topics",
        component: Topics
      },
      {
        path: "projects/list",
        component: () => import("@/views/admin/projects/Projects.vue"),
      },
      {
        path: "projects/add",
        component: () => import("@/views/admin/projects/AddEdit.vue")
      },
      {
        path: "projects/edit/:id",
        component: () => import("@/views/admin/projects/AddEdit.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
