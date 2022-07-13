import React from "react";
import imgnav from "../../assets/Images/NavbarImage/imgnav.jpg"
import "./navbar.css"

export default function Navbared() {
  return (
    <>
      <div className="topNavContainer">
        <a href="#00">
          <div className="topNav">free shipping for orders over $49</div>
        </a>
      </div>
        <div className="NavBarContainer">
            <div className="NavLogo"><img src={imgnav} alt="" /></div>
            <div className="NavElements">
            <a href="">Home</a>
            <a href="">About</a>
            <a href="">Login</a>
            </div>
        </div>
    </>
  );
}
