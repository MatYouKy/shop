import { FC, memo } from 'react';
import Card from '../../../UI/Card/Card';
import { CartItem } from './CartItem';
import Product, { ProductContextObject } from '../../../interfaces/ProductInterfaces';
import Button from '../../../UI/Button/Button';

import classes from './Cart.module.scss';

const Cart: FC<ProductContextObject> = ({ items, totalAmount, addProduct, removeProduct, resetProduct }) => {
  const total = `${totalAmount.toFixed(2)} zł`;
  const hasItems = items.length > 0;

  const cartItemRemoveHandler = (id: string) => {
    removeProduct(id);
  };

  const cartItemAddHandler = (item: Product) => {
    addProduct({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={classes.items}>
      {items.map(item => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          img={item.img}
          onRemove={() => cartItemRemoveHandler(item.id)}
          onAdd={() => cartItemAddHandler(item)}
        />
      ))}
    </ul>
  );
  return (
    <Card>
      {cartItems}
      <div className={classes.summary}>
        <h3>Total Amount:</h3>
        <p className={classes.total}>{total}</p>
      </div>
      <div className={classes.actions}>
        {hasItems && <Button name='Cancel' type='button' extraClassName={classes.button} onClick={resetProduct}/>}
        {hasItems && <Button name='Order' type='submit' extraClassName={classes.button}/>}
      </div>
    </Card>
  );
};

export default memo(Cart);
