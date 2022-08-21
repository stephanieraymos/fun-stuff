<template>
  <div class="container">
    <div class="text">Really cool thingy.</div>
    <img src="../assets/self-blue.png" alt="" class="image" />

    <div class="code-container">
      <pre class="code">
<span class="var-highlight">const</span> self = {
    name: <span class="string-highlight">'Stephanie'</span>,
    occupation: <span class="string-highlight">'Bleep Blooper'</span>,
    location: <span class="string-highlight">'Earth'</span>,
    hobbies:[
        <span class="string-highlight">'Biking'</span>,
        <span class="string-highlight">'Coding'</span>,
        <span class="string-highlight">'Playing Guitar'</span>
    ];
}; </pre>
    </div>
    <div class="window-outline"></div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  position: relative;
}
.text {
  max-width: fit-content;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: 0.15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: 0.17em; /* Adjust as needed */
  animation: typing 2s steps(40, end), blink-caret 0.75s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from,
  to {
    border-color: transparent;
  }
  50% {
    border-color: orange;
  }
}

.image {
  // display: flex;
  // position: relative;
  width: 100vw;
}
.code-container {
  position: absolute;
  color: white;
  top: 25%;
  left: 20%;
}
</style>
