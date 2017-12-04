import React from 'react';
import Button from './Button';

const SaveButton = props => (
  <Button
    className="button-save"
    buttonFunction={props.buttonFunction}
    text={'Save'}
  />
);

export default SaveButton;
