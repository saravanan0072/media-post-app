import Header from "./Header.js"
import Nav from "./Nav.js";
import Home from "./Home.js";
import Newpost from "./Newpost.js";
import Postpage from "./Postpage.js";
import About from "./About.js";
import Missing from "./Missing.js";
import Footer from "./Footer.js";
import { Routes, Route, Link } from "react-router-dom";
import Post from "./Post.js";
import Postlayout from "./Postlayout.js";
import { useState,useEffect} from "react";
import { format } from 'date-fns';
function App() {
  
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: "My First Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:"Made a video about Tesla Q1 results"
    },
    {
      id: 2,
      title: "My 2nd Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:"I attended a DeFi blockchain event"
    },
    {
      id: 3,
      title: "My 3rd Post",
      datetime: "July 01,2021 11:17:36 AM",
      body:"Web3 global summit next week"
    },
    {
      id: 4,
      title: "My Fourth Post",
      datetime: "July 01, 2021 11:17:36 AM",
      body:"ETH will outperform BTC"
    }
  ])
  // ..............................................seaching posts
  
  
  const [search, setSearch] = useState("")
  const [searchResults, setSearchResults] = useState([]);

  // use effect hook for filter search results and use implicit return ()

  useEffect(() => {
    
    const filterResults = posts.filter((post) => (
      (post.title).toLowerCase().includes(search.toLowerCase()) ||
          (post.body).toLowerCase().includes(search.toLowerCase())
    ))
    
    setSearchResults(filterResults.reverse())
    // console.log(searchResults);
  }, [posts, search]);
  


 // .................................................adding new posts
  
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  // handleSubmit function for Newpost.js component

  const handleSubmit = (e) => {
    e.preventDefault()
    const id = posts.length ? posts[posts.length - 1].id + 1 : 1;
    const datetime = format(new Date(), 'MMMM dd, yyyy h:mm:ss a');
    // console.log(datetime)
    const newpost = { id, datetime, title: postTitle, body: postBody }
    const allposts = [...posts, newpost]
    setPosts(allposts)
    setPostTitle('')
    setPostBody('')
  }

  return (
    <div className="App">
    
      <Header title="Social Media"
        search={search}
        setSearch={setSearch}
      />
     
      <Home posts={searchResults } />
      <Newpost
        postTitle={postTitle}
        setPostTitle={setPostTitle}
        postBody={postBody}
        setPostBody={setPostBody}
        handleSubmit={ handleSubmit} />
      <Postpage />
      <About />
      <Missing/>
      <Footer />
    </div>
  );
}

export default App;
