import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ProductsList } from '../pages/ProductsList/ProductsList';
import { ShoppingCart } from '../pages/ShoppingCart/ShoppingCart';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { FormLayaut } from '../pages/FormLayaut/FormLayaut';
import { Order } from '../components/Order/Order';

export const RouteComponents = [
    <Route key='/' path='/*' element={<Home />}/>,
    <Route key='/products' path='/products' element={<ProductsList />} />,
    <Route key='/products/:id' path='/products/:id' element={<ProductPage />}/>,
    <Route key='/shopping-cart' path='/shopping-cart' element={<ShoppingCart />}/>,
    <Route key='/login/:action' path='/login/:action' element={<FormLayaut />}/>,
    <Route key='/shopping-cart/order' path='/shopping-cart/:order' element={<Order />}/>
] 