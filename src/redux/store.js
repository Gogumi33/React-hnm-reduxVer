import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import rootReducer from "./reducers/index.js";
import { composeWithDevTools } from "@redux-devtools/extension";

import { configureStore } from "@reduxjs/toolkit"; // 리덕스 툴킷.
import authenticateReducer from "./reducers/authenticateReducer.js";
import productReaducer from "./reducers/productSlice.js";

//let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

// combinereducer, thunk, applyMiddleware, composeWithDevtools 이 4가지 꼭 해줘야 쓸 수 있었음..
// 근데 redux toolkit은 이 4가지가 자동으로 커버가 된다는 것이다.

const store = configureStore({
    reducer: {
        auth:authenticateReducer,
        product:productReaducer
    }
})

export default store;