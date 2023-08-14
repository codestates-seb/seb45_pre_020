import './info.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAddClicked } from '../../redux/reducers/commentSilce';

const Info = (/*{ data }*/) => {
  const title = 'how'; /*data.postTitle;*/
  const recommendCount = 3; //data.recommendCount;
  const openInput = useSelector((state) => state.Comment.addClicked);
  const dispatch = useDispatch();
  const addRecommend = () => {
    //서버에 추천수 +1하는 코드
  };
  const openCommentinput = () => {
    dispatch(setAddClicked(!openInput));
  };
  const isTrue = true;
  return (
    <div className="postinfo_container">
      <div className="postinfo_title">
        {/* {adopted ? ( */}
        {isTrue ? (
          <div className="postinfo selected">
            <img
              src="/img/Selection.svg"
              alt="selected"
              className="adopted"
            ></img>
            selection
          </div>
        ) : null}
        {title ? <h2>{title}</h2> : null}
      </div>
      <div className="postinfo_body_container">
        <div className="postinfo">{'user_id'}</div>
        <div className="postinfo">
          {
            /* {'modified_at'}*/ isTrue
              ? `${'created_at'}에 작성`
              : `${'modified_at'}에 수정`
          }
        </div>
        {recommendCount ? (
          <div className="postinfo">
            <button onClick={addRecommend}>
              <label>{recommendCount}</label>
              <img src="/img/recommend.svg" alt="recommend"></img>
            </button>
          </div>
        ) : null}
        {recommendCount ? (
          <div className="postinfo">
            <button onClick={openCommentinput}>코멘트 추가</button>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Info;
