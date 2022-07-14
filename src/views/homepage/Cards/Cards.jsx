import React, { useState } from 'react'
import "./Card.css"
export default function Cards(props) {

  const [value,setValue] = useState(0);

  return (
    <>
        <div className="cardContanier">
            <a href="">
            <img className = "image"src={props.cardimge} alt="product image"/>
            <div className="cardHeading">
                <h3>{props.cardheading }</h3>
            </div>
              </a   >
            <div className="counter">
              <button onClick={()=>
              {
                setValue(value-1);
              }}>-</button>
              <h2>{value}</h2>
              <button onClick = {()=>
              {
                setValue(value+1);
              }}>+</button>
            </div>

        </div>
    </>
  )
}
