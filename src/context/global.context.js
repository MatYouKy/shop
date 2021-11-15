import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { useGetProducts } from '../actions/useGetProducts';

export const GlobalState = createContext();

const getWidth = () => {
  const width = window.innerWidth;
  if (width >= 992) {
    return true;
  }
  return false;
};

export const GlobalStateProvider = ({ children }) => {
  const products = useGetProducts();
  const [menu, setMenu] = useState(getWidth());
  const [toggle, setToggle] = useState(false);
  const [user, setUser] = useState(true);
  const [order, setOrder] = useState({
    items: [],
    owner: {
    name: '',
    email:''
    },
    pcs: 0,
    total: 0
  });
      
  const handleToggle = () => setToggle(!toggle);
  const addProduct = itemId => {
    const product = products.filter(index => index.id === itemId)
      setOrder({
        ...order,
        items: [...order.items, product[0]],
        pcs: order.pcs + 1
      }
    );
  }

  useEffect(() => {
    const handleResizeWidth = () => setMenu(getWidth());


    window.addEventListener('resize', handleResizeWidth);
    return () => window.removeEventListener('rezise', handleResizeWidth);
  },[menu]);

  useEffect(()=>{
    if(menu) {
      setToggle(false)
    }
  },[menu])

  return <GlobalState.Provider 
    value={{
       menu,
       toggle,
       user,
       products,
       order,
       handleToggle,
       setUser,
       addProduct
      }}
    >{children}
  </GlobalState.Provider>;
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}