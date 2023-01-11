import { useTasks } from '../context/TaskContext';
import { useNavigate } from 'react-router-dom';

function TaskCart({ task }) {

    const { deleteTask, toggleTaskDone } = useTasks();
    const navigate = useNavigate();

    const handleDone = async () => {
        await toggleTaskDone(task.id);
    }

    return (
        <div className='box-task'>
            <h2>{task.title}</h2>
            <p>{task.description}</p>
            <span className='task-done'>{task.done == 1 ? "✅" : "❌"}</span>
            <span>{task.createAt}</span>
            <div className='box-botton'>
                <button onClick={() => { deleteTask(task.id) }}>ELIMINAR</button>
                <button onClick={() => { navigate(`/edit/${task.id}`) }}>EDITAR</button>
                <button onClick={() => { handleDone(task.done) }}>ALTERNAR TAREA</button>
            </div>
        </div>
    )
}

export default TaskCart