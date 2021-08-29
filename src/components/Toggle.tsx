import React from 'react';

const Toggle = () => {
  return (
    <div className='toggle'>
      <p className="toggle__name">Test</p>
      <label className="toggle__label">
        <input className="toggle__checkbox" type="checkbox" />
        <span className="toggle__slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
