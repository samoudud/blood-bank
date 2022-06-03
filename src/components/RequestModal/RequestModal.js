import { Button, Modal, Stack, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import React from 'react';
import { useState } from 'react';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'white',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    color: 'white',
    mx: 'auto'
};
const RequestModal = ({ bloodGroup }) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [reqInfo, setReqInfo] = useState({
        bloodGroup: bloodGroup,
        status: 'pending'
    })
    const handleOnBlur = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newReqInfo = { ...reqInfo };
        newReqInfo[field] = value;
        setReqInfo(newReqInfo);
    }

    const handleRequest = (e) => {
        e.preventDefault();
        console.log(reqInfo)
        fetch('https://kcp-blood-bank-server.herokuapp.com/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reqInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Request successful');

                }
            })
            .catch((error) => {
            });
        setOpen(false)
    }

    return (
        <div>
            <Button onClick={handleOpen} sx={{ m: 1, p: 2, background: '#E33D3C', color: 'white', '&:hover': { background: '#E33D3C' } }}>Send Blood Request</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <form onSubmit={handleRequest}>
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Patient Name"
                            required
                            name='displayName'
                            onInput={handleOnBlur} variant="outlined"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Age"
                            required
                            type='number'
                            name='age'
                            onInput={handleOnBlur} variant="outlined"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Location"
                            required
                            name='location'
                            onInput={handleOnBlur} variant="outlined"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Reason"
                            required
                            name='reason'
                            onInput={handleOnBlur} variant="outlined"
                        />
                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Mobile"
                            required
                            name='mobile'
                            onInput={handleOnBlur} variant="outlined"
                        />

                        <TextField
                            sx={{ width: '95%', m: 1 }}
                            label="Your Email"
                            required
                            name='email'
                            type='email'
                            onInput={handleOnBlur} variant="outlined"
                        />

                        <Button
                            sx={{ width: '95%', m: 1, p: 1, background: '#E33D3C', '&:hover': { background: '#E33D3C' } }} variant='contained'
                            type='submit'
                        >Send</Button>


                    </form>
                </Box>
            </Modal>
        </div >
    );
};

export default RequestModal;