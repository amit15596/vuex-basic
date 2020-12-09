const state = {
    message:"Wel-Come to Products Page",
    product : [
        {
            id:1,
            name:"I phone 5s",
            price:25000
        },
        {
            id:2,
            name:"I phone 11",
            price:115000
        },
        {
            id:3,
            name:"I phone 12",
            price:125000
        }
    ]
};

const mutations =  {
    addProduct(state,payload){
        state.product.push(payload)
    }
};

const actions = {
    addProduct({commit} ){
        commit('addProduct', { id:4, name:"i phone 7s", price:55000 })
    }

};

const getters = {
    countProduct(state){
        return state.product.length;
    },
    getProducts(state){
        return state.product;
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions,
    getters
}