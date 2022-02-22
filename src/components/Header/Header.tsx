import { useContext } from 'react';
import { Link } from 'react-router-dom';
import MenuContext from '../../store/MenuContext';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import Navigation from '../Navigation/Navigation';

import classes from './Header.module.scss';

export const Header = () => {
  const { isOpen, closeHandler } = useContext(MenuContext);

  return (
    <header className={classes.header}>
      {isOpen && <div onClick={closeHandler} className={classes['menu-overlay']} role='none' />}
      <div className={classes.container}>
        <div className={classes.main}>
          <div className={classes.logo}>
            <Link to='/'>Shop</Link>
          </div>
          <BurgerMenu />
          <Navigation />
          {isOpen && <div onClick={closeHandler} className={classes.overlay} role='none' />}
        </div>
      </div>
    </header>
  );
};
