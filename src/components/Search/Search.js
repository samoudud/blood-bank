import { Button, Container, Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const navigate = useNavigate();

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        navigate("/login", { state: data })
    }


    return (
        <div className='Search'>
            <Container>
                <Grid container spacing={0} sx={{ background: 'white', padding: '10px', borderRadius: '10px' }}>
                    <Grid item xs={12} md={5}>
                        <TextField
                            sx={{ background: 'white', width: '99%' }}
                            id="outlined-select-currency"
                            select
                            label="Blood Group"
                            {...register("group")}
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
                            <MenuItem value="AB+">
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
                    </Grid>
                    <Grid item xs={12} md={5}>
                        <TextField
                            sx={{ background: 'white', width: '99%' }}
                            id="outlined-select-currency"
                            select
                            label="Location"
                            {...register("location")}
                        >

                            <MenuItem value="dhaka">
                                Dhaka
                            </MenuItem>
                            <MenuItem value="Khulna">
                                Khulna
                            </MenuItem>

                        </TextField>
                    </Grid>
                    <Grid item xs={12} md={2}>
                        <Button onClick={handleSubmit(onSubmit)} sx={{ width: "99%", height: '100%', background: '#E33D3C', color: 'white' }} variant="outlined">Search</Button>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};

export default Search;