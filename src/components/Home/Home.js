import React from 'react';
import Banner from '../Banner/Banner';
import DonorBanner from '../DonorBanner/DonorBanner';
import TopDonor from '../TopDonor/TopDonor';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DonorBanner></DonorBanner>
            <TopDonor></TopDonor>
            <h2>This is home</h2>
        </div>
    );
};

export default Home;