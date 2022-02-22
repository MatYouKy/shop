import { FC } from 'react';
import classes from  './Card.module.scss';

const Card:FC<{children: any}> = ({ children }) => (
        <div className={classes.card}>
            {children}
        </div>
    )
export default Card;