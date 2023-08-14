import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../redux/reducers/signupSlice';
import './Signup.css';
import axios from 'axios';

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

    axios
      .post('/coffeeTime', newUser) // 회원정보 서버로 전달
      .then((response) => {
        console.log(response.data.message); // 백엔드에서 보낸 응답 메시지
        dispatch(signup(newUser)); // 리덕스 스토어 상태 업데이트
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };

  return (
    <div className="signup_form">
      <h2>Email</h2>
      <input type="text" value={inputName} onChange={handleInputName} />
      <h2>Name</h2>
      <input type="email" value={inputEmail} onChange={handleInputEmail} />
      <h2>Password</h2>
      <input type="password" value={inputPw} onChange={handleInputPw} />
      <button onClick={onClickSignup}>회원가입</button>
    </div>
  );
}
