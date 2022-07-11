import { Component } from "react";

class Name extends Component {
    render() {
        return (
            <h1>{this.props.lastName}, {this.props.firstName}</h1>
        )
    }
}

export default Name