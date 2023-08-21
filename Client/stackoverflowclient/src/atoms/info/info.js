import { useDispatch, useSelector } from 'react-redux';
import { setAddClicked } from '../../redux/reducers/commentSilce';
import { setModifyMode } from '../../redux/reducers/modifySlice';
import '../button/button.css';
import './info.css';

const Info = ({ data, type }) => {
  const openInput = useSelector((state) => state.Comment.addClicked);
  const isLogin = useSelector((state) => state.loginSlice.isLogin);
  const user = useSelector((state) => state.loginSlice.user);
  const modifyMode = useSelector((state) => state.modifySlice.modifyMode);
  const dispatch = useDispatch();
  const post_id = data.post_id || data.answer_id || data.comment_id;
  const addRecommend = () => {
    //서버에 추천수 +1하는 코드
    if (isLogin) {
      return;
    } else {
      alert('로그인이 필요합니다.');
    }
  };
  const openCommentinput = () => {
    dispatch(setAddClicked({ openInput: !openInput, post_id: post_id }));
  };
  const setModifymode = () => {
    dispatch(setModifyMode({ modifyMode: !modifyMode, post_id: post_id }));
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
        {user === data.user_id ? (
          <div className="button_container">
            <button onClick={setModifymode}>수정</button>
            <button>삭제</button>
          </div>
        ) : null}
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
