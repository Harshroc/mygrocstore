
import React, {useState, useRef } from 'react';
import { Grid } from '@mui/material';
import Navbar from '../components/navbar/Navbar';
import { makeStyles } from '@mui/styles';
import Footer from '../components/footer/Footer';
import {TextField,Button} from "@mui/material";
import emailjs from 'emailjs-com';

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
  button: {
      backgroundColor: 'blueviolet'
  },
  
  
}));

const Result = () => {
    return (
        <p>Your message has been sucessfully sent. We will contact you soon...</p>
    )
}



function ContactUs() {

    const [result, setresult] = useState(false);

    const form = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_otvabri', 'template_ij7drgt', form.current, 'user_MxY7uWxLH6s9tNZSBsKvo')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset();
          setresult(true);
    }

  const classes = useStyles();

  return (
    
    <Grid container >
      <Grid container direction="column" className={classes.homecontainer}>
        <Grid item>
          <Navbar />
        </Grid>
        <Grid item container>
          
          <Grid item xs={12}>
            
            <img style={{width: '100%', height: 'auto'}} src="/assets/images/contact-page-banner.jpg" alt="MyGrocStore"/>
          </Grid>
        </Grid>

          <Grid item container>
            <Grid item xs={12}>
                <h1>Contact Us</h1>
                <form ref={form} onSubmit={handleSubmit}>
                    <TextField required id="contactName" name="contactName" label="Enter Name" variant="outlined" placeholder="Enter Name" fullWidth margin="normal" />
                    <TextField  type="email" required id="contactEmail" name="contactEmail" label="Enter Email" variant="outlined" placeholder="Enter Email" fullWidth margin="normal" />
                    <br/><br/>
                    <TextField required id="contactMessage" name="contactMessage" label="Enter Message" multiline fullWidth rows={4} placeholder="Enter Message"/>
                    <br/><br/>
                    <Button type="submit" variant="contained" className={classes.button} >Submit</Button>
                    <br/><br/>
                </form>
            </Grid>
            <Grid item xs={12}>
                {result ? <Result /> : null}
            </Grid>
            
          </Grid>

          <Grid item container>
            <Footer />
          </Grid>
          
        </Grid>
        
      
      </Grid>
    
    
  );
}

export default ContactUs;
