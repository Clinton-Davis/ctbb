<template>
  <div class="list__container">
    <ListCard
      v-for="tour in selectedList"
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
  created() {
    this.loadActivities();
  },

  computed: {
    selectedList() {
      const items = this.$store.getters["activites/loadActivities"];
      return items;
    },
  },
  methods: {
    loadActivities() {
      this.$store.dispatch("activites/loadActivities");
    },
  },
};
</script>

<style scoped>
.list__container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
</style>
