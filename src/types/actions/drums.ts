import { IData } from '../data';
import { ActionNameForDrums } from '../enums';

interface IBankState {
  bankOne: IData;
  bankTwo: IData;
}

interface ISetDrumsAction {
  type: ActionNameForDrums.SET_DRUMS;
}

type IDrumsAction = ISetDrumsAction;

export type { IBankState, IDrumsAction };