import React from 'react'
import './forgotPassword.css'
import ForgotPasswordPath from './ForgotPasswordPath'
import { Outlet, useNavigate } from 'react-router-dom'
import { AiOutlineArrowLeft } from 'react-icons/ai'

function ForgotPassword() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); //go back to previous route
  };
  
  return (
    <>
      <aside className="forgot-pass-page" style={{width: "50%"}} >
        <section className="forgot-pass-container">
          <div className="forgot-pass-go-back" onClick={goBack}><AiOutlineArrowLeft /></div>
          <ForgotPasswordPath />
          <Outlet />
          <p className="footer-center">2023 Learnify. All Rights Reserved</p>
        </section>
      </aside>
    </>
  )
}

export default ForgotPassword