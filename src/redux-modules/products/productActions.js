import { FETCH_PRODUCTS, FILTER_PRODUCTS_BY_CATEGORY, ORDER_PRODUCTS_BY_PRICE } from "./productTypes";
import { API_URL } from "../../utils/public";

export const fetchProducts = () => async (dispatch) => {
    const res = await fetch(API_URL + "/api/getproducts");
    const data = await res.json();
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data,
    })
};

export const filterProductByCategory = (products, category) => (dispatch) => {
    
    dispatch({
        type: FILTER_PRODUCTS_BY_CATEGORY,
        payload: {
            category: category,
            items: category.length === 0 ? products : 
            products.filter((el) => {
                return category.some((f) => {
                  return f === el.productCategory.categoryName;
                });
            })
        }
    }) 
};

export const sortProductsByPrice = (filteredProducts, sort) => (dispatch) => {
    
    const sortedProducts = filteredProducts;
    
    if(sort === ""){
        sortedProducts.sort((a,b) => (a._id > b._id ? 1 : -1));
    }
    else
    {
        sortedProducts.sort((a,b) => (
            sort === "lowest" ? a.productRsp > b.productRsp ? 1 : -1 : a.productRsp > b.productRsp ? -1 : 1
        ))
    }
    dispatch({
        type: ORDER_PRODUCTS_BY_PRICE,
        payload : {
            sort: sort,
            items: sortedProducts,
        }
    })
};