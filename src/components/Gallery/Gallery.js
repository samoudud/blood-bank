import { Grid, Typography } from '@mui/material';
import React from 'react';
import camp1 from '../../images/camp-1.jpg';
import camp2 from '../../images/camp-2.jpg';
import camp3 from '../../images/camp-3.jpg';
import camp4 from '../../images/camp-4.jpg';
import camp5 from '../../images/camp-5.jpg';
import camp6 from '../../images/camp-6.jpg';

const Gallery = () => {
    return (
        <div className='Gallery'>
            <Typography sx={{ color: '#18183A', margin: '40px 0', fontSize: '36px', fontWeight: '700' }} variant="h3" component="div" >
                Gallery
            </Typography>
            <Grid container >
                <Grid item xs={6} md={4}>
                    <img className='cover' src={camp1} alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img className='cover' src={camp2} alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img className='cover' src={camp3} alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img className='cover' src={camp4} alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img className='cover' src={camp5} alt="" />
                </Grid>
                <Grid item xs={6} md={4}>
                    <img className='cover' src={camp6} alt="" />
                </Grid>
            </Grid>

        </div>
    );
};

export default Gallery;