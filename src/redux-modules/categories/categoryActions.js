import { FETCH_CATEGORIES } from "./categoryType";
import { API_URL } from "../../utils/public";

export const fetchCategories = () => async (dispatch) => {
    const res = await fetch(API_URL + "/api/getcategories");
    const data = await res.json();
    dispatch({
        type: FETCH_CATEGORIES,
        payload: data,
    })
}