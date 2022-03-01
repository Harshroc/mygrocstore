import React from 'react';
import { makeStyles } from '@mui/styles';
import { Grid, AppBar, Toolbar } from '@mui/material';


import {
    Link
} from 'react-router-dom';

const useStyles = makeStyles(() => ({
    alignleft : {
        textAlign:'left'
    },
    aligncenter : {
        textAlign:'center'
    },
    navbar: {
        backgroundColor:'lightCoral'
    },
    links:
    {
        textDecoration: 'none',
        color: "white",
        fontWeight: 'bold'
    }
}));

const Menu = (  ) => {

    const classes = useStyles();
    
    

    

    return (
        
        <AppBar position="static" className={classes.navbar}>
            <Toolbar> 
                
        <Grid container >
                
                <Grid container item xs={12} sm={12} ls={12} md={12} className={classes.aligncenter} >
                    <Grid item xs={1} sm={1} ls={1} md={1} >
                        
                        <Link className={classes.links} to="/">Home</Link>
                    </Grid>
                    <Grid item xs={1} sm={1} ls={1} md={1} >
                    <Link className={classes.links} to="/about">About Us</Link>
                    </Grid>
                    <Grid item xs={2} sm={2} ls={2} md={2} >
                    <Link className={classes.links} to="/categorieslist">Shop By Category</Link>
                    </Grid>
                    <Grid item xs={2} sm={2} ls={2} md={1} >
                    <Link className={classes.links} to="/productslist">Products</Link>
                    </Grid>
                    
                    <Grid item xs={1} sm={1} ls={1} md={1} >
                    <Link className={classes.links} to="/contact">Contact Us</Link>
                    </Grid>
                </Grid>
                
                
                
                
      
        </Grid>
        </Toolbar>
        </AppBar>
        

    )
}

export default Menu;