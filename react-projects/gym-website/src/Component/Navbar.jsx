import React, { useState, useRef, useEffect } from 'react'
import '../styles/navbar.css'
import { Link, NavLink } from 'react-router'


const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const navRef = useRef(null)
    const hm = useRef(null)

    useEffect(() => {
        window.addEventListener("touchmove", () => {
            hm.current.style.display = 'block'
            navRef.current.style.display = 'none'
        })

        return () => {
            window.removeEventListener("touchmove", hm)
        }
    })
    return (
        <>
            <nav className='navbar'>

                <div className='left'>
                    <Link to={'/'}>
                    <h1>Fitness GYM</h1>
                    </Link>

                </div>

                <div ref={hm} className="icon">

                    <i
                        onClick={() => {
                            // const element = document.querySelector(".right");
                            // const icon = document.querySelector(".icon");
                            // console.log(element)
                            // element.style.display = isOpen ? "none" : "block";


                            // icon.style.display = 'none'

                            navRef.current.style.display = isOpen ? "none" : "block";
                            hm.current.style.display = 'none'

                            setIsOpen(!isOpen);

                        }}
                        class="ri-menu-5-fill icon"></i>
                </div>


                <div ref={navRef} className='right'>

                    <ul className='list'>



                        <NavLink
                            to={'/'}
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                        >
                            Home
                        </NavLink>

                        <NavLink
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                            to={'/getapp'}
                        >Get app</NavLink>


                        <NavLink
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                        >Book a Free Session</NavLink>


                        <NavLink

                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}>Client Schedule</NavLink>


                        <NavLink
                            className={({ isActive }) => isActive ? "active-link" : "inactive-link"}
                        >Class</NavLink>
                    </ul>
                </div>


            </nav>
        </>
    )
}

export default Navbar