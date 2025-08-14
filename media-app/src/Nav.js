import React from "react";

import { VscClearAll } from "react-icons/vsc";
import { useRef, useState } from "react";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link } from "react-router-dom";
import "./css/Nav.css";


const Nav = ({isOpen, toggleMenu,search,setSearch,clearSearch}) => {
  
  const currentRef = useRef(null);
  

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
          ref={currentRef}
        />

        <VscClearAll
          className="clear-icon"
          onClick={() => clearSearch(currentRef)}
        />
      </form>

      <button className="menu-btn" onClick={toggleMenu}>
        {isOpen ? <FaXmark size={24} /> : <FaBars size={24} />}
      </button>
      
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
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
