import React from 'react';

import { IToggleProps } from '../types/components';

const Toggle: React.FC<IToggleProps> = React.memo(({ name, checked, dispatch, action }) => {
  const handleToggle = () => {
    dispatch(action());
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
