import { Form, Formik,  } from 'formik';
import { useTasks } from '../context/TaskContext';
import { useParams, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
function TaskForm() {

  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({ title: "", description: "" });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description
        })
      }
    };
    loadTask();
  }, [])

  return (
    <div>

      <h1>{params.id ? "Edit task" : "New task"}</h1>

      <Formik
        initialValues={task}
        enableReinitialize={true}
        onSubmit={async (values,) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          }
          else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: ""
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form onSubmit={handleSubmit}>
            <div className='box-form'>
              <div>
                <label>Titulo</label>
                <input type="text" name="title" required placeholder="Escribe un título..." onChange={handleChange} value={values.title} />

                <label>Descripción</label>
                <textarea name="description" rows="5" required placeholder="Escribe una descripción..." onChange={handleChange} value={values.description}></textarea>

                <button className='bt-save' type='submit' disabled={isSubmitting}>{isSubmitting ? "Guardando..." : "Guardar"}</button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default TaskForm