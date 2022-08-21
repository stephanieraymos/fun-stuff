<template>
  <div class="nav">
    <router-link to="/typing-effect"> Fancy Pic </router-link>
    <router-link to="/trans-window"> Transparent Window </router-link>
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
  margin-top: 0;
  padding: 2px 5px;
  justify-content: flex-end;
  background: #2c3e50;
}
</style>
