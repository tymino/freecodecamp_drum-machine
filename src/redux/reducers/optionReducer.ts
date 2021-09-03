import { ActionNameForOptions } from '../../types/enums';
import { IOptionsState, IOptionsAction } from '../../types/actions/options';

const initialState: IOptionsState = {
  togglePower: false,
  toggleBank: true,
  display: '',
  volume: 0.1,
};

const optionReducer = (state = initialState, action: IOptionsAction): IOptionsState => {
  switch (action.type) {
    case ActionNameForOptions.TOGGLE_POWER:
      return {
        ...state,
        togglePower: !state.togglePower,
      };
    case ActionNameForOptions.TOGGLE_BANK:
      return {
        ...state,
        toggleBank: !state.toggleBank,
      };
    case ActionNameForOptions.SET_DISPLAY:
      return {
        ...state,
        display: action.payload,
      };
    case ActionNameForOptions.SET_VOLUME:
      return {
        ...state,
        volume: action.payload,
      };

    default:
      return state;
  }
};

export { optionReducer };
