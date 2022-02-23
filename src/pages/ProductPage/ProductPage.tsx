import classes from './ProductPage.module.scss';

export const ProductPage = () => (
  <article className={classes['product-page']}>
    <div className={classes.container}>
      <h1 className={classes.title}>Name</h1>
    </div>
  </article>
);
