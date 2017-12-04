import React from 'react';

const DeleteIcon = props => (
  <img className="icon-delete" onClick={props.handleDeleteClick} src="../../public/imgs/delete.png"/>
);

export default DeleteIcon;
