import React from 'react'
import reactLogo from "./Images/react-logo.png"

export default function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <img src={reactLogo} className="image"></img>
                <ul className="nav-items">
                    <li><a>Pricing</a></li>
                    <li><a>About</a></li>
                    <li><a>Contact</a></li>
                </ul>
            </nav>
            <hr />
        </header>
    )
  }
  