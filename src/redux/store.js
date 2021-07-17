import contactsReducer from './contacts/contacts-reducer';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

//----------------test-middleware--------------------------
// const myMiddleware = store => next => action => {
//   console.log('Hello i am myMiddleware');
//   next(action)
// }
// const myMiddlewareTwo = store => next => action => {
//   console.log('Hello i am myMiddlewareTwo');
//   next(action)
// }
//-------------------------------------------------------------

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // myMiddleware,
  //  myMiddlewareTwo
];

const persistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const store = configureStore({
  reducer: { contacts: persistReducer(persistConfig, contactsReducer) },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);
export { store, persistor };
