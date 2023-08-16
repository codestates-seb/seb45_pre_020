import { useRef } from 'react';
// import { useDispatch, useSelector } from "react-redux";
// import { setSearch } from "../../redux/reducers/searchSlice";
import Search from '../../atoms/Search/Search';
import PostLink from '../../atoms/post_link/post_link';
import data from '../../dummy/dummy';
import './Main.css';

export default function Main() {
  const searchRef = useRef();

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
      </div>
    </>
  );
}
