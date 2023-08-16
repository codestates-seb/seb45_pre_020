import Info from '../../atoms/info/info';
import Content from '../../atoms/content/content';
import { useState, useEffect } from 'react';
import './Post.css';
import axios from 'axios';

const Post = () => {
  const data = {
    post: {
      info: {
        user_id: 'question_user',
        postTitle: 'question_title',
        post_id: 1,
        createdAt: '2023.09.01',
        post_status: true,
        adopted: true,
        answerList: [
          {
            info: {
              user_id: 'answer_user',
              createdAt: '2023.09.01',
              modifiedAt: '2023.09.02',
              post_status: true,
              adopted: true,
              recommendCount: 3,
            },
            content: 'answer',
            type: 'answer',
            comment: [
              {
                info: { user_id: 'comment_user1', createdAt: '2023.09.01' },
                content: 'comment1',
                type: 'comment',
              },
              {
                info: { user_id: 'comment_user2', createdAt: '2023.09.01' },
                content: 'comment2',
                type: 'comment',
              },
            ],
          },
        ],
      },
      content: 'question',
      type: 'question',
    },
  };
  //페이지 진입시 필요 데이터를 서버에 요청
  //const [data,setData] = useState({});
  const getData = () => {
    axios
      .get('url')
      .then(() => {
        //인자에 res 추가필요
        //setData(res.data)
        //console.log(res.data.message);
      })
      .catch((error) => {
        console.log('Error : ', error);
      });
  };
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
    axios
      .post('url', answer)
      .then((res) => {
        console.log(res.data.message);
        setInputVal('');
      })
      .catch((error) => {
        console.error('Error : ', error);
      });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="post_body_container" id={data.post.info.post_id}>
      <div className="post">
        <Info data={data.post.info} type={data.post.type} />
        <Content content={data.post.content} type={data.post.type} />
      </div>
      {data.post.info.answerList.map((el) => (
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
            placeholder="답변을 작성해주세요"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            className="answer_input"
            id="answer_input"
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
