import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import { ProductFocus } from '../../components/ProductFocus/ProductFocus';
import { GlobalState } from '../../context/Global.context';
import { useGetProducts } from '../../actions/useGetProducts';
import './ProductPage.scss';
import { Shadow } from '../../components/Shadow/Shadow';

export const ProductPage = () => {
    const { products } = useGetProducts()
    const { addOneProduct } = useContext(GlobalState)

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
        const getProduct = () => {
            if(products){
                let pageId = parseInt(id, 10)
                if((products.length <= parseInt(id, 10)) || id === '0'){
                    pageId = 1;
                }
                const index = products.findIndex(item => item.id === pageId)
                setProduct(products[index])
            }
        }
        getProduct();
    },[products])

    return(
        <article className="product-page">
            <Shadow />
            <div className="container">
                <h1 className="container__title">{product.name}</h1>
                <ProductFocus 
                    id={product.id} 
                    name={product.name} 
                    description={product.description} 
                    img={product.img} 
                    price={product.price}
                    addOneProduct={addOneProduct}
                    product={product}
                />
            </div>
        </article>
    );
}