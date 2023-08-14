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
      {data.map((datas) => (
    <PostLink 
     postTitle={datas.post.info.postTitle}
     createdAt={datas.post.info.createdAt}
     user_Id={datas.post.info.user_id}
     adopted={datas.post.info.adopted}
     content={datas.post.content}
     />
      ))}
    </div>
    </>
  );
}
