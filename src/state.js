import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    data() {
        return {
            movies: [],
            searchingText: '',
            db_base_api: 'https://api.themoviedb.org/3/search/multi?api_key=',
            personal_api_key: 'dac5f4cfb17fc8dc2333867ac5b06c0b'
        }
    },
    callApi(url) {
        axios
        .get(url)
        .then(response => {
            this.movies = response.data.results
        })
        .catch(err => {
            console.log(err);
            console.log(err.message);
        })

    }
})
