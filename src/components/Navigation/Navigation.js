import style from './Navigation.module.css';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  const activeStyle = {
    color: '#2196f3',
  };

  return (
    <nav className={style.nav}>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        // className={style.link}

        to="/"
        // activeClassName={style.active}
      >
        Головна
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/authors"
        // activeClassName={style.active}
      >
        Автори
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/books"
        // activeClassName={style.active}
      >
        Книги
      </NavLink>
      <NavLink
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        className={style.link}
        to="/table"
        // activeClassName={style.active}
      >
        Таблиця
      </NavLink>
    </nav>
  );
};
export default Navigation;
