import { useContext } from 'react';
import { GlobalState } from '../../context/global.context';
import './BurgerMenu.scss';

export const BurgerMenu = () => {
    const { toggle, menu, handleToggle } = useContext(GlobalState);
    return (
        <>
        {!menu && 
            <div 
                className={`menu-btn ${toggle? 'open': ''}`} 
                onClick={() => handleToggle(!toggle)}
                onKeyPress={() => handleToggle(!toggle)}
                role='button'
                tabIndex='0'
                >
                <div className='menu-btn__burger'/>
            </div>}
        </>
    );
}