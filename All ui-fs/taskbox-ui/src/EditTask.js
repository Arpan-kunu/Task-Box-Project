import React from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const EditTask = (props) => {
    const {id,title,status,editItem,handleToggle} = props

    const formSubmiit = () => {
     axios.put(`http://localhost3033/api/tasks/${task.id}`,task)
     .then((response) => {
        const result = response.data
        editItem(result)
        handleToggle()
     })
     .catch((err) => {
        alert(err.message)
     })
    }
    return(
        <div>
        <h2> EditTask </h2>
        <TaskForm
        id={id}
        title={title}
        status={status}
        formSubmiit={formSubmiit}
        />
        </div>
    )
}
export default EditTask