import { CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useDonor from '../../hooks/useDonor';
import TableData from '../TableData/TableData';

const BloodRequest = () => {
    const { userInfo, loading, setLoading } = useDonor()
    const [req, setReq] = useState({});

    useEffect(() => {
        setLoading(true)
        fetch(`https://kcp-blood-bank-server.herokuapp.com/request/${userInfo?.bloodGroup}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setReq(data)
            })
            .catch(error => console.log(error.message))
            .finally(() => setLoading(false))

    }, []);

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
                Total Blood Request: {req?.length}
            </Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Appointments table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Age</TableCell>
                            <TableCell align="center">Blood Group</TableCell>
                            <TableCell align="center">Email</TableCell>
                            <TableCell align="center">Mobile</TableCell>
                            <TableCell align="center">Location</TableCell>
                            <TableCell align="center">Reason</TableCell>
                            <TableCell align="center">Status</TableCell>
                            <TableCell align="center">Action</TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {req.length > 0 && req.map((re) => (
                            <TableData key={re._id} re={re} />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default BloodRequest;