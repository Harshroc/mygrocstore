import React from 'react';
import { Grid } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import Footer from '../components/footer/Footer';
import { clearCart } from '../redux-modules/shopping/shoppingActions';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function OrderConfirmation() {

  const classes = useStyles();

  const order = useSelector((state) => state.order.order);


  const dispatcher = useDispatch();

  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container >
          <Grid item xs={12} textAlign="center">
            
            { !order ? <h2>Your do not have any orders. Please add items to cart and check out.</h2> : 
            <>
            <h2> {order ? order.message : ""} </h2> 
            <h3>Please find below Orders Details</h3>
            <h2>Order ID : {order.data.userOrderId}</h2>
            <h2>Total Amount - Rs {order.data.orderAmount}/-</h2>
            <div><table style={{marginLeft: "auto",marginRight:"auto", border:"1px solid green"}}>
                <th>ProductName</th><th>Quantity</th>
            {order.data.orderProducts.map(x => {
                return <tr><td>{x.title}</td><td>{x.count}</td></tr>
            }
                
            )}</table></div>
            <h2>Payment Mode - {order.data.orderPaymentMethod}/-</h2>
            {dispatcher(clearCart())} 
            </>
            
            }
          </Grid>
        </Grid>

          <Grid item container>
            <Footer />
          </Grid>
          
        </Grid>
        
      
      </Grid>
    
    
  );
}

export default OrderConfirmation;
