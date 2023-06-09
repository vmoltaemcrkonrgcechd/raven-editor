import { createApp } from "vue";
import Router from "@/router";
import { createPinia } from "pinia";
import App from "@/App.vue";
import "@/index.css";

createApp(App).use(Router).use(createPinia()).mount("#app");
