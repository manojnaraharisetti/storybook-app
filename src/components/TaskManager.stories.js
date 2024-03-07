import React,{useState,useEffect} from 'react';
import { action } from '@storybook/addon-actions';
import TaskManager from './TaskManager.jsx';

export default {
  title: 'Components/TaskManager',
  component: TaskManager,
  argTypes: {
    onAddTask: { action: 'onAddTask' }, // Register onAddTask action
    onDeleteTask: { action: 'onDeleteTask' }, // Register onDeleteTask action
    onEditTask: { action: 'onEditTask' }, // Register onEditTask action
    onUpdateStatus: { action: 'onUpdateStatus' }, // Register onUpdateStatus action
  },
  parameters: {
    actions: {
      handles: ['onAddTask', 'onDeleteTask', 'onEditTask', 'onUpdateStatus'], // Log actions for onAddTask, onDeleteTask, onEditTask, and onUpdateStatus
    },
  },
};

export const Default = (args) =>{
  
  const [tasks, setTasks] = useState([]);

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

  const handleEditTask = (id, updatedTitle) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, title: updatedTitle };
      }
      return task;
    }));
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleUpdateStatus = (id, status) => {
    setTasks(tasks.map(task => {
      if (task.id === id) {
        return { ...task, status };
      }
      return task;
    }));
  };

  return (
    <TaskManager {...args} />
    // <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onUpdateStatus={handleUpdateStatus} {...args} />
  );
};
