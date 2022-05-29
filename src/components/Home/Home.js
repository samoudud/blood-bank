import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import DonorBanner from '../DonorBanner/DonorBanner';
import Faq from '../Faq/Faq';
import Footer from '../Footer/Footer';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Reviews from '../Reviews/Reviews';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <DonorBanner></DonorBanner>
            <About></About>
            <Reviews></Reviews>
            <Gallery></Gallery>

            <Faq></Faq>
            <Footer></Footer>
        </div>
    );
};

export default Home;