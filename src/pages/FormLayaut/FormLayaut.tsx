import { useParams } from 'react-router';
import { SigninForm } from '../../components/SigninForm/SigninForm';
import { SignupForm } from '../../components/SignupForm/SignupForm';
import classes from './FormLayaut.module.scss';

export const FormLayaut = () => {
  const { action } = useParams();

  const renderAction =
    action === 'signup' ? (
      <SignupForm />
    ) : (
      <SigninForm heading='Login' redirectText={`Don't have an account yet?`} redirectLink='/login/signup' />
    );

  return (
    <article id='login' className={classes.login}>
      <section className={classes.form}>{renderAction}</section>
    </article>
  );
};
