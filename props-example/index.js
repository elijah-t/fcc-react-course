function App() {
    const firstName = "Joe"
    const lastName = "Schmoe"
    const date = new Date()
    const hours = date.getHours()
    let timeOfDay

    if (hours < 12) {
        timeOfDay = "morning"
    } else if (hours >= 12 && hours > 17) {
        timeOfDay = "afternoon"
    } else {
        timeOfDay = "night"
    }
    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     * 
     * Challenge: fix the h1 below to use the timeOfDay
     * string we determined in the code above
     */
    return (
        <div>
            {/* <h1>Hello {firstName + " " + lastName}!</h1> */}
            {/* <h1>It is currently about {hours} o'clock!</h1> */}
            <h1>Good {timeOfDay}!</h1>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
