import React from 'react'

const Newpost = ({postTitle,setPostTitle,postBody,setPostBody,handleSubmit}) => {
  return (
    <main className="newpost">
      <h2>New Post</h2>
      <form className="newpost-form" onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Title: </label>
        <input
          type="text"
          id="postTitle"
          placeholder=" write your post title"
          value={postTitle}
          required
          onChange={(e) => setPostTitle(e.target.value)}
          autoComplete="off"
          autoFocus
        />
        <label htmlFor="postBody">Post:</label>
        <textarea
          required
          id="postBody"
          placeholder="write your post here."
          value={postBody}
          onChange={(e) => setPostBody(e.target.value)}
          autoComplete="off"
          autoFocus
        />

        <button className="send-button" type="submit">send</button>
      </form>
    </main>
  );
}

export default Newpost