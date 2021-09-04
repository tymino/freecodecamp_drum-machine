import React from 'react';
import useKey from '../hooks/useKey';

import { IAudio } from '../types/actions/drums';
import { IButtonProps } from '../types/components';

import { setDIsplay } from '../redux/actions/options';

const Button: React.FC<IButtonProps> = React.memo(({ bank, togglePower, volume, dispatch }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [btnAudio] = React.useState<IAudio>({
    title: bank.id,
    audio: new Audio(bank.url),
  });

  const playAudio = ({ title, audio }: IAudio) => {
    if (!togglePower) return;

    dispatch(setDIsplay(title));

    audio.pause();
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  const handleClick = () => {
    playAudio(btnAudio);
  };

  const handleKeyPress = () => {
    btnRef.current?.classList.add('button--active');
    playAudio(btnAudio);
  };

  const handleKeyDown = () => {
    btnRef.current?.classList.remove('button--active');
  };

  useKey('keydown', `Key${bank.keyTrigger}`, handleKeyPress);
  useKey('keyup', `Key${bank.keyTrigger}`, handleKeyDown);

  return (
    <button className={'button'} ref={btnRef} onClick={handleClick}>
      {bank.keyTrigger}
    </button>
  );
});

export default Button;
