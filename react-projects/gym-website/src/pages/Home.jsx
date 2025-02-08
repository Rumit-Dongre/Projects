import React from 'react'
import { Route, Routes } from 'react-router'
import Navbar from '../Component/Navbar'

import mainImage from '../images/gym.jpg'
import { motion } from "motion/react"

import '../styles/home.css'
import Footer from '../Component/Footer'

const Home = () => {
  return (
    <>

      <Navbar />
      <div className='home'>


        <div className="contain">

          <motion.h1
            initial={{
              y: -200,
              color: "red"
            }}
            animate={{
              y: 0,
              color: "white"
            }}
            transition={{
              duration: 2
            }}
          >redefining the
            <br />
            <span>Fitness</span> Experience
          </motion.h1>


          <h4>Helping you achieve your fitness goals</h4>

          <motion.button 
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          drag
          className='btn'>Book a free Sesssion</motion.button>

        </div>


      </div>

      <Footer />

    </>
  )
}

export default Home
