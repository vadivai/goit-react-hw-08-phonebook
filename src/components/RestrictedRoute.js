import { useAuth } from '../hooks/useAuth';
import { Navigate } from 'react-router-dom';

export const RestrictedRoute = ({ element, redirectTo = '/' }) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : element;
};
