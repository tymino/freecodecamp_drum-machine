import React from 'react';
import { Dispatch } from 'redux';

interface IRangeProps {
  volume: number;
  dispatch: Dispatch<any>;
}

const Range: React.FC<IRangeProps> = React.memo(({ volume, dispatch }) => {
  const [vol, setVol] = React.useState<number>(volume);

  const handleChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setVol(+value);
  };

  return (
    <div className="range">
      <input
        className="range__slider"
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={vol}
        onChange={handleChange}
        onMouseUp={() => dispatch({ type: 'SET_VOLUME', payload: vol })}
      />
    </div>
  );
});

export default Range;
