import {
  SET_AMOUNT2,
  CHANGE_AMOUNT1,
  SET_CURRENCY1,
  SET_CURRENCY2,
  SWAP_CURRENCY
} from "../actions/type";

const initialState = {
  amount1: 1,
  amount2: 0,
  c1: "USD",
  c2: "CNY"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_AMOUNT2:
      return {
        ...state,
        amount2: action.payload
      };
    case CHANGE_AMOUNT1:
      return {
        ...state,
        amount1: action.payload
      };
    case SET_CURRENCY1:
      return {
        ...state,
        c1: action.payload
      };
    case SET_CURRENCY2:
      return {
        ...state,
        c2: action.payload
      };
    case SWAP_CURRENCY:
      return {
        ...state,
        c1: action.payload.c1,
        c2: action.payload.c2
      };
    default:
      return state;
  }
};
