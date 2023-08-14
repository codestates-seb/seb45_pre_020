import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/loginSlice';

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
    // e.preventDefault();

    // console.log('Email', inputEmail);
    // console.log('Password', inputPw);

    // let body = {
    //   email: inputEmail,
    //   password: inputPw,
    // };
    const user = { inputEmail, inputPw };
    dispatch(login(user));
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onClickLogin}
      >
        <h2>Email</h2>
        <input type="email" value={inputEmail} onChange={handleInputEmail} />
        <h2>Password</h2>
        <input type="password" value={inputPw} onChange={handleInputPw} />
        <br />
        <button formAction="">Login</button>
      </form>
    </div>
  );
}
