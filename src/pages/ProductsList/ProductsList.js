import { useState, useEffect, useContext } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { Link } from 'react-router-dom';
import { GlobalState } from '../../context/global.context';
import { getData } from '../../actions/api/getData';
import './ProductsList.scss';
import { Shadow } from '../../components/Shadow/Shadow';

export const ProductsList = () => {
        const { addOneProduct, URL } = useContext(GlobalState);
        const initialValue = 7;
        const newValue = 4;
        const [productsLength, setProductsLength] = useState([]);
        const [products, setProducts] = useState([]);
        const [hasMore, setHasMore] = useState(true)
        const [index, setIndex] = useState(initialValue)

        const fetchProducts = async (url, value) => {
            const data = await getData(url);
            setProductsLength(data.length)
            setProducts(data.slice(0, value));
        }

        const nextFunction = () => {
            if (index >= productsLength) {
                setHasMore(false)
                return;
            }
            setTimeout(() => {
                fetchProducts(URL, index + newValue);
                setIndex(index + newValue)
            }, 1000)
        }

        const productsRender =  products.map(product => {
            const image = `${process.env.PUBLIC_URL  }../../img/${product.img}`
            const productDes = product.description.slice(0, 100);

            return ( 
                <li key={product.id} className='products-list__item'>
                    <Link to={`/products/${product.id}`}>< img src={image} alt = {product.name} className='products-list__item-img'/></Link>
                    <div className='products-description'>
                    <Link className='products-description__title text' to={`/products/${product.id}`}>{product.name}</Link> 
                    <p className='products-description__describe text'> {`${productDes}....`}</p> 
                        <div className='products-description__bottom-section'>
                            <h4 className='text'> {product.price}zł</h4> 
                            <button
                                className='products-description__bottom-section--button'
                                id={product.id}
                                type='button'
                                onClick={() => addOneProduct(product)}
                                onKeyPress={() => addOneProduct(product)}
                            >
                            add to basket
                            </button>
                        </div> 
                    </div> 
                </li>
            )
        });

        useEffect(() => {
            fetchProducts(URL, initialValue);
        }, [])

        return ( 
        <article className='products-section'>
            <div className='products__container'>
            <Shadow />
                <InfiniteScroll 
                    className='products-list'
                    dataLength={index}
                    next={nextFunction}
                    hasMore={hasMore}
                    loader = {
                    <div className='products-list__info'>
                        <p className='products-list__info'>Loading...</p> 
                    </div>}
                    endMessage={
                        <div className='products-list__end'>
                            <p className='products-list__info'>That&apos;s all</p> 
                        </div>}>
                    {productsRender} 
                </InfiniteScroll>
            </div>
        </article>
    );
};