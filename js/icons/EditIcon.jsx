import React from 'react';

const EditIcon = props => (
  <img
    className="icon-edit"
    src="../../public/imgs/edit.png"
    onClick={props.handleEditClick}
  />
);

export default EditIcon;
