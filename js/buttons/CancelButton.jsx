import React from 'react';
import Button from './Button';

const CancelButton = props => (
  <Button
    className="button-cancel"
    buttonFunction={props.handleCancel}
    text={'Cancel'}
  />
);

export default CancelButton;
