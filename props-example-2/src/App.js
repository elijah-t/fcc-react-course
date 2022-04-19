import React from "react"
import Contact from "./components/Contact"
import Whiskerson from "./images/mr-whiskerson.png"
import Fluffykins from "./images/fluffykins.png"
import Felix from "./images/felix.png"
import Pumpkin from "./images/pumpkin.png"

/* 
Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?

Challenge: Add all the rest of the 
data to the Contact card instances
*/

function App() {
    return (
        <div className="contacts">
        <Contact 
            img={Whiskerson}
            name="Mr. Whiskerson"
            phone="(212) 555-1234"
            email="mr.whiskaz@catnap.meow"
        />
        <Contact 
            img={Fluffykins}
            name="Fluffykins"
            phone="(212) 555-2345"
            email="fluff@me.com"
        />
        <Contact 
            img={Felix}
            name="Felix"
            phone="(212) 555-4567"
            email="thecat@hotmail.com"
        />
        <Contact 
            img={Pumpkin}
            name="Pumpkin"
            phone="(0800) CAT KING"
            email="pumpkin@scrimba.com"
        />
            
        </div>
    )
}

    // <div className="contact-card">
    //     <img src={Fluffykins}/>
    //     <h3>Fluffykins</h3>
    //     <div className="info-group">
    //         <img src={phoneIcon} />
    //         <p>(212) 555-2345</p>
    //     </div>
    //     <div className="info-group">
    //         <img src={mailIcon} />
    //         <p>fluff@me.com</p>
    //     </div>
    // </div>
    
    // <div className="contact-card">
    //     <img src={Felix}/>
    //     <h3>Felix</h3>
    //     <div className="info-group">
    //         <img src={phoneIcon} />
    //         <p>(212) 555-4567</p>
    //     </div>
    //     <div className="info-group">
    //         <img src={mailIcon} />
    //         <p>thecat@hotmail.com</p>
    //     </div>
    // </div>
    
    // <div className="contact-card">
    //     <img src={Pumpkin}/>
    //     <h3>Pumpkin</h3>
    //     <div className="info-group">
    //         <img src={phoneIcon} />
    //         <p>(0800) CAT KING</p>
    //     </div>
    //     <div className="info-group">
    //         <img src={mailIcon} />
    //         <p>pumpkin@scrimba.com</p>
    //     </div>
    // </div>

export default App