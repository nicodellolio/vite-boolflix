<script>
import { state } from "../state.js";
import { countries } from "../countries.js"
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
