import { Section } from 'components/App/App.styled';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Wrapper } from 'components/ContactsList/ContactsList.styled';
import { Filter } from 'components/Filter/Filter';
import { FormAddContact } from 'components/FormAddContact/FormAddContact';

export const ContactsPage = () => {
  return (
    <>
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
    </>
  );
};
