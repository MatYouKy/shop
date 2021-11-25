import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../context/Global.context';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss'

export const Header = () => {
    const { toggle, handleToggle} = useContext(GlobalState);

    return (
    <header className="header">
        <div className="header__shadow" />
        <div className='wrapper'> 
            <div className="container">
                <div className="header-main">
                    <div className="logo">
                        <Link to="/">Shop</Link>
                    </div>
                    <BurgerMenu />
                    { toggle && 
                    <div className="menu-overlay" 
                        onClick={() => handleToggle(false)}
                        onKeyPress={() => handleToggle(false)}
                        role='none'/>}
                    <Navigation />            
                </div>
            </div>
        </div>
    </header>
);
}
