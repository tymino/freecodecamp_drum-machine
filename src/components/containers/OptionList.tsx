import React from 'react';

import { Toggle, Display, Range } from '../';

import { IOptionListProps } from '../../types/components';

const OptionList: React.FC<IOptionListProps> = ({ togglePowerState, toggleBankState, display, volume, setVolume }) => {
  const [togglePower, setTogglePower] = togglePowerState;
  const [toggleBank, setToggleBank] = toggleBankState;

  return (
    <div className="option-list">
      <div className="option-list__wrapper">
        <Toggle name="power" checked={togglePower} setToggle={setTogglePower} />
      </div>
      <div className="option-list__wrapper">
        <Display display={display} />
      </div>
      <div className="option-list__wrapper">
        <Range volume={volume} setVolume={setVolume} />
      </div>
      <div className="option-list__wrapper">
        <Toggle name="bank" checked={toggleBank} setToggle={setToggleBank} />
      </div>
    </div>
  );
};

export default OptionList;
