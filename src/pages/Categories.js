import React from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import CategoriesList from '../components/categories/CategoriesList';
import Footer from '../components/footer/Footer';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function Categories() {

  const classes = useStyles();
  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        
          <Grid item container>
            <CategoriesList />
          </Grid>

          <Grid item container>
            <Footer />
          </Grid>
          
        </Grid>
        
      
      </Grid>
    
    
  );
}

export default Categories;
