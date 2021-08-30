import React from 'react';

interface IToggleProps {
  name: string;
  checked: boolean;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Toggle: React.FC<IToggleProps> = ({ name, checked, handleToggle }) => {
  return (
    <div className='toggle'>
      <p className="toggle__name">{name}</p>
      <label className="toggle__label">
        <input className="toggle__checkbox" type="checkbox" name={name} checked={checked} onChange={handleToggle} />
        <span className="toggle__slider"></span>
      </label>
    </div>
  );
};

export default Toggle;
