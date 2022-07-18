import React, { useState } from 'react'

function StepperFn() {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    const decrement = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <button onClick = {decrement}>-</button>
            <h1>{counter}</h1>
            <button onClick = {increment}>+</button>
        </div>
    )
}





export default StepperFn