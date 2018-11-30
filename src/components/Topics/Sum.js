import React, { Component } from 'react'

class Sum extends Component {

    constructor() {
        super()
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    calculate = () => {
        const sum = parseInt(this.state.number1, 10) + parseInt(this.state.number2, 10)
        this.setState({ sum, number1: 0, number2: 0 })
    }

    render() {
        return(

            <div className="puzzleBox sumPB">
                <h4>Sum</h4>

                <input 
                type="number"
                className="inputLine" 
                onChange={(e) => this.setState({ number1: e.target.value })}
                value={!this.state.number1 ? "" : this.state.number1}
                />
                <input 
                type="number"
                className="inputLine" 
                onChange={(e) => this.setState({ number2: e.target.value })}
                value={!this.state.number2 ? "" : this.state.number2}
                />

                <button className="confirmationButton" onClick={this.calculate}>Add</button>

                <span className="resultsBox">Sum: { this.state.sum }</span>
            </div>
            
        )
    }

}

export default Sum