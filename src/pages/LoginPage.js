import { LoginForm } from 'components/LoginForm/LoginForm';
import { Section, Text } from 'helpers/common.styled';

export default function LoginPage() {
  return (
    <>
      <Section>
        <Text>Login</Text>
        <LoginForm />
      </Section>
    </>
  );
}
