import React from 'react';
import { useDispatch } from 'react-redux';

import { setDrums } from './redux/actions/drums';

import { IData, IAudio } from './types/data';

import { ButtonList, OptionList } from './components';
import { bankOne, bankTwo } from './data';

const App = () => {
  const [dataDrum] = React.useState<IData[]>([
    { title: 'Heater Kit', bank: bankOne },
    { title: 'Smooth Piano Kit', bank: bankTwo },
  ]);

  const dispatch = useDispatch();

  const [togglePower, setTogglePower] = React.useState<boolean>(false);
  const [toggleBank, setToggleBank] = React.useState<boolean>(true);

  const [display, setDisplay] = React.useState<string>('');
  const [volume, setVolume] = React.useState<number>(0.1);

  const playAudio = ({ title, audio }: IAudio) => {
    if (togglePower) return;

    setDisplay(title);

    audio.pause();
    audio.currentTime = 0;
    audio.volume = volume;
    audio.play();
  };

  React.useEffect(() => {
    const bankObj: any = {
      bankOne,
      bankTwo,
    };

    dispatch(setDrums(bankObj))
  }, []);

  // React.useEffect(() => {
  //   setDisplay(String(volume * 100));
  //   const intervalId = setInterval(() => setDisplay(''), 1000);

  //   return () => clearInterval(intervalId);
  // }, [togglePower]);

  return (
    <div className="app">
      <ButtonList
        activeBankArr={!toggleBank ? dataDrum[0].bank : dataDrum[1].bank}
        playAudio={playAudio}
      />
      <OptionList
        togglePowerState={[togglePower, setTogglePower]}
        toggleBankState={[toggleBank, setToggleBank]}
        display={display}
        volume={volume}
        setVolume={setVolume}
      />
    </div>
  );
};

export default App;
