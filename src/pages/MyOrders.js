
import React, { useEffect } from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import Footer from '../components/footer/Footer';
import Myorder from '../components/orders/myorders';
import { useDispatch, useSelector } from 'react-redux';
import { getorders} from '../redux-modules/orders/ordersAction'


const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function MyOrders() {

  const classes = useStyles();

  const dispatcher = useDispatch();

  const token = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.token : null);

  const userid = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.userid : null);

  


  useEffect(() => {
    
    dispatcher(getorders(userid, token));
    
  }, [])

  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          <Grid container>
            <Grid container pt={2} pb={2} pl={2} pr={2} item xs={12} md={12}>
              <Myorder />
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


export default MyOrders;
