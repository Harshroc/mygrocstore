import { toast } from 'react-toastify';
import { CLEAR_CART, ADD_TO_CART, REMOVE_FROM_CART } from './shoppingTypes';

export const addToCart = (product) => (dispatch, getState) => {
    toast.configure();
    const notify = () => toast.success(product.productName + "has been added to cart", {autoClose: 2000,});
    const notifyDuplicate = () => toast.warn(product.productName + " was already there in the cart", {autoClose: 4000,});
    const cartItems = getState().cart.cartItems.slice();

    let alreadyExists = false;
    cartItems.forEach(x => {
        if(x._id === product._id)
        {
            alreadyExists = true;
            x.count++;
        }
    });
    if(!alreadyExists)
    {
        cartItems.push({...product, count: 1})
    }
    else
    {
        notifyDuplicate();
    }
    dispatch({
        type: ADD_TO_CART,
        payload: {
             cartItems
        }
    });
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    notify();
};


export const removeFromCart = (items, product) => (dispatch) => {
    toast.configure();
    const notifyDelete = () => toast.error(product.productName + "has been removed form cart", {autoClose: 2000,});
    const cartItems = items.slice().filter(
        x => x._id !== product._id
    );
    dispatch({
        type: REMOVE_FROM_CART,
        payload: {
            cartItems
        }
    })
    localStorage.setItem("cartItems",JSON.stringify(cartItems));
    notifyDelete();
};

export const clearCart = () => (dispatch) => {
    dispatch({
        type: CLEAR_CART,
    })
    localStorage.clear("cartItems");  
};





