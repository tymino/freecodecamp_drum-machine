import React from 'react';

import { IDrumData } from './types/IDrumData';

import { ButtonList, OptionList } from './components';
import { bankOne, bankTwo } from './constants/drumData';

const App = () => {
  const [activeDrum, setActiveDrum] = React.useState<IDrumData[]>(bankOne);
  const [power, setPower] = React.useState<boolean>(true);
  const [display, setDisplay] = React.useState<string>('');
  const [volume, setVolume] = React.useState<number>(0.1);
  const [bank, setBank] = React.useState<boolean>(false);

  const createSound = (url: string) => {
    const audio = new Audio(url);
    audio.volume = volume;
    audio.play();
  };

  const handleButtonClick = (note: IDrumData) => {
    if (power === false) return;

    activeDrum.forEach(e => {
      if (e.keyCode === note.keyCode) {
        setDisplay(e.id);
        createSound(e.url);
        return;
      }
    });
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'power':
        setPower(e.target.checked);
        break;
      case 'bank':
        setBank(e.target.checked);

        if (!e.target.checked) {
          setDisplay('Heater Kit');
          setActiveDrum(bankOne);
          break;
        }

        setDisplay('Smooth Piano Kit');
        setActiveDrum(bankTwo);
        break;
      default:
        return;
    }
  };

  // React.useEffect(() => {
  //   const str = `Volume: ${volume * 100}`;
  //   setDisplay(str);
  // }, [volume]);

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => setDisplay(''), 1000);

  //   return () => clearInterval(intervalId);
  // }, [power]);

  return (
    <div className="app">
      <ButtonList activeDrum={activeDrum} handleButtonClick={handleButtonClick} />
      <OptionList
        power={power}
        bank={bank}
        handleToggle={handleToggle}
        display={display}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
};

export default App;
