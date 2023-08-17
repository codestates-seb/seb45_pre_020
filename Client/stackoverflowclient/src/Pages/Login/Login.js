import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/reducers/loginSlice';
import './Login.css';
import axios from 'axios';

export default function Login() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.loginSlice.user);

  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickLogin = () => {
    const userinfo = {
      username: inputEmail,
      password: inputPw,
    };

    console.log(user);

    axios
      .post(`${process.env.REACT_APP_API_URL}/auth/login`, userinfo)
      .then((response) => {
        console.log('메세지' + response.data.message);
        console.log('권한' + response.headers.get('Authorization'));
        console.log('리프레쉬' + response.headers.get('Refresh'));
        dispatch(login(response.data.user));
      })
      .then(console.log(user))
      .catch((error) => {
        console.error('Error : ', error);
      });
  };

  return (
    <div className="login_page">
      <div className="login_form">
        <div className="login_wrapper">
          <h1>Login</h1>
          <h3>Email</h3>
          <div>
            <input
              type="email"
              value={inputEmail}
              onChange={handleInputEmail}
            />
          </div>
          <h3>Password</h3>
          <div>
            <input type="password" value={inputPw} onChange={handleInputPw} />
          </div>
          <div>
            <button className="login-button" onClick={onClickLogin}>
              Log in
            </button>
            <p>
              Don’t have an account? <a href="/signup">Sign up</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
