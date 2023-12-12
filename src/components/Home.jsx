import React from "react";
import Navbar from './Navbar.jsx';
import Hero from "./Hero";
import Advertise from "./Advertise";
import Newsletter from "./Newsletter";
import Cards from "./Cards";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <Advertise/>
    <Newsletter/>
    <Cards/>
    <Footer/>
    </>
  )
}

export default Home