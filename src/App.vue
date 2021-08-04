<template>
  <main lang="en">
    <nav-bar></nav-bar>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </main>
  <foot-er></foot-er>
</template>

<script>
export default {
  name: "App",
  methods: {},
};
</script>

<style>
/* @import url("https://fonts.googleapis.com/css?family=Bangers|Montserrat:400,700,800&display=swap"); */
@import url("https://fonts.googleapis.com/css2?family=Goldman:wght@400;700&family=Montserrat:wght@200;400;600;900&display=swap");

:root {
  --Goldman: "Goldman", sans-serif;
  --Montserrat: "Montserrat", sans-serif;
  --white: rgb(243, 242, 242);
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--Montserrat);
}
html {
  font-size: 16px;
  overflow-x: hidden;
}
body {
  background-image: url("./assets/image/capeTownCityBoll1000px.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
main {
  position: relative;
  background-color: rgba(0, 0, 0, 0.288);
  min-height: 100vh;
  max-height: fit-content;
  z-index: 0;
}
p {
  color: black;
}
.route-enter-from {
  opacity: 0;
}

.route-enter-active {
  transition: all 0.5s ease-out;
}

.route-enter-to {
  opacity: 1;
}

.route-leave-from {
  opacity: 1;
}

.route-leave-active {
  transition: all 0.5s ease-in;
}
.route-leave-to {
  opacity: 0;
}

@media screen and (max-width: 400px) {
  html {
    font-size: 0.8rem;
  }
}
@media screen and (min-width: 400px) and (max-width: 500px) {
  html {
    font-size: 0.9rem;
  }
}
@media screen and (min-width: 1670px) {
  html {
    font-size: 1.2rem;
  }
}
@media screen and (min-width: 3000px) {
  html {
    font-size: 1.5rem;
  }
}
</style>
