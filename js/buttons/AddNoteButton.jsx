import React from 'react';
import Button from './Button';

const AddNoteButton = props => (
    <Button className="button-add-note" buttonFunction={props.handleAddNoteClick} text={'+ Add Note'} />
  );

export default AddNoteButton;
