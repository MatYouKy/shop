import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router';
import AuthContext from '../store/AuthContext';

export const ProtectedRoute = () => {
  const { isLoggedIn } = useContext(AuthContext);

  return isLoggedIn ? <Outlet/> : <Navigate to='/login/signin'/>;
};