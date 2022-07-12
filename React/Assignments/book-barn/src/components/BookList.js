import { Component } from "react";
import './BookList.css'

class BookList extends Component {

    render() {

        const bookItems = this.props.books.map((book, index) => {
            
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