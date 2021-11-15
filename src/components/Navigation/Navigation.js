import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GlobalState } from '../../context/global.context';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import './Navigation.scss'

export const Navigation = () => {
    const { toggle, handleToggle, order, user, setUser } = useContext(GlobalState)

    return(
    <nav 
      className={`nav-menu ${toggle ? "open" : "" }`} 
      onClick={handleToggle}
      onKeyPress={handleToggle}
      role='none'
      >      
      <BurgerMenu />
      <ul className="menu">
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/">home</NavLink>
         </li>
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/products">products</NavLink>
         </li>
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/shop-cart">shoping card</NavLink>
            {(!!order.pcs) && <span className="menu-item__counter">{order.pcs}</span>}
         </li>
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/contact">contact</NavLink>
         </li>
         <li className="menu-item">
            {user 
               ? <Link className="menu-item__link" to="/" onClick={() => setUser(false)}>Logout</Link> 
               : <NavLink className="menu-item__link" to="/login">Login</NavLink>
            }
   
         </li>
      </ul>
   </nav>
);
}