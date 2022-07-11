import React, { Component } from "react"
import Articles from "./Articles"
import FeaturedReviews from "./FeaturedReviews"
import Header from "./Header"

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <FeaturedReviews />
        <Articles />
      </div>
    )
  }
}

export default App