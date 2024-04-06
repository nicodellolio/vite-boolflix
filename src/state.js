import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    data() {
        return {
            movies: [],
            actors: [],
            searchingText: '',
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

    },
    callApi_actors(url) {
        axios
            .get(url)
            .then(response => {
                this.actors = response.data.results
                this.actors.length = 5
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            })
    }
})
