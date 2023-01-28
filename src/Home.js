import React from 'react';
import NavHeader from './components/NavHeader';
import NavBar from './components/NavBar';
import Banner1 from './components/Banner1';
import Banner2 from './components/Banner2';
import BuySell from './components/BuyAndSell';
import Featured from './components/FeaturedProperty';
import NewsLetter from './components/NewsLetter';
import Recommendation from './components/Recommendation';
import Cities from './components/Cities';
import Agent from './components/Agents';
import Blog from './components/Blog';
import Footer from './components/Footer';

const HomePage=()=>{
    return(
    <React.StrictMode>
        <NavHeader />
        <NavBar />
        <Banner1 />
        <Banner2 />
        <BuySell />
        <Featured />
        <NewsLetter />
        <Recommendation />
        <Cities />
        <Agent />
        <Blog />
        <Footer />
    </React.StrictMode>
    )
}
export default HomePage;