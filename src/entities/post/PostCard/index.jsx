
import React from "react";
import "./PostCard.css"
// import Button from "../../../shared/ui/Button"
import Button from "@shared/ui/Button"

const PostCard=({post, onLike})=>{
  
  console.log("PostCard가 변경되었네요")
  return (<>
    <div className="post-card">
      <div className="post-header">
        <img src={post.user.profileImage}  alt="사용자이미지" className="profile-img" />
        <span className="username">{post.user.username}</span>
      </div>
      <div>
        <img src={post.imageUrl} alt="post이미지" className="post-image" />
      </div>
      <div className="post-action">
        <Button text={post.liked?"💖":"🤍"} onClick={()=>onLike(post.id)}/>
        <span className="likes-count">{post.likes}</span>
        <span>{' '}likes</span>
      </div>
      <div className="post-caption">
        <strong>{post.user.username}</strong>
        <span>{' '}{post.caption}</span>
      </div>

    </div>
  </>)
}

//export default React.memo(PostCard);
export default PostCard;