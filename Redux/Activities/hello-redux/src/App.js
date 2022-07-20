import { connect } from 'react-redux'
import React from 'react'
import Counter from './components/Counter'
import ToDoList from './components/ToDoList'
import DisplayImage from './components/DisplayImage'

function App(props) {
  return (
    <div>
      <Counter/>
      <DisplayImage/>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    ctr: state.counter
  }
}

export default connect(mapStateToProps)(App);
