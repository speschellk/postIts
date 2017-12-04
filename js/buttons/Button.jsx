import React from 'react';

const Button = props => (
  <button className={`button ${props.className}`} onClick={props.buttonFunction}>
    {props.text}
  </button>
);

export default Button;
