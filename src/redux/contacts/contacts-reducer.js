import { combineReducers } from 'redux';

import initialContacts from 'components/localStorage';
import { createReducer } from '@reduxjs/toolkit';
import contactsAction from './contacts-actions';

const items = createReducer(initialContacts, {
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
