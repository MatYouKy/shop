/* eslint-disable prefer-const */
import React, { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types'
import { getWidth } from '../actions/getWidth';

export const GlobalState = createContext();

export const GlobalStateProvider = ({ children }) => {
  const URL = `${process.env.PUBLIC_URL}/products.json`;
  const [products, setProducts] = useState([])
  const [menu, setMenu] = useState(getWidth());
  const [toggle, setToggle] = useState(false);
  const [logged, setLogged] = useState(false);
  const [cartItems, setCartItems] = useState([])
  const [currentUser, setCurrentUser] = useState({
    name: '',
    email: ''
  });

  const handleToggle = state => setToggle(state);
  
  const addProduct = product => {
    const exist = cartItems.find(x => x.id === product.id);
    if(exist) {
      setCartItems(
        cartItems.map(item => 
          item.id === product.id ? {...exist, pcs: exist.pcs + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, pcs: 1 }]);
    }
  }
  
  const removeProduct = product => {
    const exist = cartItems.find(item => item.id === product.id)
    if(exist.pcs === 1) {
      setCartItems(cartItems.filter(item => item.id !== product.id))
    } else {
      setCartItems(
        cartItems.map(item => 
          item.id === product.id ? {...exist, pcs: exist.pcs - 1} : item
      ));
    }
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


  useEffect(() => {
    const getProducts = async url => {
      await fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data))
    }
    getProducts(URL)
  },[])

  return (
    <GlobalState.Provider 
      value={{
        menu,
        toggle,
        logged,
        products,
        URL,
        cartItems,
        currentUser,
        handleToggle,
        setLogged,
        addProduct,
        removeProduct,
        setCurrentUser,
        }}
      >{children}
    </GlobalState.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
}