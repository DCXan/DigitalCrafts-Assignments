import { connect } from 'react-redux'
import { useState } from 'react'
import * as actionTypes from '../storage/actions/actionTypes'

function AddSubCounter(props) {

    const [inputValue, setInputValue] = useState(0)

    const valueUpdated = (e) => {
        setInputValue(parseInt(e.target.value))
    }

    return (
      <div>
        <input type="text" placeholder='Value to Add/Subtract'onChange={valueUpdated}/>
        <div>
          <button onClick={() => props.onSubtract(inputValue)}>Subtract</button>
          <button onClick={() => props.onAdd(inputValue)}>Add</button>
        </div>
      </div>
    );
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubtract: (value) => dispatch({type: actionTypes.SUBTRACT, value: value}),
        onAdd: (value) => dispatch({type: actionTypes.ADD, value: value})
    }
}

export default connect(null, mapDispatchToProps) (AddSubCounter)