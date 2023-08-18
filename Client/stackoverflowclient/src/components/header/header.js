import Logo from '../../atoms/logo/logo';
import './header.css';
import '../../atoms/button/button.css';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/loginSlice';

function Header() {
  const user = useSelector((state) => state.loginSlice.user);
  const dispatch = useDispatch();

  const isLoggedIn = !!user;

  return (
    <header>
      <div className="logo_container">
        <Logo />
      </div>
      <div className="button_container">
        <Link to="/ask">
          <button className="ask_button">Ask Question</button>
        </Link>
        {isLoggedIn ? (
          <button className="logout_button" onClick={() => dispatch(logout())}>
            Log out
          </button>
        ) : (
          <>
            <Link to="/login">
              <button className="login_button">Log in</button>
            </Link>
            <Link to="/signup">
              <button className="signup_button">Sign up</button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
