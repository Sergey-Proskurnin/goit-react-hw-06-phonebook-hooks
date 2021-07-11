import { combineReducers } from 'redux';

import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contacts-actions';
import contactsTest from 'data/contactsTest.json';

const items = createReducer(contactsTest, {
  [contactsAction.addContact]: (state, action) => [action.payload, ...state],
  [contactsAction.deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});
const filter = createReducer('', {
  [contactsAction.changeFilter]: (_, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});
