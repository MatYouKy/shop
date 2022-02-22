import { createContext, FC, useState, useEffect, useCallback } from 'react';
import { calculateRemainingTime } from '../actions/calculateRemainingTime';
import { retrieveStoredToken } from '../actions/retrieveStoredToken';
import { AuthContextObject } from '../interfaces/AuthInterface';

// eslint-disable-next-line no-undef
let logoutTimer: NodeJS.Timeout;

export const AuthContext = createContext<AuthContextObject>({
  token: '',
  isLoggedIn: false,
  login: () => {},
  logout: () => {}
});

export const AuthProvider: FC<{ children: any }> = ({ children }) => {
  const tokenData = retrieveStoredToken();

  let initialToken;
  if (tokenData) {
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token: string, expirationTime: string) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);
    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) logoutTimer = setTimeout(logoutHandler, tokenData.duration);
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  };

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
