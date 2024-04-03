import { reactive } from 'vue';
import axios from 'axios';

export const state = reactive({
    data(){
        return{
            movies: [],
        }
    },
    getData(url){
        axios.get(url)
        .then(response => {
            this.movies = response.data.results
            console.log(this.movies);
        })
    }
})
