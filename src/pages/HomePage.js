import { Section } from 'components/App/App.styled.js';
import { Button, FormGroup, Form, Field } from '../helpers/common.styled.js';
import { Formik } from 'formik';

export const HomePage = () => {
  return (
    <>
      <Section>
        <h2 style={{ textAlign: 'center' }}>Home</h2>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          // validationSchema={validation}
        >
          <Form>
            <FormGroup>
              Login
              <Field type="text" name="login" placeholder="Введіть логін" />
            </FormGroup>
            <FormGroup>
              Password
              <Field
                type="password"
                name="password"
                placeholder="Введіть пароль"
              />
              <Button type="submit">Login</Button>
            </FormGroup>
          </Form>
        </Formik>
      </Section>
    </>
  );
};
