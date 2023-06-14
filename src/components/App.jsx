import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Layout } from './Layout/Layout';
import { Section } from './Section/Section';
import { Title } from './Title/Title';
import Filter from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { getContacts } from 'Redux/contacts/contactsSelectors';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/operations';

export const App = () => {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <Section title="PhoneBook">
        <ContactForm />
        {contacts.length > 0 && (
          <>
            <Title title="Contacts" />
            <Filter />
            <ContactList />
          </>
        )}
      </Section>
      <ToastContainer />
    </Layout>
  );
};
