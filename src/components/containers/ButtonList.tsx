import React from 'react';

import { Button } from '../';

import { IDrumData } from '../../types/IDrumData';

interface IButtonListProps {
  activeDrum: IDrumData[];
  handleButtonClick: (note: IDrumData) => void;
}

const ButtonList: React.FC<IButtonListProps> = ({ activeDrum, handleButtonClick }) => {
  return (
    <div className="button-list">
      {activeDrum.map((note: IDrumData) => (
        <Button key={note.id} note={note} handleButtonClick={handleButtonClick} />
      ))}
    </div>
  );
};

export default ButtonList;
