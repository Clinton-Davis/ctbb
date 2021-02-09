<template>
  <div class="list__container">
    <ListCard />
  </div>
</template>

<script>
import ListCard from "../UI/ListCard.vue";
export default {
  components: { ListCard },
  data() {
    return {
      results: [],
    };
  },
  methods: {},
};
</script>

<style scoped></style>
