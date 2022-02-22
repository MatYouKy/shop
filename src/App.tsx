import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProductProvider } from './store/ProductContext';
import { MenuProvider } from './store/MenuContext';
import { Header } from './components/Header/Header';

import RouteComponents from './routes/RouteComponents';

import classes from './App.module.scss';

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <ProductProvider>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <main className={classes.main}>
        <Routes>{RouteComponents}</Routes>
      </main>
    </ProductProvider>
  </Router>
);
