import { forwardRef } from 'react';
import { InputInterface } from '../../interfaces/UIInterface'
import classes from './Input.module.scss';

interface InputPropsType { 
  input: InputInterface;
  label: string;
  hasError?: boolean;
  textError?: string;
  extraClassName?: string;
};

interface TextAreaInterface {
  id: string;
  label: string;
  hasError?: boolean;
  textError?: string;
  extraClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputPropsType>(({ input, label, hasError, textError, extraClassName }, ref) => (
  <div className={`${classes.input} ${extraClassName || extraClassName}`}>
    <label htmlFor={input.id}>{label}</label>
    <input ref={ref} {...input} />
    {hasError && <p className={classes['error-text']}>{textError}</p>}
  </div>
));

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaInterface>(({ id, label, hasError, textError, extraClassName }, ref) => (
  <div className={`${classes.input} ${extraClassName || extraClassName}`}>
    <label htmlFor={id}>{label}</label>
    <textarea ref={ref} id={id} />
    {hasError && <p className={classes['error-text']}>{textError}</p>}
  </div>
));

Input.defaultProps = {
  hasError: false,
  textError: '',
  extraClassName: ''
}

TextArea.defaultProps = {
  hasError: false,
  textError: '',
  extraClassName: ''
};



