import { Component } from "react";
import "./Articles.css"

class Articles extends Component {

    render() {

        const articles = [
            {
                title: "Hello WatchKit",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                commentsCount: 12,
                likesCount: 124
            },
            {
                title: "Introduction to Swift",
                body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                commentsCount: 12,
                likesCount: 124
            }
        ]

        const articleItem = articles.map((article, index) => {
            return (
                <div className = "Article" key = {index}>
                    <h2>{article.title}</h2>
                    <p>{article.body}</p>
                    <div className="article-footer">
                        <span>{article.commentsCount} comments </span>
                        <span>{article.likesCount} likes</span>
                    </div>
                </div> 
            )
        })

        return (
            articleItem
        )
    }
}

export default Articles