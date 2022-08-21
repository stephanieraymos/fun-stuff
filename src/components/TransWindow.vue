<template>
  <div class="container">
    <div class="window">
      <div class="buttons">
        <span class="red"></span>
        <span class="yellow"></span>
        <span class="green"></span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  .window {
    position: relative;
    width: 50%;
    height: 50%;
  }
  .red {
    position: absolute;
    top: 0;
    left: 0;
  }
  .yellow {
    position: absolute;
    top: 0;
    left: 25px;
  }
  .green {
    position: absolute;
    top: 0;
    left: 50px;
  }

}
</style>
