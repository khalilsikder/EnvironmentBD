import React from 'react';
import Navbar from '../../Feature/Navbar/Navbar';
import Banner from '../../Feature/Banner/Banner';
import Slider from '../../Feature/slider/slider';
import Card from '../../components/card/Card';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Slider></Slider>
           <Card></Card>
        </div>
    );
};

export default Home;