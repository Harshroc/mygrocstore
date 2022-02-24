import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid'; 
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {
    Link
} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { API_URL } from "../utils/public";
import { toast } from 'react-toastify';



const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
}));
const theme = createTheme();
function Signup() {

  toast.configure();
  const notifyError = (text) => toast.error( text, {autoClose: 2000,position: "top-center"});

    const classes = useStyles();
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        
        const formData = new URLSearchParams();

        const reg = /^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/;
        const mobreg = /^\d{10}$/;
        

        if(!data.get('email').match(reg))
        {
          notifyError("Please enter email");
          return false;
        }
        else if(data.get('mobile') === "")
        {
          notifyError("Please enter mobile");
          return false;
        }
        else if(!data.get('mobile').match(mobreg))
        {
          notifyError("Invalid Mobile Number");
          return false;
        }
        else if(data.get('password') === "")
        {
          notifyError("Please enter password");
          return false;
        }


        formData.append('userEmail', data.get('email'));
        formData.append('userMobile', data.get('mobile'));
        formData.append('userPassword', data.get('password'));
        
        fetch(API_URL + '/api/users/signup', {
          method: 'post',
          headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8'},
          body: formData.toString()
         })
         .then(res => res.json())
         .then(
           (result) =>{
              if(result.message){
                alert('Signup Sucessfull');
                navigate('/signin');
              }
              else{
                alert(result.error);
              }
            }
          )
      };
    return(
    <Grid container >
    <Grid container direction="column" className={classes.homecontainer}>
      <Grid item>
        <Navbar />
      </Grid>
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="mobile"
            label="mobile no"
            name="mobile"
            autoComplete="mobile"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container>
            <Grid item>
            <Link  to="/signin">
                {"Already have an account? Sign In"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
     </Container>
     </ThemeProvider>
     <Grid item container>
            <Footer />
          </Grid>
        </Grid>
      </Grid>
    )
}
export default Signup;
