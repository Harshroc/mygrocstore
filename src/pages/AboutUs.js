
import { Grid } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import Footer from '../components/footer/Footer';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  
}));

function AboutUs() {

  const classes = useStyles();

  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          
          <Grid item xs={12}>
          <img style={{width: '100%', height: 'auto'}} src="/assets/images/grocery-header.jpeg" alt="MyGrocStore"/>
          </Grid>
        </Grid>

          <Grid item container>

              <div style={{textAlign: 'center', width: '100%'}}><h1>About Us</h1><h2>MyGrocStore</h2></div>
            <p style={{fontSize: '20px'}}>Spare more with MyGrocStore! We give you the most minimal costs on the entirety of your grocery needs.<br /><br />
MyGrocStore is a low-cost online general store that gets items crosswise over classifications like grocery, natural products and vegetables, excellence and health, family unit care, infant care, pet consideration, and meats and fish conveyed to your doorstep.<br /><br />
Browse more than 5,000 items at costs lower than markets each day!<br /><br />
Calendar conveyance according to your benefit.</p>
            
          </Grid>

          <Grid item container>
            <Footer />
          </Grid>
          
        </Grid>
        
      
      </Grid>
    
    
  );
}

export default AboutUs;
