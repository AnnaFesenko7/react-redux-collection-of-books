// import * as booksActions from './books-actions.js';
import * as booksShelfApi from '../../services/bookshelf-api';
import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchBooks = () => async dispatch => {
//   dispatch(booksActions.fetchBooksRequest);

//   try {
//     const books = await booksShelfApi.fetchBooks();
//     dispatch(booksActions.fetchBooksSuccess(books));
//   } catch (error) {
//     dispatch(booksActions.fetchBooksError(error));
//   }
// };

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const books = await booksShelfApi.fetchBooks();
  return books;
});
