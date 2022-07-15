import { createReducer } from '@reduxjs/toolkit';
import * as bookActions from './books-actions';
export const entitiesReducer = createReducer([], {
  [bookActions.fetchBooksSuccess]: (_, action) => action.payload,
});

export const errorReducer = createReducer(null, {
  [bookActions.fetchBooksError]: (_, action) => action.payload,
  [bookActions.fetchBooksRequest]: () => null,
});

export const isLoadingReducer = createReducer(false, {
  [bookActions.fetchBooksSuccess]: () => false,
  [bookActions.fetchBooksError]: () => false,
  [bookActions.fetchBooksRequest]: () => true,
});
