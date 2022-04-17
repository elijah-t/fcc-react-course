import React from 'react'

/**
Challenge: Build the main section!

Skip 2 aspects of the design for now:
1. The colored bullets in the list
2. The larger React logo on the side

Those will be separate challenges coming up.
*/

/* 
Challenge: Place the gray react logo in the background

Don't use an `img` element, but rather set it as the
`background-image` of the `main` element.

Hint: you'll need to use the following properties:
- background-image
- background-repeat
- background-position

(Or the shorthand `background` property with values for all
those other properties)
*/

export default function Main(){
    return(
        <div className="main-content">
            <h1 className="content-header">Fun facts about React</h1>
            <ul className="content-list">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100k stars on Github</li>
                <li>Is maintained by Meta</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </div>

    )
}