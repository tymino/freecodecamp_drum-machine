import React from 'react';

import { Button } from '../';

import { IBank } from '../../types/data';

interface IAudioState {
  title: string;
  audio: HTMLAudioElement;
}

interface IButtonListProps {
  activeBankArr: IBank[];
  playAudio: (audio: IAudioState) => void;
}

const ButtonList: React.FC<IButtonListProps> = React.memo(({ activeBankArr, playAudio }) => {
  return (
    <div className="button-list">
      {activeBankArr.map((bank: IBank) => (
        <Button key={bank.id} bank={bank} playAudio={playAudio} />
      ))}
    </div>
  );
});

export default ButtonList;
