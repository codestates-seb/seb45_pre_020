import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signup } from '../../redux/reducers/signupSlice';
import './Signup.css';
import axios from 'axios';

export default function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    const newUser = {
      username: inputName,
      email: inputEmail,
      password: inputPw,
    };

    console.log(newUser);
    axios
      .post(
        'https://1c30-2406-5900-705c-f80b-dcda-1ed7-5e17-6193.ngrok-free.app/members/join',
        newUser,
      ) // 회원정보 서버로 전달
      .then((response) => {
        console.log(response.data.message); // 백엔드에서 보낸 응답 메시지
        dispatch(signup(newUser)); // 리덕스 스토어 상태 업데이트
        navigate('/login');
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };

  return (
    <div className="signup_page">
      <div className="signup_form">
        <div className="signup_wrapper">
          <h2>Name</h2>
          <input type="text" value={inputName} onChange={handleInputName} />
          <h2>Email</h2>
          <input type="email" value={inputEmail} onChange={handleInputEmail} />
          <h2>Password</h2>
          <input type="password" value={inputPw} onChange={handleInputPw} />
          <button onClick={onClickSignup}>회원가입</button>
        </div>
      </div>
    </div>
  );
}
