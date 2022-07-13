import React from "react";
import Simpleslider from "./carousel/Simpleslider"
import FeaturedProduct from "./featuredProduct/FeaturedProduct";
import About from "./ShortAbout/About";
import HomeBar from "./homeBar/HomeBar";
import Footer from "../../components/footer/Footer";
export default function HomePage()
{
    return(
        <>
        <Simpleslider/>
        <FeaturedProduct />
        <HomeBar />
        <About />
        <Footer />
        </>
    );
}