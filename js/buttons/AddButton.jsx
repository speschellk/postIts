import React from 'react';
import Button from './Button';

const AddButton = props => (
  <Button
    className="button-add"
    buttonFunction={props.buttonFunction}
    text={'Add'}
  />
);

export default AddButton;
