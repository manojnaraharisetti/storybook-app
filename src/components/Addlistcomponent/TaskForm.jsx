import React, { useState } from 'react';
import './TaskForm.css'

const TaskForm = ({ onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title);
    setTitle('');
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
