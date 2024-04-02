// reducer 합치기
import { combineReducers } from "redux";
import authenticateReducer from "./authenticateReducer";
import productReaducer from "./productReaducer";

// 객체형태
export default combineReducers({
    auth:authenticateReducer,
    product:productReaducer
});