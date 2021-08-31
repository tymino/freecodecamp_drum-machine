import React from 'react';

import { IBank, IData } from './types/data';

import { ButtonList, OptionList } from './components';
import { bankOne, bankTwo } from './constants/drumData';

const App = () => {
  const [dataDrum, setDataDrum] = React.useState<IData[]>([
    { title: 'Heater Kit', bank: bankOne },
    { title: 'Smooth Piano Kit', bank: bankTwo },
  ]);

  const [togglePower, setTogglePower] = React.useState<boolean>(true);
  const [toggleBank, setToggleBank] = React.useState<boolean>(false);

  const [display, setDisplay] = React.useState<string>('');
  const [volume, setVolume] = React.useState<number>(0.1);

  const playAudio = (audio: HTMLAudioElement) => {
    audio.pause();
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  const handleToggle = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case 'power':
        setTogglePower(e.target.checked);
        break;
      case 'bank':
        setToggleBank(e.target.checked);
        break;
      default:
        return;
    }
  };

  // React.useEffect(() => {
  //   const intervalId = setInterval(() => setDisplay(''), 1000);

  //   return () => clearInterval(intervalId);
  // }, [power]);

  return (
    <div className="app">
      <ButtonList
        activeBankArr={!toggleBank ? dataDrum[0].bank : dataDrum[1].bank}
        playAudio={playAudio}
      />
      {/* <OptionList
        togglePower={togglePower}
        toggleBank={toggleBank}
        handleToggle={handleToggle}
        display={display}
        volume={volume}
        setVolume={setVolume}
      /> */}
    </div>
  );
};

export default App;
