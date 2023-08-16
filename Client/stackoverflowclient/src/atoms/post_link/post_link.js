// import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './post_link.css';

export default function PostLink({
  postTitle,
  createdAt,
  user_Id,
  adopted,
  content,
  postId,
}) {
  const navigate = useNavigate();

  const handlePostClick = () => {
    navigate(`/post/${postId}`);
  };

  const userInfoData = {
    'data-created-at': createdAt,
    'data-user-id': user_Id,
  };

  return (
    <div
      className="MainPostCardContainer"
      role="button"
      tabIndex={0}
      onClick={handlePostClick}
      onKeyDown={handlePostClick}
    >
      <div className="CardTopsection">
        <h3>{postTitle}</h3>
        <div className="Selection" data-status={adopted} />
      </div>
      <div className="CardMiddleSection">
        <div className="Content">
          {content.length > 200 ? content.slice(0, 200) + '...' : content}
        </div>
      </div>
      <div className="CardBottomSection">
        {/* <div className="Tags" tags={tags} /> */}
        <div className="UserInfo" {...userInfoData} />
      </div>
    </div>
  );
}
