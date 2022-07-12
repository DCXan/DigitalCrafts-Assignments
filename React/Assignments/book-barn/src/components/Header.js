import { Component } from "react";

class Header extends Component {

    render() {
        return (
            <div>
                <h1>Book Barn</h1><a href="#">Home</a> 
                <a href="#">My Books</a> 
                <a href="#">Community</a> 
                <input type="text" placeholder = "Search Books" name="searchBox"></input> 
                <button>Search</button> 
                <a href="#">Sign In</a> 
                <a href="#">Join</a>
            </div>
        )
    }
}

export default Header