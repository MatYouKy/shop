import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductFocus } from '../../components/ProductFocus/ProductFocus';
import { GlobalState } from '../../context/global.context';
import { getData } from '../../actions/api/getData';
import './ProductPage.scss';

export const ProductPage = () => {
    const { addProduct, URL } = useContext(GlobalState)

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
            let pageId = parseInt(id, 10)
            const data = await getData(url)
            if((data.length <= parseInt(id, 10)) || id === '0'){
                pageId = 1;
            }
            const index = data.findIndex(item => item.id === pageId)
            setProduct(data[index])
        }
        fetchProduct(URL);
    },[])

    return(
        <article className="product-page">
            <div className='product-page__shadow' />
            <div className="container">
                <h1 className="container__title">{product.name}</h1>
                <ProductFocus 
                    id={product.id} 
                    name={product.name} 
                    description={product.description} 
                    img={product.img} 
                    price={product.price}
                    addProduct={addProduct}
                    product={product}
                />
            </div>
        </article>
    );
}