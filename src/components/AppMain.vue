
<script>
import { state } from "../state.js";

export default {
  name: 'AppMain',

  data() {
    return {
      state,
      searchingText: '',
    }
  },
  methods: {
    getMovie(url){
      this.state.getData(url)
    },
    searchMovie(){
      this.getMovie(`https://api.themoviedb.org/3/search/movie?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&query=${this.searchingText}`)
    }
  },

  mounted() {
    this.getMovie('https://api.themoviedb.org/3/search/movie?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b')
  }
}
</script>


<template>
  <div class="searchbox">
    <input type="text" v-model="searchingText">
    <button @click="searchMovie(url)"><i class="fa fa-search" aria-hidden="true"></i></button>
  </div>

  <div class="movies">
    <ul>
      <li v-for="movie in state.movies">
        <h3>
          {{ movie.title }}
        </h3>
        <h5>{{ movie.original_title }}</h5>
        <h4>{{ movie.original_language }}</h4>
        <h4>{{ parseInt(movie.vote_average / 2)}}</h4>
      </li>
          
    </ul>
  </div>
</template>


<style scoped></style>
