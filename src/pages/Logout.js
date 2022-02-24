import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../redux-modules/users/userAction';

import Home from './Home';

function Logout() {
    const dispatcher = useDispatch();
    const navigate = useNavigate();
    dispatcher(logout());
    navigate('/');
    return(
        <Home />
    )
}
export default Logout;