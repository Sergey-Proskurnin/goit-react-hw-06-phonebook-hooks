import contactsReducer from './contacts/contacts-reducer';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
