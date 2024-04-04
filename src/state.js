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
        axios.get(url)
            .then(response => {
                this.movies = response.data.results
                // console.log(this.movies);
            })
    },
    getFlags(url){
        axios.get(url)
        .then(response => {
            this.flags = response.data
        })
    
    }
})
