import { useDispatch, useSelector } from 'react-redux';
import { setAddClicked } from '../../redux/reducers/commentSilce';
import '../button/button.css';
import './info.css';

const Info = ({ data }) => {
  const openInput = useSelector((state) => state.Comment.addClicked);
  const dispatch = useDispatch();
  const addRecommend = () => {
    //서버에 추천수 +1하는 코드
  };
  const openCommentinput = () => {
    dispatch(setAddClicked(!openInput));
  };
  return (
    <div className="postinfo_container">
      <div className="postinfo_title">
        {data.postTitle ? <h2>{data.postTitle}</h2> : null}
      </div>
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
        <div className="postinfo">{data.user_id}</div>
        <div className="postinfo">
          {data.modifiedAt
            ? `${data.modifiedAt}에 수정`
            : `${data.createdAt}에 작성`}
        </div>
        {data.recommendCount ? (
          <div className="postinfo">
            <button onClick={addRecommend} className="recommend_button">
              <label>{data.recommendCount}</label>
              <img src="/img/recommend.svg" alt="recommend"></img>
            </button>
          </div>
        ) : null}
        {data.recommendCount ? (
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
