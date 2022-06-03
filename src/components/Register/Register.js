import React, { useState } from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { Alert, Button, CircularProgress, Container, Grid, MenuItem, Paper, Typography } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import useDonor from '../../hooks/useDonor';

const Register = () => {
    const navigate = useNavigate();
    const { registerDonor, loading, authError } = useDonor();
    const [lastDonate, setValue] = React.useState(new Date('01/24/2022'));
    const [gander, setGender] = useState('');
    const [bloodGroup, setBloodGroup] = useState('')

    const [registerInfo, setRegisterInfo] = useState({
        lDonate: new Date('01/24/2022').toLocaleDateString(),
        gander: '',
        bloodGroup: ''
    });


    const handleLastDonateChange = (newValue) => {
        setValue(newValue);
        const newRegisterData = { ...registerInfo };
        newRegisterData['lDonate'] = newValue.toLocaleDateString();
        setRegisterInfo(newRegisterData);
    };

    const handleGanderChange = (event) => {
        setGender(event.target.value);
        const newRegisterData = { ...registerInfo };
        newRegisterData['gander'] = event.target.value;
        setRegisterInfo(newRegisterData);
    };

    const handleGroupChange = (event) => {
        setBloodGroup(event.target.value);
        const newRegisterData = { ...registerInfo };
        newRegisterData['bloodGroup'] = event.target.value;
        setRegisterInfo(newRegisterData);
    };


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newRegisterData = { ...registerInfo };
        newRegisterData[field] = value;
        setRegisterInfo(newRegisterData);
    }

    const handleSignUp = e => {
        e.preventDefault();
        registerDonor(registerInfo, navigate);
    }


    return (
        <div className='Register'>
            <Container>
                <Grid container spacing={2}>
                    <Grid item sx={{ my: 4, mx: 'auto' }} xs={12} md={7}>
                        <Paper sx={{ py: 3 }} elevation={5}>
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h3" component="div" >
                                Please Register
                            </Typography>
                            <form onSubmit={handleSignUp}>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Your Name"
                                    required
                                    name='displayName'
                                    onInput={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="outlined-select-currency"
                                    required
                                    value={gander}
                                    onChange={handleGanderChange}
                                    select
                                    label="Gander"

                                >
                                    <MenuItem value="male">
                                        Male
                                    </MenuItem>
                                    <MenuItem value="female">
                                        Female
                                    </MenuItem>
                                </TextField>
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    id="outlined-select-currency"
                                    required
                                    value={bloodGroup}
                                    onChange={handleGroupChange}
                                    select
                                    label="Blood Group"

                                >
                                    <MenuItem value="a+">
                                        A+
                                    </MenuItem>
                                    <MenuItem value="a-">
                                        A-
                                    </MenuItem>
                                    <MenuItem value="b+">
                                        B+
                                    </MenuItem>
                                    <MenuItem value="b-">
                                        B-
                                    </MenuItem>
                                    <MenuItem value="ab+">
                                        AB+
                                    </MenuItem>
                                    <MenuItem value="ab-">
                                        AB-
                                    </MenuItem>
                                    <MenuItem value="o+">
                                        O+
                                    </MenuItem>
                                    <MenuItem value="o-">
                                        O-
                                    </MenuItem>
                                </TextField>

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Age"
                                    required
                                    type='number'
                                    name='age'
                                    onInput={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Address"
                                    required
                                    name='address'
                                    onInput={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Mobile"
                                    required
                                    name='mobile'
                                    onInput={handleOnBlur} variant="outlined"
                                />

                                <TextField
                                    sx={{ width: '75%', m: 1 }}
                                    label="Your Email"
                                    required
                                    name='email'
                                    type='email'
                                    onInput={handleOnBlur} variant="outlined"
                                />
                                <TextField
                                    sx={{ width: '75%', m: 1 }} label="Your Password"
                                    type='password'
                                    required
                                    name='password'
                                    onInput={handleOnBlur}
                                    variant="outlined"

                                />

                                <LocalizationProvider dateAdapter={AdapterDateFns}>
                                    <Stack spacing={3}>
                                        <DesktopDatePicker
                                            label="Last Donation Date"
                                            inputFormat="MM/dd/yyyy"
                                            name='date'
                                            value={lastDonate}
                                            onChange={handleLastDonateChange}
                                            renderInput={(params) => <TextField sx={{ width: '75%', mx: 'auto' }} {...params} />}
                                        />
                                    </Stack>
                                </LocalizationProvider>
                                <NavLink to='/login'><Button variant='text'>Aready have an account? Login</Button></NavLink>

                                <Button
                                    sx={{ width: '75%', m: 1, p: 1, background: '#E33D3C', '&:hover': { background: '#E33D3C' } }} variant='contained'
                                    type='submit'
                                >Sign Up</Button>


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

        </div>
    );
};

export default Register;