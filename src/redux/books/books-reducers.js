import { createReducer } from '@reduxjs/toolkit';
// import * as bookActions from './books-actions';
import { fetchBooks } from './books-operations';
export const entitiesReducer = createReducer([], {
  [fetchBooks.fulfilled]: (_, action) => action.payload,
});

export const errorReducer = createReducer(null, {
  [fetchBooks.rejected]: (_, action) => action.payload,
  [fetchBooks.pending]: () => null,
});

export const isLoadingReducer = createReducer(false, {
  [fetchBooks.fulfilled]: () => false,
  [fetchBooks.rejected]: () => false,
  [fetchBooks.pending]: () => true,
});
