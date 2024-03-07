import './App.css';
import TaskManager from './components/TaskManager';

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
    <div className="App">
      <h1>asjvjhdgvfhjgsdf</h1>
      {/* Pass all event handling functions to the TaskManager component */}
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
