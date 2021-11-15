import React from 'react';
import { BrowserRouter as Router, Routes } from 'react-router-dom';
import { RouteComponents } from './routes/RouteComponents';

import { Header } from './components/Header/Header';
import './App.scss';

export const App = () => (
  <Router>    
      <main className="main">
        <Header />
        <Routes>{RouteComponents}</Routes>
      </main>
  </Router>  
);
