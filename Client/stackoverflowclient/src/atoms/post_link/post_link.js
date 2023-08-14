// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./post_link.css";

export default function PostLink({ postTitle, createdAt, user_Id, adopted, content }) {
    // const [contentText, setContentText] = useState(data.post.content.replace(/(<([^>]+)>)/gi, ''))
    // const navigate = useNavigate();

  return (
    <div className="MainPostCardContainer" >
      <div className="CardTopsection">
        <h3>{ postTitle }</h3>
        <div className="Selection" status={adopted} />
        </div>
        <div className="CardMiddleSection">
        <div className="Content">{ content.length > 200 ? content.slice(0, 200) + '...' : content }</div>
        </div>
        <div ClassName="CardBottomSection">
        {/* <div className="Tags" tags={tags} /> */}
            <div className="UserInfo" createdAt={createdAt} userId={user_Id} />
      </div>
    </div>
  );
}