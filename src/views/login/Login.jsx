import React from 'react'
import Navbared from "../../components/navbar/Navbared"
import Footer from "../../components/footer/Footer"
import LoginForm from './loginform/LoginForm'
export default function Login() {
  return (
    <>
        <Navbared />
        <LoginForm/>
        <Footer />
    </>
  )
}
