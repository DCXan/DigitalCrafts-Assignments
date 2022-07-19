import { connect} from 'react-redux'
import React from 'react'
import { useState } from 'react'

function ToDoList (props) {

    const [task, setTask] = useState('')

    const taskAdded = (e) => {
        setTask(e.target.value)
    }

    const tasks = props.tasks

    const taskItems = tasks.map((task, index) => {
        return (
            <li key = {index}>
                {task}
            </li>
        )
    })

    return (
        <div>
            <h1>To Do App</h1>
            <input type='text' placeholder='Enter Task' onChange={taskAdded}/>
            <button onClick={() => props.submitTask(task)}>Add Task</button>
            <h3>Tasks:</h3>
            <ul>{taskItems}</ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        submitTask: (task) => dispatch({type: 'SUBMITTASK', value: task})
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (ToDoList)