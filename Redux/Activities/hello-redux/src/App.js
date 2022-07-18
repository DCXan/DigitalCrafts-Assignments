import { connect } from 'react-redux'
import React from 'react'
import Counter from './components/Counter'

function App(props) {
  return (
    <div>
      <Counter/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps)(App);
