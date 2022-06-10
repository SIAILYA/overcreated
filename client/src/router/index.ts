import Portfolio from "@/views/Portfolio.vue";
import Resume from "@/views/Resume.vue";
import Timeline from "@/views/Timeline.vue";
import Contacts from "@/views/Contacts.vue";
import Project from "@/views/Project.vue";

import Admin from "@/views/admin/Admin.vue";
import Login from "@/views/admin/Login.vue";

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
    path: "/project/:slug",
    component: Project
  },
  {
    path: "/admin",
    component: Admin,
    redirect: "/admin/projects/list",
    children: [
      {
        path: "topics",
        component: () => import("@/views/admin/AdminLayout.vue"),
        redirect: "topics/list",
        children: [
          {
            path: "list",
            component: () => import("@/views/admin/topics/Topics.vue"),
          },
          {
            path: "add",
            component: () => import("@/views/admin/topics/AddEdit.vue")
          },
          {
            path: "edit/:id",
            component: () => import("@/views/admin/topics/AddEdit.vue")
          }
        ]
      },
      {
        path: "projects",
        component: () => import("@/views/admin/AdminLayout.vue"),
        redirect: "projects/list",
        children: [
          {
            path: "list",
            component: () => import("@/views/admin/projects/Projects.vue")
          },
          {
            path: "add",
            component: () => import("@/views/admin/projects/AddEdit.vue")
          },
          {
            path: "edit/:id",
            component: () => import("@/views/admin/projects/AddEdit.vue")
          }
        ]
      },
      {
        path: "timeline",
        component: () => import("@/views/admin/Timeline.vue")
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes: routes
})

export default router
