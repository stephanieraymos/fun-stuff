import { createRouter, createWebHistory } from "vue-router";
import TypingAndObjPic from "../components/TypingAndObjPic.vue";
import TransWindow from "../components/TransWindow.vue";
import HexImages from "../components/HexImages.vue";
const routes = [
  {
    // path: "/typing-effect",
    path: "/",
    name: "Fancy pic",
    component: TypingAndObjPic,
  },
  {
    path: "/trans-window",
    name: "Trasparent Window",
    component: TransWindow,
  },
  {
    path: "/hex-images",
    name: "Hex Images",
    component: HexImages,
  },
  // {
  //   path: "/typing-effect",
  //   name: "Fancy pic",
  //   component: TypingAndObjPic,
  // },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
