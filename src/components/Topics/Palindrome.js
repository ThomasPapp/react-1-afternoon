import React, { Component } from 'react'

class Palindrome extends Component {

    constructor() {
        super()
        this.state = {
            userInput: "",
            palindrome: ""
        }

        // method binding
        this.updateInput = this.updateInput.bind(this)
        this.check = this.check.bind(this)
    }

    updateInput(e) {
        this.setState({ userInput: e.target.value })
    }

    check() {
        const word = this.state.userInput
        let palindrome = ""
        for (let i = word.length - 1; i >= 0; i--) {
            palindrome += word[i]
        }

        palindrome = palindrome === word ? "true" : "false"
        this.setState({ palindrome, userInput: "" })
    }

    render() {
        return(

            <div className="puzzleBox palindromePB">
                <h4>Palindrome</h4>

                <input className="inputLine" onChange={this.updateInput} value={this.state.userInput}/>

                <button className="confirmationButton" onClick={this.check}>Check</button>

                <span className="resultsBox">Palindrome: {this.state.palindrome}</span>
            </div>
            
        )
    }

}

export default Palindrome