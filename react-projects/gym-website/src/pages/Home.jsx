import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../Component/Navbar'

import mainImage from '../images/gym.jpg'

import '../styles/home.css'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <>

      <Navbar />
      <div className='home'>


        <div className="contain">

          <h1>redefining the
            <br />
            <span>Fitness</span> Experience
          </h1>


          <h4>Helping you achieve your fitness goals</h4>

          <button className='btn'>Book a free Sesssion</button>

        </div>


      </div>

      <Footer/>

    </>
  )
}

export default Home
