import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

export const PrivateRoute = ({ element, redirectTo = '/' }) => {
  const { isLoggedIn, isRefreshing } = useAuth();
  const mustRedirect = !isLoggedIn && !isRefreshing;

  return mustRedirect ? <Navigate to={redirectTo} /> : element;
};
