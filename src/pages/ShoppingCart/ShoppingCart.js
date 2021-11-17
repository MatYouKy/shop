import { useContext } from 'react';
import { GlobalState } from '../../context/global.context';
import './ShoppingCart.scss';

export const ShoppingCart = () => {
    const { cartItems, addProduct, removeProduct } = useContext(GlobalState) 
    const price = cartItems.reduce((a, c) => a + c.price * c.pcs, 0);

    const handleOrder = () => {
        console.log("running")
    }
    return (
        <article id='shoppingCart-section' className='shoppingCart-section'>
            <div className='shoppingCart-shadow' />
            <div className='shoppingCart-wrapper'>
                <div >
                <h1>shopping cart</h1>
                        {(cartItems.length <= 0)
                        ? <div>Cart is Empty </div>
                        : <div className='shoppingCart-wrapper__container'>
                            <ul>
                            {cartItems.map(item => (
                                <li key={item.id} className='shoppingCart-wrapper__items' >
                                    <h4>{item.name} </h4>
                                    <div>
                                        <button     className='shoppingCart-wrapper__items--button'
                                            onClick={() => addProduct(item)}
                                            onKeyPress={() => addProduct(item)}
                                        type='button'
                                        >+
                                        </button>
                                        <button 
                                            className='shoppingCart-wrapper__items--button'
                                            onClick={() => removeProduct(item)}
                                            onKeyPress={() => removeProduct(item)}
                                            type='button'
                                        >-
                                        </button>
                                    </div> 
                                    <p>{item.pcs} x {item.price.toFixed(2)}$</p>
                                </li>))
                            }
                        </ul>
                        <h2>Total: {price.toFixed(2)}$</h2>
                        <button className='shoppingCart-wrapper__items--button' type='button' onClick={() => handleOrder()}>buy it</button>
                    </div>}   
                </div>
            </div>
        </article>
    );
}