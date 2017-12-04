import React from 'react';
import ColorBox from './ColorBox';

const ColorMenu = props => {
  const colors = {
    pink: '#FAA9B0',
    green: '#6CD9A4',
    yellow: '#FADAB1',
    blue: '#AFCDF9'
  };

  return (
    <div className="color-menu">
      {Object.keys(colors).map(color => <ColorBox key={colors[color].slice(1)} onClick={props.onClick} color={colors[color]} />)}
    </div>
  );
};

export default ColorMenu;
