import { Route } from 'react-router';
import Home from '../pages/Home/Home';
import { ShoppingCart } from '../pages/ShoppingCart/ShoppingCart';
import { ProductPage } from '../pages/ProductPage/ProductPage';
import { FormLayaut } from '../pages/FormLayaut/FormLayaut';
import Products from '../pages/Products/Products';
import AdminPanel from '../pages/AdminPanel/AdminPanel';
import { ProtectedRoute } from './ProtectedRoute';
import { DisabledRoute } from './DisabledRoute';


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
