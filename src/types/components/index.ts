import { IBank, IAudio } from '../data';

interface IButtonListProps {
  activeBankArr: IBank[];
  playAudio: (audio: IAudio) => void;
}

interface IButtonProps {
  bank: IBank;
  playAudio: (audio: IAudio) => void;
}

interface IOptionListProps {
  togglePowerState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  toggleBankState: [boolean, React.Dispatch<React.SetStateAction<boolean>>];
  display: string;
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

interface IToggleProps {
  name: string;
  checked: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IDisplayProps {
  display: string;
}

interface IRangeProps {
  volume: number;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

export type {
  IButtonListProps,
  IButtonProps,
  IOptionListProps,
  IToggleProps,
  IDisplayProps,
  IRangeProps,
};
