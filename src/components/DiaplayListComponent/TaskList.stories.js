import React,{useState,useEffect} from 'react';
import TaskList from './TaskList.jsx';

export default {
  title: 'Components/TaskList',
  component: TaskList,
  argTypes: {
    onDelete: { action: 'onDelete' },
    onEdit: { action: 'onEdit' },
    onUpdateStatus: { action: 'onUpdateStatus' },
  },
};

export const Default = (args) => { const [tasks, setTasks] = useState([]);

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
    <TaskList tasks={tasks} onDelete={handleDeleteTask} onEdit={handleEditTask} onUpdateStatus={handleUpdateStatus} {...args} />
  );
};