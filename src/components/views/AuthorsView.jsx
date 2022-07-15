import { useState, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import * as bookShelfAPI from '../../services/bookshelf-api';
// import { AuthorSubView } from './AuthorSubView';
import PageHeading from '../PageHeading/PageHeading';

function AuthorsView() {
  const [authors, setAuthors] = useState(null);

  useEffect(() => {
    bookShelfAPI.fetchAuthors().then(setAuthors);
  }, []);

  return (
    <>
      <PageHeading>Автори</PageHeading>

      {authors && (
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <Outlet />
    </>
  );
}
export default AuthorsView;
