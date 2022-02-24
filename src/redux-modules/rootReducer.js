import { combineReducers } from "redux";
import { productsReducers } from "./reducers/productReducer";
import { categoriesReducers } from "./reducers/categoriesReducer";
import shopReducer from './shopping/shoppingReducer';
import { orderReducer } from "./orders/ordersReducers";
import { userBillingReducer } from "./billing/userBillingReducer";
import { userReducer } from "./users/userReducer";

const rootReducer = combineReducers({
    products : productsReducers,
    categories : categoriesReducers,
    cart: shopReducer,
    order: orderReducer,
    billing: userBillingReducer,
    userInfo : userReducer
});

export default rootReducer;