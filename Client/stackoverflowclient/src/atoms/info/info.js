import { useDispatch, useSelector } from 'react-redux';
import { setAddClicked } from '../../redux/reducers/commentSilce';
import '../button/button.css';
import './info.css';

const Info = ({ data, type }) => {
  const openInput = useSelector((state) => state.Comment.addClicked);
  const isLogin = useSelector((state) => state.loginSlice.isLogin);
  const dispatch = useDispatch();
  const addRecommend = () => {
    //서버에 추천수 +1하는 코드
    if (isLogin) {
      return;
    } else {
      alert('로그인이 필요합니다.');
    }
  };
  const openCommentinput = () => {
    dispatch(setAddClicked(!openInput));
  };
  return (
    <div className="postinfo_container">
      {type === 'question' ? (
        <div className="postinfo_title">
          {data.postTitle ? <h2>{data.postTitle}</h2> : null}
        </div>
      ) : null}
      <div className="postinfo_body_container">
        {data.adopted ? (
          <div className="postinfo selected">
            <img
              src="/img/Selection.svg"
              alt="selected"
              className="adopted"
            ></img>
            selection
          </div>
        ) : null}
        <div className="postinfo">{`작성자:${data.user_id}`}</div>
        <div className="postinfo">
          {data.modifiedAt
            ? `${data.modifiedAt}에 수정`
            : `${data.createdAt}에 작성`}
        </div>
        {type === 'answer' ? (
          <div className="postinfo">
            <button onClick={addRecommend} className="recommend_button">
              <label>{data.recommendCount}</label>
              <img src="/img/recommend.svg" alt="recommend"></img>
            </button>
          </div>
        ) : null}
        {type === 'answer' ? (
          <div className="postinfo">
            <button onClick={openCommentinput} className="addComment_button">
              코멘트 추가
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Info;
