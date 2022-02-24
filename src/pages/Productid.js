import * as React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import { API_URL } from "../utils/public";
import { useState, useEffect } from "react";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Link
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useParams } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import ReactImageZoom from 'react-image-zoom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { addToCart} from '../redux-modules/shopping/shoppingActions';
const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
})); 
const theme = createTheme();

function Productid() {
    const classes = useStyles();

    const [product, setProduct] = useState({});
    let { id } = useParams();
    const dispatcher = useDispatch();
    

    let url = API_URL + '/api/getproducts/product/'+id;
  
    useEffect(() => {
       fetch(url)
         .then(res => res.json())
         .then(
           (result) =>{
             
             if(result.message)
             {
              console.log(result.product[0]);
              setProduct(result.product[0]); 
             }
                         
              
            }
          )
      },);

      let img = product.productImage;
      let productDesc = '';
      if(product){
        
        const props = { zoomWidth: 500, img: product.productImage};

        img = product.productImage;
        productDesc = <div style={{textAlign:'center'}}>
          <br/><br/>
          <h1>{product.productName}</h1>
          <h3>Price : {product.productMrp}</h3>
          <h3>Offer Price : {product.productRsp}</h3>
          <Button variant="contained" onClick = {()=> { dispatcher(addToCart(product)) }}>Add to Cart</Button>
          <p>{product.productDesc}</p>
        </div>
      }
    return(
        <Grid container >
        <Grid container direction="column" className={classes.homecontainer}>
          <Grid item>
            <Navbar />
          </Grid>
        </Grid>
        <Grid item container>
          <Grid item xs={1}>
          </Grid>
          <Grid item xs={5} pt={2} style={{textAlign:'center'}}>
            <img src={product.productImage} alt="MyGrocStore" />
          </Grid>
          <Grid item xs={5}>
            {productDesc}
          </Grid>
          <Grid item xs={1}>
          </Grid>
          </Grid>
          <Grid item container>
            <Footer />
          </Grid>
        </Grid>
    )
}
export default Productid;