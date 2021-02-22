<template>
  <div id="map" ref="mapDiv">
    <LoadingSpinner v-if="isLoading" />
  </div>
</template>

<script>
import axios from "axios";
import LoadingSpinner from "../UI/LoadingSpinner.vue";
export default {
  components: { LoadingSpinner },
  props: ["googleId", "getUserLocation"],
  data() {
    return {
      Google_api_key: process.env.VUE_APP_GOOGLE_MAPS_API_KEY,
      isLoading: false,
      Data: null,
    };
  },
  mounted() {
    //* Calling the Map-details with GoogleId
    this.isLoading = true;
    const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?key=${this.Google_api_key}&place_id=${this.googleId}`;
    axios
      .get(URL)
      .then((response) => {
        if (response.data.error_message) {
          this.error = response.data.error_message;
        } else {
          const place = response.data.result;
          return place;
        }
      })
      //* Getting the Data from responce
      .then((place) => {
        console.log(place);
        const data = {
          lat: place.geometry.location.lat,
          lng: place.geometry.location.lng,
          Address: place.formatted_address,
          Phone: place.international_phone_number,
          name: place.name,
          rating: place.rating,
          website: place.website,
          total_rating: place.user_ratings_total,
        };
        this.Data = data;

        //**Initialise Map*/
        let map = new window.google.maps.Map(this.$refs["mapDiv"], {
          center: new window.google.maps.LatLng(data.lat, data.lng),
          zoom: 15,
          mapTypeId: "hybrid",
          mapTypeControl: false,
        });
        //**Initialise InfoWindow*/
        const infoWindow = new window.google.maps.InfoWindow();
        let marker = new window.google.maps.Marker({
          position: new window.google.maps.LatLng(data.lat, data.lng),
          map: map,
        });
        this.Marker = marker;
        //**Populate InfoWindow */
        if (
          this.data.name === "Kalk Bay" ||
          this.data.name === "Constantia" ||
          this.data.name === "Bo-Kaap"
        ) {
          infoWindow.setContent(
            `<div class="info_Header"><h2>${this.Data.name}</2h></div>
            <div class="info_Data"><h5>Address: ${this.Data.Address}</h5><div>
            `
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
        } else {
          infoWindow.setContent(
            `<div class="info_Header"><h2>${this.Data.name}</2h></div>
            <div class="info_Data"><h5>Address: ${this.Data.Address}</h5><div>
            <div v-if="noPhone" class="info_Data"><h5>Phone: ${this.Data.Phone}</h5><div>
            <div class="info_Data"><h5>Ratings: ${this.Data.rating} /5 <small>Total Ratings ${this.Data.total_rating}</small></h5><div>
            <a class="info_Data"> <h5>WebSite: ${this.Data.website}</a>`
          );
          infoWindow.open(map, marker);
          this.isLoading = false;
          console.log("Got here");
        }
      })
      .catch((error) => {
        this.error = error.message;
      });
  },
};
</script>

<style scoped>
#map {
  background: rgb(255, 255, 255);
  width: 50%;
  height: 25rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 20px;
  color: black;
}
</style>
