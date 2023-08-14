import Info from '../../atoms/info/info';
import Content from '../../atoms/content/content';
import './Post.css';

const Post = () => {
  const data = { post: { info: { username: 'ggg' } }, content: 'wwwww' };
  const answerList = [
    {
      info: { username: 'asd' },
      content: 'asddsa',
      comment: [
        { info: { username: 'sss' }, content: 'assa' },
        { info: { username: 'aaa' }, content: 'qqqqq' },
      ],
    },
  ]; //data.answer
  return (
    <>
      <Info data={data.post.info} />
      <Content data={data.post.content} />
      {answerList.map((el) => (
        <div className="answerlist" key={el.info.username}>
          <div className="answser">
            <Info data={el.info} />
            <Content data={el.content} />
          </div>
          <div>
            {el.comment
              ? el.comment.map((el) => (
                  <div className="commentlist" key={el.info.username}>
                    <Info data={el.info} />
                    <Content data={el.content} />
                  </div>
                ))
              : null}
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
