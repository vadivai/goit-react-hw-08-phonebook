import { ContactsList } from 'components/ContactsList/ContactsList';
import { Wrapper } from 'components/ContactsList/ContactsList.styled';
import { Filter } from 'components/Filter/Filter';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';
import { PageWrapper, Section } from 'helpers/common.styled';

export const ContactsPage = () => {
  return (
    <PageWrapper>
      <Section>
        <h2 style={{ textAlign: 'center' }}>Phonebook</h2>
        <FormAddContact />
      </Section>
      <Section>
        <h3>Contacts</h3>
        <Filter />
        <Wrapper>
          <ContactsList>ContactsList</ContactsList>
        </Wrapper>
      </Section>
    </PageWrapper>
  );
};
