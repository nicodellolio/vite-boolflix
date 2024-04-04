<script>
import { state } from "../state.js";
import { countries } from "../countries.js"

export default {
  name: 'AppMain',

  data() {

    return {
      state,
      countries,
      poster_base: 'https://image.tmdb.org/t/p/w342'
    }
  },
  methods: {
    getMovie(url) {
      this.state.callApi(url)
    },
    searchMovie() {
      this.getMovie(`https://api.themoviedb.org/3/search/multi?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&query=${this.state.searchingText}`)
    },

  },
  mounted() {
  }

}
</script>


<template>

  <div class="searchbox">

    <input type="text" v-model="this.state.searchingText" @keypress.enter="searchMovie(url)">
    <button @click="searchMovie(url)"><i class="fa fa-search" aria-hidden="true"></i></button>

  </div>

  <div class="movies">

    <ul>
      <li v-for="movie in state.movies">
        <div class="box">


          <div class="poster-box">
            <img v-if="movie.poster_path != null" :src="poster_base + movie.poster_path" alt="">
            <img style="width: 342px;" v-else src="/noimage.png" alt="">
          </div>

          <h3 v-if="movie.media_type == 'movie'">
            {{ movie.title }}
          </h3>
          <h3 v-else-if="movie.media_type == 'tv'">
            {{ movie.name }}
          </h3>

          <aside v-if="movie.media_type == 'movie'">({{ movie.original_title }})
          </aside>
          <aside v-else-if="movie.media_type == 'tv'">({{ movie.original_name }})
          </aside>


          <div class="language-box">

            <div v-for="flag in countries.flags"></div>
            <img v-if="movie.original_language" style="width: 30px;" :src="`flags/4x3/${movie.original_language}.svg`"
              alt="">
            <h4 v-else>{{ movie.original_language }}</h4>
            <h4>{{ movie.media_type }}</h4>

          </div>

          <h4>{{ Math.ceil(movie.vote_average / 2) }}</h4>
        </div>
      </li>

    </ul>
  </div>
</template>


<style scoped></style>
