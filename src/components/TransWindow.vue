<template>
  <div class="container">
    <!-- WINDOW BOX -->
    <div id="window">
      <div id="window-top-bar">
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
  background: url("..//assets/code.png") no-repeat center;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  #window {
    position: absolute;
    // top: 20%;
    // left: 50%;
    border: var(--color-white) 5px solid;
    width: 70vw;
    height: 50vh;
    box-shadow: 0 3px 10px whitesmoke;
  }
  #window-top-bar {
    background: var(--color-white);
    height: 8%;
    margin: 0 -1px; // Takes care of tiny blue line on left and right of bar
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

  @media only screen and (max-width: 600px) {
    #window {
      height: 25vh;
    }
    .dot {
      top: 0;
      height: 15px;
      width: 15px;
    }
    .red {
      left: 5px;
    }
    .yellow {
      left: 25px;
    }
    .green {
      left: 45px;
    }
  }
  @media only screen and (min-width: 1200px) {
    #window {
      height: 55vh;
      width: 70vw;
    }
  }
  @media only screen and (min-width: 600px) and (max-width: 900px) {
    #window {
      height: 40vh;
      width: 70vw;
    }
  }
  @media only screen and (min-width: 1300px) {
    #window {
      width: 60vw;
    }
  }
  @media only screen and (min-width: 1500px) {
    #window {
      width: 50vw;
    }
  }
}
</style>
