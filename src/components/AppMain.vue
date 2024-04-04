<script>
import { state } from "../state.js";
import { countries } from "../countries.js"

export default {
  name: 'AppMain',

  data() {

    return {
      state,
      countries,
      poster_base: 'https://image.tmdb.org/t/p/w342',
      ratingString: ''
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
    let ratingString = '';
        let rating = Math.ceil(movie.vote_average / 2);
        for (let i = 1; i <= rating; i++) {
            ratingString += '<i class="fa-solid fa-star" aria-hidden="true"></i>';
        }
        if (rating - parseInt(rating) === 0.5) {
            ratingString += '<i class="fa-regular fa-star" aria-hidden="true"></i>';
        }
        rating = Math.ceil(rating)

        for (let i = (rating); i < 5; i++) {
            ratingString += '<i class="fa-regular fa-star" aria-hidden="true"></i>';
        }
  }
}
</script>


<template>

  <header>

    <div class="searchbox">
      
      <input type="text" v-model="this.state.searchingText" @keypress.enter="searchMovie(url)">
      <button @click="searchMovie(url)"><i class="fa fa-search" aria-hidden="true"></i></button>
      
    </div>
    
  </header>
  <main>

    <div class="movies">
      
      <ul>
        <li v-for="movie in state.movies">
          
          
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
          
          
          <section class="language-box">
            
            <div v-for="flag in countries.flags"></div>
            <img v-if="movie.original_language" style="width: 30px;" :src="`flags/4x3/${movie.original_language}.svg`"
            alt="">
            <h4 v-else>{{ movie.original_language }}</h4>
            <h4>{{ movie.media_type }}</h4>
            
          </section>
          
          <section class="rating">
            
            <div  class="rating-bad">

              {{ratingString}}

            </div>
            <!-- <div v-else-if="Math.ceil(movie.vote_average / 2) == 2" class="rating-not-bad">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
            </div>
            <div v-else-if="Math.ceil(movie.vote_average / 2) == 3" class="rating-ok">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
            </div>
            <div v-else-if="Math.ceil(movie.vote_average / 2) == 4" class="ratin-good">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
            </div>
            <div v-else-if="Math.ceil(movie.vote_average / 2) == 5" class="rating-very-good">
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-solid fa-star" aria-hidden="true"></i>
              <i class="fa-regular fa-star" aria-hidden="true"></i>
            </div> -->
            
          </section>
          
        </li>
        
      </ul>
    </div>
  </main>
  </template>


<style scoped></style>
