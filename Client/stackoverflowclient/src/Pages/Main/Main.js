import { useEffect, useState, useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { setSearch } from "../../redux/reducers/searchSlice";
import Search from '../../atoms/Search/Search';
import PostLink from '../../atoms/post_link/post_link';
import './Main.css';
import axios from 'axios';

export default function Main() {
  const searchRef = useRef();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/posts/all?page=1&size=5`) // 전체 질문 조회
      .then((res) => {
        setQuestions(res.data);
        console.log(res.data);
      })
      .catch(() => {
        console.error('데이터를 가져오는 중에 문제가 발생했어요.');
      });
  }, []);

  return (
    <>
      <div className="MainContainer">
        <Search searchRef={searchRef} />
      </div>
      <div className="MainPostLinkContainer">
        {questions.length === 0 ? (
          <div>No questions</div>
        ) : (
          questions.map((question) => (
            <PostLink
              key={question.postResponseInfo.postId}
              postTitle={question.postResponseInfo.postTitle}
              createdAt={question.postResponseInfo.createdAt}
              user_Id={question.postResponseInfo.userId}
              postId={question.postResponseInfo.postId}
              // adopted={question.adopted}
              content={question.postContents}
              modifiedAt={question.postResponseInfo.modifiedAt}
            />
          ))
        )}
      </div>
    </>
  );
}
