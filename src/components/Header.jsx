import { Link } from 'react-router-dom';
import './styles/header.scss';

const links = [
  {
    route: '/',
    label: 'books',
  },
  {
    route: '/categories',
    label: 'category',
  },
];

const Header = () => (
  <header>
    <nav>
      <div className="container">
        <div className="nav-left">
          <span className="logo">bookstore CMS</span>
          <ul className="nav-menu">
            {links.map((link) => (
              <li key={link.route}>
                <Link to={link.route}>{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="nav-right">
          <button type="button" className="btn-usr">
            <i className="ri-user-6-fill" />
          </button>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
