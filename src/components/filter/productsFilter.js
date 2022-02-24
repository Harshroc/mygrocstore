import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    filter: {
       height:'300px'
   }, 
}));

const ProductsFilter = ({categories, filterProducts}) => {
    const classes = useStyles();    
    return (
        <Grid container className={classes.filter}>   
                <Grid item lg={12} xs={12}><h4>Filter By Category</h4></Grid>
                {categories.map(category => (<React.Fragment key={category._id}> <Grid key={category._id} item lg={10} xs={10}>{category.categoryName}</Grid>
                    <Grid item lg={2} xs={2}>  <input type="checkbox" value={category.categoryName} onChange={filterProducts}   /> </Grid> </React.Fragment>
)) }                         
        </Grid>
    )
}

  export default ProductsFilter;
