import React from 'react';
import EditIcon from './icons/EditIcon';
import DeleteIcon from './icons/DeleteIcon';

const NoteTitle = props => (
  <div className="note-title">
    <span className="note-title-text">{props.title}</span>
    <span className="icon-container">
      <EditIcon handleEditClick={props.handleEditClick} />
      <DeleteIcon handleDeleteClick={props.handleDeleteClick} />
    </span>
  </div>
);

export default NoteTitle;
