import { Component } from "react";
import './BookList.css'

class BookList extends Component {

    constructor() {
        super()
        
        this.state = {
          books: []
        }
      }
    
      componentDidMount() {
        this.fetchPhotos()
      }
      
      fetchPhotos = () => {
        
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

        const bookItems = this.state.books.map((book, index) => {
            
            return (
              <li key = {index} className="bookItem">
                <b>{book.title}</b>
                <i>{book.author}</i>
                <label>{book.year}</label>
                <img src = {"https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + book.imageLink}/>
              </li>
            )
          })

        return (
        <ul className="booksDisplay">
          {bookItems}
        </ul>
        )
    }
}

export default BookList