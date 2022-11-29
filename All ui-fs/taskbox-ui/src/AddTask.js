import React,{useState} from 'react'
import axios from 'axios'
import TaskForm from './TaskForm'

const AddTask = (props) => {
    const [isSaved, setIsSaved] = useState(false)
     const {AddTask} = props
    const formSubmit = (task) => {
        axios.post('http://localhost:3033/api/tasks',task)
        .then((respond) => {
            const result = respond.data
            AddTask(result)
            setIsSaved(true)
        })
        .catch((err) => {
            alert('err.message')
        })
    }
    const toggleIsSaved = () => {
        setIsSaved(false)
    }

    return(
        <div>
            <h2> AddTask </h2>
            <TaskForm formSubmit={formSubmit} isSaved={isSaved} toggleIsSaved={toggleIsSaved}/>
        </div>
    )
}
export default AddTask