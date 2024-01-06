import { Formik } from 'formik';
import { Button, Field, Form, FormGroup } from 'helpers/common.styled';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

export const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    // console.log('form', form);
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    // console.log('name', form.elements.name.value);
    // console.log('email', form.elements.email.value);
    // console.log('password', form.elements.password.value);
    form.reset();
  };

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      // validationSchema={validation}
    >
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          Name
          <Field type="text" name="name" placeholder="Введіть Ваше ім'я" />
        </FormGroup>
        <FormGroup>
          Login/email
          <Field type="email" name="email" placeholder="Введіть логін/email" />
        </FormGroup>
        <FormGroup>
          Password
          <Field type="password" name="password" placeholder="Введіть пароль" />
          <Button type="submit">Register</Button>
        </FormGroup>
      </Form>
    </Formik>
  );
};

// <form onSubmit={handleSubmit} autoComplete="off">
//   <label>
//     Username
//     <input type="text" name="name" />
//   </label>
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Register</button>
// </form>
