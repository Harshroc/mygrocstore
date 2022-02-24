import React from 'react'
import useMediaQuery from '@mui/material/useMediaQuery';
import Menu from './Menu';
import MobileMenu from './MobileMenu';
import { useTheme } from '@mui/material/styles';


const Navbar = () => {

    const theme = useTheme();

    const matches = useMediaQuery(theme.breakpoints.down('md'));

    if(matches)
    {
       return <div>
          <MobileMenu /> 
          </div>
    }
    else
    {
       return <div>
            <MobileMenu /> 
            <Menu />
       </div>
    }
    
    
}

export default Navbar;
