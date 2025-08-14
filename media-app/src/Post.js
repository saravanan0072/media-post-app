import React from 'react'
import { useNavigate } from 'react-router-dom';
import { RxReader } from "react-icons/rx";
import "./css/Post.css";




const Post = ({ post }) => {
  
  const navigate = useNavigate();
  
  const handleRead = () => {
    navigate(`/post/viewpage/${post.id}`);
    
  }

  return (
    <article className="post">
      <h2>{post.title}</h2>
      <p className="postpage-datetime">{post.datetime}</p>

      <p className="postpage-postbody">
        {post.body.length <= 30 ? post.body : `${post.body.slice(0, 30)}.....`}{" "}
      </p>
      <RxReader onClick={handleRead} className="read-icon" />
    </article>
  );
}

export default Post