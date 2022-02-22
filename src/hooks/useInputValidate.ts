import { useReducer } from 'react';
import { StateType, InputReducerType, InputReducerValidateType, ValueEventChangeType } from '../interfaces/InputReducersType'

const initialState: StateType = {
  value: '',
  isTouched: false
};

const stateInputReducer: InputReducerType = (state, action) => {
  if (action.type === 'INPUT') {
    return {
      value: action.value,
      isTouched: state.isTouched
    };
  }

  if (action.type === 'BLUR') {
    return {
      value: state.value,
      isTouched: true
    };
  }

  if (action.type === 'RESET') {
    return {
      value: '',
      isTouched: false
    };
  }

  return initialState;
};

export const useInputValidate: InputReducerValidateType = (validator) => {
  const [stateValue, dispatch] = useReducer(stateInputReducer, initialState);

  const valueIsValid = validator(stateValue.value);
  const hasError = !valueIsValid && stateValue.isTouched;

  const valueChangeHandler = (event: ValueEventChangeType) => dispatch({ type: 'INPUT', value: event.target.value });

  const valueBlurHandler = () => dispatch({ type: 'BLUR' });

  const reset = () => dispatch({ type: 'RESET' });

  return {
    value: stateValue.value,
    hasError,
    valueIsValid,
    valueChangeHandler,
    valueBlurHandler,
    reset
  };
};
