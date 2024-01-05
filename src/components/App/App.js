import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/contacts/operations';
import { useEffect } from 'react';
import { ContactsPage } from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';
import { RegistrationPage } from 'pages/RegistrationPage';
import { LoginPage } from 'pages/LoginPage';

export const App = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Добавь компонент навигации Navigation со ссылками для перехода по маршрутам.

  return (
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
