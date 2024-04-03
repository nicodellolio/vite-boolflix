
<script>
import state from "../state";

export default {
  name: 'AppMain',

  data() {
    return {
      state,
    }
  },

  mounted() {
    this.state.getProducts('https://api.themoviedb.org/3/search/movie?api_key=dac5f4cfb17fc8dc2333867ac5b06c0b&original')
  }
}
</script>


<template>
  <div>
    <h1>Hello World</h1>
  </div>
</template>


<style scoped></style>
