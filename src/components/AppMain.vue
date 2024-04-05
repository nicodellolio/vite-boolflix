<script>
import { state } from "../state.js";
import { countries } from "../countries.js"

import AppHeader from "./AppHeader.vue";
import mediaCard from "./mediaCard.vue";


export default {
  name: 'AppMain',

  components:{
    mediaCard,
  },

  data() {

    return {
      state,
      countries,
    }
  },

  methods:{
    searchMovie() {
      this.getMovie(`https://api.themoviedb.org/3/search/multi?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&query=${this.state.searchingText}`)
      
    },
    getMovie(url) {
      this.state.callApi(url)
    },
  },
  mounted() {
    this.getMovie(`https://api.themoviedb.org/3/trending/all/week?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b`)
  }
}
</script>


<template>

  <div class="divider"></div>

  <main>
    <mediaCard />
  </main>

  <div class="divider"></div>
  
</template>


<style scoped></style>
