import React from 'react'
import Elijah from '../images/me.png'
import emailIcon from '../images/email.png'
import linkedinIcon from '../images/linkedin.png'

export default function Info(){
    return (
        <div className="info-container">
            <img className="info-photo" src={Elijah} alt="Elijah Tungul"></img>
            <h1 className="info-name">Elijah Tungul</h1>
            <h3 className="info-title">Frontend Developer</h3>
            <p className="info-website">*insert website here*</p>
            <div>
                <a href="mailto:elitungul@gmail.com">
                    <button className="email-button" type="button">
                        <img className="email-icon" src={emailIcon} alt=""></img> 
                        Email
                    </button>
                </a>
                <a href="https://www.linkedin.com/in/elijah-tungul/">
                    <button className="linkedin-button" type="button">
                        <img className="linkedin-icon" src={linkedinIcon} alt=""></img>
                        LinkedIn
                    </button>
                </a>
            </div>
        </div>
    )
}