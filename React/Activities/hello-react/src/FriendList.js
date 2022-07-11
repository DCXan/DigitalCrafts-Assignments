import { Component } from "react";

class FriendList extends Component {

    render() {


        const friendItem = this.props.friends.map((friend, index) => {
            return <li key = {index}>{friend.firstName} {friend.lastName} - {friend.age}</li>
        })

        return (
            <div>
            <h1>Friend List:</h1>
            <ul>{friendItem}</ul>
            </div>
        )
    }

}

export default FriendList