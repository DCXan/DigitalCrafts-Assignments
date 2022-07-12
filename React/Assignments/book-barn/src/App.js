import React, { Component } from "react";
import BookList from "./components/BookList";
import Header from "./components/Header";

class App extends Component {

  constructor() {
    super()
    
    this.state = {
      books: []
    }
  }

  componentDidMount() {
    this.fetchBooks()
  }
  
  fetchBooks = () => {
    
    fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
    .then(response => 
      response.json())
      .then(result => {
        this.setState({
          books: result
        })
      })
    
  }

  render() {

    
    return (
      <div>
        <Header/>
        <BookList books = {this.state.books}/>

      </div>
    )
  }
}

export default App;
