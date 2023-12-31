import { useState, useEffect } from 'react'
import './App.css'

import {TaskCreator} from './components/TaskCreator'
import {TaskTable} from './components/TaskTable'
import {VisibilityControl} from './components/VisibilityControl'

function App() {

  const [taskItems, setTaskItems] = useState([])
  const [showCompleted, setShowCompleted] = useState(false)

  function createNewTask(taskName) {
    if(!taskItems.find(task => task.name === taskName)){
      setTaskItems([...taskItems, {
        name: taskName,
        done: false
      }])
    } else {
      alert('La tarea ya existe!')
    }
  }

  const toggleTask = (task) => {
    setTaskItems(
      taskItems.map((t) => (t.name === task.name ? {...t, done: !task.done} : t))
    )
  }

  useEffect(() => {
    let data = localStorage.getItem('tasks')
    // console.log(data)

    if (data) {
      setTaskItems(JSON.parse(data))
    }
  }, [])

  const deleteTasks = () => {
    setTaskItems(taskItems.filter(task => !task.done))
    setShowCompleted(false)
  }

  useEffect(() => {
    // console.log(taskItems)
    localStorage.setItem('tasks', JSON.stringify(taskItems))
  }, [taskItems])
  
  return (
    <main className='bg-dark vh-100 text-white'>
      <div className='container p-3 col-md-4 offset-md-4'>
        <TaskCreator createNewTask={createNewTask} />
        <TaskTable tasks={taskItems} toggleTask={toggleTask}/>
        <VisibilityControl setShowCompleted={(checked) => setShowCompleted(checked)} deleteTasks={deleteTasks} isChecked={showCompleted}/>      

        {
          showCompleted === true && (
            <TaskTable tasks={taskItems} toggleTask={toggleTask} showCompleted={showCompleted}/>
          )
        }
      </div>
    </main>
  )
}

export default App
