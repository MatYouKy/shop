import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router';
import { GlobalState } from '../../context/global.context';
import { getData } from '../../actions/api/getData';
import { Product } from '../../components/Product/Product';
import './ProductPage.scss';

export const ProductPage = () => {
    const URL = '/products.json';
    const { addProduct } = useContext(GlobalState)
    const { id } = useParams();
    const [product, setProduct] = useState({
        id:  null, 
        name: '',
        description: '',
        img: '',
        price: 0,
        click: () => {}
    });

    useEffect(() => {
        const fetchProduct = async (url) => {
            const data = await getData(url);
            const index = data.findIndex(item => item.id === parseInt(id, 10))
            setProduct(data[index])
        }
        fetchProduct(URL);
    },[id])

    return(
        <article className="product-page">
            <h1 className="product-page__title">{product.name}</h1>
            <Product 
                id={product.id} 
                name={product.name} 
                description={product.description} 
                img={product.img} 
                price={product.price}
                click={addProduct}
            />
        </article>
    );
}