import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { setAddClicked } from '../../redux/reducers/commentSilce';
import axios from 'axios';
import './content.css';

const Content = ({ content, type, post_status, post_id }) => {
  const openInput = useSelector((state) => state.Comment.addClicked);
  const answerId = useSelector((state) => state.Comment.answerId);
  const [inputVal, setInputVal] = useState('');
  const isLogin = useSelector((state) => state.loginSlice.isLogin);
  const user = useSelector((state) => state.loginSlice.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const addComment = () => {
    const body = {
      answerId,
      comment: {
        info: {
          user_id: user,
          createdAt: new Date()
            .toLocaleString()
            .slice(0, 11)
            .replace(/(\s*)/g, ''),
        },
        content: inputVal,
        type: 'comment',
      },
    };
    if (isLogin) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/comments`, body)
        .then((res) => {
          console.log(res.data.message);
          dispatch(setAddClicked(!openInput));
        })
        .catch((error) => {
          console.error('Error : ', error);
        });
    } else {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };
  return (
    <div className="content_container">
      {post_status ? (
        <div
          className={type === 'comment' ? 'content comment_content' : 'content'}
        >
          {content}
        </div>
      ) : (
        <div
          className={
            type === 'comment'
              ? 'content deleted comment_content'
              : 'content deleted'
          }
        >
          삭제된 내용입니다.
        </div>
      )}
      {openInput && type === 'answer' && post_id === answerId ? (
        <div className="comment_add_container">
          <label htmlFor="comment_input">코멘트 추가</label>
          <div className="input_container">
            <textarea
              placeholder={
                isLogin ? '코멘트를 작성해 주세요' : '로그인이 필요합니다'
              }
              onChange={(e) => setInputVal(e.target.value)}
              className="comment_input"
              id="comment_input"
              disabled={!isLogin}
            ></textarea>
            <div className="add_button_container">
              <button onClick={addComment} className="add_comment_button">
                작성하기
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Content;
