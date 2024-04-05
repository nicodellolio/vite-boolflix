<script>
import { state } from '../state';

export default {
  name: 'AppFooter',

  data() {
    return {
      state
    }
  }
}

</script>

<template>


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

</template>


<style lang="css">
  @import '../assets/css/partials/_footer.css';
</style>
