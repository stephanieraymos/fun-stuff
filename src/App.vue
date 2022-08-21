<template>
  <div class="nav">
    <router-link to="/typing-effect"> Fancy Pic </router-link>
  </div>

  <router-view></router-view>
</template>

<script setup></script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothtypingandobjpicing: grayscale;
  color: #2c3e50;
}
.nav {
  display: flex;
  padding: 2px 5px;
  justify-content: flex-end;
}
</style>
