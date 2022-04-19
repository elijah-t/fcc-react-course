import React from 'react'
import phoneIcon from "../images/phone-icon.png"
import mailIcon from "../images/mail-icon.png"

export default function Contact(props) {
    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src={phoneIcon} />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src={mailIcon} />
                <p>{props.email}</p>
            </div>
        </div>
    )
}

// {
//     "img": "/static/media/mr-whiskerson.d8194635a0fe9928c0de.png",
//     "name": "Mr. Whiskerson",
//     "phone": "(212) 555-1234",
//     "email": "mr.whiskaz@catnap.meow"
// }