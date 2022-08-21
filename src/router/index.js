import { createRouter, createWebHistory } from "vue-router";
import App from "../App.vue";
import TypingAndObjPic from "../components/TypingAndObjPic.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: App,
  },
  {
    path: "/typing-effect",
    name: "Fancy pic",
    component: TypingAndObjPic,
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
