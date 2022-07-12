import { Component } from "react";

class SwitchView extends Component {

    constructor(){
        super()
        this.state = {
            isOn: false
        }

        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState({
            isOn: !this.state.isOn
        })
    }

    render() {
        // const {isOn} = this.state
        // let title = this.state.isOn? "ON":"OFF"
        return (
            <button onClick={this.handleClick}>{this.state.isOn? "ON":"OFF"}</button>
        )
    }
    
}

export default SwitchView