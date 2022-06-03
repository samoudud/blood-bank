import { Alert, AlertTitle, Button, Grid, Paper, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [isAdded, setIsAdded] = useState(false)
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleMakeAdmin = e => {
        const user = { email };
        fetch('https://kcp-blood-bank-server.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    setIsAdded(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <Grid container spacing={4}>
                <Grid item sx={{ mt: 8, mx: 'auto' }} xs={12} md={6}>
                    <Paper sx={{ pb: 5, pt: 2 }} elevation={5}>
                        <Typography sx={{ color: '#18183A', margin: '30px 0', fontSize: '30px', fontWeight: '700' }} variant="h3" component="div" >
                            Make Admin
                        </Typography>
                        <form onSubmit={handleMakeAdmin}>
                            <TextField
                                sx={{ width: '50%' }}
                                label="Email"
                                type='email'
                                required
                                variant="outlined"
                                onBlur={handleOnBlur}
                            />
                            <Button sx={{ py: 2, background: '#E33D3C', '&:hover': { background: '#E33D3C' } }} variant='contained' type='submit'>Make Admin</Button>
                            {
                                isAdded &&
                                <Alert sx={{ mt: 2 }} severity="success">
                                    <AlertTitle>Admin Added</AlertTitle>
                                    New Admin Added Successfully — <strong>check it out!</strong>
                                </Alert>
                            }
                        </form>
                    </Paper>

                </Grid>
            </Grid>

        </div>
    );
};

export default MakeAdmin;