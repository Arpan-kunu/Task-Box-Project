import React,{useState} from 'react'
import axios from 'axios'
import EditTask from './EditTask'
const TaskItem = (props) => {
    const [toggle, setToggle] = useState(false)
    const { id, title,status,RemoveItem,editItem } = props

    const handleToggle = () => {
        const result = !toggle
        setToggle(result)
    }

    const handleRemove = (id) => {
       const confirmRemove = window.confirm('Are you sure?')
       if(confirmRemove){
        axios.delete(`http://localhost:3033/ai/Task.${id}`)
        .then((response) => {
            const result = response.data
            RemoveItem(result.id)
        })
        .catch((err) => {
            alert('err.messge')
        })
       }
    }
    return(
        <div>
        {
            toggle ? (
                <div>
                 <button onClick={handleToggle}> Cancel </button>   
                <EditTask
                    id={id}
                    status={status}
                    title={title}
                    editItem={editItem}
                    handleToggle={handleToggle}
                    />
                </div>
            ) : (
                <div>
                <h3> {title} </h3>
                <button onClick={() => {
                    handleRemove(id)
                }}>remove</button>
                <button onClick={handleToggle}> edit </button>
            </div>
            )
        }
        </div>
    )
}
export default TaskItem