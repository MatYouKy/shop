import { useContext } from 'react';
import NavItem from './NavItem/NavItem';
import MenuContext from '../../store/MenuContext';
import ProductContext from '../../store/ProductContext';
import { CartIcon } from '../../img/CartIcon';
import classes from './Navigation.module.scss';
import AuthContext from '../../store/AuthContext';



const Navigation = () => {
  const { badge } = useContext(ProductContext);
  const { isOpen, closeHandler } = useContext(MenuContext);
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav role='none' onClick={closeHandler} className={`${classes.nav} ${isOpen && classes.open}`}>
      <ul className={classes.menu}>
        <NavItem to='/' name='home'/>
        <NavItem to='/products' name='products'/>
        <NavItem to='/cart' name='cart' badge={badge || null} icon={<CartIcon />}/>
        {isLoggedIn && <NavItem to='/admin-panel' name='admin'/>}
        { !isLoggedIn
        ? <NavItem to='/login/signin' name='login'/>
        : <NavItem to='/' name='logout' onClick={logout} />}
      </ul>
    </nav>
  );
};

export default Navigation;
