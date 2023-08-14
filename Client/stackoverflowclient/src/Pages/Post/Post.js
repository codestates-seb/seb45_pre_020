import Info from '../../atoms/info/info';
import Content from '../../atoms/content/content';
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
  return (
    <div className="post_body_container" id={data.post.info.post_id}>
      <Info data={data.post.info} />
      <Content content={data.post.content} type={data.post.type} />
      {data.post.info.answerList.map((el) => (
        <div className="answerlist" key={el.info.user_id}>
          <div className="answser">
            <Info data={el.info} />
            <Content content={el.content} type={el.type} />
          </div>
          <div>
            {el.comment
              ? el.comment.map((el) => (
                  <div className="commentlist" key={el.info.user_id}>
                    <Info data={el.info} />
                    <Content content={el.content} type={el.type} />
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Post;
