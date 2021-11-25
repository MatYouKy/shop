import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types'

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(false);
    const [currentUser, setCurrentUser] = useState({
        name: '',
        email: ''
      });

  return (
    <AuthContext.Provider 
      value={{
        currentUser,
        isLogged,
        setCurrentUser,
        setIsLogged
        }}
      >{children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
}