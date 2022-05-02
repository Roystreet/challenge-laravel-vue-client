import { createApp } from "vue";
import App from "./App.vue";
import router from "../src/routes/index.js";

createApp(App).use(router).mount("#app");
