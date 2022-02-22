import { FC, useState, useEffect, memo } from 'react';
import { ArrowIcon } from '../../../img/ArrowIcon';
import classes from './ProductItem.module.scss';

const ProductDescription: FC<{ description: string; title: string }> = ({ description, title }) => {
  const [showDescription, setShowDescription] = useState(false);

  const shortDescription = description.slice(0, 150);
  const text = showDescription ? description : shortDescription;

  const descriptionToggler = () => setShowDescription(prev => !prev);

  useEffect(() => {
    if (description.length > 150) {
      setShowDescription(false);
    } else {
      setShowDescription(true);
    }
  }, [description]);

  const arrowClass = showDescription? `${classes.arrow} ${classes['arrow-rotate']}` : `${classes.arrow}`;

  return (
    <>
      <h3 className={classes.title} role='presentation'>
        {title}
      </h3>
      <p className={classes.description}>{text}</p>
      {description.length > 150 && (
        <ArrowIcon
          descriptionToggler={descriptionToggler}
          className={arrowClass}
          style={{}}
        />
      )}
    </>
  );
};

export default memo(ProductDescription);
