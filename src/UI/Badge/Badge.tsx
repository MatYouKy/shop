import { memo, useContext } from 'react';
import ProductContext from '../../store/ProductContext';
import classes from './Badge.module.scss';

const Badge = () => {
  const { badge } = useContext(ProductContext);
  return <span className={classes.badge}>{badge || null}</span>;
};

export default memo(Badge);
