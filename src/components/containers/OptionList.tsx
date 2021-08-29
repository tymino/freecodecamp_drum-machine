import React from 'react';

import { Toggle, Display, Range } from '../';

const OptionList = () => {
  return (
    <div className="option-list">
      <div className="option-list__wrapper">
        <Toggle />
      </div>
      <div className="option-list__wrapper">
        <Display />
      </div>
      <div className="option-list__wrapper">
        <Range />
      </div>
      <div className="option-list__wrapper">
        <Toggle />
      </div>
    </div>
  );
};

export default OptionList;
