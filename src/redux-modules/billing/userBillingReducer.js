import { CAPTURE_USER_DETAILS } from "./userBillingType" 

export const userBillingReducer = (state ={}, action) => {
    switch(action.type){
        case CAPTURE_USER_DETAILS:
            return { 
                userdetails : action.payload}
        default:
            return state
    }
};

