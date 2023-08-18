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
  const [inputVal, setInputVal] = useState('');
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
        .post(`${process.env.REACT_APP_API_URL}/`, answer)
        .then((res) => {
          console.log(res.data.message);
          setInputVal('');
        })
        .catch((error) => {
          console.error('Error : ', error);
        });
    } else {
      alert('로그인이 필요합니다.');
      navigate('/login');
    }
  };
  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <div className="post_body_container" id={Data.post.info.post_id}>
      <div className="post">
        <Info data={Data.post.info} type={Data.post.type} />
        <Content content={Data.post.content} type={Data.post.type} />
      </div>
      {Data.post.info.answerList.map((el) => (
        <div className="answerlist" key={el.info.user_id}>
          <div className="answser">
            <Info data={el.info} type={el.type} />
            <Content content={el.content} type={el.type} />
          </div>
          <div className="comment_container">
            {el.comment
              ? el.comment.map((el) => (
                  <div className="commentlist" key={el.info.user_id}>
                    <Info data={el.info} type={el.type} />
                    <Content content={el.content} type={el.type} />
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
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="answer_input"
            id="answer_input"
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
