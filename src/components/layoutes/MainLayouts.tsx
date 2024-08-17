import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../Feature/Navbar/Navbar';
import Footer from '../../Feature/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default MainLayout;