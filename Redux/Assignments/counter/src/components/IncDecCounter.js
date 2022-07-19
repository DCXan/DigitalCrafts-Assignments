import { connect } from 'react-redux'
import * as actionTypes from '../storage/actions/actionTypes'

function IncDecCounter(props) {


    return (
        <div>
            <button onClick={() => props.onDecrement()}>Decrement</button>
            <button onClick={() => props.onIncrement()}>Increment</button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDecrement: () => dispatch({type: actionTypes.DECREMENT}),
        onIncrement: () => dispatch({type: actionTypes.INCREMENT})
    }
}

export default connect(null, mapDispatchToProps) (IncDecCounter)