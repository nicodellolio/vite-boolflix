import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    data() {
        return {
            movies: [],
            searchingText: '',
        }
    },
    callApi(url) {
        axios
        .get(url)
        .then(response => {
            this.movies = response.data.results
            })

    }
})
