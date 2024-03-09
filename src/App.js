import './App.css';
import TaskManager from './components/TaskManager';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  // Define the event handling functions here
  const handleAddTask = (newTask) => {
    console.log('Task added:', newTask);
    // Implement logic to add task
  };

  const handleDeleteTask = (remainingTasks) => {
    console.log('Task deleted:', remainingTasks);
    // Implement logic to delete task
  };

  const handleEditTask = (updatedTask) => {
    console.log('Task edited:', updatedTask);
    // Implement logic to edit task
  };

  const handleUpdateStatus = (updatedTask) => {
    console.log('Task status updated:', updatedTask);
    // Implement logic to update task status
  };

  return (
    <div className="myapp">
    <ToastContainer position="top-right"
          autoClose={2000} // Adjust autoClose time as needed
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
           />
      <TaskManager 
        onAddTask={handleAddTask} 
        onDeleteTask={handleDeleteTask} 
        onEditTask={handleEditTask} 
        onUpdateStatus={handleUpdateStatus} 
      />
    </div>
  );
}

export default App;
