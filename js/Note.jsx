import React from 'react';
import NoteTitle from './NoteTitle';

const Note = props => (
  <div className="note">
    <div className="note-color" style={{ backgroundColor: props.color }} />
    <NoteTitle
      title={props.title}
      handleEditClick={props.handleEditClick}
      handleDeleteClick={props.handleDeleteClick}
    />
    <div className="note-body-text">{props.text}</div>
  </div>
);

export default Note;
