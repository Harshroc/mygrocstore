import { Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import React from 'react';
import { removeFromCart } from "../../redux-modules/shopping/shoppingActions";
import { createOrder } from "../../redux-modules/orders/ordersAction";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles(() => ({
    cartWrapperOut: {
        height: "500px",
        overflowY: "scroll"
    },
    cartWrapper : {
        width: "100%",
    },
    cartLabel : {
        paddingBottom: "10px",
        borderBottom: "1px solid black"
    },
    cartLabel1 : {
        textAlign: "left",
        fontWeight: "bold"
    },
    cartLabel2 : {
        textAlign: "right",
        fontWeight: "bold"
    },
    cartProduct : {
        paddingTop: "10px",
        paddingBottom: "10px",
        borderBottom: "1px solid black"
    },
    cartImg : {
        textAlign: "left"
    },
    cartProductDesc : {
        textAlign: "left",
        fontSize: "12px",
        paddingTop: "5px"
    },
    cartPrice : {
        textAlign: "right",
        fontSize: "14px",
        paddingTop: "5px"
    },
    cartFooter : {
        color: "green"
    },
    cartButton : {
        textAlign: "center"
    },
    removeButton: {
        fontSize: "8px",        
    },
    orderCartImg: {
        width: "auto",
        marginLeft: "auto",
        marginRight:"auto",
        height: "30px" 
    },
    
  }));
  

const Cart = () => {

    const navigate = useNavigate();

    const cartItems = useSelector((state) => state.cart.cartItems);
    const isUserDetails = useSelector((state) => state.billing.userdetails);
    const orders = useSelector((state) =>  state.order.order ? state.order.order.data : null);
    const dispatcher = useDispatch();
    const classes = useStyles();
    const token = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.token : null);
    const userid = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.userid : null);
    

    const order = {
            cartItems: cartItems,
            total: cartItems.reduce((a,c) => a + c.productRsp*c.count, 0)
        }
        
        if(orders)
        {
            navigate('/orderConfirmation');
        }


  return (
    <Grid container>
      <Grid container className={classes.cartWrapperOut} item pt={2} pb={2} pl={2} pr={2} xs={12} md={12}>
        
            <Card className={classes.cartWrapper}>
                <CardContent>
                     {cartItems.length === 0 ? <Typography variant="body2" pt={1} >
                  <span className="cartFooter">Cart is empty</span>
                </Typography> : <React.Fragment>
                <Grid container className={classes.cartLabel}>               
                <Grid item md={6} className={classes.cartLabel1}>Product</Grid>
                <Grid item md={6} className={classes.cartLabel2}>Subtotal</Grid>
            </Grid>
            
            {cartItems.map(item => ( <React.Fragment>
           
            <Grid key={"cartproduct" + item._id} container className={classes.cartProduct}>  
                <Grid key={"cartimg" + item._id} item md={2} xs={4} className={classes.cartImg}>
                    <img key={"cartimage" + item._id} className={classes.orderCartImg} src={item.productImage} alt="" />
                </Grid>
                <Grid item md={6} xs={8} key={"cartdesc" + item._id} className={classes.cartProductDesc}>{item.productDesc}</Grid>
                <Grid item md={2} xs={8} key={"cartprice" + item._id} className={classes.cartPrice}>{item.count}X&#8377;{item.productRsp}</Grid>
                <Grid item md={2} xs={4} key={"carremove" + item._id}><Button color="error" key={"cartremovebutton " + item._id} className={classes.removeButton} size="small" onClick = {()=> { dispatcher(removeFromCart(cartItems, item)) }}  variant="text">Remove</Button></Grid>
            </Grid>
            
            </React.Fragment>
            )) }             
            <Grid container pt={1} className={classes.cartLabel}>               
                <Grid item md={6} className={classes.cartLabel1}>Subtotal</Grid>
                <Grid item md={6} className={classes.cartLabel2}>&#8377;{cartItems.reduce((a,c) => a + c.productRsp*c.count, 0)}</Grid>
            </Grid>
            <Grid container pt={1} className={classes.cartLabel}>               
                <Grid item md={6} className={classes.cartLabel1}>Shipping</Grid>
                <Grid item md={6} className={classes.cartLabel2}>Free</Grid>
            </Grid>
            <Grid container pt={1} className={classes.cartLabel}>               
                <Grid item md={6} className={classes.cartLabel1}>Total</Grid>
                <Grid item md={6} className={classes.cartLabel2}>&#8377;{cartItems.reduce((a,c) => a + c.productRsp*c.count, 0)}</Grid>
            </Grid>
            <Grid container pt={1} className={classes.cartLabel}>                                  
                <Grid item md={12} className={classes.cartButton}>
                    {!isUserDetails ? <Button variant="contained" disabled>Order Now</Button> : <Button variant="contained" onClick = {()=> { dispatcher(createOrder(order, isUserDetails, token, userid)) }} >Order Now</Button> }
                
                </Grid>
            </Grid>
            <Typography variant="body2" pt={1} >
              <span className="cartFooter">By Placing your order, you agree to be bound by the MyGrocStore Terms & Services and Privacy. Your credit/debit card data will not be saved</span>
            </Typography></React.Fragment>
                 }
                
              </CardContent>
            </Card>
          
        
      </Grid>
    </Grid>
  );
};

export default Cart;
