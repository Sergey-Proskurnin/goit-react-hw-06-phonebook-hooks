import React from 'react';

import './App.css';

import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Container from 'components/Container';

const App = () => {
  return (
    <Container title="Phonebook">
      <ContactForm />
      <h2 className="title">Contacts</h2>
      <Filter />
      <ContactList />
    </Container>
  );
};

export default App;
