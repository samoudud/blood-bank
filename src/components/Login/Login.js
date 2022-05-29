import { Alert, Button, CircularProgress, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import useDonor from '../../hooks/useDonor';

const Login = () => {
    const navigate = useNavigate();
    const { registerDonor, loading, authError, logIn } = useDonor();
    const [loginInfo, setLoginInfo] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginInfo };
        newLoginData[field] = value;
        setLoginInfo(newLoginData);
    }

    const handleLogin = e => {
        console.log(loginInfo)
        logIn(navigate, loginInfo)
        e.preventDefault();
    }


    return (
        <Container>
            <Grid container spacing={4}>
                <Grid item sx={{ my: 16, mx: 'auto' }} xs={12} md={7}>
                    <Paper sx={{ py: 5 }} elevation={5}>
                        <Typography sx={{ color: '#18183A', margin: '0 0 15px 0', fontSize: '36px', fontWeight: '700' }} variant="h3" component="div" >
                            Please Login
                        </Typography>
                        <form onSubmit={handleLogin}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Email"
                                type="email"
                                name='email'
                                required
                                onInput={handleOnBlur}
                                variant="outlined"
                            />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                label="Password"
                                type='password'
                                name='password'
                                required
                                onInput={handleOnBlur}
                                variant="outlined"

                            />
                            <NavLink to='/register'><Button variant='text'>Dont't have account? Create an account</Button></NavLink>

                            <Button
                                sx={{ width: '75%', m: 1, p: 1, background: '#E33D3C', '&:hover': { background: '#E33D3C' } }} variant='contained'
                                type='submit'
                            >Login</Button>


                        </form>
                        <br />
                        {
                            loading && <CircularProgress color="secondary" />
                        }
                        {
                            authError && <Alert sx={{ width: '75%', mx: 'auto' }} severity="error">{authError}</Alert>

                        }

                    </Paper>
                </Grid>

            </Grid>
        </Container>
    );
};

export default Login;