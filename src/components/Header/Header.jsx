import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '@assets/butterfly-logo.svg';

const Header = () => {
  const location = useLocation();

  const getPageTitle = () => {
    if (location.pathname === '/foreign') return '해외음반';
    if (location.pathname === '/domestic') return '국내음반';
    return '4TunesRecords';
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="logo" className="logo" />
        <Link to="/" className="title">{getPageTitle()}</Link>
      </div>
      <nav className="header-nav">
        <Link to="/foreign">해외음반</Link>
        <Link to="/domestic">국내음반</Link>
      </nav>
    </header>
  );
};

export default Header;
