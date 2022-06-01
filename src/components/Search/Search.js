import { Button, Container, Grid, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
    const [searchInfo, setSearchInfo] = useState({
        bloodGroup: '',
        address: ''
    });
    const [bloodGroup, setGroup] = useState('');
    const [location, setLocation] = useState('')

    const handleGroupChange = event => {
        setGroup(event.target.value);
        const newRegisterData = { ...searchInfo };
        newRegisterData['bloodGroup'] = event.target.value;
        setSearchInfo(newRegisterData);
    }

    const handleLocationChange = event => {
        setLocation(event.target.value);
        const newRegisterData = { ...searchInfo };
        newRegisterData['address'] = event.target.value;
        setSearchInfo(newRegisterData);
    }

    const navigate = useNavigate();
    const handleSubmit = () => {
        // navigate("/login", { state: data })
        navigate(`/donors/${searchInfo.bloodGroup}`)
    }


    return (
        <div className='Search'>
            <Container>
                <form onSubmit={handleSubmit}>
                    <Grid container spacing={0} sx={{ background: 'white', padding: '10px', borderRadius: '10px' }}>
                        <Grid item xs={12} md={5}>
                            <TextField
                                sx={{ background: 'white', width: '99%' }}
                                id="outlined-select-currency"
                                select
                                required
                                value={bloodGroup}
                                onChange={handleGroupChange}
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
                        </Grid>
                        <Grid item xs={12} md={5}>
                            <TextField
                                sx={{ background: 'white', width: '99%' }}
                                id="outlined-select-currency"
                                select
                                label="Location"
                                value={location}
                                onChange={handleLocationChange}
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
                            <Button type='submit' sx={{ width: "99%", height: '100%', background: '#E33D3C', color: 'white' }} variant="outlined">Search</Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </div>
    );
};

export default Search;