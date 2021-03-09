import {
  INPUT_NUMBER,
  PLUS,
  MINUS,
  MULTIPUL,
  DEVIDE,
  EQUAL,
  CLEAR
} from '../actions/types';

const initialAppstate = {
  inputValue: 0,
  operator: '',
  resultValue: 0,
  calculate: false,
  showingResult: false,
};

const calculator = (state = initialAppstate, action) => {
  switch (action.type) {
    case INPUT_NUMBER:
      return {
        ...state,
        inputValue: state.inputValue * 10 + action.number,
        showingResult: false,
      };

    case PLUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          resultValue: state.resultValue + state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '+',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case MINUS:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          resultValue: state.resultValue - state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '-',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case MULTIPUL:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          resultValue: state.resultValue * state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '*',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }
    case DEVIDE:
      if (state.calculate === true) {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          resultValue: state.resultValue / state.inputValue,
          showingResult: true,
        };
      } else {
        return {
          ...state,
          inputValue: 0,
          operator: '/',
          calculate: true,
          resultValue: state.inputValue,
          showingResult: true,
        };
      }

    case CLEAR:
      return {
        inputValue: 0,
        operator: '',
        calculate: false,
        showingResult: false,
      };

    case EQUAL:
      switch (state.operator) {
        case '+':
          return {
            inputValue: state.resultValue + state.inputValue,
            operator: '',
            calculator: false,
            resultValue: state.resultValue + state.inputValue,
            showingResult: true,
          };
        case '-':
          return {
            inputValue: state.resultValue - state.inputValue,
            operator: '',
            calculator: false,
            resultValue: state.resultValue - state.inputValue,
            showingResult: true,
          };
        case '*':
          return {
            inputValue: state.resultValue * state.inputValue,
            operator: '',
            calculator: false,
            resultValue: state.resultValue * state.inputValue,
            showingResult: true,
          };
        case '/':
          return {
            inputValue: state.resultValue / state.inputValue,
            operator: '',
            calculator: false,
            resultValue: state.resultValue / state.inputValue,
            showingResult: true,
          };
        default:
          return state;
      }
    default:
      return state;
  }
};
export default calculator;



