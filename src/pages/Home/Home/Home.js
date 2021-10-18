import React from 'react';
import Banner from '../Banner/Banner';
import Medicines from '../Medicines/Medicines';
import Diseases from '../Diseases/Diseases';
import Footer from '../Footer/Footer';


const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Medicines></Medicines>
            <Diseases></Diseases>
            <Footer></Footer>
        </div>
    );
};

export default Home;