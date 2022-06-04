import React from 'react';
import MySelf from '../../MySelf/MySelf';
import Newsletter from '../../Newsletter/Newsletter';
import Banner from '../Banner/Banner';
import MyWork from '../MyWork/MyWork';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <MySelf></MySelf>
            <Services></Services>
            <MyWork></MyWork>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;