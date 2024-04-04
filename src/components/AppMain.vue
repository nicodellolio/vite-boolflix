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
    myRating(vote_average){
      let rating = Math.ceil(vote_average / 2);
      let ratingString = '';

      for (let i = 1; i <= rating; i++) {
        ratingString += '★';
      }

      if (rating - parseInt(rating) === 0.5) {
        ratingString += '☆';
      }
      rating = Math.ceil(rating)

      for (let i = (rating); i < 5; i++) {
        ratingString += '☆';
      }

      return ratingString;
    }
  },
  mounted() {

  }
}
</script>


<template>

  <header>
    <img class="logo" src="/public/logo.png" alt="">
    <div class="searchbox">

      <input placeholder='what are you watching today?' type="text" v-model="this.state.searchingText"
        @keypress.enter="searchMovie(url)">
      <button @click="searchMovie(url)"><i class="fa fa-search" aria-hidden="true"></i></button>

    </div>

  </header>
  <main>

    <div class="container movies">
      <div class="row">
        <div v-for="movie in state.movies" class="col">
          <div class="card">

            <div class="poster-box">
              <img v-if="movie.poster_path != null" :src="poster_base + movie.poster_path" alt="">
              <img v-else src="/noimage.png" alt="">
            </div>

            <div class="info">

              <h3 class="title" v-if="movie.media_type == 'movie'">
                {{ movie.title }}
              </h3>
              <h3 class="title" v-else-if="movie.media_type == 'tv'">
                {{ movie.name }}
              </h3>

              <aside v-if="movie.media_type == 'movie'">({{ movie.original_title }})
              </aside>
              <aside v-else-if="movie.media_type == 'tv'">({{ movie.original_name }})
              </aside>


              <section class="language-box">

                <div v-for="flag in countries.flags"></div>
                <img v-if="movie.original_language" :src="`flags/4x3/${movie.original_language}.svg`" alt="">
                <h4 v-else>{{ movie.original_language }}</h4>

              </section>

              <section class="rating">

                {{ myRating(movie.vote_average) }}

              </section>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>
</template>


<style scoped></style>
