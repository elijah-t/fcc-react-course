import React from 'react'
import facebookLogo from '../images/facebook.png'
import instagramLogo from '../images/instagram.png'
import githubLogo from '../images/github.png'

export default function Footer() {
    return(
        <div className="footer-container">
            <a href="https://www.facebook.com/profile.php?id=100009399268788">
                <img src={facebookLogo} className="facebook-logo" alt=""></img>
            </a>
            <a href="https://www.instagram.com/elijah._t_/">
                <img src={instagramLogo} className="instagram-logo" alt=""></img>
            </a>
            <a href="https://github.com/elijah-t">
                <img src={githubLogo} className="github-logo" alt=""></img>
            </a>
        </div>
    )
}