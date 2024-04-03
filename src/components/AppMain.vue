
<script>
import { state } from "../state.js";

export default {
  name: 'AppMain',

  data() {
    return {
      state,
    }
  },

  mounted() {
    this.state.getData('https://api.themoviedb.org/3/search/movie?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&query=mamma')
    console.log(state.movies);
  }
}
</script>


<template>
  <div>
    <!-- <h1>{{state.movies[0]}}</h1> -->
  </div>
</template>


<style scoped></style>
