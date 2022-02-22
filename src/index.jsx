import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthProvider } from './store/AuthContext';
import './index.scss';

ReactDOM.render(
    <AuthProvider>
      <App />
    </AuthProvider>,
  document.getElementById('root')
);
