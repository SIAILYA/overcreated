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
        },
        redirect: "/projects/list",
        children: [
            {
                path: "list",
                name: "projects-list",
                component: () => import("../views/ProjectsListView.vue"),
                meta: {
                    layout: "main",
                }
            },
            {
                path: "create",
                name: "create-project",
                component: () => import("../views/CreateProjectView.vue"),
                meta: {
                    layout: "main",
                }
            },
            {
                path: "edit/:id",
                name: "edit-project",
                component: () => import("../views/EditProjectView.vue"),
                meta: {
                    layout: "main",
                }
            }
        ]
    }
]

export const router = createRouter({
    history: createWebHistory(),
    routes,
})
