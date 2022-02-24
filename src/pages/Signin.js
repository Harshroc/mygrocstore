import React,{useEffect, useState} from 'react';
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
import { useDispatch, useSelector } from 'react-redux';
import { signin } from '../redux-modules/users/userAction'
import { toast } from 'react-toastify';


const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
})); 
const theme = createTheme();
const Signin = () => {
    const classes = useStyles();
    const navigate = useNavigate();
    const dispatcher = useDispatch();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('')
    const userInfoState = useSelector((state) => state.userInfo);
    const { loading, userInfo, error} = userInfoState;
    toast.configure();
    const notifyError = (text) => toast.error( text, {autoClose: 2000,position: "top-center"});

    useEffect(() => {
      if(userInfo){
        navigate('/');
      }
    }, [userInfo]);// eslint-disable-line react-hooks/exhaustive-deps

    const handleSubmit = (event) => {
      
        event.preventDefault();
        const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(!email.match(reg))
        {
          notifyError("Please enter email");
          return false;
        }

        if(password === "")
        {
          notifyError("Please enter password");
          return false;
        }
        dispatcher(signin(email, password))
    }

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
          Sign in
        </Typography>
        { loading && <div>Loading...</div>}
        { error && <div>{error}</div>}
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
            onChange={(e) => setemail(e.target.value)}
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
            onChange={(e) => setpassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item>
            <Link  to="/signup">
                {"Don't have an account? Sign Up"}
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
export default Signin;
