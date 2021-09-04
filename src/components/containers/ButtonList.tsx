import React from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';

import { IDrumsAction } from '../../types/actions/drums';
import { IOptionsAction } from '../../types/actions/options';

import { setDrums } from '../../redux/actions/drums';

import { Button } from '../';

const ButtonList: React.FC = React.memo(() => {
  const dispatch = useDispatch<React.Dispatch<IDrumsAction | IOptionsAction>>();

  const { bankOne, bankTwo } = useTypedSelector((state) => state.drumReducer);
  const { toggleBank, togglePower, volume } = useTypedSelector((state) => state.optionReducer);

  const activeBank = !toggleBank ? bankOne : bankTwo;

  React.useEffect(() => {
    dispatch(setDrums());
  }, [dispatch]);

  return (
    <div className="button-list">
      {activeBank.bank.map((bank) => (
        <Button key={bank.id} bank={bank} togglePower={togglePower} volume={volume} dispatch={dispatch} />
      ))}
    </div>
  );
});

export default ButtonList;
