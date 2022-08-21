<template>
  <!-- <router-link :to="/typing-effect" />  -->
  <!-- <router-link :to="{ name: 'Fancy pic' }"> User </router-link> -->
  <div @click="pushWithQuery('Fancy pic')">PUSH</div>
  <typing-and-obj-pic />
</template>

<script setup>
import TypingAndObjPic from "./components/TypingAndObjPic.vue";
import { useRouter } from "vue-router";

const router = useRouter();
// const route = useRoute();

function pushWithQuery(query) {
  console.log("pushWithQuery called with query: " + query);
  router.push({
    name: query,
  });
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothtypingandobjpicing: grayscale;
  color: #2c3e50;
}
</style>
