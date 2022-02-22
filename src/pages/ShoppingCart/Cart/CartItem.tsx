import { FC } from 'react';
import Product from '../../../interfaces/ProductInterfaces';
import classes from './CartItem.module.scss';

type PropsCartItemType = {
  name: string;
  price: number;
  amount: number;
  img: string;
  onRemove: (id: string) => void;
  onAdd: (item: Product) => void;
};

export const CartItem: FC<PropsCartItemType> = ({ name, price, amount, img, onRemove, onAdd }) => {
  const newPrice = `${price.toFixed(2)} zł`;

  return (
    <li className={classes.item}>
      <img className={classes['item-image']} role='presentation' src={img} alt={name} />
      <div className={classes.details}>
        <h2 className={classes.title}>{name}</h2>
        <div className={classes.info}>
          <span className={classes.price}>{newPrice}</span>
          <span className={classes.amount}> x {amount}</span>
        </div>
        <div className={classes.actions}>
          <button type='button' onClick={onRemove}>
            -
          </button>
          <button type='button' onClick={onAdd}>
            +
          </button>
        </div>
      </div>
    </li>
  );
};
