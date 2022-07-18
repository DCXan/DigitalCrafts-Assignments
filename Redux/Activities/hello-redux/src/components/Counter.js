import { connect} from 'react-redux'
import React from 'react'

function Counter(props) {

    const handleDecrement = () => {
        props.onDecrement()
    }

    const handleIncrement = () => {
        props.onIncrement()
    }

    return (
        <div>
            <h1>Counter:</h1>
            <h1>{props.ctr}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
      ctr: state.counter
    }
  }

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onIncrement: () => dispatch({type: 'INCREMENT'})
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (Counter)