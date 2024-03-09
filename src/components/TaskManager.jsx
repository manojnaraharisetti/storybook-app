import React, { useState, useEffect } from 'react';
import TaskForm from './Addlistcomponent/TaskForm.jsx';
import TaskList from './DiaplayListComponent/TaskList.jsx';
import './../App.css';

const TaskManager = ({ onAddTask, onDeleteTask, onEditTask, onUpdateStatus }) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem('tasks')) || []);
  const [filterStatus, setFilterStatus] = useState('all');

  // Load tasks from localStorage when the component mounts
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  // Save tasks to localStorage whenever tasks change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (title) => {
    const newTask = { id: tasks.length + 1, title, status: 'notdone', createdAt: new Date().toLocaleString() }; // Default status is "not done"
    setTasks(prevTasks => [...prevTasks, newTask]);
    onAddTask(newTask);
  };

  const handleEditTask = (id, updatedTitle) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, title: updatedTitle, editedAt: new Date().toLocaleString() };
        onEditTask(updatedTask); // Call the onEditTask action
        return updatedTask;
      }
      return task;
    }));
  };

  const handleUpdateStatus = (id, updatedStatus) => {
    setTasks(prevTasks => prevTasks.map(task => {
      if (task.id === id) {
        const updatedTask = { ...task, status: updatedStatus };
        onUpdateStatus(updatedTask); // Call the onUpdateStatus action
        return updatedTask;
      }
      return task;
    }));
  };

  const handleDeleteTask = (id) => {
    setTasks(prevTasks => {
      const remainingTasks = prevTasks.filter(task => task.id !== id);
      onDeleteTask(remainingTasks); // Call the onDeleteTask action
      return remainingTasks;
    });
  };

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
  };

  const filteredTasks = tasks.filter(task => {
    if (filterStatus === 'all') {
      return true;
    }
    return task.status === filterStatus;
  });

  return (
    <div>
      <h1>Task Management Dashboard</h1>
      <div className="container">
        <TaskForm onSubmit={handleAddTask} />
        <div className="slesjdhbsd">
          <select value={filterStatus} onChange={handleFilterChange} className='selectoptioncls'>
            <option value="all">All Tasks</option>
            <option value="notdone">Not Done Tasks</option>
            <option value="inprogress">In Progress Tasks</option>
            <option value="completed">Completed Tasks</option>
          </select>
          </div>
      </div>
      <TaskList tasks={filteredTasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onUpdateStatus={handleUpdateStatus} />
    </div>
  );
};

export default TaskManager;
