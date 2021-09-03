import { dataDrumOne, dataDrumTwo } from '../../data';

import { IBankState, IDrumsAction } from '../../types/actions/drums';

const initialState: IBankState = {
  bankOne: { title: 'Heater Kit', bank: [] },
  bankTwo: { title: 'Heater Kit', bank: [] },
};

const drumReducer = (state = initialState, action: IDrumsAction): IBankState => {
  switch (action.type) {
    case 'SET_DRUMS':
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
