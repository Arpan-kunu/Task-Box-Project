import React from 'react'
import TaskItem from './TaskItem'

const TaskList = (props) => {
    const { Task,RemoveItem,editItem } = props
    return(
        <div>
            { Task.length === 0 ? (
                <div>
                   <h2> No Task Found</h2>
                    <p> Add Your First Task </p>
                </div>    
            ) : (
                <div>
               <h2> My Task - {Task.length}</h2>
               { Task.map((task) => {
                 return(
                    <TaskItem key={task.id} {...task} RemoveItem={RemoveItem} editItem={editItem}/>
                 )
               })}
               </div> 
            )} 
        </div>
    )
}
export default TaskList