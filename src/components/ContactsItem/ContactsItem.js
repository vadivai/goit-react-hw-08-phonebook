import { useDispatch } from 'react-redux';
import { LiItem } from 'components';
import { deleteContact } from '../../redux/contacts/operations';

export const ContactsItem = ({ item: { id, name, phone } }) => {
  const dispatch = useDispatch();
  return (
    <LiItem>
      <span>
        {name} {phone}
      </span>
      <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
    </LiItem>
  );
};
