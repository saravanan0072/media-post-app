import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
import { LuSendHorizontal } from "react-icons/lu";
import './css/EditPost.css'
import DataContext from './Context/DataContext';


const EditPost = () => {
    const { launch, posts, handleEdit, editTitle, setEditTitle, editBody, setEditBody } = useContext(DataContext)
    const { id } = useParams()
    const post = posts.find(post => post.id.toString() === id);
    // console.log(launch)
    useEffect(() => {
      if (post) {
        setEditTitle(post.title);
        setEditBody(post.body);
      }
    }, [post,setEditBody,setEditTitle]);
    
  return (
    <main className="newpost">
      {editTitle && (
        <>
          <h2>Edit Post</h2>
          <form className="newpost-form" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="postTitle">Title: </label>
            <input
              type="text"
              id="postTitle"
              value={editTitle}
              required
              onChange={(e) => setEditTitle(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            <label htmlFor="postBody">Post:</label>
            <textarea
              required
              id="postBody"
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              autoComplete="off"
              autoFocus
            />
            <LuSendHorizontal className={`send-icon ${launch ? 'launch' : ""}`} onClick={()=>handleEdit(post.id)} />
          </form>
        </>
      )}
    </main>
  );
}

export default EditPost

