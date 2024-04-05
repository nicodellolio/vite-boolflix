<script>
import { state } from '../state';

export default {
  name: 'AppHeader',

  data() {
    return {
      state
    }
  }
}

</script>

<template>
  
  <img class="logo" src="/logo.png" alt="">
  <div class="searchbox">

    <input placeholder='what are you watching today?' type="text" v-model="this.state.searchingText"
      @keypress.enter="$emit('search')">
    <button @click="$emit('search')"><i class="fa fa-search" aria-hidden="true"></i></button>

  </div>

</template>


<style lang="css">
@import '../assets/css/partials/_header.css';
</style>
