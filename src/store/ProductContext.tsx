import { createContext, FC, useReducer } from 'react';
import Product, { ProductContextObject } from '../interfaces/ProductInterfaces';
import { productsReducer } from '../actions/reduceProducts';

const ProductContext = createContext<ProductContextObject>({
  items: [],
  totalAmount: 0,
  badge: 0,
  addProduct: () => {},
  removeProduct: () => {},
  resetProduct: () => {}
});

export const ProductProvider: FC<{ children: any }> = ({ children }) => {
  const initialstorage = localStorage.getItem('cart');

  let initialValue = {
    items: [],
    totalAmount: 0
  };
  
  if (initialstorage) {
    initialValue = JSON.parse(initialstorage);
  }

  const [products, dispatchProducts] = useReducer(productsReducer, initialValue);

  const { items, totalAmount } = products;

  const addProductHandler = (item: Product) => {
    dispatchProducts({ type: 'ADD_ITEM', item });
  };

  const removeProductHandler = (id: string) => {
    dispatchProducts({ type: 'REMOVE_ITEM', id });
  };
  
  const resetProductHandler = () => {
    dispatchProducts({ type: 'RESET_ITEM' });
  };

  const badge = items.reduce((currentItem, item) => currentItem + item.amount, 0);

  const contextValue = {
    items,
    totalAmount,
    badge,
    addProduct: addProductHandler,
    removeProduct: removeProductHandler,
    resetProduct: resetProductHandler
  };
  return <ProductContext.Provider value={contextValue}>{children}</ProductContext.Provider>;
};

export default ProductContext;
