import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { lazy, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components';
import { useAuth } from '../../hooks/useAuth';
import { refreshUser } from '../../redux/auth/operations';

const HomePage = lazy(() => import('../../pages/HomePage'));
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage'));
const LoginPage = lazy(() => import('../../pages/LoginPage'));
const ContactsPage = lazy(() => import('../../pages/ContactsPage'));

export const App = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  // Добавь компонент навигации Navigation со ссылками для перехода по маршрутам.

  return isRefreshing ? (
    <b>Page reloading...Don't worry, be happy...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        {/* <Route
      path="/register"
      element={
        <RestrictedRoute redirectTo="/tasks" component={<RegisterPage />} />
      }
    /> */}
        {/* <Route
      path="/login"
      element={
        <RestrictedRoute redirectTo="/tasks" component={<LoginPage />} />
      }
    /> */}
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/contacts"
          element={<ContactsPage />}
          // element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
        />
      </Route>
    </Routes>
  );
};
