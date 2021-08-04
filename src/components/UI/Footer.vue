<template>
  <div class="footer">
        <a class="clint_link" 
          href="http://www.clintondavis.org" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="link to Digital-web solutions">
          <img class="icons DW_icons" 
            src="../../assets/image/logo_white.svg" 
            alt="Digital-Web-Solutions icon" />
          <img class="cd_icon spinning" 
            src="../../assets/image/color_icon__blue_favicon.svg"
            alt="Digital-Web-Solutions spinning icon" />
            </a>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
  height: 10vh;
  background:rgba(0, 0, 0, 0.596);
}
.DW_icons {
  margin-right: 0.5rem;
}
.cd_icon {
 height: 2.5rem;
}

.spinning {
  animation-name: spin;
  animation-duration: 20000ms;
  /* How long lasts 1 turn */
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
