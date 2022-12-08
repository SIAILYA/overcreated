import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
        path: "/login",
        name: "login",
        component: () => import("../views/LoginView.vue"),
        meta: {
            layout: "empty"
        }
    },
    {
        path: "/",
        name: "home",
        component: () => import("../views/HomeView.vue"),
        meta: {
            layout: "main",
        }
    },
    {
        path: "/projects",
        name: "projects",
        component: () => import("../views/ProjectsView.vue"),
        meta: {
            layout: "main",
        }
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
