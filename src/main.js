import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { i18n } from "vue-lang-router";
import store from "@/store";
import { createHead } from "@vueuse/head";
import "@fortawesome/fontawesome-free/css/all.css";
import "@/index.css";

const app = createApp(App);
app.use(router);
app.use(i18n);
app.use(store);
app.use(createHead());
app.mount("#app");
