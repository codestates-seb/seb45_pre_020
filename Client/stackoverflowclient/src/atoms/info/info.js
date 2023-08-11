import './info.css';

const Info = ({ data }) => {
  const title = data.postTitle;
  const recommendCount = data.recommendCount;

  const addRecommend = () => {
    //서버에 추천수 +1하는 코드
  };
  //   const [comment, setComment] = useState(false); 전역상태로 변경
  return (
    <div className="">
      {title ? <h2>{title}</h2> : null}
      <div>
        <div>{user_id}</div>
        <div>
          {modified_at ? `${created_at}에 작성` : `${modified_at}에 수정`}
        </div>
        {adopted ? (
          <div>
            <img src="./img/Selection.svg" alt="selected"></img>
            selection
          </div>
        ) : null}
        {recommendCount ? (
          <button onClick={addRecommend}>
            <img src="./img/recommmend.svg" alt="recommend"></img>
            추천
          </button>
        ) : null}
        {recommendCount ? <button>코멘트 추가</button> : null}
      </div>
    </div>
  );
};

export default Info;
