<template>
  <div class="container">
    <!-- WINDOW BOX -->
    <div class="window">
      <div class="window-top-bar">
        <div class="buttons">
          <span class="red dot"></span>
          <span class="yellow dot"></span>
          <span class="green dot"></span>
        </div>
      </div>
    </div>
    <!-- END WINDOW BOX -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  background: var(--color-dark-blue);
  height: 100vh;
  .window {
    position: relative;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
    border: var(--color-white) 5px solid;
    width: 70vh;
    height: 50vh;
    box-shadow: 0 3px 10px whitesmoke;
  }
  .window-top-bar {
    background: var(--color-white);
    height: 8%;
    margin: 0 -1px; // Takes care of tiny blue line on left and right of bar
  }
  .buttons {
    position: relative;
    background: red;
  }
  .dot {
    position: absolute;
    top: 5px;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: inline-block;
  }
  .red {
    left: 5px;
    background: #ff605c;
  }
  .yellow {
    left: 30px;
    background: #ffbd44;
  }
  .green {
    left: 55px;
    background: #00ca4e;
  }
}
</style>
