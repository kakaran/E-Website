import React from 'react'
import second from "../../../assets/Images/homebarimage/second.jpg";
import first from "../../../assets/Images/homebarimage/first.jpg";
import third from "../../../assets/Images/homebarimage/third.jpg";
import "./HomeBar.css"
export default function HomeBar() {
  return (
    <>
        <div className="HomeBarContainer">
            <img src={first} alt="pho" />
            <img src={second} alt="pho" />
            <img src={third} alt="pho" />
        </div>
    </>
  )
}
