import { ActionNameForOptions } from '../enums';

interface IOptionsState {
  togglePower: boolean;
  toggleBank: boolean;
  display: string;
  volume: number;
}

interface ITogglePowerAction {
  type: ActionNameForOptions.TOGGLE_POWER;
}

interface IToggleBankAction {
  type: ActionNameForOptions.TOGGLE_BANK;
}

interface ISetDIsplayAction {
  type: ActionNameForOptions.SET_DISPLAY;
  payload: string;
}

interface ISetVolumeAction {
  type: ActionNameForOptions.SET_VOLUME;
  payload: number;
}

type IOptionsAction = ITogglePowerAction | IToggleBankAction | ISetDIsplayAction | ISetVolumeAction;

export type { IOptionsState, IOptionsAction };
