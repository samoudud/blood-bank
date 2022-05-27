import { Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className="hero">
                <h2 style={{ color: 'white', fontSize: '48px', lineHeight: '72px', marginBottom: '20px' }}>A lot of things hurt. Saving <br /> lives doesn't have to</h2>
                <Link to='/donor' style={{ textDecoration: 'none' }}><Button sx={{ background: '#E33D3C', padding: '10px 15px', color: 'white', border: '1px solid #E33D3C', borderRadius: '5px', fontSize: '16px', '&:hover': { background: '#E33D3C' } }}>Looking For Donor?</Button></Link>
            </div>
        </div>
    );
};

export default Banner;