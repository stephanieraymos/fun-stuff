<template>
  <div class="container">
    <div class="form-container">
      <form enctype="multipart/form-data" @submit="loadImg">
        <label for="img">
          Click here to add an image
          <input type="file" id="img" name="img" required />
        </label>
        <input type="submit" />
      </form>
    </div>
    <!-- WINDOW BOX -->

    <div id="window">
      <div id="window-top-bar">
        <div class="buttons">
          <span class="red dot"></span>
          <span class="yellow dot"></span>
          <span class="green dot"></span>
        </div>
      </div>
      <img
        id="preview"
        alt="self-pic"
        class="image"
      />
    </div>
    <!-- END WINDOW BOX -->
  </div>
</template>

<script>
window.onload = function loadImg() {
  const files = document.querySelectorAll("input[type=file]");
  files[0].addEventListener("change", function () {
    if (this.files && this.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("preview").setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(this.files[0]);
    }
  });
};
</script>

<style lang="scss" scoped>
.container {
  background: var(--color-dark-blue);
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  .form-container {
    position: absolute;
    top: 10%;
    color: white;
  }
  .image {
    width: 100%;
    height: 92%;
    object-fit: cover; // crop
    object-position: 25% 25%; // centering the crop
  }
  input {
    display: none;
  }
  label {
    cursor: pointer;
  }
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

  @media only screen and (max-width: 600px) {
    .window {
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
    .window {
      height: 70vh;
    }
  }
}
</style>
