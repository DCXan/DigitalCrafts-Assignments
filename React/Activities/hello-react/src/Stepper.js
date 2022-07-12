import { Component } from "react";

class Stepper extends Component {
    constructor() {
        super()
        this.state = {
          counter: 0
        }
        this.handleIncrement = this.handleIncrement.bind(this)
        this.handleDecrement = this.handleDecrement.bind(this)
      }
      
      handleIncrement() {
        this.setState({
          counter: this.state.counter + 1
        })
      }
      
      handleDecrement() {
        this.setState({
          counter: this.state.counter - 1
        })
      }
      
      render() {
        return (
          <div>
            <button onClick = {this.handleDecrement}>-</button><h1>{this.state.counter}</h1><button onClick = {this.handleIncrement}>+</button>
          </div>
        )
      }
}

export default Stepper