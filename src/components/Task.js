import {FaCheck, FaTimes, TbSwitch} from 'react-icons/fa'
import {MdSwitchAccessShortcut } from "react-icons/md";

const Task = ({task, onToggle, updateStatus, deleteTask, page}) => {
    
    return(
        <div className={`task ${task.reminder?'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
            <h3>
                {task.text} 
                {page === 'completed' && (
                    <>

                        <FaCheck style={{color: 'green'}} />
                        <MdSwitchAccessShortcut style={{color: 'blue'}} onClick={() => updateStatus(task.id)}/>
                        <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => deleteTask(task.id)}/>
                    </>
                )}
                {page !== 'completed' && (
                        <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => updateStatus(task.id)}/>
                )}
            </h3>
            <p>{task.day}</p>
        </div>
    )
}



export default Task