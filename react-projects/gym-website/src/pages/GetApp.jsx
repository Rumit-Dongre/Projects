import React from 'react'
import '../styles/getapp.css'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
const GetApp = () => {
    return (
        <>

            <Navbar/>
            <div className='getapp'>

                <div className="card">
                    <h1>For Android Users</h1>
                    <p>Download the app from playstore</p>
                    <input type="submit"
                        className='input'
                        value="Download" />

                </div>
                <div className="card">
                    <h1>For IOS Users</h1>
                    <p>Download the app from appstore</p>
                    <input type="submit"
                     className='input'
                        value="Download" />
                    
                </div>
                <div className="card">
                    <h1>For Linux Users</h1>
                    <p>Download the app from github</p>
                    <input type="submit"
                     className='input'
                        value="Download" /> 
                </div>
                
            </div>

            <Footer/>

        </>
    )
}

export default GetApp