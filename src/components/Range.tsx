import React from 'react';

const Range = () => {
  const [value, setValue] = React.useState('50');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="range">
      <input
        className="range__slider"
        type="range"
        min="0"
        max="100"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default Range;
