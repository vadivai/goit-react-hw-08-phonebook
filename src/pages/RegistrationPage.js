import { RegistrationForm } from 'components/RegistrationForm/RegistrationForm';
import { Section, Text } from 'helpers/common.styled';

export default function RegistrationPage() {
  return (
    <>
      <Section>
        <Text>Registration Form</Text>
        <RegistrationForm />
      </Section>
    </>
  );
}
