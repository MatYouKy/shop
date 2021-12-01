import { useContext, useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/Auth.context';
import { GlobalState } from '../../context/Global.context';
import './Order.scss'


// eslint-disable-next-line react/prop-types
export const Order = () => {
    const {state} = useLocation();
    const navigate = useNavigate();
    const [ready, setReady] = useState(false)
    const { cartItems, setCartItems } = useContext(GlobalState);
    const { isLogged } = useContext(AuthContext)
    console.log(state.cartItems)
    console.log(cartItems)

    useEffect(() => {
        if(isLogged) {
            setReady(true)
        }
    }, [isLogged]);


    return (
        <article className='order'>
            {ready
            ? <div>Gotowy do zakupu</div>
            : <div>Musisz podać adres email</div>
            }
            <button 
                type='button' 
                onClick={()=> {
                    setCartItems([])
                    navigate(-1)
                    }
                }>Kup
            </button>
        </article>
    );
};