import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ProductsList } from '../pages/ProductsList/ProductsList';
import { ShoppingCart } from '../pages/ShoppingCart/ShoppingCart';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { FormLayaut } from '../pages/FormLayaut/FormLayaut';
// import { Login } from '../pages/Login/Login';


export const RouteComponents = [
    <Route path='/*' element={<Home />} />,
    <Route path='/products/*' element={<ProductsList />} />,
    <Route path='/products/:id' element={<ProductPage />}/>,
    <Route path='/shopping-cart' element={<ShoppingCart />} />,
    <Route path='/login/:action' element={<FormLayaut />} />
] 