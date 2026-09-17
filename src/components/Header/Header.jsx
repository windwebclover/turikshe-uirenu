import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import navigation from '../../data/navigation.json';
import './Header.scss';

export default function Header() {
  const [opened, setOpened] = useState(false);

  const closeMenu = () => setOpened(false);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link className="header__logo" to="/" onClick={closeMenu}>
          Türkçe
        </Link>

        <button
          className="header__menu-button"
          type="button"
          aria-expanded={opened}
          aria-controls="main-navigation"
          onClick={() => setOpened((value) => !value)}
        >
          {opened ? 'Жабу' : 'Меню'}
        </button>

        <nav
          id="main-navigation"
          className={`header__navigation ${opened ? 'header__navigation--opened' : ''}`}
        >
          {navigation.map((item) => (
            <NavLink
              key={item.slug}
              to={`/${item.slug}`}
              onClick={closeMenu}
              className={({ isActive }) =>
                `header__link ${isActive ? 'header__link--active' : ''}`
              }
            >
              {item.title}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
