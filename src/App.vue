<template>
  <nav-bar></nav-bar>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Bangers|Montserrat:400,700,800&display=swap");

:root {
  --Bangers: "Bangers", sans-serif;
  --Montserrat: "Montserrat", sans-serif;
  --white: rgb(219, 217, 217);
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
  min-height: 80vh;
  display: flex;
  flex-direction: column;
}
</style>
