<template>
  <div class="list__container">
    <ListCard
      v-for="tour in loadActivities"
      :key="tour.id"
      :name="tour.name"
      :info="tour.info"
      :category="tour.category"
      :src="tour.imageUrl"
      @click="getTourDetails"
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
  },
  methods: {
    loadTours() {
      this.$store.dispatch("activites/loadActivities");
    },
    getTourDetails() {},
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
