
import { Grid } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import Footer from '../components/footer/Footer';
import Cart from '../components/cart/cart';
import Billing from '../components/orders/billing';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function Orders() {

  const classes = useStyles();



  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          <Grid container>
            <Grid container pt={2} pb={2} pl={2} pr={2} item xs={12} md={8}>
              <Billing />
            </Grid>
            <Grid container item pt={2} pb={2} pl={2} pr={2} xs={12} md={4}>
              <Cart />
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






export default Orders;
