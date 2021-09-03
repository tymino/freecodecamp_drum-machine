import React from 'react';
import { useDispatch } from 'react-redux';
import useTypedSelector from '../../hooks/useTypedSelector';

import { setDrums } from '../../redux/actions/drums';
import { setDIsplay } from '../../redux/actions/options';

import { Button } from '../';
import { IAudio } from '../../types/data';

const ButtonList: React.FC = React.memo(() => {
  const dispatch = useDispatch();

  const { bankOne, bankTwo } = useTypedSelector((state) => state.drumReducer);
  const { toggleBank, togglePower, volume } = useTypedSelector((state) => state.optionReducer);

  const activeBank = !toggleBank ? bankOne : bankTwo;

  const playAudio = ({ title, audio }: IAudio) => {
    if (togglePower) return;

    // dispatch(setDIsplay(title));

    audio.pause();
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  React.useEffect(() => {
    dispatch(setDrums());
  }, [dispatch]);

  return (
    <div className="button-list">
      {activeBank.bank.map((bank) => (
        <Button key={bank.id} bank={bank} playAudio={playAudio} />
      ))}
    </div>
  );
});

export default ButtonList;