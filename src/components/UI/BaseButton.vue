<template>
  <button :class="mode">
    <slot></slot>
  </button>
</template>
<script>
export default {
  props: ["mode"],
};
</script>
<style scoped>
button {
  cursor: pointer;
  border-radius: 10px;
}
.full {
  letter-spacing: 0.1rem;
  font-family: var(--Goldman);
  color: #072ff7;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  min-width: 10rem;
  margin: 0 1rem;
  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  background: #e2e2e2; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#cedbe9+0,aac5de+17,6199c7+50,3a84c3+51,419ad6+59,4bb8f0+71,3a8bc2+84,26558b+100;Blue+Gloss */
}
.form {
  letter-spacing: 0.1rem;
  font-family: var(--Goldman);
  color: #072ff7;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  min-width: 10rem;

  box-shadow: 0px 10px 13px -7px #000000, 5px 5px 15px 5px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
  background: #e2e2e2; /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    #e2e2e2 0%,
    #dbdbdb 50%,
    #d1d1d1 51%,
    #fefefe 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e2e2e2', endColorstr='#fefefe',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#cedbe9+0,aac5de+17,6199c7+50,3a84c3+51,419ad6+59,4bb8f0+71,3a8bc2+84,26558b+100;Blue+Gloss */
}
button:hover {
  color: green;
}
button:active {
  transform: scale(0.8);
}
.small {
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  color: white;
  border: 1px white solid;
}
.small:hover {
  /* border-color: black; */
  color: white;
  box-shadow: 0px 10px 13px -5px #000000, 5px 5px 15px 3px rgba(0, 0, 0, 0);
  -webkit-box-shadow: 0px 10px 13px -7px #000000,
    5px 5px 15px 5px rgba(0, 0, 0, 0);
}
.hide {
  padding: 0.25rem 0.5rem;
  background-color: transparent;
  color: rgb(5, 0, 0);
}
.hide:hover {
  background-color: white;
  border: 1px white solid;
  color: #000000;
}

@media screen and (max-width: 600px) {
  .full {
    padding: 0.5rem 1rem;
    width: 90%;
    margin: 1rem 1rem;
  }
}
</style>
