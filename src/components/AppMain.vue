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
    },
  },
  mounted() {
    this.getMovie(`https://api.themoviedb.org/3/trending/all/week?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b`)
  }
}
</script>


<template>

  <header>
    <img class="logo" src="/logo.png" alt="">
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
          <div v-if="movie.media_type != 'person'" v-on:mouseenter="showInfo=true" v-on:mouseleave="showInfo=false" class="card">

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

              <textarea name="" id="overview" cols="32" rows="11">{{ movie.overview }}</textarea>


              <section class="language-box">

                <div v-for="flag in countries.flags"></div>
                <img v-if="movie.original_language" :src="`flags/4x3/${movie.original_language}.svg`" alt="">
                <h4 v-else>{{ movie.original_language }}</h4>

              </section>

              <section class="rating">

                {{ myRating(movie.vote_average) }}

              </section>

              <div class="type">{{ movie.media_type }}</div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </main>

  <div class="divider"></div>
  <footer>
    <h2>Subscribe Now</h2>
    <h3>Thousands of titles are waiting for you</h3>
    <button>TRY IT FOR FREE</button>

    <div class="credits">
      <div class="col-leftOne">
        <ul>
          <li>FAQ</li>
          <li>Investors relation</li>
          <li>How to watch Boolflix</li>
          <li>Company Info</li>
          <li>Legal Notes</li>
        </ul>
      </div>
      <div class="col-leftTwo">
        <ul>
          <li>Service Center</li>
          <li>Job Opportunity</li>
          <li>Use Condition</li>
          <li>Contact Us</li>
          <li>Only on Boolflix</li>
        </ul>
      </div>
      <div class="col-rightTwo">
        <ul>
          <li>Account</li>
          <li>Claim gift card</li>
          <li>Privacy</li>
          <li>Speed Test</li>
          <li>Adv Preferences</li>
        </ul>
      </div>
      <div class="col-rightOne">
        <ul>
          <li>Media Center</li>
          <li>Buy Gift Card</li>
          <li>Cookie Preferences</li>
          <li>Legal Garantee</li>
          <li>Created by Nico</li>
        </ul>
      </div>

    </div>
  </footer>
</template>


<style scoped></style>
