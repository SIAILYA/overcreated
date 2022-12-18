import {createApp} from 'vue'
import App from './App.vue'
import {router} from "./router/router";
import "bootstrap/dist/css/bootstrap.min.css";
import {createPinia} from "pinia";
import "reflect-metadata";


const pinia = createPinia();

createApp(App).use(router).use(pinia).mount('#app')
