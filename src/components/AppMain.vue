
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
    this.state.getData('https://api.themoviedb.org/3/search/movie?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&query=the+matrix')
  }
}
</script>


<template>
  <div>
    <ul>
      <li v-for="movie in state.movies">
        <h5>
          {{ movie.title }}
        </h5>
        <img :src="movie.poster_path" alt="">
        <p>{{ movie.release_date }}</p>
      </li>
          
    </ul>
  </div>
</template>


<style scoped></style>
