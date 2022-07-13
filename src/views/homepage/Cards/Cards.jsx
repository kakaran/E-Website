import React from 'react'
import "./Card.css"
export default function Cards(props) {
  return (
    <>
        <div className="cardContanier">
            <a href="">
            <img className = "image"src={props.cardimge} alt="product image" />
            <div className="cardHeading">
                <h3>{props.cardheading}</h3>
            </div>
            </a>
        </div>
    </>
  )
}
