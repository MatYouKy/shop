import { useContext } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { GlobalState } from '../../context/Global.context';
import { AuthContext } from '../../context/Auth.context';
import './Navigation.scss'

export const Navigation = () => {
   const { toggle, handleToggle, cartItems } = useContext(GlobalState)
   const { isLogged, setIsLogged, currentUser, setCurrentUser } = useContext(AuthContext)

    return(
    <nav 
      className={`nav-menu ${toggle ? "open" : "" }`} 
      onClick={() => handleToggle(false)}
      onKeyPress={() => handleToggle(false)}
      role='none'
      >
      <ul className="menu">
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/">home</NavLink>
         </li>
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/products">products</NavLink>
         </li>
         <li className="menu-item">
            <NavLink className="menu-item__link" to="/shopping-cart">shopping cart</NavLink>
            {(!!cartItems.length) && <span className="menu-item__counter">{cartItems.length}</span>}
         </li>
         <li className="menu-item">
            {(isLogged) 
               ? <Link 
                     className="menu-item__link" 
                     to="/" 
                     onClick={() => {
                        setIsLogged(false)
                        setCurrentUser({name:"", email:""});
                        }
                     }
                     >Logout { currentUser.name }
                  </Link> 

               : <NavLink className="menu-item__link" to="/login/signin">Login</NavLink>
            }
   
         </li>
      </ul>
   </nav>
);
}