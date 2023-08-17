import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { setAddClicked } from '../../redux/reducers/commentSilce';
import axios from 'axios';
import './content.css';

const Content = ({ content, type }) => {
  const openInput = useSelector((state) => state.Comment.addClicked);
  const [inputVal, setInputVal] = useState('');
  const dispatch = useDispatch();
  console.log(
    inputVal,
    new Date().toLocaleString().slice(0, 11).replace(/(\s*)/g, ''),
  );
  const addComment = () => {
    const comment = {
      info: {
        user_id: '',
        createdAt: new Date()
          .toLocaleString()
          .slice(0, 11)
          .replace(/(\s*)/g, ''),
      },
      content: inputVal,
      type: 'comment',
    };
    //comment와 answer_id 둘다 넘겨줘야함
    //todo:id도 넘겨야함
    axios
      .post(`${process.env.REACT_APP_API_URL}/`, comment)
      .then((res) => {
        console.log(res.data.message);
        dispatch(setAddClicked(!openInput));
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };
  return (
    <div className="content_container">
      <div className="content">{content}</div>
      {openInput && type === 'answer' ? (
        <div className="comment_add_container">
          <label htmlFor="comment_input">코멘트 추가</label>
          <div className="input_container">
            <textarea
              placeholder="코멘트를 작성해 주세요"
              onChange={(e) => setInputVal(e.target.value)}
              className="comment_input"
              id="comment_input"
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
