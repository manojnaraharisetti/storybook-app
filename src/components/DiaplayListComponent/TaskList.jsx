import React, { useState } from 'react';

const TaskList = ({ tasks, onDelete, onEdit, onUpdateStatus }) => {
  const [editedTitle, setEditedTitle] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, title, status) => {
    setEditId(id);
    setEditedTitle(title);
  };

  const handleSaveEdit = () => {
    if (editedTitle.trim() && editId !== null) {
      onEdit(editId, editedTitle);
      setEditId(null);
      setEditedTitle('');
    }
  };

  const handleStatusUpdate = (id, status) => {
    onUpdateStatus(id, status);
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id}>
          {editId === task.id ? (
            <>
              <input type="text" value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
              <button onClick={handleSaveEdit}>Save</button>
            </>
          ) : (
            <>
              <span>{task.title}</span>
              <span>Status: {task.status}</span>
              {(!task.editedAt && <span>Created At: {task.createdAt}</span>) ||
                (task.editedAt && <span>Edited At: {task.editedAt}</span>)}
              <button onClick={() => onDelete(task.id)}>Delete</button>
              <button onClick={() => handleEdit(task.id, task.title, task.status)}>Edit</button>
              <button onClick={() => handleStatusUpdate(task.id, 'notdone')} className={task.status === 'notdone' ? 'active' : ''}>Not Yet Done</button>
              <button onClick={() => handleStatusUpdate(task.id, 'inprogress')} className={task.status === 'inprogress' ? 'active' : ''}>In Progress</button>
              <button onClick={() => handleStatusUpdate(task.id, 'completed')} className={task.status === 'completed' ? 'active' : ''}>Completed</button>
            </>

          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
