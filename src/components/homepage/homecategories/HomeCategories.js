import React from 'react';
import { Grid, } from '@mui/material';
import Product from '../../product/product';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../../assests/css/style.css';
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';

const useStyles = makeStyles(() => ({
     carouselarrow: {
        position: 'absolute',
        top: '125px',
        width: 'auto',
        fontsize: '70px',
    }, 
    carouselrightarrow: {
        right: 0,
    },
    productviewall:{
        textAlign:'center',
        paddingTop:'60%'
    }
    
    
}));


const HomeCategories = ({products}) => {

    const classes = useStyles();

    const handleDragStart = (e) => e.preventDefault();

    const cartItems = useSelector((state) => state.cart.cartItems );

    function inCart(item) {
       return item._id === this        
      }

    const responsive = {
        0: { item: 1},
        568: { items: 2 },
        960: { items: 3 },
        1024: { items: 4 }
    }

    const bestSeller = products.filter(product => product.productCategory.categoryName === "Dairy");

    const staples = products.filter(product => product.productCategory.categoryName === "Staples");

    const snacksAndBeverages = products.filter(product => product.productCategory.categoryName === "Snacks and Beverages");

    
    let bestSelleritems = bestSeller.map((image) => {
        return <div data-value={image._id}>
            {
                // <Product product ={image}/>
                cartItems.find(inCart, image._id) === undefined ? <Product product={image} inCart={0}/> : <Product product={image} inCart={1} />
            }
            </div>
        }); 

    let bestSelleritemss;
    if(bestSelleritems.length > 4)
    {
        bestSelleritemss = [...bestSelleritems, <div className={classes.productviewall}  data-value="6">View All</div>];
    }
    else
    {
        bestSelleritemss = [...bestSelleritems];
    }
    
    

    let staplesitems = staples.map((staple) => {
    
        return <div data-value={staple._id}>
            {cartItems.find(inCart, staple._id) === undefined ? <Product product={staple} inCart={0}/> : <Product product={staple} inCart={1} />}
            </div>
        }); 

        

    let staplesitemss;

    if(staplesitems.length > 4)
    {
        staplesitemss = [...staplesitems, <div className={classes.productviewall}  data-value="6">View All</div>];
    }
    else
    {
        staplesitemss = [...staplesitems];
    }    


    let snacksAndBeveragesitem = snacksAndBeverages.map((image) => {
        return <div data-value={image._id}>
            {cartItems.find(inCart, image._id) === undefined ? <Product product={image} inCart={0}/> : <Product product={image} inCart={1} />}
            </div>
        }); 

    let snacksAndBeveragesitems

    if(snacksAndBeveragesitem.length > 4)
    {
        snacksAndBeveragesitems = [...snacksAndBeveragesitem, <div className={classes.productviewall}  data-value="6">View All</div>];
    }
    else
    {
        snacksAndBeveragesitems = [...snacksAndBeveragesitem];
    }

    
 
        
        
    return (
        <React.Fragment>
            <Grid container>
            <Grid item><h3>Dairy</h3></Grid>
                <AliceCarousel handleDragStart={handleDragStart} disableDotsControls responsive = {responsive } mouseTracking items={bestSelleritemss}
                />
            </Grid>
            <Grid container>
            <Grid item><h3>Staples</h3></Grid>
                <AliceCarousel handleDragStart={handleDragStart} disableDotsControls responsive = {responsive } mouseTracking items={staplesitemss} />                
            </Grid>
            <Grid container>
             <Grid item><h3>Snacks and Beverages</h3></Grid> 
                <AliceCarousel handleDragStart={handleDragStart} disableDotsControls responsive = {responsive } mouseTracking items={snacksAndBeveragesitems}
                 /> 
             </Grid>

        </React.Fragment>
    )
}


export default HomeCategories;