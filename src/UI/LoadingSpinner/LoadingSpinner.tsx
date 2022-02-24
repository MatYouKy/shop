import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import classes from './LoadingSpinner.module.scss';

export const LoadingSpinner = () => (
  <div className={classes.spinner}>
    <TailSpin height='35' width='35' color='grey' ariaLabel='loading' />
  </div>
);
