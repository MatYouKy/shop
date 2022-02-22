import { FC } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import { LoaderSpinner } from '../LoaderSpinner/LoaderSpinner';
import { ScrollInterface } from '../../interfaces/UIInterface';
import Card from '../Card/Card';

const Scroll: FC<ScrollInterface> = ({ index, hasMore, productsRender, next }) => (
  <Card>
    <InfiniteScroll
      dataLength={index}
      hasMore={hasMore}
      next={next}
      loader={
        <LoaderSpinner />
      }
      endMessage={
        <div>
          <p>That&apos;s all</p>
        </div>
      }
    >
      {productsRender}
    </InfiniteScroll>
  </Card>
);

export default Scroll;
