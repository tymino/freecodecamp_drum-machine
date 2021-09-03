import { ActionNameForOptions } from '../../types/enums';
import { IOptionsAction } from '../../types/actions/options';

const setTogglePower = (): IOptionsAction => ({
  type: ActionNameForOptions.TOGGLE_POWER,
});

const setToggleBank = (): IOptionsAction => ({
  type: ActionNameForOptions.TOGGLE_BANK,
});

const setDIsplay = (name: string): IOptionsAction => ({
  type: ActionNameForOptions.SET_DISPLAY,
  payload: name,
});

const setVolume = (value: number): IOptionsAction => ({
  type: ActionNameForOptions.SET_VOLUME,
  payload: value,
});

export { setTogglePower, setToggleBank, setDIsplay, setVolume };
