import {
  entitiesReducer,
  errorReducer,
  isLoadingReducer,
} from './books/books-reducers';

import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import logger from 'redux-logger';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

const booksReducer = combineReducers({
  entities: entitiesReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});

export const store = configureStore({
  reducer: {
    books: booksReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
  devTools: process.env.NODE_ENV !== 'production',
});
