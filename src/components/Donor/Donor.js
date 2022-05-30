import React from 'react';
import { Outlet } from 'react-router-dom';

const Donor = () => {
    return (
        <div>
            <h2>Find Donor</h2>
            <Outlet />
        </div>
    );
};

export default Donor;