// 1. Import the reactive function from vue
import { reactive } from 'vue';

// 2. export a constant where you call the reactive function 
// inside the reactive function you need to pass a plain js object literal.

// Global state here
export const state = reactive({
    message: 'Hello Reactive World',
    
    getProducts(url){
        axios.get(url)
        .then(response => {
            this.products = response.data
        })
    
    }
})
