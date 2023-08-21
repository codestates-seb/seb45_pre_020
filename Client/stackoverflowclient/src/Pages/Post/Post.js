import Info from '../../atoms/info/info';
import Content from '../../atoms/content/content';
import { useNavigate } from 'react-router-dom';
import { useState /*useEffect*/ } from 'react';
import { useSelector } from 'react-redux';
import data from '../../dummy/dummy';
import './Post.css';
import axios from 'axios';

const Post = () => {
  const Data = data.filter(
    (el) =>
      el.post.info.post_id ===
      Number(new URLSearchParams(location.search).get('postId')),
  )[0];
  console.log(Data);
  const isLogin = useSelector((state) => state.loginSlice.isLogin);
  const modifyMode = useSelector((state) => state.modifySlice.modifyMode);
  const postId = useSelector((state) => state.modifySlice.post_id);
  const navigate = useNavigate();
  //페이지 진입시 필요 데이터를 서버에 요청
  //const [data,setData] = useState({});
  // const getData = () => {
  //   axios
  //     .get(`${process.env.REACT_APP_API_URL}/`)
  //     .then((res) => {
  //       //setData(res.data)
  //       //console.log(res.data.message);
  //     })
  //     .catch((error) => {
  //       console.log('Error : ', error);
  //     });
  // };
  const [inputVal, setInputVal] = useState({
    answer: '',
    modifiedQuestion: Data.post.content,
    modifiedAnswer: postId
      ? Data.post.info.answerList.filter(
          (el) => el.info.answer_id === postId,
        )[0].content
      : '',
    modifiedComment: postId
      ? Data.post.info.answerList
          .find((el) => el.comment.find((el) => el.info.comment_id === postId))
          .comment.find((el) => el.info.comment_id === postId).content
      : '',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  //서버에 answer에 해당되는 데이터, 어떤 post에 추가해야하는지 post_id도 넘겨줘야함,
  //todo:id 넘기는 부분
  const addAnswer = () => {
    const answer = {
      info: {
        user_id: '',
        createdAt: new Date()
          .toLocaleString()
          .slice(0, 11)
          .replace(/(\s*)/g, ''),
        post_status: true, //상의 필요
        adopted: false,
        recommendCount: 0,
      },
      content: inputVal,
      type: 'answer',
    };
    if (isLogin) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/posts`, answer)
        .then((res) => {
          console.log(res.data.message);
          setInputVal({
            answer: '',
            modifiedQuestion: Data.post.content,
            modifiedAnswer: Data.post.info.answerList.filter(
              (el) => el.info.answer_id === postId,
            )[0].content,
            modifiedComment: Data.post.info.answerList
              .find((el) =>
                el.comment.find((el) => el.info.comment_id === postId),
              )
              .comment.find((el) => el.info.comment_id === postId).content,
          });
        })
        .catch((error) => {
          console.error('Error : ', error);
        });
    } else {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };
  const initialize = () => {
    setInputVal({
      answer: '',
      modifiedQuestion: Data.post.content,
      modifiedAnswer: Data.post.info.answerList.filter(
        (el) => el.info.answer_id === postId,
      )[0].content,
      modifiedComment: Data.post.info.answerList
        .find((el) => el.comment.find((el) => el.info.comment_id === postId))
        .comment.find((el) => el.info.comment_id === postId).content,
    });
  };
  const modifyQuestion = () => {
    const modifiedValue = {
      postId: postId,
      postContents: inputVal.modifiedQuestion,
      modifiedAt: new Date()
        .toLocaleString()
        .slice(0, 11)
        .replace(/(\s*)/g, ''),
    };
    axios
      .patch(`${process.env.REACT_APP_API_URL}/posts/${postId}`, modifiedValue)
      .then((res) => {
        console.log(res.data.message);
        initialize();
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };
  const modifyAnswer = () => {
    const modifiedValue = {
      postId: postId,
      postContents: inputVal.modifiedAnswer,
      modifiedAt: new Date()
        .toLocaleString()
        .slice(0, 11)
        .replace(/(\s*)/g, ''),
    };
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/answers/${postId}`,
        modifiedValue,
      )
      .then((res) => {
        console.log(res.data.message);
        initialize();
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };
  const modifyComment = () => {
    const modifiedValue = {
      postId: postId,
      postContents: inputVal.modifiedComment,
      modifiedAt: new Date()
        .toLocaleString()
        .slice(0, 11)
        .replace(/(\s*)/g, ''),
    };
    axios
      .patch(
        `${process.env.REACT_APP_API_URL}/comments/${postId}`,
        modifiedValue,
      )
      .then((res) => {
        console.log(res.data.message);
        initialize();
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="post_body_container" id={Data.post.info.post_id}>
      <div className="post">
        <Info data={Data.post.info} type={Data.post.type} />
        {modifyMode && postId === Data.post.info.post_id ? (
          <div className="form_container">
            <label htmlFor="question_input">질문수정</label>
            <div className="input_container">
              <textarea
                value={inputVal.modifiedQuestion}
                onChange={handleInput}
                name="modifiedQuestion"
                id="question_input"
              ></textarea>
            </div>
            <div className="modify_button_container">
              <button onClick={modifyQuestion} className="modify_button">
                수정하기
              </button>
            </div>
          </div>
        ) : (
          <Content
            content={Data.post.content}
            type={Data.post.type}
            post_status={Data.post.info.post_status}
            post_id={Data.post.info.post_id}
          />
        )}
      </div>
      {Data.post.info.answerList.map((el) => (
        <div className="answerlist" key={el.info.user_id}>
          <div className="answser">
            <Info data={el.info} type={el.type} />
            {modifyMode && postId === el.info.answer_id ? (
              <div className="form_container">
                <label htmlFor="answer_input">답변 수정</label>
                <div className="input_container">
                  <textarea
                    value={inputVal.modifiedAnswer}
                    onChange={handleInput}
                    name="modifiedAnswer"
                    id="answer_input"
                  ></textarea>
                </div>
                <div className="modify_button_container">
                  <button onClick={modifyAnswer} className="modify_button">
                    수정하기
                  </button>
                </div>
              </div>
            ) : (
              <Content
                content={el.content}
                type={el.type}
                post_status={el.info.post_status}
                post_id={el.info.answer_id}
              />
            )}
          </div>
          <div className="comment_container">
            {el.comment
              ? el.comment.map((el) => (
                  <div className="commentlist" key={el.info.user_id}>
                    <Info data={el.info} type={el.type} />
                    {modifyMode && postId === el.info.comment_id ? (
                      <div className="form_container">
                        <label htmlFor="comment_input">코멘트 수정</label>
                        <div className="input_container">
                          <textarea
                            value={inputVal.modifiedComment}
                            onChange={handleInput}
                            name="modifiedComment"
                            id="comment_input"
                          ></textarea>
                        </div>
                        <div className="modify_button_container">
                          <button
                            onClick={modifyComment}
                            className="modify_button"
                          >
                            수정하기
                          </button>
                        </div>
                      </div>
                    ) : (
                      <Content
                        content={el.content}
                        type={el.type}
                        post_status={el.info.post_status}
                        post_id={el.info.comment_id}
                      />
                    )}
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
      <div className="answer_add_container">
        <label htmlFor="answer_input">답변 추가</label>
        <div className="answer_input_container">
          <textarea
            placeholder={
              isLogin ? '답변을 작성해주세요.' : '로그인이 필요합니다.'
            }
            value={inputVal.answer}
            onChange={handleInput}
            className="answer_input"
            id="answer_input"
            name="answer"
            disabled={!isLogin}
          ></textarea>
          <div className="button_container">
            <button className="add_answer_button" onClick={addAnswer}>
              작성하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
