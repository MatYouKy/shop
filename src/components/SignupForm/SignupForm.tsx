import { FormEvent, FC } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../UI/Input/Input';
import { useInputValidate } from '../../hooks/useInputValidate';
import { LoaderSpinner } from '../../UI/LoaderSpinner/LoaderSpinner';

import classes from '../SigninForm/SigninForm.module.scss';
import Button from '../../UI/Button/Button';
import { useFirebaseAuth } from '../../hooks/useFirebaseAuth';

const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);

const matchRegExp = (value: string): boolean => {
  if (value.match(regexp)){
    return true;
  }
  return false;
}

export const SignupForm: FC = () => {
  const navigate = useNavigate();

  const url = process.env.REACT_APP_FIREBASE_SIGN_UP;

  const { sendRequest, isLoading, error} = useFirebaseAuth();

  const {
    value: userNameValue,
    hasError: userNameError,
    valueIsValid: userNameIsValid,
    valueChangeHandler: userNameChangeHandler,
    valueBlurHandler: userNameBlurHandler,
    reset: userNameReset
  } = useInputValidate((value) => value.trim().length > 3);

  const {
    value: emailValue,
    hasError: emailError,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInputValidate(matchRegExp);

  const {
    value: passwordValue,
    hasError: passwordError,
    valueIsValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset
  } = useInputValidate((value) => value.trim().length >= 8);

  const {
    value: confirmValue,
    hasError: confirmError,
    valueIsValid: confirmIsValid,
    valueChangeHandler: confirmChangeHandler,
    valueBlurHandler: confirmBlurHandler,
    reset: confirmReset
  } = useInputValidate((value) => value === passwordValue);

  let formIsValid = false;

  if (userNameIsValid && emailIsValid && passwordIsValid && confirmIsValid) formIsValid = true;

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    // eslint-disable-next-line no-alert
    if (!formIsValid) alert('Form is Invalid!');

    sendRequest({ url, emailValue, passwordValue })

    if (!error) {
      navigate('/');
    }

    userNameReset();
    emailReset();
    passwordReset();
    confirmReset();
  };

  return (
    <form className={classes['form-inner']} onSubmit={submitHandler}>
      <h2 className={classes['header-text']}>sign up</h2>
      {error && <h4 className={classes.error}>{error}</h4>}
      <Input
        label='user Name'
        hasError={userNameError}
        textError='username should be longer than 3 chars'
        input={{
          type: 'text',
          id: 'username',
          name: 'username',
          value: userNameValue,
          onChange: userNameChangeHandler,
          onBlur: userNameBlurHandler
        }}
      />
      <Input
        label='user e-mail'
        hasError={emailError}
        textError='emial should contain char @'
        input={{
          type: 'email',
          id: 'userEmail',
          name: 'email',
          value: emailValue,
          onChange: emailChangeHandler,
          onBlur: emailBlurHandler
        }}
      />
      <Input
        label='password'
        hasError={passwordError}
        textError='password should be longer than 8 chars'
        input={{
          type: 'password',
          id: 'password',
          name: 'password',
          value: passwordValue,
          onChange: passwordChangeHandler,
          onBlur: passwordBlurHandler
        }}
      />
      <Input
        label='confirm password'
        hasError={confirmError}
        textError='passwords not equal'
        input={{
          type: 'password',
          id: 'confirm',
          name: 'confirm',
          value: confirmValue,
          onChange: confirmChangeHandler,
          onBlur: confirmBlurHandler
        }}
      />
      <div className={classes.action}>
        {!isLoading && <Button disabled={!formIsValid} type='submit' name='sign in' />}
        {isLoading && <LoaderSpinner />}

        <p className={classes.info}>
          Do you have an account?{' '}
          <Link to='/login/signin' className={classes.link}>
            Sing in!
          </Link>
        </p>
      </div>
    </form>
  );
};
