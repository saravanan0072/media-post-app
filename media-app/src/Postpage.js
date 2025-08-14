import  { useContext } from 'react'
import {  useParams,useNavigate } from 'react-router-dom'
import { FaTrashAlt } from "react-icons/fa";
import { IoArrowBackCircle } from "react-icons/io5";
import { MdEditDocument } from "react-icons/md";
import "./css/Postpage.css";
import DataContext from './Context/DataContext';

const Postpage = () => {
  const{ posts, handleDelete } = useContext(DataContext)
  const { id } = useParams();
  // console.log(id)
  const post = posts.find(post => post.id.toString() === id)

  const navigate = useNavigate();
  const handleBack = () => {
    navigate('/')
  }

  const moveEditPage = () => {
    navigate(`/post/viewpage/edit/${post.id}`);
  }

  return (
    <main className="postpage">
      <article className="postpage-post">
        {post && (
          <>
            <h2>{post.title}</h2>
            <p className="postpage-datetime">{post.datetime}</p>
            <p className="postpage-postbody">{post.body}</p>
            <article className="postpage-arranged">
              <MdEditDocument className="edit-icon" onClick={moveEditPage} />

              <FaTrashAlt
                className="delete-icon"
                onClick={() => handleDelete(post.id)}
              />
            </article>

            <IoArrowBackCircle className="back-icon" onClick={handleBack} />
          </>
        )}

        {!post && (
          <>
            <h2>Post Not Found</h2>
            <p>Well, that's disappointment</p>
          </>
        )}
      </article>
    </main>
  );
}

export default Postpage 