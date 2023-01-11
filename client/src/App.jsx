import { Route, Routes } from 'react-router-dom';
import TaskPage from './pages/TaskPage';
import TaskForm from './pages/TaskForm';
import NotFound from './pages/NotFound';
import { TaskContextProvider } from './context/TaskContext';
import NavBar from './components/NavBar';

function App() {
  return (
      <TaskContextProvider>
        <NavBar />
        <Routes>
          <Route path='/' element={<TaskPage />} />
          <Route path='/new' element={<TaskForm />} />
          <Route path='/edit/:id' element={<TaskForm />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </TaskContextProvider>
  )
}

export default App
