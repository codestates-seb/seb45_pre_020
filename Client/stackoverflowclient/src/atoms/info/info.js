import './info.css';
import { useDispatch, useSelector } from 'react-redux';
import { setAddClicked } from '../../redux/reducers/commentSilce';

const Info = ({ data }) => {
  const title = false; /*data.postTitle;*/
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
    <div className="">
      {title ? <h2>{title}</h2> : null}
      <div>
        <div>{'user_id'}</div>
        <div>
          {
            /* {'modified_at'}*/ isTrue
              ? `${'created_at'}에 작성`
              : `${'modified_at'}에 수정`
          }
        </div>
        {/* {adopted ? ( */}
        {isTrue ? (
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
        {recommendCount ? (
          <button onClick={openCommentinput}>코멘트 추가</button>
        ) : null}
        {openInput ? <input placeholder="test"></input> : null}
      </div>
    </div>
  );
};

export default Info;
