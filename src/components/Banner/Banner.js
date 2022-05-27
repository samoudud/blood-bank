import { Box } from '@mui/system';
import React from 'react';
import Search from '../Search/Search';

const Banner = () => {
    return (
        <div className='Banner'>
            <div className="hero">
                <h2 style={{ color: 'white', fontSize: '56px', lineHeight: '72px', marginBottom: '40px' }}>Donate blood and be the reason for <br /> a smile on someone’s face</h2>
                {/* <Link to='/donor' style={{ textDecoration: 'none' }}><Button sx={{ background: '#E33D3C', padding: '10px 15px', color: 'white', border: '1px solid #E33D3C', borderRadius: '5px', fontSize: '16px', '&:hover': { background: '#E33D3C' } }}>Looking For Donor?</Button></Link> */}
                <Box>
                    <Search />
                </Box>
            </div>
        </div>
    );
};

export default Banner;