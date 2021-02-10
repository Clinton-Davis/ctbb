<template>
  <div class="list__container">
    <ListCard
      v-for="tour in filteredList"
      :key="tour.id"
      :name="tour.name"
      :info="tour.info"
      :category="tour.category"
      :src="tour.imageUrl"
    />
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
  computed: {
    filteredList() {
      const things = this.$store.getters["activites/getActivities"];
      console.log(things);
      return things;
    },
  },
  methods: {},
};
</script>

<style scoped>
.list__container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
