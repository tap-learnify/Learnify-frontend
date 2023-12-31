import React, { useContext, useState }from 'react'
import './heroSection.css'
import backgroundImg from '../../assets/heroBackgroundImage.png'
import { AiOutlineArrowRight } from 'react-icons/ai'
import SearchBar from '../searchBar/SearchBar'
import { AuthContext } from '../../hooks/context.jsx'
import NewCareerBanner from '../Banner/NewCareerBanner.jsx'

function HeroSection() {
  const {isLoggedIn, userName, visible} = useContext(AuthContext)
  

  return (
    <>
        <div className="hero-container">
          <div className="white-box"></div>
          <div className="yellow-box"></div>

          {visible && <NewCareerBanner />}
          <div className="hero-wrapper">
            <div className="hero-content">
              {!isLoggedIn
              ? (
                  <div className="hero-text">
                    <h2>Learning is the source <br/> of human progress.</h2>
                  </div>
                ) 
              : (
                  <div className="hero-text">
                    <h2>Welcome back {userName}</h2>
                    <h3>What are we learning today?</h3>
                  </div>
                )
              }
              <div className="popular-div">
                <p>Popular</p>
                <button className="popular-btn">UI/UX Design</button>
                <button className="popular-btn">Cyber Security</button>
                <button className="popular-btn">Cloud Computing</button>
              </div>
              <SearchBar className="hero-search"/>
              {isLoggedIn && <p className="search-under-text">Search for Tutors and Mentors</p>}


              {/* {!isLoggedIn && 
                <div className="gs-btn">
                  <button className="get-started-btn">Get Started Now <AiOutlineArrowRight className="arrow-logo"/></button>
                </div>
              } */}
            </div>

            <div className="bgdImage-wrapper">
              <img src={backgroundImg} alt="hero image" />
            </div>
          </div>
          

        </div>
    </>
  )
}

export default HeroSection