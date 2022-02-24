import React from 'react'
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import {
    Link
} from 'react-router-dom';


const useStyles = makeStyles(() => ({
    footer1 : {
        backgroundImage: 'url("/assets/images/footerbanner.png")',
        height: '400px',
        backgroundColor: 'lightgrey',
        marginTop: '10px !important',
    },
    footermob1 : {
        backgroundImage: 'url("/assets/images/footerbanner.png")',
        height: '100px',
        backgroundColor: 'lightgrey',
        marginTop: '10px !important',
        backgroundSize: 'contain'

    },
    
    footer2 : {
        
        minHeight: '180px',
        
        paddingBottom: '8px'
       
    },

    footer2item1 : {        
        
            height: '90%',
            padding: '10px',
            width: '90%',
            borderRadius: '10px'

    },

    footer3 : {
       paddingBottom: '20px',
        paddingTop: '25px !important'
    },
    horizontalLine:{
        height:'10px',
        backgroundColor: 'black',
        paddingTop: '2px'
    },
    bottomFooter2 : {
        textAlign: 'right',
    },
    footer2list:{
        lineHeight: '30px'
    },
    links:
    {
        textDecoration: 'none',
        color: "black",
    }
    
  }));

const Footer = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <React.Fragment>
            <Grid container spacing={2} rowSpacing={1} >
                
                <Grid container item >
                {matches && (<Grid item xs={12} md={12} className={classes.footermob1}></Grid>)}
                {!matches && (<Grid item xs={12} md={12}  className={classes.footer1}></Grid>)}                    
                </Grid>
                
                <Grid container item className={classes.footer2}>
                    <Grid item xs={12} md={3} >
                        <div className={classes.footer2item1}>
                        <h2>MyGrocStore</h2>
                        <span>We offers high-quality foods and the best delivery service, and the food market you can blindly trust</span>
                        </div>
                    
                    
                    </Grid>
                    <Grid item xs={12} md={3} >
                    <div className={classes.footer2item1}>
                        <h4>About Us</h4>
                        <ul className={classes.footer2list}>
                            <li>About us</li>
                            <li>Contact us</li>
                            <li>About team</li>
                        </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                    <div className={classes.footer2item1}>
                    <h4>Our Information</h4>
                        <ul className={classes.footer2list}>
                            <li><Link className={classes.links} to="/privacypolicy">Privacy policy</Link></li>
                            
                            <li><Link className={classes.links} to="/termsandconditions">Terms & conditions</Link></li>
                            <li>Return Policy</li>
                        </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={3} >
                    <div className={classes.footer2item1}>
                    <h4>Community</h4>
                        <ul className={classes.footer2list}>
                            <li>Announcements</li>
                            <li>Answer center</li>
                            <li>Discussion boards</li>                            
                        </ul>

                        </div>
                    </Grid>
                    
                </Grid>
               
                <Grid container item className={classes.footer3}>
                
                <Grid item xs={12} md={6} pl={2}>
                © Copyright 2021 Team IOTA-II.  All rights reserved
                </Grid>
                {/* <Grid item xs={12} md={6} className={classes.bottomFooter2}>
                    Bottom Footer 2
                </Grid> */}

                </Grid>
            </Grid>          
        </React.Fragment>
    )
}

export default Footer;
