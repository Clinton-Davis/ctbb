<template>
  <div class="container">
    <div class="form__wrapper">
      <div class="form-control">
        <div v-if="invalidInput" class="Error">
          <p>Error Please Check inputs</p>
        </div>
        <form @submit.prevent="submitForm">
          <div class="form-control">
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" v-model.trim="name" />
          </div>
          <div class="form-control">
            <label for="category">Category:</label>
            <select name="category" id="category" v-model="category">
              <option value="sight_seeing">Sight Seeing</option>
              <option value="adventure">Adventure</option>
              <option value="foodie">Foodie</option>
            </select>
          </div>
          <div class="form-control">
            <label for="name">Google Id:</label>
            <input
              type="text"
              name="google_id"
              id="google_id"
              v-model.trim="googleId"
            />
          </div>
          <div class="form-control">
            <label for="image">Image Url:</label>
            <input
              type="text"
              name="image"
              id="image"
              v-model.trim="imageUrl"
            />
          </div>
          <div class="form-control">
            <label for="name">Info:</label>
            <textarea rows="5" cols="70" name="info" id="info" v-model="info" />
          </div>
          <base-button>Add</base-button>
        </form>
        <!-- <div  class="success"></div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      category: "",
      googleId: "",
      imageUrl: "",
      info: "",
      invalidInput: false,
      error: null,
    };
  },
  methods: {
    submitForm() {
      if (
        this.name === "" &&
        this.category === "" &&
        this.googleId === "" &&
        this.imageUrl === "" &&
        this.info === ""
      ) {
        this.invalidInput = true;
        return;
      }
      this.invalidInput = false;
      this.error = null;

      fetch(
        "https://best-bits-1579528051004-default-rtdb.firebaseio.com/activities.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: this.name,
            category: this.category,
            googleId: this.googleId,
            imageUrl: this.imageUrl,
            info: this.info,
          }),
        }
      ).catch((error) => {
        console.log(error);
        this.error = error.message;
      });
      this.name = "";
      this.category = "";
      this.googleId = "";
      this.imageUrl = "";
      this.info = "";
    },
  },
};
</script>

<style scoped>
.container {
  min-height: 80vh;
  width: 100%;
  display: flex;
  justify-content: center;
}
.form__wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 50%;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
}
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}

.form-control {
  margin: 0.5rem 0;
}
.form-control.invalid input {
  border-color: red;
}
.form-control.invalid label {
  color: red;
}
.form-control.invalid p {
  color: red;
}
.clips {
  text-align: center;
  cursor: pointer;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}

input,
select {
  display: block;
  width: 100%;
  font: inherit;
  /* margin-top: 0.5rem; */
}
textarea {
  display: block;
}
select {
  width: auto;
  font-family: var(--Goldman);
}
label {
  font-family: var(--Goldman);
}
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}

button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
