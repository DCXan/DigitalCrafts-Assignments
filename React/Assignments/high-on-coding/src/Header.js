import { Component } from "react";
import './Header.css'

class Header extends Component {

    render() {
        return (
            <div className="Header">
                <h1>HighOnCoding</h1><a href="#">Home</a> <a href="#">Categories</a>
            </div>
        )
    }
}

export default Header