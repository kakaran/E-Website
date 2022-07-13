import React from 'react'
import second from "../../../assets/Images/homebarimage/second.jpg";
import first from "../../../assets/Images/homebarimage/first.jpg";
import third from "../../../assets/Images/homebarimage/third.jpg";
import "./HomeBar.css"
export default function HomeBar() {
  return (
    <>
        <div className="HomeBarContainer">
            <img src={first} alt="image" />
            <img src={second} alt="image" />
            <img src={third} alt="image" />
        </div>
    </>
  )
}
