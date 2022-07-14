import React from 'react'
import Footer from '../../components/footer/Footer'
import Navbared from '../../components/navbar/Navbared'
import FeaturedProduct from "../../views/homepage/featuredProduct/FeaturedProduct"
export default function Product() {
  return (
    <>
        <Navbared />
        <FeaturedProduct />
        <Footer />
    </>
  )
}
