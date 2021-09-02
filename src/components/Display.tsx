import React from 'react';

import { IDisplayProps } from '../types/components';

const Display: React.FC<IDisplayProps> = React.memo(({ display }) => {
  return <div className="display">{display}</div>;
});

export default Display;
