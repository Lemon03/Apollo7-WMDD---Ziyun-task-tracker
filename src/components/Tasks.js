import Task from './Task'

const Tasks = ({tasks, updateStatus, onToggle, page, deleteTask}) => {
    
    return(
        <>
        {tasks.map((task, index)=>(<Task key={index} task={task} onToggle={onToggle}  deleteTask={deleteTask} page={page} updateStatus={updateStatus}/>))}
        </>
    )
}



export default Tasks