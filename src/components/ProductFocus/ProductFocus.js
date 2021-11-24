/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import './ProductFocus.scss';

export const ProductFocus = ({ 
    id, 
    name, 
    img, 
    description, 
    price,
    addOneProduct,
    product
    }) => (
        <section className='product-focus'>
            <div className='focus-main'>
                <img className='focus-main__img' src={`${process.env.PUBLIC_URL  }../../img/${img}`} alt={name} />
                <div className='focus-main__interaction'>
                    <h5 className='focus-main__price'>{price}$</h5>
                    <button
                        className="focus-main__button"
                        id={id}
                        onClick={() => addOneProduct(product)}
                        type="button"
                    >add to basket</button>
                </div>
            </div>
            <h5>describe:</h5>
            <p className='focus-main__describe'>{description}</p>
            <Link className='focus-main__back' to='/products'>&larr;</Link>
        </section>
    );