import { Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useDonor from '../../hooks/useDonor';

const ManageDonors = () => {
    const { userInfo, loading, setLoading } = useDonor()
    const [req, setReq] = useState({});


    const handleCancel = id => {
        const prompt = window.confirm("Are you sure?");
        if (prompt) {
            const url = `https://kcp-blood-bank-server.herokuapp.com/allDonor/${id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        alert("Successfully deleted");
                        const remaining = req.filter(re => re._id !== id);
                        setReq(remaining);
                    }
                })
        }

    }

    useEffect(() => {
        setLoading(true)
        fetch(`https://kcp-blood-bank-server.herokuapp.com/allDonor`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReq(data)
            })
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false))

    }, [userInfo?.email]);

    if (loading) {
        return <div>
            <CircularProgress color="secondary" />
            <CircularProgress color="success" />
            <CircularProgress color="inherit" />
        </div>
    }



    return (
        <div>
            <Typography sx={{ color: '#18183A', margin: '40px 0', fontSize: '36px', fontWeight: '700' }} variant="h3" component="div" >
                Total Donors: {req?.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Gander</TableCell>
                            <TableCell align="center">Blood Group</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Mobile</TableCell>
                            <TableCell align="center">Location</TableCell>
                            <TableCell align="center">Last Donation</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {req.length > 0 && req.map((re) => (
                            <TableRow
                                key={re._id}
                                re={re}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell align="center">{re.displayName}</TableCell>
                                <TableCell align="center">{re.age}</TableCell>
                                <TableCell align="center">{re.gander}</TableCell>
                                <TableCell align="center">{re.bloodGroup}</TableCell>
                                <TableCell align="center">{re.email}</TableCell>
                                <TableCell align="center">{re.mobile}</TableCell>
                                <TableCell align="center">{re.address}</TableCell>
                                <TableCell align="center">{re.lDonate}</TableCell>
                                <TableCell align="center"><Button sx={{ width: '75%', m: 1, p: 1, background: '#E33D3C', color: 'white', '&:hover': { background: '#E33D3C' } }} onClick={() => handleCancel(re._id)}>Delete</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageDonors;