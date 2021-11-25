import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { ProductsList } from '../pages/ProductsList/ProductsList';
import { ShoppingCart } from '../pages/ShoppingCart/ShoppingCart';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { FormLayaut } from '../pages/FormLayaut/FormLayaut';


export const RouteComponents = [
    <Route key='/' path='/*' element={<Home key='/'/>} />,
    <Route key='/products' path='/products' element={<ProductsList key={0} />} />,
    <Route key='/products/:id' path='/products/:id' element={<ProductPage key={1} />}/>,
    <Route key='/shopping-cart' path='/shopping-cart' element={<ShoppingCart key={2} />} />,
    <Route key='/login/:action' path='/login/:action' element={<FormLayaut key={3} />} />
] 