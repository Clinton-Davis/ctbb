<template>
  <teleport to="body">
    <div v-if="open" @click="$emit('close')" class="backdrop">
      <transition name="modal">
        <dialog open v-if="open">
          <header>
            <h3>
              Today Weather Report
            </h3>
          </header>
          <div>
            <slot name="temp"></slot>
            <br />
          </div>
          <div>
            <slot name="wind"></slot>
            <br />
          </div>
          <div>
            <slot name="cloud"></slot>
            <br />
          </div>
          <div>
            <small>Click Anywhere To Close</small>
          </div>
        </dialog>
      </transition>
    </div>
  </teleport>
</template>

<script>
export default {
  props: ["open"],
  emits: ["close"],
  methods: {
    tryClose() {
      if (this.fixed) {
        return;
      }
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
}

dialog {
  position: fixed;
  top: 20vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  border-radius: 12px;
  border: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 0;
  margin: 0;
  /* overflow: hidden; */
  background-color: rgba(255, 255, 255, 0.616);
  backdrop-filter: blur(5px);
  border: 1px white solid;
}

header {
  background-color: #0080f8;
  color: white;
  width: 100%;
  padding: 1rem;
  border-radius: 12px;
  text-align: center;
}

header h2 {
  margin: 0;
}

div {
  padding: 0.25rem;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

.modal-enter-active {
  transition: all 0.3s ease-out;
}

.modal-leave-active {
  transition: all 0.3s ease-in;
}

.modal-enter-to,
.modal-leave-from {
  opacity: 1;
  transform: scale(1);
}

@media (min-width: 768px) {
  dialog {
    left: calc(50% - 20rem);
    width: 40rem;
  }
}
</style>
