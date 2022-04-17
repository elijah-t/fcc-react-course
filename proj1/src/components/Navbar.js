import React from 'react'
import reactLogo from '../images/reactjs-icon.png'

/**
Challenge: Complete the Navbar to match the design

Hint: use the Figma file for the most accurate peek at the design
(colors, sizes, fonts, etc.)
*/

export default function Navbar() {
    return (
        <nav className="nav-container">
            <img src={reactLogo} className="nav-icon"></img>
            <h2 className="nav-title">ReactFacts</h2>
            <h3 className="nav-subtitle">React Course - Project 1</h3>
        </nav>
    )
}