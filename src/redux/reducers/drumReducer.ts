import { dataDrumOne, dataDrumTwo } from '../../data';

import { BankTitle, ActionNameForDrums } from '../../types/enums';
import { IBankState, IDrumsAction } from '../../types/actions/drums';

const initialState: IBankState = {
  bankOne: { title: BankTitle.BANK_ONE, bank: [] },
  bankTwo: { title: BankTitle.BANK_TWO, bank: [] },
};

const drumReducer = (state = initialState, action: IDrumsAction): IBankState => {
  switch (action.type) {
    case ActionNameForDrums.SET_DRUMS:
      return {
        bankOne: {
          ...state.bankOne,
          bank: dataDrumOne,
        },
        bankTwo: {
          ...state.bankOne,
          bank: dataDrumTwo,
        },
      };
    default:
      return state;
  }
};

export { drumReducer };
