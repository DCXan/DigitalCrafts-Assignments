import { connect } from 'react-redux'

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
        onDecrement: () => dispatch({type: 'DECREMENT'}),
        onIncrement: () => dispatch({type: 'INCREMENT'})
    }
}

export default connect(null, mapDispatchToProps) (IncDecCounter)