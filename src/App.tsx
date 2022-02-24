import { Suspense } from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { ProductProvider } from './store/ProductContext';
import { MenuProvider } from './store/MenuContext';
import { Header } from './components/Header/Header';
import { LoadingSpinner } from './UI/LoadingSpinner/LoadingSpinner';

import RouteComponents from './routes/RouteComponents';

import classes from './App.module.scss';

export const App = () => (
  <Router basename={process.env.PUBLIC_URL}>
    <ProductProvider>
      <MenuProvider>
        <Header />
      </MenuProvider>
      <main className={classes.main}>
        <Suspense
          fallback={
            <div className={classes.center}>
              <LoadingSpinner />
            </div>
          }
        >
          <Routes>{RouteComponents}</Routes>
        </Suspense>
      </main>
    </ProductProvider>
  </Router>
);
