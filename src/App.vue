<script>
import { state } from './state';
import { countries } from './countries';

import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppMain,
    AppFooter
  },

  data() {

    return {
      state,
      countries,
      db_key: 'dac5f4cfb17fc8dc2333867ac5b06c0b',
      db_base_api: 'https://api.themoviedb.org/3',
    }
  },

  methods:{
    getMovie(url) {
      this.state.callApi(url)
    },
    searchMovie() {
      this.getMovie(`${this.db_base_api}/search/multi?api_key=${this.db_key}&query=${this.state.searchingText}`)
      // this.getActors(`${this.db_base_api}/movie/${state.movie.orginal_title}?api_key=${this.db_key}&language=en`)
    },
    getActors(url){
      this.state.callApi_actors(url)
    },
  },
  mounted() {
    this.getMovie(`https://api.themoviedb.org/3/trending/all/week?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b`)
    console.log(state.movie);
  }
}
</script>

<template>
  <AppHeader @search="searchMovie"/>
  <AppMain />
  <AppFooter />
</template>


<style>

</style>
