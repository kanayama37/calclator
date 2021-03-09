import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPUL,
  DEVIDE,
  EQUAL,
  CLEAR
} from './types';

export const onNumberClick = (number) => ({
  type: INPUT_NUMBER,
  number,
});

export const onPulsClick = () => ({
  type: PLUS,
});

export const onMinusClick = () => ({
  type: MINUS,
});
export const onMulipulClick = () => ({
  type: MULTIPUL,
});

export const onDevideClick = () => ({
  type: DEVIDE,
});

export const onEqualclick = () => ({
  type: EQUAL,
});

export const onClearClick = () => ({
  type: CLEAR,
});



