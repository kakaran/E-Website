import React from 'react'
import Cards from '../Cards/Cards';
import { CardDeatil } from '../Cards/CardDetail';
import "./FProduct.css"

export default function FeaturedProduct() {
  return (
    <>
        <div className="headingContanier">
            <h3 className='Heading'>featured products</h3>
            <div className="HeadingButton">
            <a href="">
            <button>shop all products</button>
            </a>
            </div>
        </div>
        <div className="cardsHolder">
          {CardDeatil.map((val)=>
          {
            return(
              <div className="cardgaping">
              <Cards 
              cardimge = {val.cardimage }
              cardheading = {val.cardHeading}/>
              </div>
            );
          })}
        
        </div>
    </>
  );
}
