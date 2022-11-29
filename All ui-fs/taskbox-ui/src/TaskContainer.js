import React,{ useState,useEffect } from 'react'
import axios from 'axios'
import TaskList from './TaskList'
import AddTask from './AddTask'
import TaskForm from './TaskForm'

const TaskContainer = (props) => {
    const [Task, setTask] = useState([])

    useEffect(() => {
       axios.get('http://localhost3033/api/task')
       .then((response) => {
          const result = response.data 
          setTask(result)
       })//success
       .catch((err) => {
          alert('err.message')
       })
    }, [])
    const AddItem = (task) => {
        setTask(...Task, task)
    }
    const RemoveItem = () => {
       const result = Task.filter((ele) => {
         ele.id !== id
       })
       setTask(result)
    }
    const editItem = (task) => {
       const result = Task.map((t) => {
          if(t.id === task.id){
            return{...t,task}
          }else {
            return{...t}
          }
       })
       setTask(result)
    }
    return(
        <div>
            <TaskList Task={Task} RemoveItem={RemoveItem} editItem={editItem}/>
            <AddTask AddItem={AddItem}/>
            <TaskForm/>
        </div>
    )
}
export default TaskContainer