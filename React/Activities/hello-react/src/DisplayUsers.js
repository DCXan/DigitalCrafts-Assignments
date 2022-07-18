import React from 'react'


function DisplayUsers (props) {

    const userList = props.users.map(user => {
        return(
            <li key = {user.id}>
                <b>Name: {user.first_name} {user.last_name}</b>
                <span>Email: {user.email}</span>
                <img src = {user.avatar}/>
            </li>
        )
    })


    return (
        <ul>
            {userList}
        </ul>
    )
}

export default DisplayUsers