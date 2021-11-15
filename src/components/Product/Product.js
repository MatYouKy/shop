/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import './Product.scss';

export const Product = ({ id, name, img, description, price, click }) => (
    <section className='product'>
        <div className='product-main'>
            <img className='product-main__img' src={`${process.env.PUBLIC_URL  }../../img/${img}`} alt={name} />
            <div className='product-main__interaction'>
                <h5 className='product-main__price'>{price} zł</h5>
                <button
                    className="product-main__button"
                    id={id}
                    onClick={() => click(id)}
                    onKeyPress={() => click(id)}
                    type="button"
                >buy now</button>
            </div>
        </div>
        <h5>Opis:</h5>
        <p className='product__describe'>{description}</p>
        <Link className='product__back' to='/products'>back</Link>
    </section>
)
