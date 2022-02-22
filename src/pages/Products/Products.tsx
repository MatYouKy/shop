/* eslint-disable no-restricted-syntax */
import { useState, useEffect } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts';
import ProductItem from './ProductItem/ProductItem';
import Product from '../../interfaces/ProductInterfaces';
import Scroll from '../../UI/Scroll/Scroll';
import classes from './Products.module.scss';
import Shadow from '../../UI/Shadow/Shadow';
import Card from '../../UI/Card/Card';

export default function Products() {
  const { products, error } = useGetProducts('products.json');

  const initialValue = 7;
  const newValue = 4;

  const [index, setIndex] = useState(initialValue);
  const [hasMore, setHasMore] = useState(true);
  const [productList, setProductList] = useState<Product[]>([]);

  const nextProducts = (value: number) => {
    setProductList(products.slice(0, value));
  };

  const nextFunction = () => {
    if (index >= products.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      nextProducts(index + newValue);
      setIndex(index + newValue);
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
    if (products) setProductList(products.slice(0, initialValue));
  }, [products]);

  return (
    <article className={classes.products}>
      <Shadow>
        <section className={classes.container}>
          {products.length > 0 && (
            <div className={classes.scroll}>
              <Scroll index={index} hasMore={hasMore} productsRender={productsList} next={nextFunction} />
            </div>
          )}
          <Card>
            {!products && <p className={classes.info}>No found products.</p>}
            {error && <p className={classes.info}>{error}</p>}
          </Card>
        </section>
      </Shadow>
    </article>
  );
}
