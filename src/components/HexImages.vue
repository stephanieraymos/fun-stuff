<template>
  <div class="gallery">
    <img src="../assets/o1.jpg" alt="Oliver on a bike" />
    <img src="../assets/o2.jpg" alt="Oliver on a hike" />
    <img src="../assets/o3.jpg" alt="Oliver at baskin robbins" />
    <img
      src="../assets/o4.jpg"
      alt="Oliver at the beach"
    />
    <img src="../assets/o5.jpg" alt="Oliver eating a sandwich" />
    <img
      src="../assets/o6.jpg"
      alt="Oliver, Killian and Talon"
    />
    <img
      src="../assets/o7.jpg"
      alt="Oliver at the park"
    />
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.gallery {
  --s: 150px; /* control the size */
  --g: 10px; /* control the gap */
  display: grid;
  margin: calc(var(--s) + var(--g));
  justify-content: center;
}

.gallery > img {
  grid-area: 1/1;
  width: var(--s);
  aspect-ratio: 1.15;
  object-fit: cover;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0 50%);
  transform: translate(var(--_x, 0), var(--_y, 0)) scale(var(--_t, 1));
  cursor: pointer;
  filter: grayscale(80%);
  transition: 0.2s linear;
}
.gallery > img:hover {
  filter: grayscale(0);
  z-index: 1;
  --_t: 1.2;
}

.gallery > img:nth-child(1) {
  --_y: calc(-100% - var(--g));
}
.gallery > img:nth-child(7) {
  --_y: calc(100% + var(--g));
}
.gallery > img:nth-child(3),
.gallery > img:nth-child(5) {
  --_x: calc(-75% - 0.87 * var(--g));
}
.gallery > img:nth-child(4),
.gallery > img:nth-child(6) {
  --_x: calc(75% + 0.87 * var(--g));
}
.gallery > img:nth-child(3),
.gallery > img:nth-child(4) {
  --_y: calc(-50% - 0.5 * var(--g));
}
.gallery > img:nth-child(5),
.gallery > img:nth-child(6) {
  --_y: calc(50% + 0.5 * var(--g));
}

body {
  margin: 0;
  min-height: 100vh;
  display: grid;
  place-content: center;
  background: #aabbfb;
}
</style>
