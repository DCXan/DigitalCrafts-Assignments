import { connect } from 'react-redux'
import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'

function App(props) {
  return (
    <div>
      <ToDoList/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps)(App);
