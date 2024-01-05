import { Wrapper } from 'components/ContactsList/ContactsList.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { Section } from './App.styled';
import { Filter } from 'components/Filter/Filter';
import { useDispatch } from 'react-redux';
// import { selectContacts } from 'redux/selectors';
import { fetchContacts } from '../../redux/operations';
import { useEffect } from 'react';
import { ContactsPage } from 'pages/ContactsPage';
import { Route, Routes } from 'react-router-dom';
import { Layout } from 'components/Layout/Layout';
import { HomePage } from 'pages/HomePage';

export const App = () => {
  // const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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
        <Route
          path="/contacts"
          element={<ContactsPage />}
          // element={<PrivateRoute redirectTo="/login" component={<TasksPage />} />}
        />
      </Route>
    </Routes>
  );
};
