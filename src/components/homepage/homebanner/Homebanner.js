import React from 'react'
import { Grid } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles(() => ({
    bannerImg : {
        width: '100%'
    }, 
    bannerButton : {
        position: 'absolute',
        top: '72%',
        left: '12%',
        transform: 'translate(-50%,-50%)',
        msTransform: 'translate(-50%, -50%)',  
        backgroundColor: 'orange',      
        fontSize: '12px',
        padding: '10px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius : '5px'
    },
    bannerButtonMobile : {
        position: 'absolute',
        top: '70%',
        left: '16%',
        transform: 'translate(-50%,-50%)',
        msTransform: 'translate(-50%, -50%)',  
        backgroundColor: 'orange',      
        fontSize: '6px',
        padding: '4px 4px',
        border: 'none',
        cursor: 'pointer',
        borderRadius : '2px'
    },
    bannerButtonOne : {
        position: 'absolute',
        top: '82%',
        left: '25%',
        transform: 'translate(-50%,-50%)',
        msTransform: 'translate(-50%, -50%)',  
        backgroundColor: 'orange',      
        fontSize: '12px',
        padding: '10px 12px',
        border: 'none',
        cursor: 'pointer',
        borderRadius : '5px'
    },
    bannerButtonMobileOne : {
        position: 'absolute',
        top: '80%',
        left: '25%',
        transform: 'translate(-50%,-50%)',
        msTransform: 'translate(-50%, -50%)',  
        backgroundColor: 'orange',      
        fontSize: '6px',
        padding: '4px 4px',
        border: 'none',
        cursor: 'pointer',
        borderRadius : '2px'
    },
    
    bannerContainer : {
        position: 'relative',
        width: '100%',
        maxWidth: '400px'
      }
}));

export const Homebanner = () => {

    const navigate = useNavigate();

    const handleBannerButtonOne = () => {
        navigate(`/categorieslist`);
    }

    const handleBannerButtonTwo = () => {
        navigate(`/productslist`);
    }

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('md'));

    const classes = useStyles();
    return (
        <React.Fragment>
            <Grid container>
                <Grid item xs={6} sm={6} md={6} lg={6} className={classes.bannerContainer}>
                <img className={classes.bannerImg} src="/assets/images/home-banner-1.jpeg" alt="new"/>
                { 
                matches ? <button onClick={handleBannerButtonOne} className={classes.bannerButtonMobileOne}>Shop Now</button> : <button onClick={handleBannerButtonOne} className={classes.bannerButtonOne}>Shop Now</button>
                }
                
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6} className={classes.bannerContainer}>
                <img className={classes.bannerImg} src="/assets/images/home-banner-2.png" alt="new"/>
                { 
                matches ? <button onClick={handleBannerButtonTwo} className={classes.bannerButtonMobile}>Shop Now</button> : <button onClick={handleBannerButtonTwo} className={classes.bannerButton}>Shop Now</button>
                }
                </Grid>
            </Grid>
            <Grid container>
                <Grid style={{width: '100%'}} item md={3} lg={3}><img className={classes.bannerImg} src="/assets/images/belowbanner.png" alt="new"/></Grid>
                <Grid style={{width: '100%'}} item md={3} lg={3}><img className={classes.bannerImg} src="/assets/images/belowbanner.png" alt="new"/></Grid>
                <Grid style={{width: '100%'}} item md={3} lg={3}><img className={classes.bannerImg} src="/assets/images/belowbanner.png" alt="new"/></Grid>
                <Grid style={{width: '100%'}} item md={3} lg={3}><img className={classes.bannerImg} src="/assets/images/belowbanner.png" alt="new"/></Grid>
            </Grid>
            </React.Fragment>


    )
}
