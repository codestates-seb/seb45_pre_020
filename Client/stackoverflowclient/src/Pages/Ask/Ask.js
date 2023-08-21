import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import axios from 'axios';
import './Ask.css';

export default function Ask() {
  // 프로퍼티에 onLogin을 추가
  const navigate = useNavigate();
  const user = useSelector((state) => state.loginSlice.user);
  const isLoggedIn = !!user;

  const [title, setTitle] = useState(''); // 제목을 관리하기 위한 state
  const [content, setContent] = useState(''); // 내용을 관리하기 위한 state
  const [isTitleVaild, setIsTitleVaild] = useState(false); // 제목이 유효한지 확인하기 위한 state
  const [isContentVaild, setIsContentVaild] = useState(false); // 내용이 유효한지 확인하기 위한 state

  const handleTitleChange = (e) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
    setIsTitleVaild(newTitle.trim() !== '');
  };

  const handleContentChange = (e) => {
    const newContent = e.target.value;
    setContent(newContent);
    setIsContentVaild(newContent.trim() !== '');
  };

  const handleSubmit = () => {
    if (isTitleVaild && isContentVaild) {
      console.log(title, content);
      //   axios
      //     .post(
      //       `${process.env.REACT_APP_API_URL}/posts`,
      //       {
      //         info: {
      //           title: title,
      //           user_id: user_id,
      //           content: content,
      //           createdAt: new Date()
      //             .toLocaleString()
      //             .slice(0, 11)
      //             .replace(/(\s*)/g, ''),
      //           post_status: true,
      //           adopted: false,
      //           recommendCount: 0,
      //         },
      //         content: question,
      //         type: 'question',
      //       },
      //       { headers: { 'Content-Type': 'application/json' } },
      //     )
      //     .then((res) => {
      //       navigate('/');
      //     })
      //     .catch((err) => console.error('잘못된 접근입니다.'));
      // } else {
      //   alert('제목과 내용을 입력해주세요.');
      // }
    }
  };
  useEffect(() => {
    if (!isLoggedIn) {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <>
      <div className="Allcontainer">
        <div className="question">
          <h2 className="question-heading">Ask a public question</h2>
          <h3 className="question-subheading">Title</h3>
        </div>
        <h4 className="AskTitleTip">
          {`Be specific and imagine you're asking a question to another person`}
        </h4>
        <input
          className="AskTitleInput"
          value={title}
          onChange={handleTitleChange}
          placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
        />
        <h3 className="AskBody">Body</h3>
        <h4 className="AskBodyTip">{`What are the details of your problem?`}</h4>
        <textarea
          className="AskBodyInput"
          value={content}
          onChange={handleContentChange}
          disabled={!isTitleVaild}
          placeholder="Include all the information someone would need to answer your question"
        />
        <button className="AskBodyButton" onClick={handleSubmit}>
          Post Your Question
        </button>
      </div>
    </>
  );
}
