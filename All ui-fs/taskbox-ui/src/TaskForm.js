import React,{useState,useEffect} from 'react' 
import { v4 as uuidv4 } from 'uuid'
 
const TaskForm = (props) => {
    const {formSubmit,isSaved,toggleIsSaved,id: siNo, title: TaskTitle, Status: TaskStatus} = props
    const [id, setId] = useState(siNo? siNo : uuidv4())
    const [title , setTitle] = useState(TaskTitle ? TaskTitle : '')
    const [status , setStatus] = useState(TaskStatus ? TaskStatus : false)

    useEffect(() => {
        if(isSaved) {
            setId(uuidv4())
            setTitle('')
            setStatus('')
            toggleIsSaved()
        }
    },[isSaved])

    const handleTitleChange = (e) => {
        setTitle(e.target.value)
    }
    const handleStatusChange = (e) => {
        setStatus(e.target.checked)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            id : id,
            title : title,
            status : status
        }
        formSubmit(formData)
    }

    return(
        <form onSubmit={handleSubmit}>
            <label> title </label> <br/>
            <input type="text" value={title} onChange={handleTitleChange} /> <br/>

            <input type="checkbox" value={status} onChange={handleStatusChange} /> <label> completed </label> <br/>

            <input type="submit" value="save" /> 
        </form>
    )
}
export default TaskForm