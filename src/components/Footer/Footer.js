import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
    return (
        <div style={{ background: '#18183A', color: 'white', padding: '5px' }}>
            <Container sx={{ my: 2 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2 }} align="left" variant="h5" color="inherit">
                            Blood Bank
                        </Typography>
                        <Typography align="left" sx={{ width: '75%' }} variant='body1'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente nulla sit dignissimos.
                        </Typography>

                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2, color: '#FB3640' }} align="left" variant="h5" color="inherit">
                            Quick Links
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Home
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Term
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Privacy & Policy
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Blog
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Contact Us
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2, color: '#FB3640' }} align="left" variant="h5" color="inherit">
                            About Us
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Our Story
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Our Mission
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Our Vision
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Donation guide
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Be Our Partner
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography sx={{ mb: 2, color: '#FB3640' }} align="left" variant="h5" color="inherit">
                            Support
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Customer Support
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Privacy & Policy
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Terms & Condition
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Forum
                        </Typography>
                        <Typography align="left" variant="body1" color="inherit">
                            Donor Guide
                        </Typography>
                    </Grid>
                </Grid>
                <Typography sx={{ my: 2 }} align="center" variant="body1" color="inherit">
                    Copyright © 2022 kcp-blood-bank.com
                </Typography>

            </Container>
        </div>
    );
};

export default Footer;