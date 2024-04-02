let initialState={
    id:'',
    password:'',
    authenticate:false
};

function authenticateReducer(state=initialState, action) {
    let {type, payload} = action;

    // 새로운 행동지침서
    switch(type){
        case "LOGIN_SUCCESS":
            console.log("zzz");
            return {...state, id:payload.id, password:payload.password, authenticate:true};
        default:
            return {...state};
    }
}

export default authenticateReducer;