import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import classes from './LoaderSpinner.module.scss';

export const LoaderSpinner = () => (
  <div className={classes.spinner}>
    <TailSpin height='35' width='35' color='grey' ariaLabel='loading' />
  </div>
);
