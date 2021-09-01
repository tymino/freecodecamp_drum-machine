import React from 'react';

import { Toggle, Display, Range } from '../';

interface IOptionList {
  togglePowerState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  toggleBankState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  display: string;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const OptionList: React.FC<IOptionList> = ({ togglePowerState, toggleBankState, display, volume, setVolume }) => {
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
