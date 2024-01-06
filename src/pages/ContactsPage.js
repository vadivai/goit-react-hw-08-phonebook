import { ContactsList } from 'components';
import { Filter } from 'components';
import { FormAddContact } from 'components';
import { PageWrapper, Section, Text, Wrapper } from 'helpers/common.styled';

export const ContactsPage = () => {
  return (
    <PageWrapper>
      <Section>
        {/* <Wrapper> */}
        <Text>Phonebook</Text>
        <FormAddContact />
        {/* </Wrapper> */}
      </Section>
      <Section>
        <Wrapper>
          <Text>Contacts</Text>
          <Filter />
          <ContactsList>ContactsList</ContactsList>
        </Wrapper>
      </Section>
    </PageWrapper>
  );
};
