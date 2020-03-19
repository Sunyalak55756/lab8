import React from 'react'
import './Task.css'

export default props => {
    const {task,editTask,deleteTask} = props
    const {id, name}= task
    return(
        <li> 
    <div className="id">{id} </div>
    <div className="name">{name}</div>
    <div>
       <button className="buttonD" onClick={() => deleteTask(task.id)}>Delete</button>
       <button className="buttonE" onClick={() => editTask(task.id)}>Update</button>
       </div>
    </li>
    )
}