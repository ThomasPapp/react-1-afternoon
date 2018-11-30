import React, { Component } from 'react'

class FilterString extends Component {

    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                "James",
                "Jessica",
                "Melody",
                "Tyler",
                "Blake",
                "Jennifer",
                "Mark",
                "Maddy"
            ],
            userInput: "",
            filteredArray: []
        }

        // method binding
        this.updateInput = this.updateInput.bind(this)
        this.display = this.display.bind(this)
        this.filter = this.filter.bind(this)
    }

    updateInput(e) {
        this.setState({ userInput: e.target.value })
    }

    display(filtered) {
        let str = ""
        const arr = filtered ? this.state.filteredArray : this.state.unFilteredArray
        arr.forEach((name, i) => {
            str += `"${name}"`
            if (i < arr.length -1)
                str += ", "
        })

        return str
    }

    filter() {
        const filter = this.state.userInput
        const filteredArray = this.state.unFilteredArray.filter(name => name.includes(filter))
        this.setState({ filteredArray, userInput: "" })
    }

    render() {
        return(
            
            <div className="puzzleBox filterStringPB">
                <h4>Filter String</h4>

                <span className="puzzleText">
                    Names: [{this.display(false)}]
                </span>

                <input className="inputLine"  onChange={this.updateInput} value={this.state.userInput}/>

                <button className="confirmationButton" onClick={this.filter}>Filter</button>

                <span className="resultsBox filterStringRB">
                Filtered Names: [{this.display(true)}]
                </span>
            </div>

        )
    }

}

export default FilterString