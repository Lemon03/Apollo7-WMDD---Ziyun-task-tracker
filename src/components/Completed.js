import { Link } from 'react-router-dom'
import Tasks from './Tasks'
import AddTask from './AddTask'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Completed = () => {
    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])
    useEffect(() => {
      const getTasks = async () => {
        const tasksFromServer = await fetchTasks()
        setTasks(tasksFromServer)
      }
      getTasks()
    }, [])

    const fetchTasks = async()=>{
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        console.log(data)
        return data
      }
      
      // Fetch Task
        const fetchTask = async (id) => {
          const res = await fetch(`http://localhost:5000/tasks/${id}`)
          const data = await res.json()
          return data
        }
      
      //Add task
      const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(task),
        })
        const data = await res.json()
        setTasks([...tasks, data])}
      
        //Delete Task
        const deleteTask = async (id) => {
          const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE',
          })
          res.status === 200
            ? setTasks(tasks.filter((task) => task.id !== id))
            : alert('Error Deleting This Task')
        }

        //Update Task Status
        const updateTask = async (id) => {
            const taskToUpdate = await fetchTask(id);
            const updTask = { ...taskToUpdate, status: taskToUpdate.status === 1 ? 0 : 1 };
        
            const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(updTask),
            });
        
            const data = await res.json();
        
            setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, status: data.status } : task
            )
            );
        }
        


  return (
    
    <div >
      <Routes>
        <Route path='/' element={
            <>
              {showAddTask && <AddTask onAdd={addTask} />}
              {tasks.length > 0 ? (
                <Tasks
                  tasks={tasks.filter(task => task.status === 0)}
                  updateStatus={updateTask}
                  deleteTask={deleteTask}
                  page='completed'
                />
              ) : (
                'No Tasks To Show'
              )}
            </>}
        />
       
      </Routes>
      <Link to='/'>Go Back</Link>
    </div>
  )
}

export default Completed
