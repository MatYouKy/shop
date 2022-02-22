import { FC, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../UI/Input/Input';
import { useInputValidate } from '../../hooks/useInputValidate';
import { useFirebaseUser } from '../../hooks/useFirebaseUser';
import Button from '../../UI/Button/Button';
import { LoaderSpinner } from '../../UI/LoaderSpinner/LoaderSpinner';

import classes from './SigninForm.module.scss';


type SigninFormTypes = {
  heading: string,
  redirectLink: string,
  redirectText: string
};

const regexp = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);

const matchRegExp = (value: string): RegExpMatchArray => value.match(regexp);
const lengthValid = (value: string): boolean => value.trim().length >= 8;

export const SigninForm: FC<SigninFormTypes> = ({ heading, redirectText, redirectLink }) => {
  const navigate = useNavigate();

  const url = process.env.REACT_APP_FIREBASE_SIGN_IN;

  const { sendRequest, isLoading, error } = useFirebaseUser();

  const {
    value: emailValue,
    hasError: emailHasError,
    valueIsValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    reset: emailReset
  } = useInputValidate(matchRegExp);

  const {
    value: passwordValue,
    hasError: passwordHasError,
    valueIsValid: passwordIsValid,
    valueChangeHandler: passwordChangeHandler,
    valueBlurHandler: passwordBlurHandler,
    reset: passwordReset
  } = useInputValidate(lengthValid);

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) formIsValid = true;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    // eslint-disable-next-line no-alert
    if (!formIsValid) alert('Form is Invalid!');

    sendRequest({ url, emailValue, passwordValue });

    if (!error) {
      navigate('/');
    }

    emailReset();
    passwordReset();
  };

  return (
    <form className={classes['form-inner']} onSubmit={handleSubmit}>
      <h2 className={classes['header-text']}>{heading}</h2>
      {error && <h3 className={classes.error}>{error}</h3>}
      <Input
        label='User e-mail'
        hasError={emailHasError}
        textError='invalid e-mail'
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
        label='Password'
        hasError={passwordHasError}
        textError='password must min 8 chars'
        input={{
          type: 'password',
          id: 'userPassword',
          name: 'password',
          value: passwordValue,
          onChange: passwordChangeHandler,
          onBlur: passwordBlurHandler
        }}
      />
      <div className={classes.action}>
        {!isLoading && <Button type='submit' name='Login' disabled={!formIsValid} />}
        {isLoading && <LoaderSpinner />}
        <p className={classes.info}>
          {redirectText}
          <Link to={redirectLink} className={classes.link}>
            Sing up!
          </Link>
        </p>
      </div>
    </form>
  );
};
