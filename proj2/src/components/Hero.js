import React from 'react'
import photoGrid from '../images/photo-grid.png'

/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/

export default function Hero(){
    return (
        <section className="hero-container">
            <img className="photo-grid" src={photoGrid}></img>
            <h1 className="hero-title">Online Experiences</h1>
            <h4 className="hero-text">
                Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.
            </h4>
        </section>
    )
}