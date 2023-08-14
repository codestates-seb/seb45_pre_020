import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/reducers/signupSlice';

export default function Signup() {
  const dispatch = useDispatch();

  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPw, setInputPw] = useState('');

  const handleInputName = (e) => {
    setInputName(e.target.value);
  };

  const handleInputEmail = (e) => {
    setInputEmail(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  const onClickSignup = () => {
    const newUser = { inputName, inputEmail, inputPw };
    dispatch(signup(newUser));
  };

  return (
    <div>
      <form
        style={{ display: 'flex', flexDirection: 'column' }}
        onSubmit={onClickSignup}
      >
        <h3>Email</h3>
        <input type="text" value={inputName} onChange={handleInputName} />
        <h3>Name</h3>
        <input type="email" value={inputEmail} onChange={handleInputEmail} />
        <h3>Password</h3>
        <input type="password" value={inputPw} onChange={handleInputPw} />
        <button formAction="">회원가입</button>
      </form>
    </div>
  );
}
