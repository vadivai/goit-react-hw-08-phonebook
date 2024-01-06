import { Formik } from 'formik';
import {
  Button,
  Field,
  Form,
  FormGroup,
  Section,
  Text,
} from 'helpers/common.styled';

export const RegistrationPage = () => {
  return (
    <>
      <Section>
        <Text>Registration</Text>
        <Formik
          initialValues={{
            login: '',
            password: '',
          }}
          // validationSchema={validation}
        >
          <Form>
            <FormGroup>
              Name
              <Field type="text" name="name" placeholder="Введіть Ваше ім'я" />
            </FormGroup>
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
              <Button type="submit">Register</Button>
            </FormGroup>
          </Form>
        </Formik>
      </Section>
    </>
  );
};
