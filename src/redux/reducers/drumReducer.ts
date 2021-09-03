import { IData } from '../../types/data';

interface bankState {
  bankOne: IData;
  bankTwo: IData;
}

const initialState: bankState = {
  bankOne: {
    title: 'Heater Kit',
    bank: [],
  },
  bankTwo: {
    title: 'Heater Kit',
    bank: [],
  },
};

const drums = (state = initialState, action: any): bankState => {
  switch (action.type) {
    case 'SET_DRUMS':
      return {
        bankOne: {
          ...state.bankOne,
          bank: action.payload.bankOne,
        },
        bankTwo: {
          ...state.bankOne,
          bank: action.payload.bankTwo,
        },
      };

    default:
      return state;
  }
};

export { drums };
