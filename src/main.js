import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";

const app = createApp(App).use(createPinia()).use(router);

router.isReady().then(() => {
  app.mount("#app");
});
