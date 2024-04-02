// 기능별로 redux action함수들을 다 나누어 만든다.

function login(id, password){
    return (dispatch, getState) => {
        dispatch({type:"LOGIN_SUCCESS", payload:{id, password}});
    };
}

export const authenticateAction = {login};