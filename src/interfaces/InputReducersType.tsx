import { ChangeEvent } from 'react';

type ValueType = string;

type ReturnReducerType = {
    value: ValueType;
    hasError: boolean;
    valueIsValid: boolean;
    valueChangeHandler: (event: ValueEventChangeType) => void;
    valueBlurHandler: () => void;
    reset: () => void;
};

type ValidatorType = (val: ValueType ) => boolean;

type ActionType = { type: 'INPUT'; value: ValueType } | { type: 'BLUR' } | { type: 'RESET' };

export type StateType = {
    value: ValueType;
    isTouched: boolean;
};

export type ValueEventChangeType = ChangeEvent<HTMLInputElement>;

export type InputReducerType = (state: StateType, action: ActionType) => StateType;

export type InputReducerValidateType = (validator: ValidatorType) => ReturnReducerType;