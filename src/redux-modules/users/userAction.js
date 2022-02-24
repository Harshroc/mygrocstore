import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAIL, USER_LOGOUT } from "./userTypes";
import { API_URL } from "../../utils/public";
export const signin = (userEmail, userPassword) => async (dispatch) => {

    dispatch( {type: USER_SIGNIN_REQUEST, payload: { userEmail, userPassword}});
    try {
        await fetch(API_URL + '/api/users/userlogin', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({ userEmail, userPassword })
           }).then(res => res.json()).then(datas => {
               if(datas.error)
               {
                dispatch({ type: USER_SIGNIN_FAIL, payload: datas.error});
               }
               else
               {
                dispatch({ type: USER_SIGNIN_SUCCESS, payload: datas});
                localStorage.setItem("userinformation", JSON.stringify(datas));
               }
            
        })
        
    } catch (error) {
        dispatch({ type: USER_SIGNIN_FAIL, payload: error.message});
    } 

}

export const logout = () => (dispatch) => {
    dispatch({
        type: USER_LOGOUT,
    })
    localStorage.clear("userinformation");  
};