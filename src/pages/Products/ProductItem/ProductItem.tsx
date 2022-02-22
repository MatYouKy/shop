import { FC, memo, useContext } from 'react';
import { ProductInterface } from '../../../interfaces/ProductInterfaces';
import ProductContext from '../../../store/ProductContext';
import ProductItemForm from './ProductsItemForm';
import ProductDescription from './ProductDescription';

import classes from './ProductItem.module.scss';

const ProductItem: FC<ProductInterface> = ({ name, description, price, id, img }) => {
  const priceItem = `${price.toFixed(2)} zł`;

  const { addProduct } = useContext(ProductContext);

  const addToProductHandler = (number: number) => {
    addProduct({
      name,
      description,
      price,
      id,
      img,
      amount: number
    });
  };

  return (
    <li className={classes.product}>
      <img className={classes['product-image']} role='presentation' src={img} alt={name} />
      <div className={classes.details}>
        <ProductDescription description={description} title={name} />
        <ProductItemForm id={id} price={priceItem} onAddToProduct={addToProductHandler} />
      </div>
    </li>
  );
};

export default memo(ProductItem);
