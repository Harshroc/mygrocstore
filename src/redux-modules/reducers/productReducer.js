import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY, ORDER_PRODUCTS_BY_PRICE } from "../products/productTypes";

export const productsReducers = (state = {}, action) => {
    switch(action.type){
        case FETCH_PRODUCTS:
            return { 
                items: action.payload,
                filteredItems : action.payload
            }
            case FILTER_PRODUCTS_BY_CATEGORY:
                return {
                    ...state,
                    cateogry: action.payload.cateogory,
                    filteredItems: action.payload.items,
                }
                case ORDER_PRODUCTS_BY_PRICE:
                    return {
                        ...state,
                        sort: action.payload.sort,
                        filteredItems: action.payload.items
                    }
        default:
            return state;
    
    }
};

