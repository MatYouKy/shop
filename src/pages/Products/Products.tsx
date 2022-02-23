/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';
import ProductItem from './ProductItem/ProductItem';
import Product from '../../interfaces/ProductInterfaces';
import Scroll from '../../UI/Scroll/Scroll';
import classes from './Products.module.scss';
import Card from '../../UI/Card/Card';

export default function Products() {
  const { products, error, fetchProductHandler } = useGetProducts();

  const initialValue = 7;
  const newValue = 4;

  const [index, setIndex] = useState(products.length);
  const [hasMore, setHasMore] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);

  const initialFunction = () => {
    setProductList(products.slice(0, initialValue));
    setIndex(initialValue);
  };

  const nextProducts = (value: number) => {
    setProductList(products.slice(0, value));
    setIndex(index + newValue);
  };

  const nextFunction = () => {
    if (index >= products.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      nextProducts(initialValue + newValue);
    }, 1000);
  };

  const productsList = productList.map(product => (
    <ProductItem
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
      id={`${product.id}`}
      img={product.img}
    />
  ));

  useEffect(() => {
    initialFunction();
  }, [products]);

  useEffect(() => {
    fetchProductHandler('/products.json');
  }, []);

  return (
    <article className={classes.products}>
      <Card>
        {products.length > 0 && (
          <Scroll index={index} hasMore={hasMore} productsRender={productsList} next={nextFunction} />
        )}
        {!products && <p className={classes.info}>No found products.</p>}
        {error && <p className={classes.info}>{error}</p>}
      </Card>
    </article>
  );
}
