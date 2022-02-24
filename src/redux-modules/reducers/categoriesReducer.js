import { FETCH_CATEGORIES } from "../categories/categoryType"; 

export const categoriesReducers = (state = {}, action) => {
    switch(action.type){
        case FETCH_CATEGORIES:
            return { items: action.payload }
        default:
            return state;
    
    }
}