import { useContext } from 'react';
import ProductContext from '../../store/ProductContext';
import Card from '../../UI/Card/Card';
import Shadow from '../../UI/Shadow/Shadow';
import Cart from './Cart/Cart';
import classes from './ShoppingCart.module.scss';

export const ShoppingCart = () => {
  const { items, totalAmount, addProduct, removeProduct, resetProduct } = useContext(ProductContext);

  return (
    <article id='cart' className={classes.cart}>
      <Shadow>
        <section className={classes['cart-wrapper']}>
          {items.length ? (
            <Cart
              items={items}
              totalAmount={totalAmount}
              addProduct={addProduct}
              removeProduct={removeProduct}
              resetProduct={resetProduct}
            />
          ) : (
            <Card>
              <h1 className={classes.info}>Your Cart is empty!</h1>
            </Card>
          )}
        </section>
      </Shadow>
    </article>
  );
};
