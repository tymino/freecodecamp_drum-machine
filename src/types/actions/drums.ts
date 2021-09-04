import { ActionNameForDrums } from '../enums';

interface IBank {
  keyCode: number;
  keyTrigger: string;
  id: string;
  url: string;
}

interface IData {
  title: string;
  bank: IBank[];
}

interface IAudio {
  title: string;
  audio: HTMLAudioElement;
}

interface IBankState {
  bankOne: IData;
  bankTwo: IData;
}

interface ISetDrumsAction {
  type: ActionNameForDrums.SET_DRUMS;
}

type IDrumsAction = ISetDrumsAction;

export type { IAudio, IBank, IData, IBankState, IDrumsAction };
