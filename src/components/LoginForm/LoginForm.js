import { Formik } from 'formik';
import { Button, Field, Form, FormGroup } from 'helpers/common.styled';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/auth/operations';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log('form', form);
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // console.log('email', form.elements.email.value);
    // console.log('password', form.elements.password.value);
    form.reset(); 
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      // validationSchema={validation}
    >
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          Login/email
          <Field type="email" name="email" placeholder="Введіть логін/email" />
        </FormGroup>
        <FormGroup>
          Password
          <Field type="password" name="password" placeholder="Введіть пароль" />
          <Button type="submit">Login</Button>
        </FormGroup>
      </Form>
    </Formik>
  );
};

// <form onSubmit={handleSubmit} autoComplete="off">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Log In</button>
// </form>
