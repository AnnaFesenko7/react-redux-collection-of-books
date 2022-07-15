import Container from './Container/Container';
import AppBar from './Appbar/Appbar';
import { Routes, Route } from 'react-router-dom';
import HomeView from './views/HomeView';
import AuthorsView from './views/AuthorsView';
import { AuthorSubView } from './views/AuthorSubView';
import BooksView from './views/BooksView';
import NotFound from './NotFound/NotFound';
import BookDetailsView from './views/BookDetailsView';
import TableView from './views/TableView';
// import { Layout } from 'components/Layout/Layout';

export const App = () => {
  return (
    <>
      <Container>
        <AppBar />

        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="authors" element={<AuthorsView />}>
            <Route path=":authorId" element={<AuthorSubView />} />
          </Route>
          <Route path="books" element={<BooksView />} />
          <Route path="books/:bookId" element={<BookDetailsView />} />
          <Route path="table" element={<TableView />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  );
};
