import React from 'react';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(() => ({
    orderWrapper: {
        borderBottom: '.1rem #c0c0c0 solid',
        paddingBottom: '10px'
    },
    sort: {
       width: '60%',
       fontSize: '16px',
       padding: '2px'
   }, 
   sortLabel : {
    textAlign: 'center',
    padding: '4px'
   },
   totalProducts: {
       padding: '4px'
   }
   
   
}));

const ProductsOrder = ({count, filteredProducts, sortProductsByPrice, sort}) => {

    const classes = useStyles();

    const dispatcher = useDispatch();

    return (
        <Grid container className={classes.orderWrapper}>
       
                <Grid item lg={9} xs={12} className={classes.totalProducts}>Total Products : { count } </Grid>
                <Grid item container lg={3} xs={12}> 
                    <Grid item lg={4} xs={4} className={classes.sortLabel}>Sort By</Grid>
                    <Grid item lg={8} xs={8}>
                        <select value={sort} className={classes.sort} onChange={(e) => dispatcher(sortProductsByPrice(filteredProducts,e.target.value ))}>
                            <option value="latest">Latest</option>
                            <option value="lowest">Lowest</option>
                            <option value="highest">Highest</option>                                                   
                        </select> 
                        </Grid>
                    </Grid>
                
       
        </Grid>
    )
}

  
  export default ProductsOrder;
