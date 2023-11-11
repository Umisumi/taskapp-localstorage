import {TaskRow} from './TaskRow'

export const TaskTable = ({tasks, toggleTask, showCompleted = false}) => {

  const taskTableRoows = (doneValue) => {
    return (
      tasks
        .filter(task => task.done === doneValue)
        .map((task) => (
          <TaskRow task={task} key={task.name} toggleTask={toggleTask}/>
      ))
    )
  }

  return (
    <table className='table table-dark table-striped table-bordered'>
      <thead>
        <tr>
          <th scope="col">Tasks</th>
        </tr>
      </thead>
      <tbody className='table-group-divider'>
        {
          taskTableRoows(showCompleted)
        }
      </tbody>
    </table>
  );
};
