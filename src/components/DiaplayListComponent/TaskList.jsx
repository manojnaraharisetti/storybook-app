import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import './../../App.css';
import { toast } from "react-toastify";


const TaskList = ({ tasks, onDelete, onEdit, onUpdateStatus }) => {
  const [editedTitle, setEditedTitle] = useState('');
  const [editId, setEditId] = useState(null);

  const handleEdit = (id, title, status) => {
    setEditId(id);
    setEditedTitle(title);
    toast.info("Editing task...");
  };

  const handleSaveEdit = () => {
    if (editedTitle.trim() && editId !== null) {
      onEdit(editId, editedTitle);
      setEditId(null);
      setEditedTitle('');
      toast.success("Task edited successfully!");
    }
  };

  const handleDelete = (id) => {
    onDelete(id);
    toast.error("Task deleted!");
  };

  const handleStatusUpdate = (id, status) => {
    onUpdateStatus(id, status);
    toast.info("Task status updated!");
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
                  <span onClick={() => handleDelete(task.id)}><FontAwesomeIcon icon={faTrash} />&nbsp;&nbsp;</span>
                  <span onClick={() => handleEdit(task.id, task.title, task.status)}><FontAwesomeIcon icon={faPenToSquare} /></span> <br></br>
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
