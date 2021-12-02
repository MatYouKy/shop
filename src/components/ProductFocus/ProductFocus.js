/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';

import './ProductFocus.scss';

export const ProductFocus = ({ 
    id, 
    name, 
    img, 
    description, 
    price,
    addOneProduct,
    product
    }) => {
        const navigate = useNavigate();
        return (
        <section className='product-focus'>
            <div className='focus-main'>
                <img className='focus-main__img' src={`../img/${img}`} alt={name} />
                <div className='focus-main__interaction'>
                    <h5 className='focus-main__price'>{price}$</h5>
                    <button
                        className="focus-main__button"
                        id={id}
                        onClick={() => {
                            addOneProduct(product)
                            navigate(-1)
                            }
                        }
                        type="button"
                    >add to basket</button>
                </div>
            </div>
            <h5>describe:</h5>
            <p className='focus-main__describe'>{description}</p>
            <button
                type='button'
                className='focus-main__back' 
                onClick={() => navigate(-1)}
                >&larr;</button>
        </section>
        );
    };