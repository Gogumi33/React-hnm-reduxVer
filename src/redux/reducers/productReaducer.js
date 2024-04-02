let initialState = {
    productList:[],
    selectedItem:null,
}

function productReaducer(state=initialState, action){
    let { type, payload } = action;
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList: payload.data};
        case "GET_SINGLE_PRODUCT_SUCCESS":
            return {...state, selectedItem: payload.data};
        default: // 항상 switch는 default값 잊지말기.
            return {...state};
    }
}

export default productReaducer;