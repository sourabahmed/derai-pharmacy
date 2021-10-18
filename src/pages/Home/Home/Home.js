import React from 'react';
import Banner from '../Banner/Banner';
import Medicines from '../Medicines/Medicines';
import Diseases from '../Diseases/Diseases';
import Kids from '../Kids/Kids';



const Home = () => {
    return (
        <div>            
            <Banner></Banner>
            <Medicines></Medicines>
            <Diseases></Diseases>
            <Kids></Kids>           
        </div>
    );
};

export default Home;