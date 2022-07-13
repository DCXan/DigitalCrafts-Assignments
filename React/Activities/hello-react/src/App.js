import React, { Component } from "react";
import FriendList from "./FriendList";
import Hello from "./Hello";
import Name from "./Name";
import Stepper from "./Stepper";
import SwitchView from "./SwitchView";
import Textbox from "./Textbox";

class App extends Component {

// render() {

//   const friends = [
//     {
//       firstName: "Jack",
//       lastName: "Bauer",
//       age: 35
//     },
//     {
//       firstName: "Jill",
//       lastName: "Mason",
//       age: 29
//     },
//     {
//       firstName: "Ash",
//       lastName: "Ketchum",
//       age: 14
//     }
//   ]

//   return (
//     <div>
//       <h1>BookFace</h1>
//       <FriendList friends = {friends}/>
//     </div>
//     )
  
// }

constructor() {
  super() 
  this.state = {
    name: '' 
  }
}

handleEnter = (value) => {
  
  this.setState({
    name: value 
  })
}


render() {
  return (
    <div>
      <h1>{this.state.name}</h1>
      <Name onEnter = {this.handleEnter}/>
    </div>
  )
}


}

export default App