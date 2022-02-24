import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';

const Myorders = () => { 
    
    const myorderdata = useSelector((state) =>  state.order ? state.order.myorders : null);
    const myordererror = useSelector((state) =>  state.order ? state.order.error : null);
    const token = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.token : null);
   

      if(myordererror)
      {
          alert("Please logout and login");
      }

      const handleCancel = (event,tokens, orderid) => {
        event.preventDefault();
        
        fetch('/api/orders/cancelorder/'+orderid, {
          method: 'GET',
          headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8', "authorization": `Bearer ${tokens}`},
         })
         .then(res => res.json())
         .then(
           (result) =>{
             
              if(result.message){
                alert('Order Cancelled');
                window.location.reload(false);
              }
              else{
                alert(result.error);
              }
            }
          )
      };
    
 
    return (
        <Grid container>
            <Grid container item pt={2} pb={2} pl={2} pr={2} xs={12} md={12}>
            <table id="example" style={{border: "1px solid black", borderCollapse: "collapse", width: "100%"}}>
                        <thead>
                            <tr style={{border: "1px solid black", borderCollapse: "collapse"}}>
                                <th>Order ID</th>
                                <th>Products</th>
                                <th>Order Date</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            
                           {!myorderdata ? <tr><td colSpan={5}>Loading</td></tr> : myorderdata.map(element => (
                                <tr key={element._id}>
                                    <td>{element.userOrderId}</td>
                                    <td>{element.orderProducts.map(data => (
                                        <span>{data.title}X{data.count}<br/></span>
                                    ))}</td>
                                    <td>{element.createdAt.slice(0,10)}</td>
                                    <td>Rs. {element.orderAmount} /-</td>
                                    <td>{element.orderStatus}</td>
                                    <td>{element.orderStatus === "cancelled" ? "Cancelled" : <button onClick={(e) => handleCancel(e, token, element._id)} >Cancel</button>}</td>
                                </tr>
                           )) } 

                            
                            
                          </tbody>
                        
                    </table>

            </Grid>
        </Grid>
    )
}


export default Myorders;