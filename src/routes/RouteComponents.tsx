import { lazy } from 'react';
import { Route } from 'react-router';
import { ProtectedRoute } from './ProtectedRoute';
import { DisabledRoute } from './DisabledRoute';

import Home from '../pages/Home/Home';

const Products = lazy(() => import('../pages/Products/Products'));
const AdminPanel = lazy(() => import('../pages/AdminPanel/AdminPanel')); 
const ShoppingCart = lazy(() => import('../pages/ShoppingCart/ShoppingCart')); 
const ProductPage = lazy(() => import('../pages/ProductPage/ProductPage')); 
const FormLayaut = lazy(() => import('../pages/FormLayaut/FormLayaut')); 

const RouteComponents = [
  <Route key='/' path='/*' element={<Home />} />,
  <Route key='/products' path='/products' element={<Products />} />,
  <Route key='/products/:id' path='/products/:id' element={<ProductPage />} />,
  <Route key='/cart' path='/cart' element={<ShoppingCart />} />,
  <Route key='/disabled-route' element={<DisabledRoute />}>
    <Route key='/login' path='/login/:action' element={<FormLayaut />} />
  </Route>,
  <Route key='/protected-route' element={<ProtectedRoute />}>
      <Route key='/admin-panel' path='/admin-panel' element={<AdminPanel />} />
  </Route>
];

export default RouteComponents;
