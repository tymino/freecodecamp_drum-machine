import React from 'react';

interface IDisplayProps {
  display: string;
}

const Display: React.FC<IDisplayProps> = ({ display }) => {
  return <div className="display">{display}</div>;
};

export default Display;
