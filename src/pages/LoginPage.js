import { Formik } from 'formik';
import { Button, Field, Form, FormGroup, Section } from 'helpers/common.styled';

export const LoginPage = () => {
  return (
    <>
      <Section>
        <h2 style={{ textAlign: 'center' }}>Login</h2>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          // validationSchema={validation}
        >
          <Form>
            <FormGroup>
              Login/email
              <Field
                type="email"
                name="email"
                placeholder="Введіть логін/email"
              />
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
