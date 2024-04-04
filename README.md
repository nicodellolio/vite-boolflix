# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Vue - Official](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (previously Volar) and disable Vetur

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
