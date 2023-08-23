import Info from '../../atoms/info/info';
import Content from '../../atoms/content/content';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { setModifyMode } from '../../redux/reducers/modifySlice';
import './Post.css';

const Post = () => {
  const pageId = Number(new URLSearchParams(location.search).get('postId'));
  // const Data = data.filter((el) => el.post.info.post_id === pageId)[0];
  const isLogin = useSelector((state) => state.loginSlice.isLogin);
  const modifyMode = useSelector((state) => state.modifySlice.modifyMode);
  const postId = useSelector((state) => state.modifySlice.post_id);
  const type = useSelector((state) => state.modifySlice.type);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.loginSlice.accessToken);
  //페이지 진입시 필요 데이터를 서버에 요청
  const [Data, setData] = useState(null);
  const getData = () => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/${pageId}`, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        setData(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log('Error : ', error);
      });
  };
  const [inputVal, setInputVal] = useState({
    answer: '',
    modifiedQuestion: '',
    modifiedAnswer: '',
    modifiedComment: '',
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInputVal({ ...inputVal, [name]: value });
  };
  const addAnswer = () => {
    const body = {
      postId: pageId,
      answerInfo: {
        userId: 1,
        createdAt: new Date()
          .toLocaleString()
          .slice(0, 11)
          .replace(/(\s*)/g, ''),
        postStatus: true, //상의 필요
        adopted: false,
        // recommendCount: 0,
      },
      answerContents: inputVal.answer,
      type: 'answer',
    };
    console.log(body);
    if (isLogin) {
      axios
        .post(`${process.env.REACT_APP_API_URL}/answers`, body, {
          headers: {
            Authorization: accessToken,
          },
        })
        .then((res) => {
          console.log(res.data.message);
          initialize();
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
      modifiedQuestion: type === 'question' ? Data.post.content : '',
      modifiedAnswer:
        type === 'answer'
          ? Data.post.info.answerList.find((el) => el.info.answer_id === postId)
              .content
          : '',
      modifiedComment:
        type === 'comment'
          ? Data.post.info.answerList
              .find((el) =>
                el.comment.find((el) => el.info.comment_id === postId),
              )
              .comment.find((el) => el.info.comment_id === postId).content
          : '',
    });
  };
  const offModifyMode = () => {
    dispatch(
      setModifyMode({
        modifyMode: !modifyMode,
        post_id: '',
        type: '',
      }),
    );
    setInputVal({
      answer: '',
      modifiedQuestion: '',
      modifiedAnswer: '',
      modifiedComment: '',
    });
  };
  const patchFunction = (mode, body) => {
    axios
      .patch(`${process.env.REACT_APP_API_URL}/${mode}/${postId}`, body, {
        headers: {
          Authorization: accessToken,
        },
      })
      .then((res) => {
        console.log(res.data.message);
        initialize();
        offModifyMode();
      })
      .catch((error) => {
        console.error('Error : ', error);
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
    patchFunction('posts', modifiedValue);
  };
  // const modifyAnswer = () => {
  //   const modifiedValue = {
  //     answerId: postId,
  //     answerContents: inputVal.modifiedAnswer,
  //     modifiedAt: new Date()
  //       .toLocaleString()
  //       .slice(0, 11)
  //       .replace(/(\s*)/g, ''),
  //   };
  //   patchFunction('answers', modifiedValue);
  // };
  // const modifyComment = () => {
  //   const modifiedValue = {
  //     commentId: postId,
  //     commentContents: inputVal.modifiedComment,
  //     modifiedAt: new Date()
  //       .toLocaleString()
  //       .slice(0, 11)
  //       .replace(/(\s*)/g, ''),
  //   };
  //   patchFunction('comments', modifiedValue);
  // };

  useEffect(() => {
    if (Data === null) {
      getData();
    }
    initialize();
  }, [postId]);
  if (Data === null) {
    return <div className="post_body_container">loading</div>;
  } else if (Data !== null) {
    return (
      <div className="post_body_container" id={Data.postResponseInfo.postId}>
        <div className="post">
          <Info data={Data.postResponseInfo} type={Data.type} />
          {modifyMode && postId === Data.postResponseInfo.postId ? (
            <div className="form_container">
              <label htmlFor="question_input" className="menu_title">
                질문수정
              </label>
              <div className="input_container">
                <textarea
                  value={inputVal.modifiedQuestion}
                  onChange={handleInput}
                  name="modifiedQuestion"
                  id="question_input"
                  className="modify_input"
                ></textarea>
                <div className="modify_button_container">
                  <button onClick={modifyQuestion} className="modify_button">
                    수정
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <Content
              content={Data.postContents}
              type={Data.type}
              post_status={Data.postResponseInfo.postStatus}
              post_id={Data.postResponseInfo.postId}
            />
          )}
        </div>
        {/* {Data.post.info.answerList.map((el) => (
          <div className="answerlist" key={el.info.user_id}>
            <div className="answser">
              <Info data={el.info} type={el.type} />
              {modifyMode && postId === el.info.answer_id ? (
                <div className="form_container">
                  <label htmlFor="answer_input" className="menu_title">
                    답변 수정
                  </label>
                  <div className="input_container">
                    <textarea
                      value={inputVal.modifiedAnswer}
                      onChange={handleInput}
                      name="modifiedAnswer"
                      id="answer_input"
                      className="modify_input"
                    ></textarea>
                    <div className="modify_button_container">
                      <button onClick={modifyAnswer} className="modify_button">
                        수정
                      </button>
                    </div>
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
                          <label htmlFor="comment_input" className="menu_title">
                            코멘트 수정
                          </label>
                          <div className="input_container">
                            <textarea
                              value={inputVal.modifiedComment}
                              onChange={handleInput}
                              name="modifiedComment"
                              id="comment_input"
                              className="modify_input"
                            ></textarea>
                            <div className="modify_button_container">
                              <button
                                onClick={modifyComment}
                                className="modify_button"
                              >
                                수정
                              </button>
                            </div>
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
        ))} */}
        <div className="answer_add_container">
          <label htmlFor="answer_input" className="menu_title">
            답변 추가
          </label>
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
  }
};

export default Post;
