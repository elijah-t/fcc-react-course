import React from 'react'
import airbnbLogo from '../images/airbnb.png'

/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

export default function Navbar(){
    return (
        <nav className="navbar-container">
            <img src={airbnbLogo}></img>
        </nav>
    )
}