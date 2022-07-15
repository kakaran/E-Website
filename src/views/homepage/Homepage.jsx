import React from "react";
import Simpleslider from "./carousel/Simpleslider"
import HomeBar from "./homeBar/HomeBar";
import Footer from "../../components/footer/Footer";
import Navbared from "../../components/navbar/Navbared";
import ShortAbout from "./ShortAbout/ShortAbout";
export default function HomePage()
{   

    
    
    return(
        <>
        <Navbared />
        <Simpleslider/>
        <HomeBar />
        <ShortAbout/>
        <Footer />
        </>
    );
}