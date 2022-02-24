import { CLEAR_ORDER,ERROR_ORDER, GET_ORDER, CREATE_ORDER } from "./ordersTypes"

export const orderReducer = (state ={}, action) => {
    switch(action.type){
        case CREATE_ORDER:
            return {
                order: action.payload.order,
                billingdetails: action.payload.userdetails,
                };
                
        case CLEAR_ORDER:
            return  { 
                order: null,
                billingdetails: null
            };
        case GET_ORDER : {
            return {
                ...state,
                myorders : action.payload
            }
        }
        case ERROR_ORDER: 
        return {
            order: "ERROR",
            ...state
        }
        default:
            return state
    }
};

