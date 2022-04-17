/* Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside*/

// ReactDOM.render(
//     <ul>
//         <li>Thing 1</li>
//         <li>Thing 2</li>
//     </ul>,
//     document.getElementById("root")
// )

// function Navbar() {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light bg-light">
//             <a className="navbar-brand" href="#">Navbar</a>
//             <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                 <span className="navbar-toggler-icon"></span>
//             </button>

//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                 <ul className="navbar-nav mr-auto">
//                 <li className="nav-item active">
//                     <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link" href="#">Link</a>
//                 </li>
//                 <li className="nav-item dropdown">
//                     <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                     Dropdown
//                     </a>
//                     <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//                     <a className="dropdown-item" href="#">Action</a>
//                     <a className="dropdown-item" href="#">Another action</a>
//                     <div className="dropdown-divider"></div>
//                     <a className="dropdown-item" href="#">Something else here</a>
//                     </div>
//                 </li>
//                 <li className="nav-item">
//                     <a className="nav-link disabled" href="#">Disabled</a>
//                 </li>
//                 </ul>
//                 <form className="form-inline my-2 my-lg-0">
//                     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
//                     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
//                 </form>
//             </div>
//         </nav>
//     )
// }

// function MainContent() {
//     return (
//         <h1>I'm learning React!</h1>
//     )
// }

// ReactDOM.render(
//     <div>
//         <Navbar />
//         <MainContent />
//     </div>,
//     document.getElementById("root")
// )

//Declarative
// ReactDOM.render(<h1 className="header">Hello, React!</h1>, document.getElementById("root"))

// Imperative
// const h1 = document.createElement("h1");
// h1.textContent = "Hello, React!";
// h1.className = "header";
// document.getElementById("root").append(h1)
// console.log(h1)

/*
{
    "type": "h1",
    "key": null,
    "ref": null,
    "props": {
        "classname": "header",
        "children": "This is JSX"
    },
    "_owner": null,
    "_store": {}
}
*/

//JSX
// const page = (
//     <div>
//         <h1 classname="header">This is JSX</h1>
//         <p>Example paragraph</p>
//     </div>
// )

// const navbar = (
//     <nav>
//         <h1>Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */


// const page = (
//     <div>
//         <h1>This is my page!</h1>
//         <h3>How to see the code:</h3>
//         <ol>
//             <li>Write the React code</li>
//             <li>Save the code</li>
//             <li>See the beautiful front-end design</li>
//         </ol>
//     </div>
// )

// document.getElementById("root").append(page)

// ReactDOM.render(page, document.getElementById("root"))

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */


// const page = (
//     <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K starts on Github</li>
//             <li>Is maintained by Meta</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//     </div>
// )

// ReactDOM.render(page, document.getElementById("root"))


// Components
// function TemporaryName(){
//     return (
//         <div>
//         <img src="./react-logo.png" width="40px" />
//         <h1>Fun facts about React</h1>
//         <ul>
//             <li>Was first released in 2013</li>
//             <li>Was originally created by Jordan Walke</li>
//             <li>Has well over 100K starts on Github</li>
//             <li>Is maintained by Meta</li>
//             <li>Powers thousands of enterprise apps, including mobile apps</li>
//         </ul>
//         </div>
//     )
// }

// ReactDOM.render(<TemporaryName />, document.getElementById("root"))

//import React from "react"
//import ReactDOM from "react-dom" 


/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."

 */

/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

/**
Challenge: 

- Move the `footer` into its own component called "Footer" 
  and render that component inside the Page component.
- Move the `h1` and `ol` together into another component
  called "MainContent" and render inside Page as well.
*/

/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it
*/


/*
Challenge: Move the Footer and MainContent components 
into their own files.
*/

/*
import MainContent from '../components/MainContent'
import Footer from '../components/Footer'
import Header from '../components/Header'
*/

import React from 'react'
import ReactDOM from 'react-dom'
import Header from './Header'
import Footer from './Footer'
import MainContent from './MainContent'
import './index.css'

  // Parent / Child components
  // e.g. Page is a parent component; 
  // Header, MainContent, and Footer are child components
  function App() {
      return (
          <div>
              <Header />
              <MainContent />
              <Footer />
          </div>
      )
  }
  
  // const container = document.getElementById("root")
  // ReactDOM.createRoot(container).render(<Page />)
  
  ReactDOM.render(
      <App />,
      document.getElementById("root")
  )