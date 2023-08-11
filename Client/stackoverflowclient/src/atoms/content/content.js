import { useSelector } from 'react-redux';
import './content.css';

const Content = () => {
  const content = 'content'; //postContents || answerContents || commentContents;
  const openInput = useSelector((state) => state.Comment.addClicked);

  return (
    <div>
      <div>{content}</div>
      {openInput ? <input placeholder="test"></input> : null}
    </div>
  );
};

export default Content;
