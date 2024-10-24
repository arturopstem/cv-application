import '../styles/Header.css';
import LightDarkButton from './LightDarkButton';

function Header() {
  return (
    <header className="header">
      <div className="header__logo">
        <h1>CV Application</h1>
      </div>
      <menu className="header__menu">
        <li>
          <LightDarkButton />
        </li>
      </menu>
    </header>
  );
}

export default Header;
