import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ProductsList } from '../pages/ProductsList/ProductsList';
import { Basket } from '../pages/Basket/Basket';
import { Contact } from '../pages/Contact/Contact';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { Login } from '../pages/Login/Login';


export const RouteComponents = [
    <Route path="/" element={<Home />} />,
    <Route path="/products" element={<ProductsList />} />,
    <Route path='/products/:id' element={<ProductPage />}/>,
    <Route path='/shop-cart' element={<Basket />} />,
    <Route path='/contact' element={<Contact />} />,
    <Route path='/login' element={<Login />} />
] 