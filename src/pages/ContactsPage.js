import { ContactsList } from 'components';
import { Filter } from 'components';
import { FormAddContact } from 'components';
import { PageWrapper, Section, Text, Wrapper } from 'helpers/common.styled';
import { fetchContacts } from '../redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { selectLoading } from '../redux/contacts/selectors';

export default function ContactsPage() {
  const dispatch = useDispatch();
  // const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
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
}
