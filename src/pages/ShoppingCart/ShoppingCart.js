import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalState } from '../../context/Global.context';
import { Shadow } from '../../components/Shadow/Shadow';
import './ShoppingCart.scss';

export const ShoppingCart = () => {
    const navigate = useNavigate()
    const { cartItems, addOneProduct, removeOneProduct } = useContext(GlobalState) 
    const price = cartItems.reduce((a, c) => a + c.price * c.pcs, 0);

    const handleOrder = () => {
        // eslint-disable-next-line no-console
        console.log('I order');
    }
    return (
        <article id='shopping-cart' className='shopping-cart'>
            <Shadow />
            <div className='container'>
            <h1 className='title'>order summary</h1>
                {(cartItems.length <= 0)
                ? <h3>Cart is Empty </h3>
                : <div className='list-wrapper'>
                    <ul className='shopping-list'>
                        {cartItems.map(item => (
                            <li key={item.id} className='list'>

                                <figure className='photo'>
                                    <img src={`img/${item.img}`} alt={item.name} className='photo__img' />
                                    <figcaption className='photo__caption'>{item.name} </figcaption>
                                </figure>

                                <div>
                                    <div className="quantity">
                                        <button
                                            className='quantity__button'
                                            onClick={() => addOneProduct(item)}
                                            onKeyPress={() => addOneProduct(item)}
                                            type='button'>+
                                        </button>
                                        <button 
                                            className='quantity__button decrement'
                                            onClick={() => removeOneProduct(item)}
                                            onKeyPress={() => removeOneProduct(item)}
                                            type='button'
                                            >-
                                        </button>
                                        <p className='quantity__value'>{item.pcs}<span> x </span>{item.price.toFixed(2)}$</p>
                                    </div>
                                </div> 
                            </li>
                        ))}
                    </ul>
                    <div className='summary'>
                        <h2 className='summary__value'>Total: {price.toFixed(2)}$</h2>
                        <button 
                            type='button' 
                            className='summary__button' 
                            onClick={() => {
                                handleOrder();
                                navigate('/shopping-cart/order', {state: {cartItems, price}})
                                }
                            }
                            >buy it
                        </button>
                    </div>
                </div>}
            </div>  
        </article>
    );
}