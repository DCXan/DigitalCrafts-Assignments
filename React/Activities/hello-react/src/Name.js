import { Component } from "react";

class Name extends Component {

    constructor() {
        super()
        this.state = {
            name: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        }) 
    }

    handleAdd = () => {
        this.props.onEnter(this.state.name)
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange}/>
                <button onClick={() => this.props.onEnter(this.state.name)}>Enter</button>
            </div>
        )
    }
}

export default Name