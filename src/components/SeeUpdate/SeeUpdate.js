import { Button, CircularProgress, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SeeUpdate = () => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [donor, setDonor] = useState({});

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleSearch = e => {
        setIsLoading(true);
        setDonor({})
        fetch(`https://kcp-blood-bank-server.herokuapp.com/request/donor/${email}`)
            .then(res => res.json())
            .then(data => {
                setDonor(data);
            })
            .catch(error => console.log(error.message))
            .finally(() => setIsLoading(false));;

        e.preventDefault();
    }


    return (
        <div>
            <Header />
            <Grid container spacing={4}>
                <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                    <Typography sx={{ color: '#18183A', margin: '0 0 30px 0', fontSize: '30px', fontWeight: '700' }} variant="h3" component="div" >
                        See Your Blood Request Update
                    </Typography>
                    <form onSubmit={handleSearch}>
                        <TextField
                            sx={{ width: '50%' }}
                            label="Requester Email"
                            required
                            type='email'
                            variant="outlined"
                            onBlur={handleOnBlur}
                        />
                        <Button sx={{ py: 2, background: '#E33D3C', '&:hover': { background: '#E33D3C' } }} variant='contained' type='submit'>See Update</Button>
                        {
                            isLoading &&
                            <div>
                                <CircularProgress color="secondary" />
                                <CircularProgress color="success" />
                                <CircularProgress color="inherit" />
                            </div>
                        }
                    </form>

                </Grid>
            </Grid>
            <Grid container spacing={4}>
                <Grid item sx={{ my: 8, mx: 'auto' }} xs={12} md={3}>
                    {
                        donor?.message && <Typography sx={{ mb: ' 50px', fontSize: '24px', fontWeight: '700', color: 'red', textAlign: 'center' }} variant="h3" component="div" >
                            Request Not Found !
                        </Typography>
                    }
                    {
                        donor?.status === 'accepted' &&
                        <Paper sx={{ py: 3, my: 5 }} elevation={4}>
                            <AccountCircleIcon sx={{ fontSize: '50px' }} />
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Status: Donor Found
                            </Typography>
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Donor's Name: {donor.displayName}
                            </Typography>

                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Donor's Age: {donor.age}
                            </Typography>
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Donor's Gander: {donor.gander}
                            </Typography>
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Donor's Email: {donor.email}
                            </Typography>
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Donor's Mobile: {donor.mobile}
                            </Typography>
                            <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                                Donor's Address: {donor.address}
                            </Typography>
                        </Paper>

                    }
                    {
                        donor?.status === 'pending' &&
                        <Typography sx={{ mb: ' 50px', fontSize: '24px', fontWeight: '700', color: 'red', textAlign: 'center' }} variant="h3" component="div" >
                            Status: Waiting For a Donor
                        </Typography>
                    }
                </Grid>
            </Grid>
            <Footer />
        </div>
    );
};

export default SeeUpdate;