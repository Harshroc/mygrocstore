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
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useSelector} from 'react-redux';
import { API_URL } from "../utils/public";

const useStyles = makeStyles(() => ({
  homecontainer : {
      padding: '0 10px'
  },
}));
const theme = createTheme();
function ChangePwd() {
    const classes = useStyles();
    const navigate = useNavigate();
    const userid = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.userid : null);
    const token = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.token : null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        // eslint-disable-next-line no-console
        // console.log({
        //   password1: data.get('password1'),
        //   password2: data.get('password2')
        // });
        if(data.get('password1') !== data.get('password2' || data.get('password1') === '')){
          alert('both password should match');
          return false;
        }
        const formData = new URLSearchParams();
        formData.append('userId', userid);
        formData.append('userPassword', data.get('password1'));
        fetch(API_URL + '/api/users/changepassword', {
          method: 'post',
          headers: {'Content-Type':'application/x-www-form-urlencoded;charset=UTF-8', "authorization": `Bearer ${token}`},
          body: formData.toString()
         })
         .then(res => res.json())
         .then(
           (result) =>{
             
              if(result.message){
                alert('Password Changed Sucessfull');
                navigate('/logout');
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
          Change Password
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            id="password1"
            required
            fullWidth
            label="New Password"
            type="password"
            name="password1"
            autoComplete="current-password"
            variant="standard"
            autoFocus
          />
          <TextField
          id="password2"
          required
          fullWidth
          label="New Password Once Again"
          name="password2"
          autoComplete="current-password2"
          variant="standard"
        />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Submit
          </Button>
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
export default ChangePwd;
