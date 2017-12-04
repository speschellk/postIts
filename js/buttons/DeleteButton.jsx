import React from 'react';
import Button from './Button';

const DeleteButton = props => (
  <Button
    className="button-delete"
    buttonFunction={props.handleDelete}
    text={'Delete'}
  />
);

export default DeleteButton;
