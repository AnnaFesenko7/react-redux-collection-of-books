import { useEffect, useState } from 'react';

import { Link, useParams } from 'react-router-dom';
import { fetchAuthorById } from '../../services/bookshelf-api';

export const AuthorSubView = () => {
  const { authorId } = useParams();
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    fetchAuthorById(authorId).then(setAuthor);
  }, [authorId]);

  return (
    <>
      {!author && <h2>Загружаем...</h2>}
      {author && (
        <>
          <h2>{author.name}</h2>
          <ul>
            {author.books.map(book => (
              <li key={book.id}>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};
