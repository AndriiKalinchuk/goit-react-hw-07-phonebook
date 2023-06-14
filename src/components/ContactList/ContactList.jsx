import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contacts/contactsSlice';
import { getFilteredContacts } from 'Redux/contacts/contactsSelectors';
import { Button, Item, List } from './ContactList.styled';

export const ContactList = () => {
  const filteredContacts = useSelector(getFilteredContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {filteredContacts.map(({ name, number, id }) => {
        return (
          <Item key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <Button type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete contact
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
