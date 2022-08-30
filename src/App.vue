<template>
  <div class="nav">
    <router-link to="/"> Fancy Pic </router-link>
    <router-link to="/trans-window"> Transparent Window </router-link>
  </div>

  <router-view></router-view>
</template>

<script setup></script>

<style lang="scss">
:root {
  --color-light-blue: #45A8F8;
  --color-dark-blue: #2c3e50;
  --color-white: #FFF;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothtypingandobjpicing: grayscale;
  color: var(--color-dark-blue);
}
body {
  margin: 0;
  height: 100vh;
}
.nav {
  display: flex;
  padding: 2px 5px;
  justify-content: flex-end;
  background: var(--color-dark-blue);

  a {
    text-decoration: none;
    color: var(--color-white);
    background: var(--color-light-blue);
    padding: 5px;
  }

  .router-link-active {
    color: var(--color-light-blue);
    background: var(--color-white);
  }
}
</style>
