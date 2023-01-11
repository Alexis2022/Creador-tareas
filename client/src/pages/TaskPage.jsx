import { useEffect } from 'react';
import TaskCart from '../components/TaskCart';
import { useTasks } from '../context/TaskContext';

function TaskPage() {
  const { tasks, loadTasks } = useTasks();

  useEffect(() => {
    loadTasks();
  }, []);

  function renderMain() {
    if (tasks.length === 0) return <h1>No tasks yet</h1>
    return tasks.map(task => (<TaskCart task={task} key={task.id} />));
  }

  return (
    <div className='container-task'>
      <h1>Task</h1>
      <div className='flex-box'>
        {renderMain()}
      </div>
    </div>
  )
}

export default TaskPage