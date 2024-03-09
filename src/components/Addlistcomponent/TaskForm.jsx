import React, { useState } from 'react';
import './TaskForm.css'
import { toast } from "react-toastify";

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error("Please enter a task.");
      return;
    }
    onSubmit(title);
    setTitle('');
    toast.success("Task added successfully!");
  };


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new task..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button type="submit" className='submitbutton'>Add Task&nbsp;<i class="fa-solid fa-arrow-up"></i></button>
    </form>
  );
};

export default TaskForm;
