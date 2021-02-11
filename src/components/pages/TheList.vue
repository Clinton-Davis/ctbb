<template>
  <div class="list__container">
    <ListCard
      v-for="tour in loadActivities"
      :key="tour.id"
      :name="tour.name"
      :info="tour.info"
      :category="tour.category"
      :src="tour.imageUrl"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListCard from "../UI/ListCard.vue";
export default {
  components: { ListCard },
  data() {
    return {
      results: [],
    };
  },
  created() {
    this.loadTours();
  },

  computed: {
    ...mapGetters("activites", ["loadActivities"]),

    // selectedList() {
    // const items = this.$store.getters["activites/loadActivities"];
    // return items;
    // },
  },
  methods: {
    loadTours() {
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
