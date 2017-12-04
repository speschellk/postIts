import React from 'react';
import CancelButton from './buttons/CancelButton';
import DeleteButton from './buttons/DeleteButton';

const DeleteModal = props => (
  <div className="delete-modal">
    <div className="delete-title">Delete Note</div>
    <div className="delete-body">
      Are you sure you want to delete this note?
    </div>
    <div className="delete-footer">
      <CancelButton handleCancel={props.handleCancel}/>
      <DeleteButton handleDelete={props.handleDelete}/>
    </div>
  </div>
);

export default DeleteModal;
