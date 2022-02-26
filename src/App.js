import React from 'react';
import { ThemeProvider } from '@mui/material';
import { theme } from '../src/utils/theme';
import Home from './pages/Home';
import About from './pages/AboutUs';
import Contact from './pages/ContactUs';
import { Routes, Route } from "react-router";
import {BrowserRouter as Router} from 'react-router-dom';
import CategoriesList from './pages/Categories';
import ProductsList from './pages/Products';
import Orders from './pages/Orders';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Productid from './pages/Productid';
import Logout from './pages/Logout';
import OrderConfirmation from './pages/OrderConfirmation'
import Myorders from './pages/MyOrders';
import ChangePassword from './pages/ChangePwd';
import ProtectedRoutes from './utils/protectedRoutes';
import { useSelector} from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';



function App() {

  const token = useSelector((state) =>  state.userInfo.userInfo ? state.userInfo.userInfo.token : null);
  
  return (
    <ThemeProvider theme={theme}>
       <CssBaseline />
      <Router>
    <Routes>
              <Route exact path='/' element={<Home/>}></Route>
              <Route exact path='/about' element={<About />}></Route>
              <Route exact path='/categorieslist' element={<CategoriesList />}></Route>
              <Route exact path='/productslist' element={<ProductsList />}></Route>
              <Route exact path='/productslist/:shopbycategory' element={<ProductsList />}></Route>
              <Route exact path='/orders' element={<Orders />}></Route>
              <Route exact path='/contact' element={<Contact />}></Route>
              {/* <Route exact path='/orderConfirmation' element={<OrderConfirmation />}></Route> */}
              <Route exact path='/termsandconditions' element={<Terms />}></Route>
              <Route exact path='/privacypolicy' element={<Privacy />}></Route>
              <Route exact path='/signup' element={<Signup />}></Route>
              <Route exact path='/signin' element={<Signin />}></Route>
              <Route exact path='/logout' element={<Logout />}></Route>
              <Route exact path='/product/:id' element={<Productid />}></Route>

              
              <Route path="/changepassword" element={
            <ProtectedRoutes token={token}>
              <ChangePassword />
            </ProtectedRoutes>
          } />

<Route path="/orderConfirmation" element={
            <ProtectedRoutes token={token}>
              <OrderConfirmation />
            </ProtectedRoutes>
          } />

<Route path="/myorders" element={
            <ProtectedRoutes token={token}>
              <Myorders />
            </ProtectedRoutes>
          } />

            </Routes>
            </Router>
    </ThemeProvider>
    
    
  );
}

export default App;
