import React from 'react';
import Catalog from '../catalog/Catalog';
import Banner from '../banner/Banner';
import scss from "./home.module.scss"

const Home = () => {
    return (
        <div className={scss.home}>
            <Catalog/>
            <Banner/>
        </div>
    );
};

export default Home;