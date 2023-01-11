import axios from 'axios';

export const getTasksRequest = async () => await axios.get("mysql://root:VlOtDISc9Fy578ekoeqZ@containers-us-west-28.railway.app:6602/railway/tasks");

export const createTaskRequest = async (task) => await axios.post('mysql://root:VlOtDISc9Fy578ekoeqZ@containers-us-west-28.railway.app:6602/railway/tasks', task);

export const deleteTaskRequest = async (id) => await axios.delete(`https://creador-tareas-production.up.railway.app/tasks/${id}`);

export const getTaskRequest = async (id) => await axios.get(`https://creador-tareas-production.up.railway.app/tasks/${id}`);

export const updateTaskRequest = async (id, newFields) => await axios.put(`https://creador-tareas-production.up.railway.app/tasks/${id}`, newFields);

export const toggleTaskRequest = async (id, done) => await axios.put(`https://creador-tareas-production.up.railway.app/tasks/${id}`, {done});