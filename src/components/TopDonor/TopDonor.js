import * as React from 'react';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#18183A',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const TopDonor = () => {
    return (
        <div className='TopDonor'>
            <Typography sx={{ color: '#18183A', margin: '20px 0 40px 0', fontSize: '42px', fontWeight: '700' }} variant="h3" component="div" >
                Top Donors
            </Typography>
            <Container>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <Item>
                            <img className='donor-img' src="https://blood.dbcnews.org/assets/images/donor/62373f9ef223e1647787934.jpg" alt="" />
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> A+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> A+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> A+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Container>
            {/* <Container>
                <Grid container spacing={2}>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> A+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> A-
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> B+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> B-
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> O+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> O-
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> AB+
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={6} md={3}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', margin: '10px 0', fontSize: '36px', fontWeight: '700' }} variant="h5" component="div" >
                                <i className="fa-solid fa-droplet"></i> AB-
                            </Typography>
                            <Typography sx={{ color: '#fff', marginBottom: '10px', fontSize: '16px', fontWeight: '700' }} variant="h6" component="div" >
                                (3)
                            </Typography>
                        </Item>
                    </Grid>
                </Grid>
            </Container> */}
        </div>
    );
};

export default TopDonor;