<template>
  <main>
    <nav-bar></nav-bar>
    <router-view></router-view>
  </main>
</template>

<script>
export default {
  name: "App",
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
body {
  background-image: url("./assets/image/capeTownCityBoll1000px.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-attachment: fixed;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
main {
  position: relative;
  background-color: rgba(0, 0, 0, 0.288);
  min-height: 100vh;
  z-index: 0;
}
</style>
