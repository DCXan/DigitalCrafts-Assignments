import { Component } from "react";
import "./FeaturedReviews.css"

class FeaturedReviews extends Component {

    render() {

        const reviews = [
            {
                title: "Curse of the Current Reviews",
                body: "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot and reviews."
            }
        ]

        const reviewItem = reviews.map((review, index) => {
            return (
                <div className = "FeaturedReviews" key = {index}>
                    <h2>{review.title}</h2>
                    <p>{review.body}</p>
                </div> 
            )
        })

        return (
            reviewItem
        )
    }
}

export default FeaturedReviews