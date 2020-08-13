import {
  SET_AMOUNT2,
  CHANGE_AMOUNT1,
  SET_CURRENCY1,
  SET_CURRENCY2,
  SWAP_CURRENCY
} from "./type";

export const getAmount2 = () => (dispatch, getState) => {
  const currency1 = getState().currency.c1;
  const currency2 = getState().currency.c2;
  const amount1 = getState().currency.amount1;

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency1}`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: SET_AMOUNT2,
        payload: data.rates[currency2] * amount1
      });
    });
};

export const changeAmount1 = e => (dispatch, getState) => {
  e.preventDefault();
  const amount1 = e.target.value;
  dispatch({
    type: CHANGE_AMOUNT1,
    payload: amount1
  });
};

export const setCurrency1 = e => (dispatch, getState) => {
  const currency1 = e.target.value;
  console.log(currency1);
  dispatch({
    type: SET_CURRENCY1,
    payload: currency1
  });
};

export const setCurrency2 = e => (dispatch, getState) => {
  const currency2 = e.target.value;
  console.log(currency2);
  dispatch({
    type: SET_CURRENCY2,
    payload: currency2
  });
};

export const swap = () => (dispatch, getState) => {
  const currency1 = getState().currency.c1;
  const currency2 = getState().currency.c2;

  dispatch({
    type: SWAP_CURRENCY,
    payload: {
      c1: currency2,
      c2: currency1
    }
  });
};
