import { Component } from "react";

class Textbox extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            place: ''
        }
    }

    handleInput = (e) => {

        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleClick = (e) => {
        console.log(this.state.name)
        console.log(this.state.place)
    
    }

    render() {
        return (
            <div>
            <h1>Favorite Places</h1>
            <input type="text" placeholder="name" name="name" onChange={this.handleInput}/>
            <input type="text" placeholder="favorite place" name="place" onChange={this.handleInput}/>
            <button onClick={this.handleClick}>Submit</button>
            </div>
        )
    }
}

export default Textbox