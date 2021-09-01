import React from 'react';

interface IToggleProps {
  name: string;
  checked: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const Toggle: React.FC<IToggleProps> = React.memo(({ name, checked, setToggle }) => {
  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(e.target.checked);
  };

  return (
    <div className='toggle'>
      <p className="toggle__name">{name}</p>
      <label className="toggle__label">
        <input className="toggle__checkbox" type="checkbox" name={name} checked={checked} onChange={handleToggle} />
        <span className="toggle__slider"></span>
      </label>
    </div>
  );
});

export default Toggle;
