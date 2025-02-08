import React from 'react'
import  '../styles/footer.css'

const Footer = () => {
    return (
        <>

            <div className='footer'>

                <div className="div1">
                    <i class="ri-facebook-line"></i>
                    <i class="ri-twitter-x-line"></i>
                    <i class="ri-twitch-line"></i>
                    <i class="ri-medium-line"></i>
                </div>

                <div className="div2">
                   <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                   </ul>

                </div>

                <div className="div3">
                    <div>

                    &copy;2025 Fitness GYM Dummy Website by Me <a href="https://github.com/Rumit-Dongre"> Rumit </a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Footer