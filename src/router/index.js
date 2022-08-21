import { createRouter, createWebHistory } from "vue-router";
import TypingAndObjPic from "../components/TypingAndObjPic.vue";
const routes = [
  {
    path: "/typing-effect",
    name: "Fancy pic",
    component: TypingAndObjPic,
  },
  // {
  //   path: "/typing-effect",
  //   name: "Fancy pic",
  //   component: TypingAndObjPic,
  // },
];
const router = createRouter({
  // mode: 'hash',
  history: createWebHistory(process.env.BASE_URL),
  routes,
});
export default router;
