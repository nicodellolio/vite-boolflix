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
    }
  }
}
</script>

<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>


<style>

</style>
