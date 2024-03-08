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
    <div className='totalldivvv'>
      <div className="mytaskss">
        <h3><i class="fa-solid fa-book"></i>&nbsp;My Tasks</h3>
      </div>
      <ul>
        {tasks.length === 0 ? (
          <div className='notasksgif'>
            <div className="imagegiff"></div>
          </div>
        ) : (
          tasks.map(task => (
            <li key={task.id}>
              {editId === task.id ? (
                <>
                  <div className="edittasts">
                    <input type="text" value={editedTitle} onChange={e => setEditedTitle(e.target.value)} />
                    <button onClick={handleSaveEdit}>Save&nbsp;<i class="fa-regular fa-floppy-disk"></i></button>
                  </div>
                </>
              ) : (
                <>
                  <span className="task-title">{task.title}</span><br></br>
                  {(!task.editedAt && <span>Created At: {task.createdAt}</span>) ||
                    (task.editedAt && <span>Edited At: {task.editedAt}</span>)}&nbsp;&nbsp;&nbsp;
                  <span onClick={() => onDelete(task.id)}><i className="fa-solid fa-trash"></i></span>&nbsp;&nbsp;
                  <span onClick={() => handleEdit(task.id, task.title, task.status)}><i className="fa-solid fa-pen-to-square"></i></span>&nbsp;<br></br>
                  <p>Status :-</p>
                  <div className='ststusbutton'>
                    <button onClick={() => handleStatusUpdate(task.id, 'notdone')} className={task.status === 'notdone' ? 'active' : ''}>Not Yet Done</button>&nbsp;&nbsp;
                    <button onClick={() => handleStatusUpdate(task.id, 'inprogress')} className={task.status === 'inprogress' ? 'active' : ''}>In Progress</button>&nbsp;&nbsp;
                    <button onClick={() => handleStatusUpdate(task.id, 'completed')} className={task.status === 'completed' ? 'active' : ''}>Completed</button>&nbsp;&nbsp;
                  </div>
                </>
              )}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default TaskList;
