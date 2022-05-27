import { Container, Grid, Typography } from '@mui/material';
import React from 'react';

const About = () => {
    return (
        <div className='About'>
            <div className="about-section">
                <Container>
                    <h2 style={{ color: 'white', fontSize: '40px', lineHeight: '64px', marginBottom: '20px' }}>Sometimes, The Blood <br /> Can Do What Money Cannot.”</h2>
                </Container>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={3}>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '52px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i>
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '28px', fontWeight: '500' }} variant="h6" component="div" >
                                8 Blood Groups
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '52px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-handshake-simple"></i>
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '28px', fontWeight: '500' }} variant="h6" component="div" >
                                500 Volunteer
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '52px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-map-location-dot"></i>
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '28px', fontWeight: '500' }} variant="h6" component="div" >
                                64 District
                            </Typography>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '52px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-users"></i>
                            </Typography>
                            <Typography sx={{ color: '#fff', fontSize: '28px', fontWeight: '500' }} variant="h6" component="div" >
                                1500 Donors
                            </Typography>
                        </Grid>

                    </Grid>
                </Container>
            </div>
        </div>
    );
};

export default About;