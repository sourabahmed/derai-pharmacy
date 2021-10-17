import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Medicines from '../Medicines/Medicines';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Medicines></Medicines>
            <Footer></Footer>
        </div>
    );
};

export default Home;