import React from 'react';
import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import Navbar from '../components/navbar/Navbar';
import { Homebanner } from '../components/homepage/homebanner/Homebanner';
import { makeStyles } from '@mui/styles';
import HomeCategories from '../components/homepage/homecategories/HomeCategories';
import Footer from '../components/footer/Footer';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function Home() {

  const classes = useStyles();

  const products = useSelector((state) => state.products.items);

  return (
    
    <Grid container >
      <Grid container direction="column">
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          <Grid item xs={12}>
          <Homebanner />
          </Grid>
        </Grid>

          <Grid item container className={classes.homecontainer}>
            {!products ? <div>Loading....</div > : <HomeCategories products={products} /> }
            
          </Grid>

          <Grid item container>
            <Footer />
          </Grid>
          
        </Grid>
        
      
      </Grid>
    
    
  );
}

export default Home;
