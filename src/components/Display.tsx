import React from 'react';

interface IDisplayProps {
  display: string;
}

const Display: React.FC<IDisplayProps> = React.memo(({ display }) => {
  return <div className="display">{display}</div>;
});

export default Display;
