import React, { useState, useEffect } from 'react'
import DisplayUsers from './DisplayUsers'
import StepperFn from './StepperFn'

function App() {

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const response = await fetch('https://reqres.in/api/users?page=2')
        const result = await response.json()
        const users = await result.data
        setUsers(users)

        // fetch("https://reqres.in/api/users?page=2")
        //   .then(response => response.json())
        //   .then(result => result.data)
        //   .then((users) => {
        //     setUsers(users);
        //   });
        
    }

    useEffect(() => {
        getUsers()
        console.log(users)
    }, [])

    return (
        <div>
            <DisplayUsers users = {users}/>
        </div>
    )
}





export default App