import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/loginSlice';
import './Login.css';
import axios from 'axios';

export default function Login() {
  const dispatch = useDispatch();

  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    const userinfo = { inputEmail, inputPw };

    axios
      .post('https://fc05-221-150-55-48.ngrok-free.app/coffeeTime', userinfo)
      .then((response) => {
        console.log(response.data.message);
        dispatch(login(response.data.user));
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };

  return (
    <div className="login_form">
      <div className="login_wrapper">
        <h1>Login</h1>
        <h3>Email</h3>
        <div>
          <input type="email" value={inputEmail} onChange={handleInputEmail} />
        </div>
        <h3>Password</h3>
        <div>
          <input type="password" value={inputPw} onChange={handleInputPw} />
        </div>
        <div>
          <button className="login-button" onClick={onClickLogin}>
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
