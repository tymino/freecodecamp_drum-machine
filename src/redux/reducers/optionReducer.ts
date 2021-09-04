import { BankTitle, ActionNameForOptions } from '../../types/enums';
import { IOptionsState, IOptionsAction } from '../../types/actions/options';

const initialState: IOptionsState = {
  togglePower: true,
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
        display: state.togglePower ? 'OFF' : 'ON',
      };
    case ActionNameForOptions.TOGGLE_BANK:
      return {
        ...state,
        toggleBank: !state.toggleBank,
        display: state.toggleBank ? BankTitle.BANK_ONE : BankTitle.BANK_TWO,
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
        display: String(action.payload * 100),
      };

    default:
      return state;
  }
};

export { optionReducer };
