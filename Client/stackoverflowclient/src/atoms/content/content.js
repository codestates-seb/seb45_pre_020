import './content.css';

const Content = () => {
  const content = postContents || answerContents || commentContents;
  return <div>{content}</div>;
};

export default Content;
