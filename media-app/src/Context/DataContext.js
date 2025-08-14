import { createContext, useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";
import useWindowSize from "../customhooks/useWindowSize.js";
import useHamburgerMenu from "../customhooks/useHamburgerMenu.js";
import { format } from "date-fns";
import api from "../api/apiEnd.js";

const DataContext = createContext({})

export const DataProvider = ({ children }) => {

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [axiosError, setAxiosError] = useState("");
  const { width } = useWindowSize();
  const { isOpen, toggleMenu } = useHamburgerMenu();
  const [launch, setLaunch] = useState(false);
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [editTitle, setEditTitle] = useState("");
  const [editBody, setEditBody] = useState("");

  // ..............................................get axios for json-server

  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await api.get("/posts");
        setPosts(response.data);
      } catch (err) {
        if (err.response) {
          
          setAxiosError(
            `Error : ${err.response.status} in ${err.response.data}`
          );
        } else {
         
          setAxiosError(`Some other Error: ${err.message} `);
        }
      } finally {
        setIsLoading(false);
      }
    };
    setTimeout(() => {
      getPosts();
    }, 2000);
  }, []);

  // .................................................seaching posts


  // use effect hook for filter search results and use implicit return ()

  useEffect(() => {
    const filterResults = posts.filter(
      (post) =>
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.body.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(filterResults.reverse());
  
  }, [posts, search]);

  // handle clear function  in Nav.js component........................

  const clearSearch = (currentRef) => {
    setSearch("");
  
    currentRef.current.focus();
  };

  // .................................................adding new posts and axios post method

  // handleSubmit function for Newpost.js component

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), "MMMM dd, yyyy h:mm:ss a");

    // ***axios post method for adding new post***
    const newpost = { datetime, title: postTitle, body: postBody };
    try {
      const response = await api.post("/posts", newpost);
      const allposts = [...posts, response.data];
      setPosts(allposts);
      setPostTitle("");
      setPostBody("");
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //...................................................handle Delete function in Postpage.js component

  const handleDelete = async (id) => {
    try {
      await api.delete(`/posts/${id}`);
      const postList = posts.filter((post) => post.id !== id);
      setPosts(postList);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  //..................................................edit in postpage.js and axios put method

 

  const handleEdit = async (id) => {
    const datetime = format(new Date(), "MMMM dd, yyyy h:mm:ss a");
    const updatedPost = { datetime, title: editTitle, body: editBody };
    setLaunch(true);

    try {
      const response = await api.put(`/posts/${id}`, updatedPost);
      setPosts(
        posts.map((post) => (post.id === id ? { ...response.data } : post))
      );
      setEditTitle("");
      setEditBody("");

      //  wait for the animation to finish before navigating

      setTimeout(() => {
        setLaunch(false);
        navigate("/");
      }, 500);
    } catch (err) {
      console.log(err);
    }
  };
  

  return (
    <DataContext.Provider
          value={{
              width, search, setSearch, clearSearch, isOpen, toggleMenu,
              searchResults, isLoading, axiosError, postTitle, postBody, handleSubmit, setPostTitle, setPostBody,
          posts,handleDelete, handleEdit, editTitle, setEditTitle, editBody, setEditBody,launch,setLaunch,
      }}
    >
      {/* wrap all  components required for data*/}

      {children}
    </DataContext.Provider>
  );
}

export default DataContext


