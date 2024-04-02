// 여기에 middleware 함수(함수를 다시 리턴해줌)들 쫙 만들어두기.
// 원래 있던 함수들 싹 다 이사

function getProducts(searchQuery){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products?q=${searchQuery}`;
        let response = await fetch(url);
        let data = await response.json();
        
        // console.log(data); // 이제 잘 되는것 확인했으므로 reducer에 보내주기.
        dispatch({type:"GET_PRODUCT_SUCCESS", payload:{data}});
    }
}

function getProductDetail(id){
    return async (dispatch, getState) => {
        let url = `https://my-json-server.typicode.com/Gogumi33/React-h-m-shopping/products/${id}`;
        let response = await fetch(url);
        let data = await response.json();

        dispatch({type:"GET_SINGLE_PRODUCT_SUCCESS", payload:{data}});
    }
}

// 다른 파일에 있는 것을 받으려면 항상 export 필수!!!
export const productAction={getProducts, getProductDetail}; // 미들웨어 함수가 여러개가 될 거라 객체에 담아준다.
// const 달아주는것 잊지말기.