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
      .post(`${process.env.REACT_APP_API_URL}/members/join`, newUser) // 회원정보 서버로 전달
      .then((response) => {
        console.log(response.data.message); // 백엔드에서 보낸 응답 메시지
        dispatch(signup(newUser)); // 리덕스 스토어 상태 업데이트
        alert('축하합니다! 회원가입이 성공했습니다!');
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
          <h1>Signup</h1>
          <h3>Name</h3>
          <div>
            <input type="text" value={inputName} onChange={handleInputName} />
          </div>
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
            <button className="signup-button" onClick={onClickSignup}>
              Sign up
            </button>
            <p>
              Already have an account? <a href="/login">Log in</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
