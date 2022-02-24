import * as actionTypes from './shoppingTypes';
  

const cartReducer = (
    state = {cartItems: JSON.parse(localStorage.getItem("cartItems") || "[]" )}, action) => {
    switch(action.type){
        case actionTypes.ADD_TO_CART:
            return {                
                cartItems: action.payload.cartItems
            }
        case actionTypes.REMOVE_FROM_CART:
            return {                
                cartItems: action.payload.cartItems
            }
        case actionTypes.CLEAR_CART:
            return {                
                cartItems: []
            }
        default :
            return state;
    }
};

export default cartReducer;