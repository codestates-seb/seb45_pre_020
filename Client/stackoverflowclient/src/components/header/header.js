import Logo from '../../atoms/logo/logo';
import './header.css';
import '../../atoms/button/button.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="logo_container">
        <Logo />
      </div>
      <div className="button_container">
        <Link to="/ask">
          <button className="ask_button">Ask Question</button>
        </Link>
        <Link to="/login">
          <button className="login_button">Log in</button>
        </Link>
        <Link to="/signup">
          <button className="signup_button">Sign up</button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
