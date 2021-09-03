import React from 'react';

import { IToggleProps } from '../types/components';

const Toggle: React.FC<any> = React.memo(({ name, checked, dispatch }) => {
  const handleToggle = () => {
    dispatch({type: `TOGGLE_${name.toUpperCase()}`});
  };

  return (
    <div className="toggle">
      <p className="toggle__name">{name}</p>
      <label className="toggle__label">
        <input
          className="toggle__checkbox"
          type="checkbox"
          name={name}
          checked={checked}
          onChange={handleToggle}
        />
        <span className="toggle__slider"></span>
      </label>
    </div>
  );
});

export default Toggle;
