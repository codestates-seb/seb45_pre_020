import Logo from '../../atoms/logo/logo';
import './header.css';
import '../../atoms/button/button.css';

function Header() {
  return (
    <header>
      <div className="logo_container">
        <Logo />
      </div>
      <div className="button_container">
        <button className="ask_button">Ask Question</button>
        <button className="login_button">Log in</button>
        <button className="signup_button">Sign up</button>
      </div>
    </header>
  );
}

export default Header;
