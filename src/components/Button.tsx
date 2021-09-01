import React from 'react';

import useKey from '../hooks/useKey';

import { IBank } from '../types/data';

interface IButtonProps {
  bank: IBank;
  playAudio: (audio: IAudioState) => void;
}

interface IAudioState {
  title: string;
  audio: HTMLAudioElement;
}

const Button: React.FC<IButtonProps> = ({ bank, playAudio }) => {
  const btnRef = React.useRef<HTMLButtonElement>(null);
  const [audioState] = React.useState<IAudioState>({
    title: bank.id,
    audio: new Audio(bank.url),
  });

  const handleClick = () => {
    playAudio(audioState);
  };

  const handleKeyPress = () => {
    btnRef.current?.classList.add('button--active');
    playAudio(audioState);
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
