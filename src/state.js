import { reactive } from 'vue';

export const state = reactive({
    message: 'Hello Reactive World',
    
    getProducts(url){
        axios.get(url)
        .then(response => {
            this.products = response.data
        })
    
    }
})
