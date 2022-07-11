import { Component } from "react";

class Hello extends Component {

    render() {
        return (
            <h1>Hello {this.props.name}! You are {this.props.age} years old.</h1>
        )
    }
}

export default Hello