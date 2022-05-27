import React from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {
    let location = useLocation();
    console.log(location.state);
    return (
        <div>
            <h2>Login</h2>
        </div>
    );
};

export default Login;