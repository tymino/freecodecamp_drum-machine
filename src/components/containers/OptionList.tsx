import React from 'react';

import { Toggle, Display, Range } from '../';

interface IOptionList {
  power: boolean;
  bank: boolean;
  handleToggle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  display: string;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const OptionList: React.FC<IOptionList> = ({ power, bank, handleToggle, display, volume, setVolume }) => {
  return (
    <div className="option-list">
      <div className="option-list__wrapper">
        <Toggle name="power" checked={power} handleToggle={handleToggle} />
      </div>
      <div className="option-list__wrapper">
        <Display display={display} />
      </div>
      <div className="option-list__wrapper">
        <Range volume={volume} setVolume={setVolume} />
      </div>
      <div className="option-list__wrapper">
        <Toggle name="bank" checked={bank} handleToggle={handleToggle} />
      </div>
    </div>
  );
};

export default OptionList;
