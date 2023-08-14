import Info from '../../atoms/info/info';
import Content from '../../atoms/content/content';
import { useState } from 'react';
import './Post.css';

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
  const [inputVal, setInputVal] = useState('');
  const addAnswer = () => {
    //axios로 inputval을 answer에 추가하며 이때 info에 해당되는 정보도 보내줘야함
  };
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
