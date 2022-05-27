import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DonorBanner from '../DonorBanner/DonorBanner';
import Faq from '../Faq/Faq';
import Gallery from '../Gallery/Gallery';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DonorBanner></DonorBanner>
            <About></About>
            <Reviews></Reviews>
            <Gallery></Gallery>

            <Faq></Faq>
        </div>
    );
};

export default Home;