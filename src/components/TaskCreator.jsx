import { useState, useEffect } from 'react'

export const TaskCreator = ({createNewTask}) => {

    const [newTaskName, setNewTaskName] = useState('')

    const handleSubmint = (e) => {
        e.preventDefault()
        createNewTask(newTaskName)
        // localStorage.setItem("Task", newTaskName) // Guardar un dato en el local storage
        setNewTaskName('')
    }

    return (
        <form onSubmit={handleSubmint} className='my-2 row'>
            <div className='col-9'>
                <input type="text" placeholder='Enter a new task' onChange={(e) => setNewTaskName(e.target.value)} value={newTaskName} autoFocus className='form-control'/>
            </div>

            <div className='col-3'>
                <button>Save</button>
            </div>
        </form>
    )
}

/* return (
    <form onSubmit={handleSubmint}>
        <input type="text" placeholder='Enter a new task' onChange={(e) => setNewTaskName(e.target.value)} value={newTaskName} autoFocus/>

        <button>Save</button>
    </form>
) */