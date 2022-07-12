import React, { Component } from "react";
import BookList from "./BookList";
import Header from "./Header";

class App extends Component {


  render() {

    
    return (
      <div>
        <Header/>
        <BookList/>

      </div>
    )
  }
}

export default App;
