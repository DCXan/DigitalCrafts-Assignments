import React, { Component } from "react";
import FriendList from "./FriendList";
import Hello from "./Hello";
import Name from "./Name";

class App extends Component {

render() {

  const friends = [
    {
      firstName: "Jack",
      lastName: "Bauer",
      age: 35
    },
    {
      firstName: "Jill",
      lastName: "Mason",
      age: 29
    },
    {
      firstName: "Ash",
      lastName: "Ketchum",
      age: 14
    }
  ]

  return (
    <div>
      <h1>BookFace</h1>
      <FriendList friends = {friends}/>
    </div>
    )
  
}

}

export default App