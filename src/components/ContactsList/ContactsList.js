import { ContactsItem } from 'components';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { useSelector } from 'react-redux';

export const ContactsList = () => {
  const visibleContacts = useSelector(selectVisibleContacts);
  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactsItem key={contact.id} item={contact} />
      ))}
    </ul>
  );
};
