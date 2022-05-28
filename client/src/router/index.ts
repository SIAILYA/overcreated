import Home from "@/views/Home.vue";
import Resume from "@/views/Resume.vue";
import {createRouter, createWebHistory} from "vue-router"

const routes = [
    {path: "/", component: Home},
    {path: "/resume", component: Resume}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
