import React from "react";
import { Link } from "react-router-dom";
import { VscClearAll } from "react-icons/vsc";


const Nav = ({search,setSearch}) => {
  
  return (
    <nav className="Nav">
      <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          id="search"
          placeholder="search posts"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          autoComplete="off"
          autoFocus
          required
          label="search posts"
          
        />

        <VscClearAll className="clear-icon"
          onClick={ ()=> setSearch('')} />
      </form>
      <ul>
        <li>
          {" "}
          <Link to="/">Home</Link>{" "}
        </li>

        <li>
          <Link to="/post">Post</Link>
        </li>

        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav
