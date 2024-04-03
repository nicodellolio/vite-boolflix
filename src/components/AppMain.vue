<script>
import { state } from "../state.js";

export default {
  name: 'AppMain',

  data() {
    return {
      state,
      searchingText: '',
      test: true
    }
  },
  methods: {
    getMovie(url) {
      this.state.getData(url)
    },
    searchMovie() {
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
        <aside>({{ movie.original_title }})</aside>

        <div class="language-box">
          <h4 v-if="movie.original_language == 'en'">ENGLISH</h4>
          <h4 v-else-if="movie.original_language == 'ja'">JAPAN</h4>
          <h4 v-else-if="movie.original_language == 'id'">INDONESIAN</h4>
          <h4 v-else-if="movie.original_language == 'hi'">HINDI</h4>
          <h4 v-else-if="movie.original_language == 'es'">SPANISH</h4>
          <h4 v-else-if="movie.original_language == 'it'">ITALIAN</h4>
          <h4 v-else-if="movie.original_language == 'fr'">FRENCH</h4>
          <h4 v-else-if="movie.original_language == 'pt'">PORTUGUESE</h4>
          <h4 v-else-if="movie.original_language == 'de'">GERMAN</h4>
          <h4 v-else-if="movie.original_language == 'zh'">CHINESE</h4>
          <h4 v-else-if="movie.original_language == 'ko'">KOREAN</h4>
          <h4 v-else-if="movie.original_language == 'tr'">TURKISH</h4>
          <h4 v-else-if="movie.original_language == 'ru'">RUSSIAN</h4>
          <h4 v-else-if="movie.original_language == 'cs'">CZECH</h4>
          <h4 v-else>{{ movie.original_language }}</h4>

        </div>

        <h4>{{ parseInt(movie.vote_average / 2) }}</h4>
      </li>

    </ul>
  </div>
</template>


<style scoped></style>
