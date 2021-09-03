import React from 'react';

import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';

import { Toggle, Display, Range } from '../';

const OptionList: React.FC = () => {
  const dispatch = useDispatch();

  const { togglePower, toggleBank, display, volume } = useTypedSelector((state) => state.optionReducer);

  return (
    <div className="option-list">
      <div className="option-list__wrapper">
        <Toggle name="power" checked={togglePower} dispatch={dispatch} />
      </div>
      <div className="option-list__wrapper">
        <Display display={display} />
      </div>
      <div className="option-list__wrapper">
        <Range volume={volume} dispatch={dispatch} />
      </div>
      <div className="option-list__wrapper">
        <Toggle name="bank" checked={toggleBank} dispatch={dispatch} />
      </div>
    </div>
  );
};

export default OptionList;
