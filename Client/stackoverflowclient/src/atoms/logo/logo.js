import './logo.css';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/">
      <img src="./img/logo.svg" alt="logo" />
    </Link>
  );
};

export default Logo;
