import { useSelector } from 'react-redux';
import { useState } from 'react';
import './content.css';

const Content = ({ content, type }) => {
  const openInput = useSelector((state) => state.Comment.addClicked);
  const [inputVal, setInputVal] = useState('');
  console.log(inputVal);
  const addComment = () => {
    //todo: redux로 comment를 서버에 전송
  };
  return (
    <div className="content_container">
      <div className="content">{content}</div>
      {openInput && type === 'answer' ? (
        <div className="input_container">
          <textarea
            placeholder="코멘트를 작성해 주세요"
            onChange={(e) => setInputVal(e.target.value)}
            className="comment_input"
          ></textarea>
          <button onClick={addComment}>작성하기</button>
        </div>
      ) : null}
    </div>
  );
};

export default Content;
