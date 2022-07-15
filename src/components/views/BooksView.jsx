import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
// import * as booksSelectors from '../../redux/books/books-selectors';
// import * as booksOperations from '../../redux/books/books-operations';
import { booksSelectors, booksOperations } from 'redux/books';

import PageHeading from '../PageHeading/PageHeading';

function BooksView() {
  const dispatch = useDispatch();
  const books = useSelector(booksSelectors.getBooks);

  useEffect(() => {
    dispatch(booksOperations.fetchBooks());
  }, [dispatch]);

  return (
    <>
      <PageHeading>Книги</PageHeading>

      {books && (
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link
                to={{
                  pathname: `${book.id}`,
                  state: { fromBooksView: true },
                }}
              >
                {book.title}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <hr />
    </>
  );
}
export default BooksView;
