export default {

    state: {
        category_list: [],
        // products_list: [],
    },
    getters: {
        categories(state){
            return state.category_list;
        },
        // productss(state){
        //     return state.products_list;
        // },
    },
    actions:{
        get_categoriess(data){
           axios.get('/category')
            .then(response => {
                // console.log(response)

                data.commit("get_cat_data",response.data.categories);

            })
            .catch( error => {console.log(error)})

        },
        // get_productsss(data){
        //    axios.get('/products_list')
        //     .then(response => {
        //         data.commit("get_product_data",response.data.products);

        //     })
        //     .catch( error => {console.log(error)})

        // },
    },
    mutations: {
        get_cat_data(state,data){
            state.category_list = data;
        },
        // get_product_data(state,data){
        //     state.products_list = data;
        // },
    }

}
