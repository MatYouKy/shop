import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { AuthProvider } from './context/Auth.context';
import { GlobalStateProvider } from './context/Global.context';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStateProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </GlobalStateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
