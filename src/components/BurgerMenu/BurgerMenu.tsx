import { useContext, memo } from 'react';
import MenuContext from '../../store/MenuContext';
import ProductContext from '../../store/ProductContext';
import Badge from '../../UI/Badge/Badge';

import classes from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  const { isOpen, toggleHandler } = useContext(MenuContext);
  const { badge } = useContext(ProductContext);

  return (
    <div
      className={`${classes.button} ${isOpen && classes.open}`}
      onClick={toggleHandler}
      onKeyPress={toggleHandler}
      role='button'
      tabIndex={0}
    >
      <div className={`${classes.badge} ${isOpen && classes.open}`}>{badge !== 0 && <Badge />}</div>
      <span className={classes.after} />
      <span className={classes.burger} />
      <span className={classes.before} />
    </div>
  );
};

export default memo(BurgerMenu);
