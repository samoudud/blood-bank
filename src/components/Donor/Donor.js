import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Donor = ({ donor }) => {
    const { displayName, age, email, mobile, lDonate, gander, bloodGroup, address } = donor
    return (
        <Grid item xs={12} md={4}>
            <Paper sx={{ py: 3, my: 5 }} elevation={5}>
                <AccountCircleIcon sx={{ fontSize: '50px' }} />
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Name: {displayName}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Blood Group: {bloodGroup.toUpperCase()}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Age: {age}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Gander: {gander}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Email: {email}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Mobile: {mobile}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Address: {address}
                </Typography>
                <Typography sx={{ color: '#18183A', margin: '10px 0', fontSize: '16px', fontWeight: '700' }} variant="h5" component="div" >
                    Last Donation Date: {lDonate}
                </Typography>
            </Paper>
        </Grid>
    );
};

export default Donor;