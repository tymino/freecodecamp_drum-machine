import React from 'react';

import { IDrumData } from '../types/IDrumData';

interface IButtonProps {
  note: IDrumData;
  handleButtonClick: (note: IDrumData) => void;
}

const Button: React.FC<IButtonProps> = ({ note, handleButtonClick }) => {
  const [activeBtn, setActiveBtn] = React.useState<number>(note.keyCode);
  

  /*
    Создать аудио в самой кнопке
    Перерендер идет из-за импорта данных из файла, нужно устанавливать все чеерз useEffect
  */

  const handleClick = () => handleButtonClick(note);

  const handleKeyDown = (e: any) => {
    if (e.keyCode === activeBtn) {
      handleButtonClick(note);
      return;
    }
    return;
  };

  return (
    <button className={`button ${activeBtn}`} onClick={handleClick} onKeyDown={handleKeyDown}>
      {note.keyTrigger}
    </button>
  );
};

export default Button;
