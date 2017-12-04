import React from 'react';

const ColorBox = (props) => (
  <div className="color-box" style={{backgroundColor: props.color}} onClick={() => props.onClick(props.color)}></div>
);

export default ColorBox;
