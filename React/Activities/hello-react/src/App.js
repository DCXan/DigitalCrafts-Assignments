import React, { Component } from "react";
import FriendList from "./FriendList";
import Hello from "./Hello";
import Name from "./Name";

class App extends Component {

render() {
  return (
    <div>
      <h1>Hello World</h1>
      <h2>Second Heading</h2>
      <Name firstName = "David" lastName = "Chang"/>
    </div>
    )
  
}

}

export default App