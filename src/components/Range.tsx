import React from 'react';

interface IRangeProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const Range: React.FC<IRangeProps> = React.memo(({volume, setVolume}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(Number(e.target.value));
  };

  return (
    <div className="range">
      <input
        className="range__slider"
        type="range"
        min="0"
        max="1"
        step='0.1'
        value={volume}
        onChange={handleChange}
      />
    </div>
  );
});

export default Range;
