import { connect } from 'react-redux'

function DisplayCounter(props) {

    return (
        <div>
            <h1>Counter:</h1>
            <h1>{props.count}</h1>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        count: state.counter
    }
}

export default connect(mapStateToProps) (DisplayCounter)