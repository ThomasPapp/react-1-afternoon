import React, { Component } from 'react'

class FilterObject extends Component {

    constructor() {
        super()
        this.state = {
            unFilteredArray: [
                {
                    name: "Jimmy Joe",
                    title: "Hack0r",
                    age: 12
                },
                {
                    name: "Jeremy Schrader",
                    age: 24,
                    hairColor: "brown"
                },
                {
                    name: "Carly Armstrong",
                    title: "CEO"
                }
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
        let str = filtered ? "" : "["
        const arr = filtered ? this.state.filteredArray : this.state.unFilteredArray
        arr.forEach((obj, i) => {
            str += "{"

            const keys = Object.keys(obj)

            keys.forEach((key, i) => {
                str += `"${key}": `

                if (isNaN(obj[key]) && !(typeof obj[key] === 'boolean')) {
                    str += `"${obj[key]}"`
                }
                else
                    str += obj[key]
                
                if (i < keys.length - 1)
                    str += ", "
            })

            str += "}"

            if (i < arr.length - 1)
                str += ", "
        })

        return filtered ? str : str += "]"
    }

    filter() {
        const filter = this.state.userInput
        const filteredArray = this.state.unFilteredArray.filter(obj => obj[filter])
        this.setState({ filteredArray, userInput: "" })
    }

    render() {
        return(

            <div className="puzzleBox filterObjectPB">
                <h4>Filter Object</h4>

                <span className="puzzleText">
                    Original: {this.display(false)}
                </span>

                <input className="inputLine" onChange={this.updateInput} value={this.state.userInput}/>

                <button className="confirmationButton" onClick={this.filter}>Filter</button>

                <span className="resultsBox filterObjectRB">
                    Filtered: [{this.display(true)}]
                </span>
            </div>
            
        )
    }

}

export default FilterObject