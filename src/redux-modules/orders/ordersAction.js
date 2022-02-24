import { CREATE_ORDER, CLEAR_ORDER, GET_ORDER } from "./ordersTypes";
import { API_URL } from "../../utils/public";

export const createOrder = (order,userdetails,token, userid) => (dispatch) => {


        if(token)
        {
            fetch(API_URL + "/api/orders", {
                method: "POST",
                headers: {"Content-Type": "application/json", "authorization": `Bearer ${token}` },
                body: JSON.stringify({order, userdetails, userid})
                
            }).then(res => res.json()).then(data => {
                
                if(data.error)
                {
                    console.log(data.error)
                    alert("Please login again to Place order");
                }
                else
                {
                    dispatch({
                        type: CREATE_ORDER,
                        payload:  {
                            order: data,
                            userdetails: userdetails
                        }
                    })
                }
                
            })

        }
        else
        {
            alert("Please login to Place order");
        }
        
    
};

export const clearOrder = () => (dispatch) => {
    dispatch({ type: CLEAR_ORDER})
}

export const getorders = (userid, token) => async (dispatch) => {

    await fetch(API_URL + "/api/orders/getorders/"+userid, {
        headers: {"Content-Type": "application/json", "authorization": `Bearer ${token}` },
    }).then(res => res.json()).then(data => {
        if(data.error)
        {
            alert("Please login again");
        }
        else
        {
            dispatch({
                type: GET_ORDER,
                payload: data,
            })
        }
    });
    
    
};

