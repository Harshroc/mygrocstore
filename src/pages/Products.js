import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import ProductsList from '../components/product/ProductsList';
import ProductsOrder from '../components/filter/productsOrder';
import Footer from '../components/footer/Footer';
import ProductsFilter from '../components/filter/productsFilter';
import { filterProductByCategory, sortProductsByPrice } from '../redux-modules/products/productActions';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function Products() {

  const filteredProducts = useSelector((state) => state.products.filteredItems);

  const products = useSelector((state) => state.products.items);

  const sort = useSelector((state) => state.products.sort);

  const categories = useSelector((state) => state.categories.items);

  // const category = useSelector((state) => state.products.category);

  const classes = useStyles();

  const [Checked, setChecked] = useState([]);

  const dispatcher = useDispatch();

  const filterProducts = (event) => {
  
  const currentIndex = Checked.indexOf(event.target.value);
  const newChecked = [...Checked];
  
  if(currentIndex === -1){
    newChecked.push(event.target.value)
  } else {
    newChecked.splice(currentIndex, 1)
  }
  
  setChecked(newChecked);  
 
  dispatcher(filterProductByCategory(products, newChecked));

}

const { shopbycategory } = useParams();

useEffect(() => {
  //call the action creator with dispatch
  //  and wait until the promise resolves
  if(typeof shopbycategory !== "undefined" && products)
    {
      const a = shopbycategory[0].toUpperCase() + shopbycategory.slice(1);
      const pagecategory = [a];
    // Update the document title using the browser API
    
    dispatcher(filterProductByCategory(products, pagecategory));
    }
}, [products]);// eslint-disable-line react-hooks/exhaustive-deps


  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          <Grid container>
            <Grid container pt={2} pb={2} pl={2} pr={2} item xs={12} md={2}>
              <ProductsFilter filterProducts={filterProducts} filteredProducts={products} filterProductByCategory={filterProductByCategory} categories={!categories ? [] : categories} />
            </Grid>
            <Grid container item pt={2} pb={2} pl={2} pr={2} xs={12} md={10}>
              <ProductsOrder filteredProducts={filteredProducts} sort={sort} sortProductsByPrice={sortProductsByPrice}  count={!filteredProducts ? 0 : filteredProducts.length}/>
              <ProductsList products={filteredProducts}/>
            </Grid>
          </Grid>
        </Grid>
        <Grid item container>
          <Footer />
        </Grid>       
      </Grid>
    </Grid>
  );
}

export default Products;
