<template>
  <div class="mapBD">
    <div class="spinnerDiv">
      <img
        src="../../assets/image/icons8-google-maps.svg"
        onclick="addSpinner()"
        id="googleIcon"
        alt="mapIcon"
      />
      <h3 id="loadingText">
        Loading
        <span class="dit-1">.</span>
        <span class="dit-2">.</span>
        <span class="dit-3">.</span>
        <span class="dit-4">.</span>
      </h3>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.mapBD {
  position: relative;
  margin: 0.5rem;
  padding: 0.5rem;
  width: 100%;
  border-radius: 20px;
  height: 25rem;
  align-items: flex-end;
}
.spinnerDiv {
  display: flex;
  justify-content: center;
}
#googleIcon {
  animation: spin 2s linear infinite alternate;
  position: absolute;
  top: 20vh;
  z-index: 6;
  /* border-top: 5px solid blue;
  border-right: 5px solid green;
  border-bottom: 5px solid red;
  border-left: 5px solid yellow; */
  padding: 0 8px 0 8px;
  border-radius: 50%;
  height: 8rem;
}
@keyframes spin {
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
}
.dit-1 {
  color: #f3301c;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.1s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.dit-2 {
  color: #2ad958;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.2s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.dit-3 {
  color: #eafc0e;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.3s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
.dit-4 {
  color: #2c85eb;
  font-size: 3rem;
  z-index: 0;
  margin: 2px;
  animation-name: dot;
  animation-delay: 0.4s;
  animation-direction: alternate;
  animation-duration: 0.7s;
  animation-iteration-count: infinite;
}
/*Dot animation*/
@keyframes dot {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
