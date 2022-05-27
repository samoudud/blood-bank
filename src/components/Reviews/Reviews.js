import { styled } from '@mui/material/styles';
import { Container, Grid, Paper, Rating, Typography } from '@mui/material';
import React from 'react';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#18183A',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Reviews = () => {
    return (
        <div className='Reviews'>
            <Container >
                <Typography sx={{ color: '#18183A', margin: '40px 0', fontSize: '36px', fontWeight: '700' }} variant="h3" component="div" >
                    Reviews
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                Alex Rudro
                            </Typography>
                            <Typography sx={{ color: '#fff' }} variant="h6" gutterBottom component="div">
                                The whole experience was absolutely amazing. Thank you to the team for the perfect organization of the event.
                            </Typography>
                            <Typography>
                                <Rating sx={{ color: '#FB3640' }} name="read-only" value={5} readOnly />
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                Ketty Perry
                            </Typography>
                            <Typography sx={{ color: '#fff' }} variant="h6" gutterBottom component="div">
                                The whole experience was absolutely amazing. Thank you to the team for the perfect organization of the event.
                            </Typography>
                            <Typography>
                                <Rating sx={{ color: '#FB3640' }} name="read-only" value={4} readOnly />
                            </Typography>
                        </Item>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Item>
                            <Typography sx={{ color: '#FB3640', fontWeight: 600 }} variant="h5" gutterBottom component="div">
                                Dawid Mallan
                            </Typography>
                            <Typography sx={{ color: '#fff' }} variant="h6" gutterBottom component="div">
                                The whole experience was absolutely amazing. Thank you to the team for the perfect organization of the event.
                            </Typography>
                            <Typography>
                                <Rating sx={{ color: '#FB3640' }} name="read-only" value={5} readOnly />
                            </Typography>
                        </Item>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;