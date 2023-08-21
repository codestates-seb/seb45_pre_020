import { /*useEffect*/ useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { setSearch } from "../../redux/reducers/searchSlice";
import Search from '../../atoms/Search/Search';
import PostLink from '../../atoms/post_link/post_link';
import data from '../../dummy/dummy';
import './Main.css';

export default function Main() {
  const searchRef = useRef();

  //   useEffect(()=>{
  //     axios.get(`${process.env.REACT_APP_API_URL}/posts/all?page=1&size=5`) // 전체 질문 조회
  //     .then((res)=>{
  //         setQuestions(res.data);
  //     }
  //     )
  //     .catch(() => {
  //         console.error('데이터를 가져오는 중에 문제가 발생했어요.');
  //       });
  // },[]);

  return (
    <>
      <div className="MainContainer">
        <Search searchRef={searchRef} />
      </div>
      <div className="MainPostLinkContainer">
        {data.map((datas, idx) => (
          <PostLink
            key={idx}
            postTitle={datas.post.info.postTitle}
            createdAt={datas.post.info.createdAt}
            user_Id={datas.post.info.user_id}
            postId={datas.post.info.post_id}
            adopted={datas.post.info.adopted}
            content={datas.post.content}
            modifiedAt={datas.post.info.modifiedAt}
          />
        ))}
        {/* {questions.map((question, idx) => (
          <PostLink
            key={idx}
            postTitle={question.info.title}
            createdAt={question.info.createdAt}
            user_Id={question.info.user_id}
            postId={question.info.post_id}
            adopted={question.info.adopted}
            content={question.content}
            modifiedAt={question.info.modifiedAt}
          />
        ))} */}
      </div>
    </>
  );
}
