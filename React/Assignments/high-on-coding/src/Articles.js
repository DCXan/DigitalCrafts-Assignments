import { Component } from "react";
import "./Articles.css"

class Articles extends Component {

    render() {

        const articles = [
            {
                title: "Hello WatchKit",
                body: "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enable the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.",
                commentsCount: 12,
                likesCount: 124
            },
            {
                title: "Introduction to Swift",
                body: "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and the future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.",
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