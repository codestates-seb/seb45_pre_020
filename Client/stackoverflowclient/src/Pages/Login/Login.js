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
      .post('/auths/process_login', userinfo)
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
      <h2>Email</h2>
      <input type="email" value={inputEmail} onChange={handleInputEmail} />
      <h2>Password</h2>
      <input type="password" value={inputPw} onChange={handleInputPw} />
      <button onClick={onClickLogin}>Login</button>
    </div>
  );
}
