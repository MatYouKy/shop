import classes from './ProductPage.module.scss';
import Shadow from '../../UI/Shadow/Shadow';

export const ProductPage = () => (
  <article className={classes['product-page']}>
    <Shadow>
      <div className={classes.container}>
        <h1 className={classes.title}>Name</h1>
      </div>
    </Shadow>
  </article>
);
