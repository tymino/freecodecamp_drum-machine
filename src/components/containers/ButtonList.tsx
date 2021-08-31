import React from 'react';

import { Button } from '../';

import { IBank } from '../../types/data';

interface IButtonListProps {
  activeBankArr: IBank[];
  playAudio: (audio: HTMLAudioElement) => void;
}

const ButtonList: React.FC<IButtonListProps> = ({ activeBankArr, playAudio }) => {
  return (
    <div className="button-list">
      {activeBankArr.map((bank: IBank) => (
        <Button key={bank.id} bank={bank} playAudio={playAudio} />
      ))}
    </div>
  );
};

export default ButtonList;
