import { Button, TableCell, TableRow } from '@mui/material';
import React, { useState } from 'react';
import useDonor from '../../hooks/useDonor';

const TableData = ({ re }) => {
    const [status, setStatus] = useState(re.status);
    const { user } = useDonor()

    const handleAccept = re => {
        if (re.status === 'pending') {
            re.status = 'accepted';

            const url = `https://kcp-blood-bank-server.herokuapp.com/request/${re._id}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    status: re.status,
                    donor: user.email
                })
            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        setStatus(re.status)
                        alert('Accepted successfully')
                    }
                })

        }
        else {
            alert('already approved');
        }
    }
    return (
        <TableRow
            key={re._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >

            <TableCell align="center">{re.displayName}</TableCell>
            <TableCell align="center">{re.age}</TableCell>
            <TableCell align="center">{re.bloodGroup}</TableCell>
            <TableCell align="center">{re.email}</TableCell>
            <TableCell align="center">{re.mobile}</TableCell>
            <TableCell align="center">{re.location}</TableCell>
            <TableCell align="center">{re.reason}</TableCell>
            <TableCell align="center">{status}</TableCell>
            <TableCell align="center"><Button sx={{ width: '75%', m: 1, p: 1, background: '#E33D3C', color: 'white', '&:hover': { background: '#E33D3C' } }} onClick={() => handleAccept(re)}>Accept</Button></TableCell>

        </TableRow>
    );
};

export default TableData;