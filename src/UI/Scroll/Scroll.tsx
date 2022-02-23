import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { ScrollInterface } from '../../interfaces/UIInterface';

import classes from './Scroll.module.scss'

const Scroll: FC<ScrollInterface> = ({ index, hasMore, productsRender, next }) => (
  <InfiniteScroll
    className={classes.scroll}
    dataLength={index}
    hasMore={hasMore}
    scrollThreshold={0.5}
    next={next}
    loader={<LoaderSpinner />}
    endMessage={
        <p className={classes['scroll-end']}>That&apos;s all</p>
    }
  >
    {productsRender}
  </InfiniteScroll>
);

export default Scroll;
