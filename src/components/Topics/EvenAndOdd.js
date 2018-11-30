import React, { Component } from 'react'

class EvenAndOdd extends Component {

    constructor() {
        super()
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ""
        }

        // method binding
        this.updateInput = this.updateInput.bind(this)
        this.updateResults = this.updateResults.bind(this)
        this.displayResults = this.displayResults.bind(this)
    }

    updateInput(e) {
        this.setState({ userInput: e.target.value })
    }

    updateResults(e) {
        const input = this.state.userInput.replace(/\s/g, "")

        // an array containing all of the values in the input
        const inputVals = input.split(",")

        const evenArray = inputVals.filter(val => val % 2 === 0 && !isNaN(val))
        const oddArray = inputVals.filter(val => val % 2 !== 0 && !isNaN(val))

        this.setState({ evenArray, oddArray, userInput: "" })
    }

    displayResults(even) {
        let str = "["
        const nums = even ? this.state.evenArray : this.state.oddArray
        nums.forEach((num, i) => {
            str += num
            if (i < nums.length - 1)
                str += ", "
        })
        return str += "]"
    }

    render() {
        return(

            <div className="puzzleBox evenAndOddPB">
                <h4>Evens and Odds</h4>

                <input className="inputLine" onChange={this.updateInput} value={this.state.userInput}/>

                <button className="confirmationButton" onClick={this.updateResults}>Split</button>

                <span className="resultsBox">Evens: {this.displayResults(true)}</span>

                <span className="resultsBox">Odds: {this.displayResults(false)}</span>
            </div>

            
        )
    }

}

export default EvenAndOdd