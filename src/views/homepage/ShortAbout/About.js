import React from "react";
import "./About.css";
import pic from "../../../assets/Images/AboutImage/About.jpg";

export default function About() {
  return (
    <>
      <div className="aboutContanier">
        <div className="aboutImage">
          <img src={pic} alt="Image" />
        </div>
        <div className="aboutinformation">
          <h2 className="title">About Us</h2>
          <h1 className="nameweb">MOLLYJOGGER STORY</h1>
          <p className="description">
            Mollyjogger <sup>TM</sup> is an authentic American heritage brand, based in the
            Ozark Mountains, celebrating the region’s unique history of outdoor
            recreation, sporting and folklore.
          </p>
          <a href="">
            <button className="aboutbutton">Read our Story</button>
          </a>
        </div>
      </div>
    </>
  );
}
