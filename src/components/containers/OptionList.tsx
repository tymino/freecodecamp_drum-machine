import React from 'react';

import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';

import { IOptionsAction } from '../../types/actions/options';
import { setTogglePower, setToggleBank } from '../../redux/actions/options';

import { Toggle, Display, Range } from '../';

const OptionList: React.FC = () => {
  const dispatch = useDispatch<React.Dispatch<IOptionsAction>>();
  const { togglePower, toggleBank, display, volume } = useTypedSelector(
    (state) => state.optionReducer,
  );

  return (
    <div className="option-list">
      <div className="option-list__wrapper">
        <Toggle name="power" checked={togglePower} dispatch={dispatch} action={setTogglePower} />
      </div>
      <div className="option-list__wrapper">
        <Display display={display} dispatch={dispatch} />
      </div>
      <div className="option-list__wrapper">
        <Range volume={volume} dispatch={dispatch} />
      </div>
      <div className="option-list__wrapper">
        <Toggle name="bank" checked={toggleBank} dispatch={dispatch} action={setToggleBank} />
      </div>
    </div>
  );
};

export default OptionList;
