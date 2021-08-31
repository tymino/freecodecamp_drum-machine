import React from 'react';

import useKey from '../hooks/useKey';

import { IBank } from '../types/data';

interface IButtonProps {
  bank: IBank;
  playAudio: (audio: HTMLAudioElement) => void;
}

const Button: React.FC<IButtonProps> = ({ bank, playAudio }) => {
  const [btnAudio, setBtnAudio] = React.useState<HTMLAudioElement>(new Audio(bank.url));

  const btnRef = React.useRef<HTMLButtonElement>(null);
  

  const handleClick = () => playAudio(btnAudio);

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
};

export default Button;
