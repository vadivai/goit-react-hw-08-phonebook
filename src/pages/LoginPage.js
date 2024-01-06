import { Formik } from 'formik';
import {
  Button,
  Field,
  Form,
  FormGroup,
  Section,
  Text,
} from 'helpers/common.styled';

export const LoginPage = () => {
  return (
    <>
      <Section>
        <Text>Login</Text>
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
