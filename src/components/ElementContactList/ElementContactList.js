import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import s from './ElementContactList.module.css';
import contactsAction from 'redux/contacts/contacts-actions';

const getVisibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase().trim();

  return contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(normalizedFilter) ||
      contact.number.includes(filter),
  );
};

const ElementContactList = () => {
  const contacts = useSelector(({ contacts: { items, filter } }) =>
    getVisibleContacts(items, filter),
  );
  const dispatch = useDispatch();

  return contacts.map(({ name, number, id }) => {
    return (
      <li className={s.item} key={id}>
        <span className={s.span}></span>
        {name}: {number}
        <button
          type="button"
          className={s.btnList}
          onClick={() => dispatch(contactsAction.deleteContact(id))}
        >
          Delete
        </button>
      </li>
    );
  });
};

ElementContactList.propTypes = {
  contacts: PropTypes.array,
  deleteContact: PropTypes.func,
};

export default ElementContactList;
