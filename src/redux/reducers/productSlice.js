import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState = {
    productList:[],
    selectedItem:null,
    isLoading: false,
    error: null,
};

export const fetchProducts = createAsyncThunk('product/fetchAll', async(searchQuery, thunkApi) => {
    try{
        let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json(); // 바로 리턴때려주면 알아서 처리함.
    } catch(error) {
        thunkApi.rejectWithValue(error.message);
    }
});

// function productReaducer(state=initialState, action){
//     let { type, payload } = action;
//     switch(type){
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, productList: payload.data};
//         case "GET_SINGLE_PRODUCT_SUCCESS":
//             return {...state, selectedItem: payload.data};
//         default: // 항상 switch는 default값 잊지말기.
//             return {...state};
//     }
// }

// export default productReaducer;


//상세품목 redux-toolkit
export const fetchDetailProducts = createAsyncThunk(
    'product/fetchDetail', 
    async (id, thunkApi)=>{
        try {
            let url = `https://my-json-server.typicode.com/ceunnseo/react4/products/${id}`;
            let response = await fetch(url);
            let data = await response.json();
            console.log("fetchDetail", data)
            return data; //promise를 리턴해준다.
        } catch(error) {
            console.log("fetch Detail error", error.message);
            thunkApi.rejectWithValue(error.message);
        }
})




const productSlice = createSlice({
    name: "product",
    initialState,
    // 동기 친구들
    reducers: { // 객체
        getSingleProduct(state, action){
            state.selectedItem = action.payload.data;
        },
        getAllProducts(state, action) {
            state.productList = action.payload.data;
        },
    },
    // 비동기인 친구들
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.isLoading = true; // 로딩스피너 보여야 함.
        })
        .addCase(fetchProducts.fulfilled, (state, action) => {
            state.isLoading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchDetailProducts.pending, (state) => {
            state.isLoading = true
        }) // 데이터가 오는 중
        .addCase(fetchDetailProducts.fulfilled, (state, action)=> {
            state.isLoading = false
            state.selectedItem = action.payload;
        }) // 데이터를 성공적으로 받음
        .addCase(fetchDetailProducts.rejected, (state, action)=>{
            state.isLoading = false
            state.error = action.payload
        });
    }
});

// console.log("Hi", productSlice);
export default productSlice.reducer;
export const productActions = productSlice.actions;