<script>
import { state } from "../state.js";

export default {
  name: 'AppMain',

  data() {
    return {
      state,
      movie_flag: null,
    }
  },
  methods: {
    getMovie(url) {
      this.state.callApi(url)
    },
    searchMovie() {
      this.getMovie(`https://api.themoviedb.org/3/search/movie?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&query=${this.state.searchingText}`)
    },
    languagePick(){
      flag = `flags/1x1/${movie.original_language}.svg`
    }
  },
  mounted() {
    this.state.getFlags('http://localhost:3000/flags')
  }

}
</script>


<template>
  <div class="searchbox">
    
    <input type="text" v-model="this.state.searchingText" @keypress.enter="searchMovie(url)">
    <button @click="searchMovie(url), languagePick()"><i class="fa fa-search" aria-hidden="true"></i></button>
    
  </div>

  <div class="movies">
    <!-- <ul>
      <li v-for="flag in state.flags">
        <img style="width: 50px;" :src="flag.flag_1x1" alt="">
      </li>
    </ul> -->

    <ul>
      <li v-for="movie in state.movies">
        <h3>
          {{ movie.title }}
        </h3>
        <aside>({{ movie.original_title }})</aside>

        <div class="language-box">
          <div v-for="flag in state.flags">{{ flag }}</div>
          <img :src="movie_flag" alt="">
          <!-- <h4 v-else>{{ movie.original_language }}</h4> -->
        </div>

        <h4>{{ parseInt(movie.vote_average / 2) }}</h4>
      </li>

    </ul>
  </div>
</template>


<style scoped></style>

<!-- flag.code === it 
    movie.orginal_title === it -->
