import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../context/global.context';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { Navigation } from '../Navigation/Navigation';
import './Header.scss'

export const Header = () => {
    const { toggle, menu } = useContext(GlobalState)
    return (
    <header className="header">
        <div className="container">
            <div className="header-main">
                <div className="logo">
                    <Link to="/">Logo</Link>
                </div>
                <BurgerMenu />
                {!menu && toggle && <div className="menu-overlay" />}
                <Navigation />            
            </div>
        </div>
    </header>
);
}
