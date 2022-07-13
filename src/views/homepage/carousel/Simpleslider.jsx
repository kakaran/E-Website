import React from "react";
import Slider from "react-slick";
import {Carousellinks} from "./Carousellinks";
import "./carousel.css"
export default function Simpleslider() 
{
    const settings = {
      dots: true,
      fade: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      arrows:true,
      slidesToScroll: 1,
      className: "slides"
    };
    return (
      <div className="App" >

        <Slider {...settings}>
          {Carousellinks.map((photo)=>
          {
            return(
              <div>
              <img  className="imgHeight" width="100%" src={photo.imgaddress}  alt="this is phto"/>
              </div>
            );
          })}
        </Slider>
      </div>
    );
  }
