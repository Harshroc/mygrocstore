import { USER_SIGNIN_REQUEST, USER_LOGOUT, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL } from "./userTypes";

const userReducer = ( 
    state = {userInfo : JSON.parse(localStorage.getItem("userinformation") || null )}, action) => {
    switch(action.type){
        case USER_SIGNIN_REQUEST:
            return { loading: true}
        case USER_SIGNIN_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case USER_SIGNIN_FAIL:
            return {loading: false, error: action.payload}
        case USER_LOGOUT: 
            return { loading : false, userInfo: null}    
        default: return state
    }
}

export { userReducer }